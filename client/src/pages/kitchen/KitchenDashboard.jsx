import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Utensils,
  Heart,
  Clock,
  Flame,
  Search,
  ArrowLeft,
  Filter,
  CheckCircle2,
  AlertCircle,
  Apple,
  Coffee,
  Moon,
  Sun,
  ShieldCheck,
  Info,
  Sparkles
} from 'lucide-react';
import './KitchenDashboard.css';

// খাঁটি স্বাস্থ্যসম্মত বাঙালি খাবারের তালিকা (ছবিসহ)
export const BANGLA_MEALS = [
  {
    id: 1,
    name: "লাল আটার নরম ফুলকো রুটি, সবজি লাবড়া ও ডিম সিদ্ধ",
    bengaliMeal: "সকালের নাস্তা",
    meal: "Breakfast",
    time: "সকাল ০৮:০০ - ০৯:০০",
    dietaryType: "ডায়াবেটিক ফ্রেন্ডলি ও হাই ফাইবার",
    calories: 310,
    protein: "14g",
    carbs: "45g",
    fat: "6g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    description: "লাল আটার নরম হাতে তৈরি ২টি রুটি, তেল ছাড়া পেঁপে-মিষ্টি কুমড়া ও পটলের সুস্বাদু সবজি লাবড়া এবং ১টি দেশি মুরগির সিদ্ধ ডিম।",
    items: ["লাল আটার রুটি (২টি)", "পেঁপে-পটল লাবড়া", "সিদ্ধ ডিম", "শসা কুচি"]
  },
  {
    id: 2,
    name: "পাতলা চালের নরম জাউ ভাত ও কাঁচা পেঁপে ভাজি",
    bengaliMeal: "সকালের নাস্তা",
    meal: "Breakfast",
    time: "সকাল ০৮:৩০ - ০৯:৩০",
    dietaryType: "সহজপাচ্য ও লো সোডিয়াম",
    calories: 260,
    protein: "9g",
    carbs: "48g",
    fat: "3g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    description: "সহজে হজমযোগ্য লাল চালের গরম নরম জাউ ভাত, হালকা জিরে ফোড়ন দেওয়া কাঁচা পেঁপে ভাজি ও লেবুর টুকরো।",
    items: ["লাল চালের জাউ ভাত", "কাঁচা পেঁপে ভাজি", "ধনেপাতা", "কাগজি লেবু"]
  },
  {
    id: 3,
    name: "তাজা রুই মাছের পাতলা ঝোল, লাউ শাক ও মিনিকেট ভাত",
    bengaliMeal: "দুপুরের খাবার",
    meal: "Lunch",
    time: "দুপুর ০১:০০ - ০২:০০",
    dietaryType: "হার্ট ফ্রেন্ডলি ও ওমেগা-৩",
    calories: 460,
    protein: "34g",
    carbs: "58g",
    fat: "9g",
    status: "রান্না হচ্ছে",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    description: "টাটকা রুই মাছের পেটি দিয়ে আলু ও ফুলকপির হালকা জিরে বাটা পাতলা ঝোল, ভাপে সেদ্ধ লাউ শাক এবং গরম নরম ভাত।",
    items: ["মিনিকেট নরম ভাত", "রুই মাছের পাতলা ঝোল", "লাউ শাক ভাজি", "কাঁচা মরিচ"]
  },
  {
    id: 4,
    name: "সোনার মুগ ডালের পাতলা খিচুড়ি ও ডিমের হালকা কারি",
    bengaliMeal: "দুপুরের খাবার",
    meal: "Lunch",
    time: "দুপুর ০১:০০ - ০২:০০",
    dietaryType: "নরম খাদ্য (Soft Diet)",
    calories: 440,
    protein: "21g",
    carbs: "62g",
    fat: "11g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    description: "ভাজা মুগ ডাল ও গাজর-বরবটি দিয়ে রান্না করা সুগন্ধি নরম খিচুড়ি, সামান্য খাঁটি গাওয়া ঘি ও সেদ্ধ ডিমের হালকা কারি।",
    items: ["মুগ ডাল খিচুড়ি", "ডিম কারি", "গাজর ও বরবটি", "গাওয়া ঘি ১ চামচ"]
  },
  {
    id: 5,
    name: "দেশি মুরগি ও কাঁচা পেঁপের পাতলা স্বাস্থ্যকর ঝোল",
    bengaliMeal: "দুপুরের খাবার",
    meal: "Lunch",
    time: "দুপুর ০১:১৫ - ০২:১৫",
    dietaryType: "হাই প্রোটিন ও ডায়াবেটিক",
    calories: 480,
    protein: "38g",
    carbs: "48g",
    fat: "10g",
    status: "প্রস্তুত",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    description: "চামড়া ছাড়া দেশি মুরগির মাংস, কাঁচা পেঁপে ও গোলমরিচ দিয়ে রান্না করা দুর্বলতানাশক হালকা ঝোল ও লাল চালের ভাত।",
    items: ["লাল চালের ভাত", "দেশি মুরগির পেঁপে ঝোল", "লেবু ও শসা স্লাইস"]
  },
  {
    id: 6,
    name: "হাতে ভাজা মুড়ি, শসা-টমেটো ও আদা-লেবু লাল চা",
    bengaliMeal: "বিকেলের নাস্তা",
    meal: "Snacks",
    time: "বিকেল ০৪:৩০ - ০৫:৩০",
    dietaryType: "লো ক্যালোরি ও গ্যাস রিলিফ",
    calories: 150,
    protein: "5g",
    carbs: "28g",
    fat: "2g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    description: "লবণ ছাড়া দেশি হাতে ভাজা মুড়ি, শসা-টমেটো কুচি ও খাঁটি আদা-লবঙ্গ দেওয়া চিনি ছাড়া গরম লাল চা।",
    items: ["হাতে ভাজা মুড়ি", "শসা কুচি", "টমেটো", "আদা-লেবু চিনি ছাড়া চা"]
  },
  {
    id: 7,
    name: "ঘরে পাতা চিনি ছাড়া টক দই ও পাকা পেঁপের কিউব",
    bengaliMeal: "বিকেলের নাস্তা",
    meal: "Snacks",
    time: "বিকেল ০৫:০০ - ০৫:৪৫",
    dietaryType: "প্রোবায়োটিক ও হজম সহায়ক",
    calories: 130,
    protein: "8g",
    carbs: "20g",
    fat: "2g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    description: "আস্থা কেয়ার কিচেনে প্রস্তুত করা খাঁটি টক দই, সাথে মিষ্টি পাকা দেশি পেঁপের টুকরো ও ডালিম দানা।",
    items: ["খাঁটি মিষ্টিহীন টক দই", "পাকা পেঁপে", "ডালিম", "চিঁড়া ভাজা সামান্য"]
  },
  {
    id: 8,
    name: "শুপাচ্য কাঁচকলা দিয়ে শিং মাছের হালকা জিরে ঝোল",
    bengaliMeal: "রাতের খাবার",
    meal: "Dinner",
    time: "রাত ০৭:৩০ - ০৮:৩০",
    dietaryType: "রক্তবর্ধক ও প্রেসার কন্ট্রোল",
    calories: 350,
    protein: "28g",
    carbs: "44g",
    fat: "6g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    description: "বয়োজ্যেষ্ঠদের জন্য বিশেষভাবে প্রস্তুত শিং মাছ ও কাঁচকলার পুষ্টিকর ঝোল, নরম ভাত ও ধনেপাতা কুচি।",
    items: ["শিং মাছ", "কাঁচকলা", "জিরার হালকা ঝোল", "নরম ভাত"]
  },
  {
    id: 9,
    name: "নরম আটার রুটি, মিক্সড সবজি ও ঘন মসুর ডাল",
    bengaliMeal: "রাতের খাবার",
    meal: "Dinner",
    time: "রাত ০৮:০০ - ০৯:০০",
    dietaryType: "হালকা ও সহজে হজমযোগ্য",
    calories: 320,
    protein: "13g",
    carbs: "52g",
    fat: "5g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
    description: "নরম হাতে বেলা ২টি পাতলা রুটি, পটল-ঝিঙে-গাজরের ভাজি ও রসুন ফোড়ন দেওয়া ঘন মসুর ডাল।",
    items: ["নরম রুটি (২টি)", "ঝিঙে-গাজর ভাজি", "ঘন মসুর ডাল", "এক গ্লাস কুসুম গরম পানি"]
  }
];

