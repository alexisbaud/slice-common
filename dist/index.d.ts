/**
 * Represents user credentials for authentication.
 */
interface AuthCredentials {
    email: string;
    password?: string;
}
/**
 * Represents authentication tokens provided upon successful login.
 */
interface AuthTokens {
    accessToken: string;
    refreshToken?: string;
    expiresIn: number;
}

/**
 * Represents a user's profile information.
 * This will be managed by the user-service.
 */
interface UserProfile {
    id: string;
    email: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    isActive: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Event payload for when a new user is registered via the auth-service.
 * This event is published by auth-service after basic credential creation (e.g., email/password hash stored).
 * It signals other services, like user-service, to perform follow-up actions (e.g., create a user profile).
 */
interface AuthUserRegisteredEvent {
    eventId: string;
    timestamp: Date;
    userId: string;
    email: string;
}
/**
 * The name (routing key or topic) for the auth.user_registered event.
 * Format: <service>.<resource>.<action>
 */
declare const AUTH_USER_REGISTERED_EVENT_NAME = "auth.user.registered";

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
declare function formatDate(date: Date, locale?: string, options?: Intl.DateTimeFormatOptions): string;

/**
 * Converts a string into a URL-friendly slug.
 * Handles null, undefined, or non-string inputs gracefully by returning an empty string.
 * Operations include: converting to lowercase, trimming whitespace, replacing spaces with hyphens,
 * removing non-alphanumeric characters (except hyphens), and collapsing multiple hyphens.
 *
 * @param text - The string to slugify.
 * @returns A slugified string, or an empty string for invalid input.
 */
declare function slugify(text: unknown): string;

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
declare function genUUIDReadable(segments?: number, segmentLength?: number): string;

export { AUTH_USER_REGISTERED_EVENT_NAME, type AuthCredentials, type AuthTokens, type AuthUserRegisteredEvent, type UserProfile, formatDate, genUUIDReadable, slugify };
