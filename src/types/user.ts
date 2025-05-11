/**
 * Represents a user's profile information.
 * This will be managed by the user-service.
 */
export interface UserProfile {
  id: string;         // Unique identifier (e.g., UUID)
  email: string;      // User's email address (must be unique)
  username?: string;   // Optional username, can be set later
  firstName?: string;
  lastName?: string;
  isActive: boolean;  // To handle soft deletes or deactivation
  isVerified: boolean; // Email verification status
  createdAt: Date;    // ISO 8601 date string or Date object
  updatedAt: Date;    // ISO 8601 date string or Date object
  // avatarUrl?: string;
  // bio?: string;
  // Add other relevant profile fields as the application evolves
} 