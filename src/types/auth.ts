/**
 * Represents user credentials for authentication.
 */
export interface AuthCredentials {
  email: string;
  password?: string; // Password might not always be present (e.g., for OAuth flows in the future)
}

/**
 * Represents authentication tokens provided upon successful login.
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken?: string; // Optional, depending on auth strategy
  expiresIn: number; // Duration in seconds for accessToken validity
} 