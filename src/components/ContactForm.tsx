import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormData } from '../lib/validation/contactSchema';
import { isPhoneComplete } from '../lib/phone';

interface ContactFormProps {
  /** Optional callback when form is successfully submitted */
  onSuccess?: () => void;
  /** Optional callback when form should close (for modals) */
  onClose?: () => void;
  /** Custom title for the form */
  title?: string;
  /** Custom description for the form */
  description?: string;
  /** Custom button text (defaults to "Request a Free Machine") */
  buttonText?: string;
  /** Whether to show the form in compact mode (smaller padding, spacing) */
  compact?: boolean;
  /** Custom CSS classes for the container */
  className?: string;
}

const ContactForm = ({ 
  onSuccess, 
  onClose,
  title,
  description,
  buttonText = "Request a Free Machine",
  compact = false,
  className = ""
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formStartTime] = useState(Date.now());

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      company: '',
      city: '',
      email: '',
      phone: '',
      inquiryType: 'New Vending Service',
      message: '',
      employees: undefined,
      website: '', // Honeypot field
    }
  });

  const phoneValue = watch('phone');
  const inquiryType = watch('inquiryType');
  const isPhoneValid = phoneValue ? isPhoneComplete(phoneValue) : false;

  const onSubmit = async (data: ContactFormData) => {
    if (!isPhoneValid) {
      return; // Form validation will show error
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Always use Resend API
      const submitTime = Date.now() - formStartTime;
      const payload = {
        ...data,
        submitTime,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Try to parse error response
        let errorMessage = 'Something went wrong. Please try again.';
        try {
          const errorResult = await response.json();
          errorMessage = errorResult.error || `Server error (${response.status})`;
        } catch {
          errorMessage = `Server error (${response.status}). Please try again or call (949) 414-9081.`;
        }
        
        setSubmitStatus('error');
        setErrorMessage(errorMessage);
        return;
      }

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus('success');
        reset();
        onSuccess?.();
        
        // Auto-close modal after success if onClose is provided
        if (onClose) {
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      
      // Provide more specific error messages
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setErrorMessage('Unable to connect to server. Please check your internet connection and try again.');
      } else if (error instanceof SyntaxError) {
        setErrorMessage('Server response error. Please try again or contact us at (949) 414-9081.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again or call (949) 414-9081.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide success/error messages after 5 seconds
  React.useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const containerPadding = compact ? 'p-6' : 'p-8';
  const spacing = compact ? 'space-y-4' : 'space-y-6';
  const inputPadding = compact ? 'px-3 py-2' : 'px-4 py-3';
  const buttonPadding = compact ? 'py-3 px-6' : 'py-4 px-6';

  return (
    <div className={`bg-white rounded-2xl shadow-lg ${containerPadding} ${className}`}>
      {/* Optional Title and Description */}
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-green-800">Thanks! We'll contact you shortly.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-800">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={spacing}>
        {/* Honeypot field */}
        <input
          {...register('website')}
          type="text"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Full Name and Company Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              autoComplete="name"
              maxLength={100}
              className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 ${
                errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Your full name"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              autoComplete="organization"
              maxLength={100}
              className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 ${
                errors.company ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Your company name"
              aria-invalid={errors.company ? 'true' : 'false'}
              aria-describedby={errors.company ? 'company-error' : undefined}
            />
            {errors.company && (
              <p id="company-error" className="mt-1 text-sm text-red-600">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* City and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              {...register('city')}
              type="text"
              id="city"
              autoComplete="address-level2"
              maxLength={100}
              className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 ${
                errors.city ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Your city"
              aria-invalid={errors.city ? 'true' : 'false'}
              aria-describedby={errors.city ? 'city-error' : undefined}
            />
            {errors.city && (
              <p id="city-error" className="mt-1 text-sm text-red-600">
                {errors.city.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              autoComplete="email"
              inputMode="email"
              className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 ${
                errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="you@company.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone and Inquiry Type Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone *
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="(999) 999-9999"
                  type="tel"
                  inputMode="tel"
                  id="phone"
                  autoComplete="tel"
                  className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 ${
                    errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(555) 123-4567"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
              )}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
              Inquiry Type *
            </label>
            <select
              {...register('inquiryType')}
              id="inquiryType"
              className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 ${
                errors.inquiryType ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.inquiryType ? 'true' : 'false'}
              aria-describedby={errors.inquiryType ? 'inquirytype-error' : undefined}
            >
              <option value="New Vending Service">New Vending Service</option>
              <option value="Restocking Service">Restocking Service</option>
              <option value="General Question">General Question</option>
            </select>
            {errors.inquiryType && (
              <p id="inquirytype-error" className="mt-1 text-sm text-red-600">
                {errors.inquiryType.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            maxLength={500}
            className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none ${
              errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your vending needs..."
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Conditional Employees Field - Only show for New Vending Service */}
        {inquiryType === 'New Vending Service' && (
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
              How many employees? *
            </label>
            <input
              {...register('employees', { 
                valueAsNumber: true,
                setValueAs: (v) => v === '' ? undefined : Number(v)
              })}
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              id="employees"
              min="1"
              max="50000"
              step="1"
              className={`w-full ${inputPadding} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 ${
                errors.employees ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g. 25"
              aria-invalid={errors.employees ? 'true' : 'false'}
              aria-describedby={errors.employees ? 'employees-error' : undefined}
            />
            {errors.employees && (
              <p id="employees-error" className="mt-1 text-sm text-red-600">
                {errors.employees.message}
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isPhoneValid}
          className={`w-full bg-orange-600 text-white ${buttonPadding} rounded-lg font-semibold hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <Send size={18} />
            </>
          )}
        </button>

        {/* Debug info (development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-3 bg-gray-100 rounded text-xs text-gray-600">
            <strong>Debug:</strong> Phone valid: {isPhoneValid.toString()}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
