import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { serverContactSchema } from '../src/lib/validation/contactSchema';

export default async function handler(req: NextRequest) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return NextResponse.json(
      { ok: false, error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    // Parse request body
    const body = await req.json();

    // Validate the request data
    const validationResult = serverContactSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Validation failed',
          details: validationResult.error.issues
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Log all submission details
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', data.name);
    console.log('Email:', data.workEmail);
    console.log('Phone:', data.phone);
    console.log('Company:', data.company);
    console.log('Location:', data.cityZip);
    console.log('Business Type:', data.businessType === 'Other' ? data.businessTypeOther : data.businessType);
    console.log('Employees:', data.totalEmployees);
    console.log('Message:', data.message || 'None');
    console.log('Submitted:', new Date().toISOString());
    console.log('=====================================');

    // Create transporter using Gmail SMTP (works immediately)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'your-email@gmail.com',
      to: 'info@hungryivan.com',
      subject: `New Vending Machine Request from ${data.name} - ${data.company}`,
      html: `
        <h2>New Vending Machine Request</h2>
        
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.workEmail}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Location:</strong> ${data.cityZip}</p>
        
        <h3>Business Details:</h3>
        <p><strong>Business Type:</strong> ${data.businessType === 'Other' ? data.businessTypeOther : data.businessType}</p>
        <p><strong>Total Employees:</strong> ${data.totalEmployees}</p>
        
        ${data.message ? `<h3>Additional Message:</h3><p>${data.message}</p>` : ''}
        
        <p><small>Submitted: ${new Date().toISOString()}</small></p>
      `,
      text: `
New Vending Machine Request

Contact Information:
Name: ${data.name}
Email: ${data.workEmail}
Phone: ${data.phone}
Company: ${data.company}
Location: ${data.cityZip}

Business Details:
Business Type: ${data.businessType === 'Other' ? data.businessTypeOther : data.businessType}
Total Employees: ${data.totalEmployees}

${data.message ? `Additional Message:\n${data.message}` : ''}

Submitted: ${new Date().toISOString()}
      `.trim()
    };

    // Try to send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      
      return NextResponse.json({ 
        ok: true,
        message: 'Contact request sent successfully via email',
        emailId: info.messageId
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      // Still return success since we logged the data
      return NextResponse.json({ 
        ok: true,
        message: 'Contact request received and logged (email sending failed)',
        timestamp: new Date().toISOString()
      });
    }

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
