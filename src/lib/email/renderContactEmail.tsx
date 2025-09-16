import React from 'react';
import { Html, Head, Body, Container, Section, Text, Heading, Hr } from '@react-email/components';
import type { ContactFormData } from '../validation/contactSchema';
import { formatPhone } from '../phone';

interface ContactEmailProps {
  data: ContactFormData;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({ data }) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ margin: '0 auto', padding: '20px 0 48px', maxWidth: '560px' }}>
          <Section style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px' }}>
            <Heading style={{ fontSize: '24px', lineHeight: '1.3', fontWeight: '700', color: '#484848', margin: '0 0 20px 0' }}>
              New Contact Form Submission
            </Heading>
            
            <Text style={{ fontSize: '16px', lineHeight: '1.4', color: '#484848', margin: '0 0 16px 0' }}>
              You've received a new contact form submission:
            </Text>

            <Hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />

            <Section>
              <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151', margin: '0 0 4px 0' }}>
                Contact Information:
              </Text>
              <Text style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 8px 0', lineHeight: '1.4' }}>
                <strong>Name:</strong> {data.name}<br />
                <strong>Email:</strong> {data.email}<br />
                <strong>Phone:</strong> {data.phone}
              </Text>
            </Section>

            {(data.businessType || data.employees) && (
              <>
                <Hr style={{ borderColor: '#e6ebf1', margin: '16px 0' }} />
                <Section>
                  <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151', margin: '0 0 4px 0' }}>
                    Business Details:
                  </Text>
                  <Text style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 8px 0', lineHeight: '1.4' }}>
                    {data.businessType && <><strong>Business Type:</strong> {data.businessType}<br /></>}
                    {data.employees && <><strong>Employees:</strong> {data.employees.toLocaleString()}</>}
                  </Text>
                </Section>
              </>
            )}

            {data.message && (
              <>
                <Hr style={{ borderColor: '#e6ebf1', margin: '16px 0' }} />
                <Section>
                  <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151', margin: '0 0 4px 0' }}>
                    Message:
                  </Text>
                  <Text style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 8px 0', lineHeight: '1.4', whiteSpace: 'pre-wrap' }}>
                    {data.message}
                  </Text>
                </Section>
              </>
            )}

            <Hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />

            <Text style={{ fontSize: '12px', color: '#9ca3af', margin: '0' }}>
              Submitted on {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
