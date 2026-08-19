import { useEffect, useState } from 'react';
import { CreditCard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Billing() {
 const {user,api}=useAuth(); const residentId=user?.role==='resident'?user._id:user?.residentId; const [invoices,setInvoices]=useState([]); const [loading,setLoading]=useState(true);
 const load=()=>residentId&&api.get(`/billing/${residentId}`).then(r=>setInvoices(r.data)).catch(()=>setInvoices([])).finally(()=>setLoading(false));
 useEffect(load,[residentId]);
 const pay=async(id)=>{await api.patch(`/billing/pay/${id}`);load();};
 if(loading)return <div className="p-8 text-gray-500">Loading billing...</div>;
 const pending=invoices.filter(x=>x.status!=='paid').reduce((s,x)=>s+(x.amount||0),0);
 const paid=invoices.filter(x=>x.status==='paid').reduce((s,x)=>s+(x.amount||0),0);
 return <div className="space-y-6 max-w-7xl mx-auto"><div><h1 className="text-2xl font-bold">Billing</h1><p className="text-sm text-gray-500 mt-1">Invoices and payment records from the backend</p></div><div className="grid md:grid-cols-2 gap-5"><div className="card p-6 bg-brand-700 text-white"><p className="text-sm opacity-70">Current Balance</p><p className="text-3xl font-extrabold">৳{pending.toLocaleString()}</p></div><div className="card p-6"><p className="text-sm text-gray-500">Total Paid</p><p className="text-3xl font-extrabold">৳{paid.toLocaleString()}</p></div></div>{invoices.length===0?<div className="card p-10 text-center text-gray-500">No billing records are available yet.</div>:<div className="card p-6"><h3 className="text-lg font-bold mb-5">Invoices</h3><div className="space-y-4">{invoices.map(inv=><div key={inv._id} className="border rounded-xl p-5"><div className="flex justify-between gap-4"><div className="flex gap-3"><div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600"><CreditCard size={20}/></div><div><p className="font-bold">{inv.invoiceNumber}</p><p className="text-sm text-gray-500">{inv.month} {inv.year}</p></div></div><div className="text-right"><span className="badge bg-gray-50 border border-gray-100">{inv.status}</span><p className="font-bold mt-1">৳{(inv.amount||0).toLocaleString()}</p></div></div>{inv.items?.length>0&&<div className="bg-gray-50 rounded-xl p-4 mt-4">{inv.items.map((it,i)=><div key={i} className="flex justify-between text-sm py-1"><span>{it.description}</span><span>৳{(it.amount||0).toLocaleString()}</span></div>)}</div>}{inv.status!=='paid'&&<button onClick={()=>pay(inv._id)} className="btn-primary mt-4">Mark Payment</button>}</div>)}</div></div>}</div>;
}
