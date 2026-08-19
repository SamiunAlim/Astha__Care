import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Users, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Login() {
  const [role, setRole] = useState('family');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(email.trim(), password, role);
    setLoading(false);
    if (result.success) navigate('/', { replace: true });
    else setError(result.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-700 rounded-2xl mb-4 shadow-xl shadow-brand-700/20">
            <Heart className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Aastha Care</h1>
          <p className="text-gray-500 mt-2 text-sm">Elderly Care Management System</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Sign in to your account</h2>

          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {[
              ['family', Users, 'Family'],
              ['resident', Heart, 'Resident'],
            ].map(([value, Icon, label]) => (
              <button key={value} type="button" onClick={() => setRole(value)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${role === value ? 'bg-white text-brand-700 shadow-sm' : 'text-gray-500'}`}>
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>

          {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">{error}</div>}

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="label">Email Address</label>
              <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" required />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-70">
              {loading && <Loader2 className="animate-spin" size={18} />}
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account? <Link to="/register" className="font-semibold text-brand-700 hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
