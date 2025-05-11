/**
 * Represents user credentials for authentication.
 */
export interface AuthCredentials {
  email: string;
  password?: string; // Password will be made mandatory later
}

/**
 * Represents authentication tokens provided upon successful login.
 */
export interface AuthTokens {
  accessToken: string;
  // refreshToken?: string; // refreshToken removed for this iteration
  expiresIn: number; // Duration in seconds for accessToken validity
}

/**
 * Payload for the auth_user_registered event.
 * This event is published by auth-service after basic credential creation (e.g., email/password hash stored).
 * It signals other services to perform follow-up actions (e.g., create a user profile).
 */
export interface AuthUserRegisteredEvent {
  id: string; // The ID of the registered user
  email: string;
  timestamp: string; // ISO 8601 formatted timestamp string
}

/**
 * Payload for the auth_user_deleted event.
 */
export interface AuthUserDeletedEvent {
  id: string; // The ID of the deleted user
  timestamp: string; // ISO 8601
} 