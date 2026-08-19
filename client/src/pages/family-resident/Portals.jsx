import { Users, Heart, ChefHat, Stethoscope, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const portalList = [
  { name: 'Family Portal', desc: 'View vitals, billing, and communicate with care team', icon: Users, color: 'bg-brand-50 text-brand-600 border-brand-100', path: '/' },
  { name: 'Resident Portal', desc: 'Daily tasks, appointments, medications, and meals', icon: Heart, color: 'bg-rose-50 text-rose-600 border-rose-100', path: '/' },
  { name: 'Kitchen Portal', desc: 'Meal planning, nutrition tracking, and dietary management', icon: ChefHat, color: 'bg-amber-50 text-amber-600 border-amber-100', path: '/meals' },
  { name: 'Medical Portal', desc: 'Health records, prescriptions, and medical history', icon: Stethoscope, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', path: '/health-records' },
];

export default function Portals() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Portals</h1>
        <p className="text-sm text-gray-500 mt-1">Access different sections of Aastha Care</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {portalList.map((portal, i) => (
          <button key={i} onClick={() => navigate(portal.path)}
            className="card p-6 hover:shadow-md transition-all text-left flex items-start gap-5 group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${portal.color}`}>
              <portal.icon size={28} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-lg mb-1">{portal.name}</h3>
              <p className="text-sm text-gray-500 mb-3 leading-relaxed">{portal.desc}</p>
              <span className="text-sm font-semibold text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Access Portal <ArrowRight size={14} />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
