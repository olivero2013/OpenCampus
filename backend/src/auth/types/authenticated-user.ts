export interface AuthenticatedUser {
  id: number;
  username: string;
  tokenVersion: number;
  sessionId: number;
}
