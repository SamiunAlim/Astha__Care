import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function AppointmentsPage() {
  const { user, api } = useAuth();
  const residentId = user?.role === 'resident' ? user._id : user?.residentId;
  const [appointments,setAppointments]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{ if(!residentId)return setLoading(false); api.get(`/appointments/${residentId}`).then(r=>setAppointments(r.data)).catch(()=>setAppointments([])).finally(()=>setLoading(false)); },[api,residentId]);
  const update=async(id,status)=>{await api.patch(`/appointments/${id}`,{status}); setAppointments(a=>a.map(x=>x._id===id?{...x,status}:x));};
  if(loading)return <div className="p-8 text-gray-500">Loading appointments...</div>;
  return <div className="space-y-6 max-w-7xl mx-auto"><div><h1 className="text-2xl font-bold">Appointments</h1><p className="text-sm text-gray-500 mt-1">Appointments stored for this resident</p></div>{appointments.length===0?<div className="card p-10 text-center text-gray-500">No appointments are available yet.</div>:<div className="space-y-4">{appointments.map(a=><div key={a._id} className="card p-6 flex flex-col md:flex-row gap-4"><div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600"><Calendar/></div><div className="flex-1"><div className="flex gap-2 items-center"><h3 className="font-bold">{a.doctorName || 'Doctor'}</h3><span className="badge bg-gray-50 border border-gray-100">{a.status}</span></div><p className="text-sm text-gray-500">{a.title}</p><div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2"><span className="flex gap-1"><Clock size={14}/>{a.date ? new Date(a.date).toLocaleDateString() : '-'} · {a.time || ''}</span><span className="flex gap-1"><MapPin size={14}/>{a.location || 'Location not provided'}</span></div></div>{a.status==='scheduled'&&<div className="flex gap-2"><button className="btn-secondary" onClick={()=>update(a._id,'completed')}>Complete</button><button className="px-4 py-2 bg-red-50 text-red-700 rounded-xl text-sm" onClick={()=>update(a._id,'cancelled')}>Cancel</button></div>}</div>)}</div>}</div>;
}
