import { useEffect, useMemo, useState } from 'react';
import { Activity, Droplets, Heart, Thermometer } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

const meta = {
  bpm: ['Heart Rate', Heart, 'bg-rose-50 text-rose-600 border-rose-100'],
  bp: ['Blood Pressure', Activity, 'bg-emerald-50 text-emerald-600 border-emerald-100'],
  temp: ['Temperature', Thermometer, 'bg-amber-50 text-amber-600 border-amber-100'],
  spo2: ['Oxygen Level', Droplets, 'bg-sky-50 text-sky-600 border-sky-100'],
  weight: ['Weight', Activity, 'bg-purple-50 text-purple-600 border-purple-100'],
};

export default function HealthRecords() {
  const { user, api } = useAuth();
  const residentId = user?.role === 'resident' ? user._id : user?.residentId;
  const [vitals, setVitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!residentId) return setLoading(false);
    api.get(`/vitals/${residentId}`).then(r => setVitals(r.data)).catch(() => setVitals([])).finally(() => setLoading(false));
  }, [api, residentId]);

  const latest = useMemo(() => {
    const map = {};
    vitals.forEach(v => { if (!map[v.type]) map[v.type] = v; });
    return Object.values(map);
  }, [vitals]);

  if (loading) return <div className="p-8 text-gray-500">Loading health records...</div>;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div><h1 className="text-2xl font-bold text-gray-900">Health Records</h1><p className="text-sm text-gray-500 mt-1">Live records from your account</p></div>
      {latest.length === 0 ? <Empty text="No health records are available yet." /> : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {latest.map(v => {
              const [label, Icon, color] = meta[v.type] || ['Vital', Activity, 'bg-gray-50 text-gray-600 border-gray-100'];
              return <div key={v._id} className="card p-5"><div className="flex justify-between mb-4"><div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${color}`}><Icon size={22}/></div><span className="badge bg-gray-50 text-gray-600 border border-gray-100">{v.status || 'recorded'}</span></div><p className="text-sm text-gray-500">{label}</p><p className="text-3xl font-extrabold text-gray-900 mt-1">{v.value} <span className="text-sm font-normal text-gray-400">{v.unit}</span></p><p className="text-xs text-gray-400 mt-2">{v.recordedBy || 'Care team'} · {v.recordedAt ? new Date(v.recordedAt).toLocaleString() : ''}</p></div>;
            })}
          </div>
          <div className="card p-6"><h3 className="text-lg font-bold mb-4">Recent History</h3><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-gray-100"><th className="text-left py-3">Vital</th><th className="text-left py-3">Value</th><th className="text-left py-3">Status</th><th className="text-left py-3">Recorded</th></tr></thead><tbody>{vitals.map(v => <tr key={v._id} className="border-b border-gray-50"><td className="py-3">{meta[v.type]?.[0] || v.type}</td><td>{v.value} {v.unit}</td><td>{v.status || '-'}</td><td>{v.recordedAt ? new Date(v.recordedAt).toLocaleString() : '-'}</td></tr>)}</tbody></table></div></div>
        </>
      )}
    </div>
  );
}
function Empty({text}) { return <div className="card p-10 text-center text-gray-500">{text}</div>; }
