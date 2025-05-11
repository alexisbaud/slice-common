// src/helpers/genUUIDReadable.ts

const DEFAULT_SEGMENTS = 3;
const DEFAULT_SEGMENT_LENGTH = 4;
const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Generates a human-readable, non-cryptographic, pseudo-UUID string.
 * Useful for creating short, memorable IDs for non-sensitive items where true UUID uniqueness isn't strictly required.
 * Example output: "xzy1-abc2-qwe3"
 *
 * Note: For cryptographically secure and globally unique identifiers, use a proper UUID library (e.g., `uuid`).
 *
 * @param segments - Optional. Number of segments in the ID. Defaults to 3.
 * @param segmentLength - Optional. Length of each segment. Defaults to 4.
 * @returns A readable ID string.
 */
export function genUUIDReadable(
  segments: number = DEFAULT_SEGMENTS,
  segmentLength: number = DEFAULT_SEGMENT_LENGTH
): string {
  if (segments <= 0 || segmentLength <= 0) {
    throw new Error('genUUIDReadable: segments and segmentLength must be positive.');
  }

  let result = '';
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < segmentLength; j++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    }
    if (i < segments - 1) {
      result += '-';
    }
  }
  return result;
} 