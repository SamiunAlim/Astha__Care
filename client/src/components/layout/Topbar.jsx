import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { Bell, Search } from 'lucide-react';

export default function Topbar() {
  const { user } = useAuth();
  const isFamily = user?.role === 'family';

  const familyNav = [
    { to: '/', label: 'Dashboard' },
    { to: '/billing', label: 'Billing' },
    { to: '/reports', label: 'Reports' },
  ];

  const residentNav = [
    { to: '/', label: 'Home' },
    { to: '/rooms', label: 'Rooms' },
    { to: '/meals', label: 'Meals' },
    { to: '/health-records', label: 'Health' },
    { to: '/portals', label: 'Portals' },
  ];

  const navItems = isFamily ? familyNav : residentNav;

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `px-4 py-5 text-sm font-semibold border-b-2 transition-colors ${
                isActive
                  ? 'text-brand-700 border-brand-700'
                  : 'text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-200'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
          <Search size={16} className="text-gray-400 mr-2" />
          <input type="text" placeholder="Search..." className="bg-transparent text-sm outline-none w-48 text-gray-600 placeholder-gray-400" />
        </div>
        <button className="relative p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
          <Bell size={20} />
        </button>
        <div className="w-9 h-9 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm border-2 border-white shadow-sm">
          {user?.name?.charAt(0) || 'U'}
        </div>
      </div>
    </header>
  );
}