export const BANGLA_HEALTH_DATA = {
  dailyCalorieTarget: 1750,
  waterIntakeGoal: "২.৫ লিটার",
  dietarySummaries: [
    { resident: "আব্দুল করিম (রুম ১০২)", diet: "ডায়াবেটিক ও লো সল্ট", allergies: "চিংড়ি মাছ", notes: "ভাতে লাল চাল দিতে হবে, চিনি বা মিষ্টি সম্পূর্ণ নিষেধ" },
    { resident: "বেগম সুফিয়া (রুম ১০৫)", diet: "নরম সেদ্ধ খাবার (Soft Diet)", allergies: "চিনাবাদাম", notes: "সবজি ও মাছ খুব নরম পেস্ট করে দিতে হবে" },
    { resident: "ডা. রফিকুল ইসলাম (রুম ২০১)", diet: "হার্ট ও প্রেসার কেয়ার", allergies: "বেগুন", notes: "তেল-মসলা অত্যন্ত কম, ওমেগা-৩ যুক্ত মাছ অগ্রাধিকার" },
    { resident: "ফাতেমা বেগম (রুম ২০৪)", diet: "কিডনি ফ্রেন্ডলি ও লো পটাসিয়াম", allergies: "দুধ ও ল্যাকটোজ", notes: "ডাল ও শাক রান্নার আগে গরম পানিতে ভাপিয়ে পানি ফেলে দিতে হবে" }
  ]
};

