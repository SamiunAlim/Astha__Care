import React, { useEffect, useState } from 'react';
import { Clock, Flame, Utensils, ShieldCheck, Coffee, Sun, Apple, Moon, Sparkles, Filter } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { BANGLA_MEALS } from '../kitchen/KitchenDashboard.jsx';

export default function Meals() {
  const { api } = useAuth();
  const [menus, setMenus] = useState(BANGLA_MEALS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (api) {
      api.get('/menus')
        .then(r => {
          if (isMounted && r.data && Array.isArray(r.data) && r.data.length > 0) {
            setMenus(r.data);
          }
        })
        .catch(() => {
          if (isMounted) setMenus(BANGLA_MEALS);
        })
        .finally(() => {
          if (isMounted) setLoading(false);
        });
    } else {
      setLoading(false);
    }
    return () => { isMounted = false; };
  }, [api]);

  // Filtering by category (breakfast, lunch, snack, dinner) and dietary type
  const visible = menus.filter(m => {
    // Check category
    const mealType = (m.meal || '').toLowerCase();
    const bMeal = m.bengaliMeal || '';
    
    let matchCat = true;
    if (selectedCategory !== 'All') {
      matchCat = mealType === selectedCategory.toLowerCase() || 
                 bMeal.includes(selectedCategory) ||
                 (selectedCategory === 'breakfast' && (mealType.includes('break') || bMeal.includes('সকাল'))) ||
                 (selectedCategory === 'lunch' && (mealType.includes('lunch') || bMeal.includes('দুপুর'))) ||
                 (selectedCategory === 'snack' && (mealType.includes('snack') || bMeal.includes('বিকাল') || bMeal.includes('বিকেল'))) ||
                 (selectedCategory === 'dinner' && (mealType.includes('dinner') || bMeal.includes('রাত')));
    }

    // Check dietary
    let matchDiet = true;
    if (selectedDiet !== 'All') {
      const dType = (m.dietaryType || '').toLowerCase();
      matchDiet = dType.includes(selectedDiet.toLowerCase());
    }

    return matchCat && matchDiet;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">দৈনিক খাবারের পুষ্টিকর তালিকা (Meals)</h1>
            <span className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-bold border border-emerald-200 flex items-center gap-1">
              <Sparkles size={12} /> ১০০% দেশি পুষ্টিকর খাবার
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">সকাল, দুপুর, বিকেল ও রাতের জন্য পৃথক সুস্বাদু ও পুষ্টিকর মেনু</p>
        </div>

        {/* Meal Category Filters */}
        <div className="flex flex-wrap gap-1.5 bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200/60">
          {[
            { label: 'সব খাবার', value: 'All', icon: Utensils },
            { label: 'সকালের নাস্তা', value: 'breakfast', icon: Coffee },
            { label: 'দুপুরের খাবার', value: 'lunch', icon: Sun },
            { label: 'বিকেলের নাস্তা', value: 'snack', icon: Apple },
            { label: 'রাতের খাবার', value: 'dinner', icon: Moon }
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.value
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
            >
              <cat.icon size={14} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Diet Sub-filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-gray-400 font-semibold flex items-center gap-1 shrink-0">
          <Filter size={13} /> ডায়েট:
        </span>
        {[
          { label: 'সব ডায়েট', value: 'All' },
          { label: 'ডায়াবেটিক ফ্রেন্ডলি', value: 'ডায়াবেটিক' },
          { label: 'লো সোডিয়াম / প্রেসার', value: 'সোডিয়াম' },
          { label: 'হার্ট ফ্রেন্ডলি', value: 'হার্ট' },
          { label: 'হাই প্রোটিন', value: 'প্রোটিন' },
          { label: 'নরম খাদ্য (Soft)', value: 'নরম' }
        ].map((d) => (
          <button
            key={d.value}
            onClick={() => setSelectedDiet(d.value)}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 ${
              selectedDiet === d.value
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Meals Grid */}
      {loading ? (
        <div className="card p-12 text-center text-gray-500">
          <p className="font-semibold animate-pulse">খাবারের মেনু লোড হচ্ছে...</p>
        </div>
      ) : visible.length === 0 ? (
        <div className="card p-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
          <Utensils size={44} className="mx-auto text-gray-300 mb-3" />
          <h3 className="font-bold text-gray-800 text-base">এই বিভাগে কোনো খাবার পাওয়া যায়নি</h3>
          <p className="text-xs text-gray-400 mt-1">অনুগ্রহ করে ফিল্টার পরিবর্তন করুন</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSelectedDiet('All'); }}
            className="mt-4 px-4 py-2 bg-brand-700 text-white rounded-xl text-xs font-semibold"
          >
            সব খাবার দেখুন
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((m, idx) => {
            // Determine friendly meal tag
            const isBreakfast = m.meal === 'breakfast' || (m.bengaliMeal && m.bengaliMeal.includes('সকাল'));
            const isLunch = m.meal === 'lunch' || (m.bengaliMeal && m.bengaliMeal.includes('দুপুর'));
            const isSnack = m.meal === 'snack' || (m.bengaliMeal && (m.bengaliMeal.includes('বিকাল') || m.bengaliMeal.includes('বিকেল')));
            const isDinner = m.meal === 'dinner' || (m.bengaliMeal && m.bengaliMeal.includes('রাত'));

            const badgeTitle = isBreakfast ? 'সকালের নাস্তা' : isLunch ? 'দুপুরের খাবার' : isSnack ? 'বিকেলের নাস্তা' : isDinner ? 'রাতের খাবার' : (m.bengaliMeal || m.meal);

            return (
              <div
                key={m._id || m.id || idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Section with specific fallback */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={m.image || (
                      isBreakfast ? "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80" :
                      isLunch ? "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80" :
                      isSnack ? "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80" :
                      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
                    )}
                    alt={m.name || "খাবারের ছবি"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = isBreakfast 
                        ? 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
                        : isLunch 
                        ? 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80'
                        : isSnack
                        ? 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80'
                        : 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  
                  {/* Meal Tag Overlay */}
                  <span className={`absolute top-3 left-3 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm ${
                    isBreakfast ? 'bg-amber-600/85' :
                    isLunch ? 'bg-blue-600/85' :
                    isSnack ? 'bg-emerald-600/85' : 'bg-indigo-700/85'
                  }`}>
                    {badgeTitle}
                  </span>

                  {/* Status */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-100 shadow-xs">
                    {m.status || "তৈরি আছে"}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Dietary Badge */}
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 self-start mb-2.5 font-semibold">
                    <ShieldCheck size={13} />
                    <span>{m.dietaryType || "সাধারণ খাদ্য"}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-brand-700 transition-colors">
                    {m.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                    {m.description || (m.items && m.items.join(', ')) || "স্বাস্থ্যকর ও পুষ্টিকর সুস্বাদু দেশীয় খাবার।"}
                  </p>

                  {/* Time & Calories */}
                  <div className="flex items-center justify-between text-xs text-gray-500 py-2.5 border-y border-gray-100 mb-3 font-medium">
                    <span className="flex items-center gap-1 text-gray-600">
                      <Clock size={13} className="text-gray-400" /> {m.time || "যথাসময়ে পরিবেশন"}
                    </span>
                    {m.calories && (
                      <span className="flex items-center gap-1 text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded">
                        <Flame size={13} /> {m.calories} kcal
                      </span>
                    )}
                  </div>

                  {/* Nutrients Breakdown */}
                  {m.protein && (
                    <div className="grid grid-cols-3 gap-1.5 bg-gray-50/80 p-2 rounded-xl text-center text-xs mb-3 border border-gray-100">
                      <div>
                        <span className="text-gray-400 text-[10px] block font-medium">প্রোটিন</span>
                        <strong className="text-gray-800 font-bold">{m.protein}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] block font-medium">কার্বস</span>
                        <strong className="text-gray-800 font-bold">{m.carbs}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] block font-medium">ফ্যাট</span>
                        <strong className="text-gray-800 font-bold">{m.fat}</strong>
                      </div>
                    </div>
                  )}

                  {/* Ingredients */}
                  {m.items && m.items.length > 0 && (
                    <div className="mt-auto pt-2">
                      <span className="text-[11px] font-semibold text-gray-400 block mb-1">উপকরণ:</span>
                      <div className="flex flex-wrap gap-1">
                        {m.items.map((it, i) => (
                          <span key={i} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
