import { z } from 'zod';

// Phone validation - must be exactly (999) 999-9999 format
const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

export const contactSchema = z.object({
  // Required fields
  name: z.string().min(1, 'Full name is required').max(100, 'Name is too long'),
  company: z.string().min(1, 'Company name is required').max(100, 'Company name is too long'),
  city: z.string().min(1, 'City is required').max(100, 'City is too long'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(phoneRegex, 'Please enter a complete phone number'),
  inquiryType: z.enum([
    'New Vending Service',
    'Restocking Service', 
    'General Question'
  ], {
    errorMap: () => ({ message: 'Please select an inquiry type' }),
  }),
  message: z.string().min(1, 'Message is required').max(500, 'Message is too long'),
  
  // Conditional field for New Vending Service
  employees: z.number().int().min(1, 'Must have at least 1 employee').max(50000, 'Max 50,000 employees').optional(),
  
  // Honeypot field for spam protection
  website: z.string().optional(),
  // Time to submit check (client will populate this)
  submitTime: z.number().optional()
}).refine((data) => {
  // Employees field is required when New Vending Service is selected
  if (data.inquiryType === 'New Vending Service') {
    return data.employees !== undefined && data.employees > 0;
  }
  return true;
}, {
  message: 'Number of employees is required for New Vending Service',
  path: ['employees']
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Server-side validation with additional spam checks
export const serverContactSchema = contactSchema.refine((data) => {
  // Honeypot should be empty
  return !data.website || data.website.trim() === '';
}, {
  message: 'Spam detected',
  path: ['website']
}).refine((data) => {
  // Form should take at least 3 seconds to fill out
  if (data.submitTime) {
    return data.submitTime >= 3000;
  }
  return true;
}, {
  message: 'Form submitted too quickly',
  path: ['submitTime']
});

export type ServerContactFormData = z.infer<typeof serverContactSchema>;