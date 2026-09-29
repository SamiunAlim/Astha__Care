import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'family' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await register(form);
    setLoading(false);
    if (result.success) navigate('/', { replace: true });
    else setError(result.message);
  };

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 to-blue-50 p-4 relative">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-700 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
        </div>

        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center justify-center w-14 h-14 bg-brand-700 rounded-2xl mb-3 shadow-lg shadow-brand-700/20 hover:scale-105 transition-transform">
            <Heart className="text-white" size={28} />
          </Link>
          <h1 className="text-2xl font-extrabold text-gray-900">Create Aastha Care Account</h1>
          <p className="text-xs text-gray-500 mt-1">Your account will be stored securely in the database.</p>
        </div>

        {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">{error}</div>}

        <form onSubmit={submit} className="space-y-4">
          <div><label className="label">Full Name</label><input className="input" value={form.name} onChange={e => update('name', e.target.value)} required /></div>
          <div><label className="label">Email</label><input className="input" type="email" value={form.email} onChange={e => update('email', e.target.value)} required /></div>
          <div><label className="label">Password</label><input className="input" type="password" minLength="6" value={form.password} onChange={e => update('password', e.target.value)} required /></div>
          <div>
            <label className="label">Account Type</label>
            <select className="input" value={form.role} onChange={e => update('role', e.target.value)}>
              <option value="family">Family</option>
              <option value="resident">Resident</option>
            </select>
          </div>
          <button disabled={loading} className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-semibold flex justify-center items-center gap-2 disabled:opacity-70">
            {loading && <Loader2 className="animate-spin" size={18} />} Create Account
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">Already registered? <Link to="/login" className="font-semibold text-brand-700">Sign in</Link></p>
      </div>
    </div>
  );
}
