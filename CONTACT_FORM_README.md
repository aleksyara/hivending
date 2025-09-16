# Contact Form with Resend Integration

## Overview

The contact form has been enhanced with:
- **Masked phone input** that works on mobile and desktop
- **React Hook Form + Zod validation** for robust form handling
- **Resend email integration** (always enabled, no feature flag)
- **Spam protection** with honeypot and timing checks
- **Mobile-optimized** input modes and keyboards
- **No mailto: behavior** - all submissions go through Resend API

## Environment Variables

Add these to your `.env.local` file:

```bash
# Required for Resend email functionality
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=info@hungryivan.com
CONTACT_FROM_EMAIL=web@hungryivan.com
```

## How to Test

### 1. Set Up Environment Variables

```bash
# Set up environment variables
echo "RESEND_API_KEY=re_your_actual_key_here" >> .env.local
echo "CONTACT_TO_EMAIL=your-test-email@example.com" >> .env.local
echo "CONTACT_FROM_EMAIL=onboarding@resend.dev" >> .env.local
```

### 2. Test Form Submission

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# Fill out form completely (phone must be complete: (555) 123-4567)
# Submit form
# Should see success toast and receive email via Resend
```

### 3. Test Error Handling

```bash
# Test invalid API key
# Temporarily change RESEND_API_KEY to "invalid_key"
# Submit form - should see error message

# Test missing API key  
# Remove RESEND_API_KEY from .env.local
# Submit form - should see configuration error

# Test incomplete phone
# Try submitting with incomplete phone like "(555) 123-____"
# Submit button should be disabled
```

## Phone Input Behavior

- **Mask**: Automatically formats as `(999) 999-9999`
- **Mobile**: Shows numeric keypad on mobile devices
- **Validation**: Blocks submission if incomplete (contains underscores)
- **Required**: Cannot submit without complete phone number

## Spam Protection

- **Honeypot**: Hidden `website` field that must remain empty
- **Timing**: Form must be open for at least 3 seconds before submission
- **Server validation**: Both checks validated server-side

## API Response Format

### Success Response
```json
{
  "ok": true,
  "message": "Your message has been sent successfully!",
  "emailId": "email_id_from_resend"
}
```

### Error Response
```json
{
  "ok": false,
  "error": "Error message for user"
}
```

## File Structure

```
src/
├── components/ContactForm.tsx          # Main form component
├── lib/
│   ├── validation/contactSchema.ts    # Shared Zod schemas
│   ├── email/renderContactEmail.tsx   # Email template
│   └── phone.ts                       # Phone utilities

api/
└── contact.ts                         # Serverless function
```

## Production Deployment

1. **Set environment variables** in production (Vercel/Netlify)
2. **Test thoroughly** in staging environment
3. **Monitor logs** for any API key or validation issues
4. **Form always uses Resend** - no feature flags needed

## Accessibility

- All inputs have proper labels and ARIA attributes
- Error messages are associated with inputs
- Form is keyboard navigable
- Submit button shows loading state
- Success/error messages are announced to screen readers
