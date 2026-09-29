import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Shield,
  Activity,
  Users,
  Clock,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Pill,
  Coffee,
  Building,
  ArrowRight,
  Star,
  Sparkles,
  ChevronRight,
  Lock,
  FileText,
  HelpCircle,
  Award,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import homepageImg from '../../assets/Homepage.jpeg';
import dashboardImg from '../../assets/Dashboard image.jpg';

export default function HomePage() {
  const { user } = useAuth();
  const [openFaq, setOpenFaq] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [visitForm, setVisitForm] = useState({ name: '', phone: '', date: '', notes: '' });

  const faqs = [
    {
      q: 'How does the Family Portal work for relatives living far away or abroad?',
      a: 'The Family Portal allows relatives to view real-time health vitals, daily medication logs, doctor appointments, meal status, and direct care team updates 24/7 from anywhere in the world.'
    },
    {
      q: 'What medical emergency measures are in place?',
      a: 'We have registered on-site nurses 24/7, emergency SOS alert buttons in every room and resident portal, and tie-ups with top Dhaka hospitals for immediate ambulance transfer under 3 minutes.'
    },
    {
      q: 'Can dietary plans be customized for diabetes, hypertension, or kidney care?',
      a: 'Yes, our certified clinical nutritionists formulate personalized daily meal plans according to each resident\'s medical chart, allergen profile, and physician instructions.'
    },
    {
      q: 'How can I schedule an in-person or virtual tour of Aastha Care?',
      a: 'You can easily request a visit using the "Book a Visit" form on this page or call our dedicated support desk at +880 1700-000000.'
    }
  ];

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setVisitForm({ name: '', phone: '', date: '', notes: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex flex-col selection:bg-brand-100 selection:text-brand-900">
      {/* 1. Top Hotline Banner */}
      <div className="bg-brand-900 text-white text-xs py-2 px-4 border-b border-brand-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500 text-white animate-pulse">
              24/7 SOS
            </span>
            <span>Emergency Medical Helpline Dhaka: <strong>+880 1700-000000</strong></span>
          </div>
          <div className="flex items-center gap-4 text-brand-200">
            <span>Dhaka, Bangladesh</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Compassionate, Dignified Senior Living</span>
          </div>
        </div>
      </div>

      {/* 2. Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-brand-700 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-700/25 group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-gray-900">Aastha Care</span>
              <p className="text-[11px] font-semibold text-brand-600 uppercase tracking-wider">Elder Care Portal</p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-brand-700 transition-colors">Services</a>
            <a href="#portals" className="hover:text-brand-700 transition-colors">Portals</a>
            <a href="#why-us" className="hover:text-brand-700 transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-brand-700 transition-colors">Stories</a>
            <a href="#book-visit" className="hover:text-brand-700 transition-colors">Book a Visit</a>
            <a href="#faq" className="hover:text-brand-700 transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {user ? (
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold shadow-md shadow-brand-700/20 transition-all transform hover:-translate-y-0.5"
              >
                Go to Dashboard
                <ArrowRight size={16} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-700 hover:bg-brand-50/60 rounded-xl transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold shadow-md shadow-brand-700/20 transition-all transform hover:-translate-y-0.5"
                >
                  Create Account
                  <ArrowRight size={15} />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-slate-50">
        {/* Background decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs font-bold tracking-wide uppercase shadow-sm">
                <Sparkles size={14} className="text-brand-600" />
                Trusted Elder Care in Bangladesh
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.12]">
                Peace of Mind for You,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-blue-600 to-teal-600">
                  Comfort for Them.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At <strong className="text-gray-900 font-semibold">Aastha Care</strong>, we provide compassionate, dignified elderly care in a safe, comfortable, and loving environment—where every elder is treated like family.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/register"
                  className="px-7 py-4 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-base shadow-lg shadow-brand-700/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  Get Started Today
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/login"
                  className="px-7 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-base border border-gray-200 shadow-sm transition-all"
                >
                  Sign In to Portal
                </Link>
                <a
                  href="#book-visit"
                  className="px-5 py-4 text-brand-700 hover:text-brand-900 font-semibold text-base flex items-center gap-1.5 hover:underline"
                >
                  <Calendar size={18} />
                  Book a Visit
                </a>
              </div>

              {/* Social Proof */}
              <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-left">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-brand-600 text-white font-bold flex items-center justify-center text-xs">RK</div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-blue-600 text-white font-bold flex items-center justify-center text-xs">SA</div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-teal-600 text-white font-bold flex items-center justify-center text-xs">NR</div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-amber-600 text-white font-bold flex items-center justify-center text-xs">MA</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-gray-800 ml-1">5.0 / 5.0</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Joined by <strong className="text-gray-800 font-bold">730+ families</strong> in Dhaka
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={homepageImg}
                    alt="Elderly care at Aastha Care"
                    className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/90 backdrop-blur-sm text-[11px] font-bold text-white mb-2">
                      <CheckCircle2 size={12} /> 24/7 Verified Caregivers
                    </span>
                    <h3 className="text-lg font-bold leading-tight">Holistic Medical & Social Care</h3>
                    <p className="text-xs text-gray-200 mt-1">Surrounded by warmth, medical safety, and daily engagement.</p>
                  </div>
                </div>

                {/* Floating Card 1: Top Right */}
                <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    <Activity size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Emergency SOS</p>
                    <p className="text-[11px] text-gray-500">&lt; 3 mins response</p>
                  </div>
                </div>

                {/* Floating Card 2: Bottom Left */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Family Peace of Mind</p>
                    <p className="text-[11px] text-gray-500">Live Health & Meal Logs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Impact Metrics Bar */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-brand-700">1,240+</div>
              <p className="text-sm font-semibold text-gray-700">Elders Supported</p>
              <p className="text-xs text-gray-400">In Dhaka & nationwide</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-brand-700">85+</div>
              <p className="text-sm font-semibold text-gray-700">Doctors & Caregivers</p>
              <p className="text-xs text-gray-400">Certified & background-checked</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-brand-700">99.4%</div>
              <p className="text-sm font-semibold text-gray-700">Family Satisfaction</p>
              <p className="text-xs text-gray-400">Based on regular feedback</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-brand-700">&lt; 3 min</div>
              <p className="text-sm font-semibold text-gray-700">Emergency Response</p>
              <p className="text-xs text-gray-400">On-site medical readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dual Portals Section (Family vs Resident) */}
      <section id="portals" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
              Smart Portals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
              Dedicated Portals for Family & Residents
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              Experience seamless communication, health transparency, and easy daily management with our role-based digital portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Family Portal Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users size={28} />
                  </div>
                  <span className="px-3.5 py-1 bg-blue-100 text-brand-800 text-xs font-bold rounded-full">
                    Family Portal
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">For Loved Ones & Guardians</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Stay updated on your elderly family member’s daily wellbeing, vital signs, medications, and schedule from anywhere.
                </p>

                <ul className="space-y-3 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>Live Health Records & Vitals Tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>Medication Schedule & Adherence Logs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>Direct Caregiver & Doctor Contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>Transparent Invoices & Expense Breakdowns</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-3">
                <Link
                  to="/login"
                  className="flex-1 py-3.5 px-4 bg-brand-700 hover:bg-brand-800 text-white rounded-xl font-bold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Access Family Portal <ArrowRight size={16} />
                </Link>
                <Link
                  to="/register"
                  className="py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Resident Portal Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart size={28} />
                  </div>
                  <span className="px-3.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full">
                    Resident Portal
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">For Our Respected Elders</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Simple, accessible, and friendly interface allowing residents to check daily activities, meal menus, and summon assistance.
                </p>

                <ul className="space-y-3 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>One-Touch "Call for Help" Emergency Assistance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>Today's Healthy Chef-Crafted Meal Menu</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>Room Maintenance & Cleaning Requests</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span>Daily Community Recreation & Prayer Schedule</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-3">
                <Link
                  to="/login"
                  className="flex-1 py-3.5 px-4 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Access Resident Portal <ArrowRight size={16} />
                </Link>
                <Link
                  to="/register"
                  className="py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
              Comprehensive Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
              Services Designed with Love & Dignity
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              From continuous medical monitoring to warm companionship, we attend to every physical, emotional, and social need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: '24/7 Nursing & Medical Care',
                desc: 'Dedicated registered nurses on site round-the-clock, continuous vital checkups, and routine doctor visits.',
                color: 'bg-red-50 text-red-600'
              },
              {
                icon: Pill,
                title: 'Medication Administration',
                desc: 'Strictly timed and supervised medicine dispensation with digital logs accessible to family members.',
                color: 'bg-blue-50 text-brand-700'
              },
              {
                icon: Coffee,
                title: 'Nutritious & Tailored Meals',
                desc: 'Fresh, dietary-appropriate Bengali and international cuisines prepared under nutritionist supervision.',
                color: 'bg-amber-50 text-amber-700'
              },
              {
                icon: Building,
                title: 'Assisted Living & Personal Care',
                desc: 'Respectful support with bathing, dressing, mobility, grooming, and personalized room assistance.',
                color: 'bg-emerald-50 text-emerald-700'
              },
              {
                icon: Heart,
                title: 'Dementia & Memory Care',
                desc: 'Specialized cognitive engagement, calm memory therapies, and secure living zones for Alzheimer’s patients.',
                color: 'bg-purple-50 text-purple-700'
              },
              {
                icon: Users,
                title: 'Social & Recreational Programs',
                desc: 'Daily light yoga, prayer gatherings, library, gardening, and festival celebrations to prevent loneliness.',
                color: 'bg-sky-50 text-sky-700'
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-7 border border-gray-100 hover:border-brand-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${srv.color} flex items-center justify-center mb-5 font-bold`}>
                  <srv.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{srv.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Families Choose Us (Transparency & Security) */}
      <section id="why-us" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
                Why Aastha Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                Complete Transparency, Safety, and Compassionate Care
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                We understand how hard it is to ensure high-quality care for elderly parents while balancing busy lives. We provide complete operational visibility so you never have to worry.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: '100% Background-Checked Staff',
                    desc: 'Every nurse, caregiver, and physician undergoes rigorous background checks and specialized geriatric training.'
                  },
                  {
                    title: 'Transparent Financial & Medical Records',
                    desc: 'Review itemized bills, medicine purchases, and doctor reports in your online portal anytime.'
                  },
                  {
                    title: 'Home-Like Dignified Environment',
                    desc: 'Modern air-conditioned rooms, emergency pull cords, handicap-accessible baths, and lush green lawns.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={dashboardImg}
                  alt="Aastha Care facility and dashboard"
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6 bg-brand-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-base">Book a Guided Tour Today</h4>
                    <p className="text-xs text-brand-200">Meet our doctors, nurses, and experience the facility.</p>
                  </div>
                  <a
                    href="#book-visit"
                    className="px-5 py-2.5 bg-white text-brand-900 hover:bg-brand-50 rounded-xl text-sm font-bold shadow transition-colors shrink-0"
                  >
                    Schedule Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Family Stories & Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
              Words from Grateful Families
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              Real experiences from sons, daughters, and guardians who entrusted us with their precious elders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Living abroad in Canada, it was heartbreaking to worry about my father’s daily medicines. Aastha Care’s family portal lets me see his vitals and food intake every morning. Priceless relief!',
                author: 'Tanvir Ahmed',
                role: 'Son (Resident: Mr. M. Ahmed)',
                location: 'Gulshan, Dhaka'
              },
              {
                quote: 'My mother has advanced Alzheimer’s and required 24/7 attentive care that we couldn’t safely manage at home. The staff at Aastha Care treats her with such genuine affection and patience.',
                author: 'Dr. Nusrat Jahan',
                role: 'Daughter (Resident: Begum Farida)',
                location: 'Dhanmondi, Dhaka'
              },
              {
                quote: 'The emergency response is phenomenal. When my grandfather felt dizzy at midnight, on-site nurses stabilized him within minutes. The best elder care facility in Dhaka.',
                author: 'Imtiaz Hossain',
                role: 'Grandson',
                location: 'Uttara, Dhaka'
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                  <p className="text-xs text-brand-700 font-medium">{t.role}</p>
                  <p className="text-[11px] text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Book a Visit Form Section */}
      <section id="book-visit" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold text-brand-200 bg-white/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Facility Tour & Consultation
                </span>
                <h2 className="text-3xl font-black mt-3">Book an In-Person or Virtual Visit</h2>
                <p className="text-brand-100 text-sm mt-2">
                  Take a walking tour of our premises, inspect our medical rooms, and consult with our chief medical officer.
                </p>
              </div>

              {bookingSubmitted ? (
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center text-white animate-fade-in">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-xl font-bold">Visit Request Received!</h4>
                  <p className="text-sm text-brand-100 mt-1">Our coordinator will call you within 2 hours to confirm your scheduled time.</p>
                </div>
              ) : (
                <form onSubmit={handleVisitSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-100 uppercase tracking-wide mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samiun Alim"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-100 uppercase tracking-wide mb-1">Contact Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 17..."
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-100 uppercase tracking-wide mb-1">Preferred Visit Date</label>
                    <input
                      type="date"
                      required
                      value={visitForm.date}
                      onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-100 uppercase tracking-wide mb-1">Special Notes / Care Needs</label>
                    <input
                      type="text"
                      placeholder="e.g. Dementia care, diabetic meal needs"
                      value={visitForm.notes}
                      onChange={(e) => setVisitForm({ ...visitForm, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-white hover:bg-brand-50 text-brand-900 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      Confirm Visit Request <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-gray-900 mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-brand-700 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-200 shrink-0 text-gray-400 ${openFaq === idx ? 'rotate-180 text-brand-700' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-600 border-t border-gray-50 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final Call To Action Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-brand-900 to-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Give Your Loved Ones the Care & Respect They Deserve
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Join hundreds of families across Bangladesh who trust Aastha Care for safe, loving, and medical-grade senior living.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/register"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Create Free Account <ArrowRight size={16} />
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all"
            >
              Sign In to Portal
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Modern Footer */}
      <footer className="bg-gray-950 text-gray-400 text-sm pt-16 pb-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-700 text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-700/20">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-white">Aastha Care</span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Bangladesh’s trusted modern elder care portal and residence. Providing dignified lifestyle support, clinical monitoring, and peace of mind for families.
            </p>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📍 House 42, Road 11, Dhanmondi, Dhaka, Bangladesh</p>
              <p>📞 Emergency Helpline: +880 1700-000000</p>
              <p>✉️ info@aasthacare.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portals" className="hover:text-white transition-colors">Portals</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#book-visit" className="hover:text-white transition-colors">Book a Visit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Portals</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/login" className="hover:text-white transition-colors">Family Member Login</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Resident Login</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Create Family Account</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Create Resident Account</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Emergency & Care</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-red-400 font-semibold">24/7 Hotline: +880 1700-000000</li>
              <li>Doctor Consultation</li>
              <li>Ambulance Readiness</li>
              <li>Medication Supervision</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aastha Care Management System. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400">Dhaka, Bangladesh</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
