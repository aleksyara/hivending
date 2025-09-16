import { NextRequest, NextResponse } from 'next/server';
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

    // For now, just return success and log the data
    // You can check Vercel logs to see all submissions
    return NextResponse.json({ 
      ok: true,
      message: 'Contact request received and logged. Check Vercel logs for details.',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
