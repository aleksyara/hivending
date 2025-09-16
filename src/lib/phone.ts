/**
 * Normalize phone number to digits only
 * Strips all non-digit characters
 */
export function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Format phone number to (999) 999-9999 format
 * Input should be 10 digits
 */
export function formatPhone(phone: string): string {
  const digits = normalizePhone(phone);
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone; // Return original if not 10 digits
}

/**
 * Validate if phone string is complete (no placeholders)
 * Returns true if phone matches exact format with no underscores
 */
export function isPhoneComplete(phone: string): boolean {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(phone) && !phone.includes('_');
}
