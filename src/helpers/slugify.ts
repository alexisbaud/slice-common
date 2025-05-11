/**
 * Converts a string into a URL-friendly slug.
 * Handles null, undefined, or non-string inputs gracefully by returning an empty string.
 * Operations include: converting to lowercase, trimming whitespace, replacing spaces with hyphens,
 * removing non-alphanumeric characters (except hyphens), and collapsing multiple hyphens.
 *
 * @param text - The string to slugify.
 * @returns A slugified string, or an empty string for invalid input.
 */
export function slugify(text: unknown): string {
  if (typeof text !== 'string' || text === null || text.trim() === '') {
    return '';
  }

  return text
    .toString() // Redundant due to type check, but safe
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')                 // Replace spaces and sequences of spaces with a single hyphen
    .replace(/[^a-z0-9-]/g, '')        // Remove all non-alphanumeric characters except hyphens
    .replace(/--+/g, '-')               // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');          // Remove leading or trailing hyphens
} 