import { FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginPage = () => {
  const { login, isAuthenticated, isRestoring, isRefreshing, error } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated && !isRestoring && !isRefreshing) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setLocalError(null);

    try {
      await login({ username, password });
      navigate('/admin', { replace: true });
    } catch (loginError) {
      setLocalError(loginError instanceof Error ? loginError.message : 'Unable to sign in');
    } finally {
      setSubmitting(false);
    }
  };

  const message = localError ?? error;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(237,233,254,0.9),_rgba(255,255,255,0.98)_45%,_rgba(248,250,252,1))] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12 lg:px-10">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative flex flex-col justify-between gap-10 bg-[linear-gradient(135deg,_#0f172a,_#1e293b_52%,_#334155)] p-10 text-white md:p-14">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">OpenCampus</p>
              <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                Sign in to the student information system.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-200">
                Access is routed through the backend JWT session flow, with automatic refresh and
                permission checks wired to the same resource paths the API uses.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">Bearer auth</div>
                <div className="mt-2 leading-6">Access token stays in React state only.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">Refresh flow</div>
                <div className="mt-2 leading-6">Session ID plus refresh token drive renewal.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">Permissions</div>
                <div className="mt-2 leading-6">hasPermission(action, resourcePath) mirrors the backend.</div>
              </div>
            </div>
          </div>

          <div className="flex items-center p-8 md:p-12">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Welcome back</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">Log in</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Use your backend username and password. The frontend will restore the session on
                  startup when a refresh token is available.
                </p>
              </div>

              <div className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Username</span>
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    autoComplete="username"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                    placeholder="username"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                    placeholder="password"
                    required
                  />
                </label>
              </div>

              {message ? (
                <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={submitting || isRestoring || isRefreshing}
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting || isRefreshing ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