export default function KitchenDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'health'
  const [selectedMealType, setSelectedMealType] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering
  const filteredMeals = BANGLA_MEALS.filter(item => {
    const matchesMeal = selectedMealType === 'All' || 
      item.meal.toLowerCase() === selectedMealType.toLowerCase() ||
      item.bengaliMeal.includes(selectedMealType);

    const matchesDiet = selectedDiet === 'All' || 
      item.dietaryType.toLowerCase().includes(selectedDiet.toLowerCase());

    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.items.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.dietaryType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bengaliMeal.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesMeal && matchesDiet && matchesSearch;
  });

  return (
    <div className="kitchen-page">
      {/* Navbar */}
      <header className="kitchen-navbar">
        <div className="kitchen-nav-left">
          <button 
            type="button" 
            className="hamburger-icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="kitchen-brand">
            <div className="kitchen-logo-icon">
              <Utensils size={20} className="text-white" />
            </div>
            <div>
              <h2 className="kitchen-title">আস্থা কেয়ার কিচেন (Kitchen Portal)</h2>
              <p className="kitchen-subtitle">পুষ্টিকর ও স্বাস্থ্যসম্মত দেশীয় খাবারের মেনু</p>
            </div>
          </div>
        </div>

        <div className="kitchen-nav-right">
          <div className="kitchen-search-box">
            <Search size={16} className="text-gray-400" />
            <input 
              type="text"
              placeholder="খাবারের নাম, উপকরণ বা ডায়েট খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            onClick={() => navigate(-1)} 
            className="back-button"
            title="আগের পেজে ফিরে যান"
          >
            <ArrowLeft size={16} />
            <span>ফিরে যান (Back)</span>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="kitchen-body">
        {/* Sidebar */}
        <aside className={`kitchen-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-section-title">মেনু ও ডায়েট কন্ট্রোল</div>
          <ul className="sidebar-menu">
            <li 
              className={activeTab === 'menu' ? 'active' : ''} 
              onClick={() => setActiveTab('menu')}
            >
              <div className="menu-li-content">
                <Utensils size={18} />
                <span>বাঙালি খাবারের মেনু</span>
              </div>
              <span className="badge-count">{BANGLA_MEALS.length}টি</span>
            </li>
            <li 
              className={activeTab === 'health' ? 'active' : ''} 
              onClick={() => setActiveTab('health')}
            >
              <div className="menu-li-content">
                <Heart size={18} />
                <span>স্বাস্থ্য ও ডায়েট চার্ট</span>
              </div>
              <span className="badge-pulse"></span>
            </li>
          </ul>

          <div className="sidebar-summary-card">
            <h4>আজকের কিচেন আপডেট</h4>
            <div className="stat-row">
              <span>মোট প্রস্তুত খাবার</span>
              <strong>{BANGLA_MEALS.length} পদ</strong>
            </div>
            <div className="stat-row">
              <span>স্পেশাল ডায়েট রেসিডেন্ট</span>
              <strong>৪ জন</strong>
            </div>
            <div className="stat-row">
              <span>রান্নাঘরের অবস্থা</span>
              <span className="status-online">সক্রিয় (Active)</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="kitchen-main">
          {activeTab === 'menu' ? (
            <div className="menu-container">
              {/* Top Header & Filters */}
              <div className="menu-header">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="main-heading">দৈনিক বাঙালি খাবারের পুষ্টিকর মেনু</h1>
                    <span className="bg-teal-100 text-teal-800 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                      <Sparkles size={12} /> ১০০% দেশি ও স্বাস্থ্যকর
                    </span>
                  </div>
                  <p className="sub-heading">বয়োজ্যেষ্ঠদের স্বাস্থ্য, পুষ্টি ও রুচি অনুযায়ী প্রস্তুতকৃত খাঁটি খাবার</p>
                </div>
                
                {/* Meal Categories */}
                <div className="category-pill-group">
                  {[
                    { label: 'সব খাবার', value: 'All', icon: Utensils },
                    { label: 'সকালের নাস্তা', value: 'Breakfast', icon: Coffee },
                    { label: 'দুপুরের খাবার', value: 'Lunch', icon: Sun },
                    { label: 'বিকেলের নাস্তা', value: 'Snacks', icon: Apple },
                    { label: 'রাতের খাবার', value: 'Dinner', icon: Moon }
                  ].map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedMealType(cat.value)}
                      className={`category-pill ${selectedMealType === cat.value ? 'active' : ''}`}
                    >
                      <cat.icon size={15} />
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Filter Bar */}
              <div className="diet-filter-bar">
                <div className="filter-label">
                  <Filter size={15} />
                  <span>ডায়েট ফিল্টার:</span>
                </div>
                <div className="diet-tags">
                  {[
                    { label: 'সব ডায়েট', value: 'All' },
                    { label: 'ডায়াবেটিক ফ্রেন্ডলি', value: 'ডায়াবেটিক' },
                    { label: 'লো সোডিয়াম / প্রেসার', value: 'সোডিয়াম' },
                    { label: 'হাই প্রোটিন', value: 'প্রোটিন' },
                    { label: 'নরম খাবার (Soft)', value: 'নরম' },
                    { label: 'সহজপাচ্য / প্রোবায়োটিক', value: 'সহজপাচ্য' }
                  ].map((diet) => (
                    <button
                      key={diet.value}
                      onClick={() => setSelectedDiet(diet.value)}
                      className={`diet-tag-btn ${selectedDiet === diet.value ? 'active' : ''}`}
                    >
                      {diet.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Food Items Grid */}
              {filteredMeals.length === 0 ? (
                <div className="no-meals-found">
                  <Utensils size={48} className="text-gray-300 mb-2" />
                  <h3>কোনো খাবার পাওয়া যায়নি</h3>
                  <p>অনুগ্রহ করে ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন</p>
                  <button 
                    className="reset-btn"
                    onClick={() => { setSelectedMealType('All'); setSelectedDiet('All'); setSearchQuery(''); }}
                  >
                    ফিল্টার রিসেট করুন
                  </button>
                </div>
              ) : (
                <div className="meals-grid">
                  {filteredMeals.map((meal) => (
                    <div key={meal.id} className="meal-card">
                      {/* Card Image */}
                      <div className="meal-img-wrap">
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                        <div className="meal-badge-type">{meal.bengaliMeal}</div>
                        <div className="meal-status-pill">{meal.status}</div>
                      </div>

                      {/* Card Content */}
                      <div className="meal-card-body">
                        <div className="meal-dietary-badge">
                          <ShieldCheck size={13} />
                          <span>{meal.dietaryType}</span>
                        </div>

                        <h3 className="meal-title">{meal.name}</h3>
                        <p className="meal-desc">{meal.description}</p>

                        <div className="meal-meta-row">
                          <div className="meta-item">
                            <Clock size={14} className="text-gray-400" />
                            <span>{meal.time}</span>
                          </div>
                          <div className="meta-item calorie-tag">
                            <Flame size={14} className="text-orange-500" />
                            <span>{meal.calories} ক্যালোরি</span>
                          </div>
                        </div>

                        {/* Nutrients Breakdown */}
                        <div className="nutrients-breakdown">
                          <div className="nutrient-chip">
                            <small>প্রোটিন</small>
                            <strong>{meal.protein}</strong>
                          </div>
                          <div className="nutrient-chip">
                            <small>কার্বস</small>
                            <strong>{meal.carbs}</strong>
                          </div>
                          <div className="nutrient-chip">
                            <small>ফ্যাট</small>
                            <strong>{meal.fat}</strong>
                          </div>
                        </div>

                        {/* Ingredients */}
                        <div className="ingredients-box">
                          <span className="ingredients-title">উপকরণসমূহ:</span>
                          <div className="ingredients-tags">
                            {meal.items.map((ing, i) => (
                              <span key={i} className="ingredient-tag">{ing}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Health & Diets View */
            <div className="health-container">
              <div className="health-header">
                <div>
                  <h1 className="main-heading">রেসিডেন্টদের পুষ্টি ও স্বাস্থ্য নির্দেশনা</h1>
                  <p className="sub-heading">বয়োজ্যেষ্ঠদের ব্যক্তিগত প্রেসক্রিপশন অনুযায়ী ডায়েট নিয়ন্ত্রণ ও অ্যালার্জি তালিকা</p>
                </div>
              </div>

              {/* Health Overview Cards */}
              <div className="health-stats-row">
                <div className="health-stat-box">
                  <div className="stat-icon-wrapper bg-green-50 text-green-600">
                    <Apple size={24} />
                  </div>
                  <div>
                    <small>দৈনিক গড় ক্যালোরি লক্ষ্যমাত্রা</small>
                    <h3>{BANGLA_HEALTH_DATA.dailyCalorieTarget} kcal</h3>
                    <span className="text-xs text-green-600 font-medium">✓ পরিমিত পুষ্টিসম্মত</span>
                  </div>
                </div>

                <div className="health-stat-box">
                  <div className="stat-icon-wrapper bg-blue-50 text-blue-600">
                    <Heart size={24} />
                  </div>
                  <div>
                    <small>দৈনিক পানি পানের লক্ষ্যমাত্রা</small>
                    <h3>{BANGLA_HEALTH_DATA.waterIntakeGoal} / জন</h3>
                    <span className="text-xs text-blue-600 font-medium">সময়মতো নজরদারি</span>
                  </div>
                </div>

                <div className="health-stat-box">
                  <div className="stat-icon-wrapper bg-amber-50 text-amber-600">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <small>বিশেষ ডায়েট প্রাপ্ত সদস্য</small>
                    <h3>{BANGLA_HEALTH_DATA.dietarySummaries.length} জন রেসিডেন্ট</h3>
                    <span className="text-xs text-amber-600 font-medium">কাস্টম রান্না বাধ্যতামূলক</span>
                  </div>
                </div>
              </div>

              {/* Dietary Requirements Table */}
              <div className="dietary-table-card">
                <div className="table-header-title">
                  <h3>বিশেষ ডায়েট ও অ্যালার্জি প্রোফাইল</h3>
                  <span className="table-subtitle">চিকিৎসক ও ক্লিনিক্যাল নিউট্রিশনিস্ট দ্বারা নির্ধারিত</span>
                </div>
                <div className="table-responsive">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>রেসিডেন্ট ও রুম নম্বর</th>
                        <th>নির্ধারিত ডায়েট</th>
                        <th>অ্যালার্জি সতর্কতা</th>
                        <th>কিচেন রান্নার বিশেষ নির্দেশনা</th>
                        <th>বিস্তারিত</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BANGLA_HEALTH_DATA.dietarySummaries.map((item, idx) => (
                        <tr key={idx}>
                          <td className="font-semibold text-gray-900">{item.resident}</td>
                          <td>
                            <span className="diet-pill">{item.diet}</span>
                          </td>
                          <td>
                            <span className={`allergy-pill ${item.allergies !== 'None' ? 'alert' : ''}`}>
                              {item.allergies}
                            </span>
                          </td>
                          <td className="text-sm text-gray-600">{item.notes}</td>
                          <td>
                            <button className="view-details-btn">
                              <Info size={14} /> প্রোফাইল
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}