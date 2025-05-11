/**
 * Represents a user profile.
 */
export interface UserProfile {
  userId: string; // Matches the ID from auth-service
  username: string | null; // Can be null initially
  avatarUrl: string | null;
  hashtags: string[];
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

/**
 * Payload for the profile_updated event.
 */
export interface ProfileUpdatedEvent {
  userId: string;
  timestamp: string; // ISO 8601
} 