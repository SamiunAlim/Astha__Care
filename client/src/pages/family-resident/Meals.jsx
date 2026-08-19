import { useEffect, useState } from 'react';
import { Clock, Flame } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Meals(){
 const {api}=useAuth(); const [menus,setMenus]=useState([]); const [day,setDay]=useState(''); const [loading,setLoading]=useState(true);
 useEffect(()=>{api.get('/menus').then(r=>setMenus(r.data)).catch(()=>setMenus([])).finally(()=>setLoading(false));},[api]);
 const days=[...new Set(menus.map(m=>m.day))]; const visible=day?menus.filter(m=>m.day===day):menus;
 if(loading)return <div className="p-8 text-gray-500">Loading menu...</div>;
 return <div className="space-y-6 max-w-7xl mx-auto"><div><h1 className="text-2xl font-bold">Meals</h1><p className="text-sm text-gray-500 mt-1">Meal plans published by the care team</p></div>{days.length>0&&<div className="flex gap-2 overflow-x-auto">{['',...days].map(d=><button key={d} onClick={()=>setDay(d)} className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap ${day===d?'bg-brand-700 text-white':'bg-white border text-gray-600'}`}>{d||'All days'}</button>)}</div>}{visible.length===0?<div className="card p-10 text-center text-gray-500">No meal data has been published yet.</div>:<div className="grid md:grid-cols-3 gap-5">{visible.map(m=><div key={m._id} className="card p-6"><div className="flex justify-between mb-4"><span className="badge bg-gray-50 border border-gray-100 capitalize">{m.dietaryType}</span><span className="text-xs text-gray-400 flex gap-1"><Clock size={12}/>{m.time||''}</span></div><h3 className="text-lg font-bold capitalize">{m.meal}</h3><p className="text-sm text-gray-600 mt-2">{m.items?.join(', ')||'Items not provided'}</p>{m.calories&&<p className="text-sm text-gray-400 mt-4"><Flame size={14} className="inline"/> {m.calories} kcal</p>}</div>)}</div>}</div>
}
