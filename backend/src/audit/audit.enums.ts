export enum AuditAction {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  READ = 'READ',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export enum AuditStatus {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  DENIED = 'DENIED',
}
