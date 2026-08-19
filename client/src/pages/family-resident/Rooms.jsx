import { Bed } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Rooms(){
 const {user}=useAuth();
 const room=user?.roomNumber;
 return <div className="space-y-6 max-w-7xl mx-auto"><div><h1 className="text-2xl font-bold">My Room</h1><p className="text-sm text-gray-500 mt-1">Room information linked to your account</p></div><div className="card p-8">{room?<><div className="flex items-center gap-4"><div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center"><Bed/></div><div><p className="text-sm text-gray-500">Room Number</p><p className="text-2xl font-extrabold">{room}</p></div></div><p className="text-sm text-gray-500 mt-6">Additional room details will appear when they are provided by the backend.</p></>:<div className="text-center text-gray-500">No room has been assigned to this account yet.</div>}</div></div>
}
