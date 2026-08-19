import { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';

export default function CareTeam(){
 const [team]=useState([]);
 return <div className="space-y-6 max-w-7xl mx-auto"><div><h1 className="text-2xl font-bold">Care Team</h1><p className="text-sm text-gray-500 mt-1">Healthcare professionals linked to your resident account</p></div>{team.length===0?<div className="card p-10 text-center text-gray-500">No care-team records are available yet. Your database administrator can add them later.</div>:<div className="grid md:grid-cols-2 gap-5">{team.map(c=><div key={c._id} className="card p-6 flex gap-4"><div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center"><User/></div><div><h3 className="font-bold">{c.name}</h3><p className="text-sm text-brand-600">{c.role}</p>{c.phone&&<a className="text-sm flex gap-2 mt-3" href={`tel:${c.phone}`}><Phone size={14}/>{c.phone}</a>}{c.email&&<a className="text-sm flex gap-2 mt-2" href={`mailto:${c.email}`}><Mail size={14}/>{c.email}</a>}</div></div>)}</div>}</div>
}
