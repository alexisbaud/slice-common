/**
 * Formats a Date object into a string using Intl.DateTimeFormat.
 * This is a pure helper function, suitable for server-side or client-side use where Intl is available.
 *
 * @param date - The Date object to format.
 * @param locale - Optional BCP 47 language tag (e.g., 'en-US', 'fr-FR'). Defaults to 'en-US'.
 * @param options - Optional Intl.DateTimeFormatOptions to customize the output. 
 *                  Defaults to a common "YYYY-MM-DD HH:mm:ss" like format.
 * @returns A formatted date string. Returns ISO string as a fallback on error.
 */
export function formatDate(
  date: Date,
  locale: string = 'en-US',
  options?: Intl.DateTimeFormatOptions
): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    // Handle invalid date input gracefully
    throw new Error('formatDate: Invalid date provided.');
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour format by default
    ...options, // User-provided options will override defaults
  };

  try {
    return new Intl.DateTimeFormat(locale, defaultOptions).format(date);
  } catch (error) {
    // Fallback to ISO string if Intl formatting fails (e.g., unsupported locale or options)
    return date.toISOString();
  }
} 