import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import {
  LayoutDashboard, FileText, Pill, Users, Calendar, Settings, HelpCircle,
  AlertCircle, LogOut, Menu, X, ChevronRight
} from 'lucide-react';

export default function Sidebar() {
  const { user, logout, api } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emergencyState, setEmergencyState] = useState('');
  const isFamily = user?.role === 'family';

  const familyLinks = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/health-records', icon: FileText, label: 'Health Records' },
    { to: '/medication', icon: Pill, label: 'Medication' },
    { to: '/care-team', icon: Users, label: 'Care Team' },
    { to: '/appointments', icon: Calendar, label: 'Appointments' },
    { to: '/settings', icon: Settings, label: 'Settings' },
    { to: '/support', icon: HelpCircle, label: 'Support' },
  ];

  const residentLinks = [
    { to: '/', icon: LayoutDashboard, label: 'Home' },
    { to: '/health-records', icon: FileText, label: 'Medical Records' },
    { to: '/care-team', icon: Users, label: 'Caregivers' },
    { to: '/appointments', icon: Calendar, label: 'Appointments' },
    { to: '/meals', icon: Pill, label: 'Meals' },
    { to: '/rooms', icon: FileText, label: 'My Room' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  const links = isFamily ? familyLinks : residentLinks;

  return (
    <>
      <button onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-100">
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

        {/* Logo */}
        <div className="p-6 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-700/20">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">Aastha Care</h1>
              <p className="text-xs text-gray-400">Elderly Care Portal</p>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl border border-brand-100">
            <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{user?.name}</p>
              <p className="text-xs text-gray-400">{isFamily ? 'Family Member' : 'Resident'}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="px-4 pt-2 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</p>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
              <link.icon size={18} strokeWidth={2} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 space-y-3 border-t border-gray-50">
          {isFamily ? (
            <button onClick={async () => { try { await api.post('/emergency', { note: 'Emergency assistance requested from Family Portal.' }); setEmergencyState('Request sent'); } catch { setEmergencyState('Unable to send request'); } }}
              className="w-full py-3 bg-danger hover:bg-red-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-500/20">
              <AlertCircle size={18} />
              Emergency Assistance
            </button>
          ) : (
            <button onClick={async () => { try { await api.post('/emergency', { note: 'Help requested from Resident Portal.' }); setEmergencyState('Request sent'); } catch { setEmergencyState('Unable to send request'); } }}
              className="w-full py-3 bg-success hover:bg-green-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
              <AlertCircle size={18} />
              Call for Help
            </button>
          )}

          <button onClick={() => { logout(); navigate('/login'); }}
            className="w-full py-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
