import { Resend } from 'resend';

// Simple validation function for new standardized fields
function validateContactData(data: any) {
  const errors = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Full name is required');
  }
  
  if (!data.company || typeof data.company !== 'string' || data.company.trim().length === 0) {
    errors.push('Company name is required');
  }
  
  if (!data.city || typeof data.city !== 'string' || data.city.trim().length === 0) {
    errors.push('City is required');
  }
  
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    errors.push('Valid email is required');
  }
  
  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length === 0) {
    errors.push('Phone is required');
  }
  
  if (!data.inquiryType || typeof data.inquiryType !== 'string' || data.inquiryType.trim().length === 0) {
    errors.push('Inquiry type is required');
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.push('Message is required');
  }
  
  // Check employees field for New Vending Service
  if (data.inquiryType === 'New Vending Service') {
    if (!data.employees || typeof data.employees !== 'number' || data.employees < 1) {
      errors.push('Number of employees is required for New Vending Service');
    }
  }
  
  // Check honeypot
  if (data.website && data.website.trim() !== '') {
    errors.push('Spam detected');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    // Validate environment variables
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey || apiKey.trim() === '') {
      console.warn('RESEND_API_KEY is missing or empty');
      return res.status(500).json({
        ok: false, 
        error: 'Email service not configured. Please contact us directly.'
      });
    }

    if (!apiKey.startsWith('re_')) {
      console.warn('RESEND_API_KEY appears invalid (does not start with re_)');
      return res.status(500).json({
        ok: false, 
        error: 'Email service misconfigured. Please contact us directly.'
      });
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Parse and validate request body
    const data = req.body;
    const validation = validateContactData(data);
    
    if (!validation.isValid) {
      console.log('Validation failed:', validation.errors);
      return res.status(400).json({
        ok: false, 
        error: 'Please check your form and try again.',
        details: validation.errors
      });
    }

    // Normalize data for email template
    const normalizedData = {
      name: data.name,
      company: data.company,
      city: data.city,
      email: data.email,
      phone: data.phone,
      inquiryType: data.inquiryType,
      message: data.message,
      employees: data.employees
    };

    // Email configuration
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@hungryivan.com';
    
    console.log(`Sending contact form email from: ${fromEmail} to: ${toEmail}`);

    // Create HTML email template
    const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .content { background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #495057; }
    .value { margin-top: 5px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; color: #dc3545;">New Contact Form Submission</h1>
      <p style="margin: 10px 0 0 0; color: #6c757d;">Hungry Ivan Vending</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">Full Name:</div>
        <div class="value">${normalizedData.name}</div>
      </div>
      
      <div class="field">
        <div class="label">Company Name:</div>
        <div class="value">${normalizedData.company}</div>
      </div>
      
      <div class="field">
        <div class="label">City:</div>
        <div class="value">${normalizedData.city}</div>
      </div>
      
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${normalizedData.email}</div>
      </div>
      
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${normalizedData.phone}</div>
      </div>
      
      <div class="field">
        <div class="label">Inquiry Type:</div>
        <div class="value">${normalizedData.inquiryType}</div>
      </div>
      
      ${normalizedData.employees ? `
      <div class="field">
        <div class="label">Number of Employees:</div>
        <div class="value">${normalizedData.employees}</div>
      </div>
      ` : ''}
      
      ${normalizedData.message ? `
      <div class="field">
        <div class="label">Message:</div>
        <div class="value" style="white-space: pre-wrap;">${normalizedData.message}</div>
      </div>
      ` : ''}
      
      <div class="footer">
        Submitted: ${new Date().toLocaleString()}
      </div>
    </div>
  </div>
</body>
</html>`;

    // Send email using Resend - simplified version
    console.log('About to send email with:', { from: fromEmail, to: toEmail });
    
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Contact Form: ${normalizedData.name}`,
      text: `
New Contact Form Submission

Full Name: ${normalizedData.name}
Company Name: ${normalizedData.company}
City: ${normalizedData.city}
Email: ${normalizedData.email}
Phone: ${normalizedData.phone}
Inquiry Type: ${normalizedData.inquiryType}
${normalizedData.employees ? `Number of Employees: ${normalizedData.employees}` : ''}

Message:
${normalizedData.message}

Submitted: ${new Date().toISOString()}
      `.trim()
    });

    if (emailResult.error) {
      console.error('Resend API error:', JSON.stringify(emailResult.error, null, 2));
      console.error('API Key starts with re_:', apiKey.startsWith('re_'));
      console.error('From email:', fromEmail);
      console.error('To email:', toEmail);
      return res.status(500).json({
        ok: false, 
        error: 'Failed to send message. Please try again or contact us directly.',
        debug: process.env.NODE_ENV === 'development' ? emailResult.error : undefined
      });
    }

    console.log('Email sent successfully:', emailResult.data?.id);

    return res.status(200).json({ 
      ok: true,
      message: 'Your message has been sent successfully!',
      emailId: emailResult.data?.id
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      ok: false, 
      error: 'An unexpected error occurred. Please try again.'
    });
  }
}