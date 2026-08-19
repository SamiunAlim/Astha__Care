import { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/api.js';

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('aastha_token');
    if (!token) { setLoading(false); return; }

    api.get('/auth/me')
      .then(({ data }) => setUser(data))
      .catch(() => {
        localStorage.removeItem('aastha_token');
        localStorage.removeItem('aastha_user');
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password, role) => {
    try {
      const { data } = await api.post('/auth/login', { email, password, role });
      localStorage.setItem('aastha_token', data.token);
      localStorage.setItem('aastha_user', JSON.stringify(data));
      setUser(data);
      return { success: true, data };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Unable to sign in.' };
    }
  };

  const register = async (payload) => {
    try {
      const { data } = await api.post('/auth/register', payload);
      localStorage.setItem('aastha_token', data.token);
      localStorage.setItem('aastha_user', JSON.stringify(data));
      setUser(data);
      return { success: true, data };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Unable to create account.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('aastha_token');
    localStorage.removeItem('aastha_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, api }}>
      {loading ? <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div> : children}
    </AuthContext.Provider>
  );
}
