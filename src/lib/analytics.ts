// Google Analytics utility functions

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * Track page view event
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track contact page visit
 */
export const trackContactPageVisit = () => {
  trackEvent('contact_page_visit', {
    event_category: 'engagement',
    event_label: 'contact_us_page',
  });
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmission = (inquiryType: string) => {
  trackEvent('contact_form_submit', {
    event_category: 'conversion',
    event_label: inquiryType,
    value: 1,
  });
};
