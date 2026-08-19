import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, Pill } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Medication() {
  const { user, api } = useAuth();
  const residentId = user?.role === 'resident' ? user._id : user?.residentId;
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => residentId && api.get(`/medications/${residentId}`).then(r => setMedications(r.data)).catch(() => setMedications([])).finally(() => setLoading(false));
  useEffect(load, [residentId]);

  const log = async (id) => {
    await api.post(`/medications/log/${id}`, { status: 'taken' });
    load();
  };

  if (loading) return <div className="p-8 text-gray-500">Loading medications...</div>;
  return <div className="space-y-6 max-w-7xl mx-auto"><div><h1 className="text-2xl font-bold text-gray-900">Medication</h1><p className="text-sm text-gray-500 mt-1">Current prescriptions from the care system</p></div>
    {medications.length === 0 ? <div className="card p-10 text-center text-gray-500">No medication records are available yet.</div> :
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{medications.map(m => <div key={m._id} className="card p-6"><div className="flex justify-between"><div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100"><Pill className="text-brand-600"/></div><span className="badge bg-gray-50 text-gray-600 border border-gray-100">{m.status}</span></div><h3 className="text-lg font-bold mt-4">{m.name}</h3><p className="text-sm text-gray-500">{m.dosage} · {m.frequency}</p><div className="space-y-2 mt-4 text-sm text-gray-600"><p className="flex gap-2"><Clock size={15}/> {(m.timeOfDay || []).join(', ') || 'Schedule not provided'}</p><p className="flex gap-2"><AlertTriangle size={15}/> {m.instructions || 'No instructions provided'}</p></div><div className="border-t mt-4 pt-4">{m.logs?.length ? m.logs.slice(-3).reverse().map((l,i)=><div key={i} className="flex gap-2 text-sm mb-2"><CheckCircle size={14} className="text-emerald-500"/><span>{l.status} · {l.notes || ''}</span><span className="ml-auto text-xs text-gray-400">{l.takenAt ? new Date(l.takenAt).toLocaleString() : ''}</span></div>) : <p className="text-sm text-gray-400">No medication logs yet.</p>}<button onClick={() => log(m._id)} className="btn-primary mt-3">Mark Taken</button></div></div>)}</div>}</div>;
}
