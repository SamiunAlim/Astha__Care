import { useAuth } from '../../context/AuthContext.jsx';
import { Mail, Phone, User } from 'lucide-react';

export default function Settings(){
 const {user}=useAuth();
 return <div className="space-y-6 max-w-4xl mx-auto"><div><h1 className="text-2xl font-bold">Settings</h1><p className="text-sm text-gray-500 mt-1">Account information currently stored by the backend</p></div><div className="card p-6"><div className="flex items-center gap-4 mb-6"><div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center"><User/></div><div><h3 className="text-lg font-bold">{user?.name}</h3><p className="text-sm text-brand-600 capitalize">{user?.role}</p></div></div><div className="grid md:grid-cols-2 gap-4"><Info icon={Mail} label="Email" value={user?.email}/><Info icon={Phone} label="Phone" value={user?.phone}/><Info label="Medical ID" value={user?.medicalId}/><Info label="Room" value={user?.roomNumber}/><Info label="Relation" value={user?.relation}/><Info label="Address" value={user?.address}/></div><p className="text-xs text-gray-400 mt-6">Profile editing is intentionally not mocked. It can be connected to a real update endpoint by the database/backend owner.</p></div></div>
}
function Info({icon:Icon,label,value}){return <div className="p-4 bg-gray-50 rounded-xl border"><p className="text-xs text-gray-400 uppercase">{label}</p><p className="font-semibold mt-1 flex gap-2">{Icon&&<Icon size={15}/>} {value||'Not provided'}</p></div>}
