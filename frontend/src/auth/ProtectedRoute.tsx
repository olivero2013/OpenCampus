import type { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import type { PermissionAction } from './api';

type ProtectedRouteProps = {
  requiredPermission?: {
    action: PermissionAction;
    resourcePath: string;
  };
  children?: ReactNode;
};

const ProtectedRoute = ({ requiredPermission, children }: ProtectedRouteProps) => {
  const { isAuthenticated, isRestoring, isRefreshing, isClientReady, hasPermission } = useAuth();

  if (isRestoring || isRefreshing || !isClientReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 shadow-lg">
          Restoring session...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredPermission && !hasPermission(requiredPermission.action, requiredPermission.resourcePath)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
        <div className="max-w-md rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Forbidden</p>
          <h1 className="mt-3 text-2xl font-semibold">You do not have permission to view this resource.</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            The frontend permission check uses the same action and resource-path model as the backend.
          </p>
        </div>
      </div>
    );
  }

  return children ?? <Outlet />;
};

export default ProtectedRoute;
