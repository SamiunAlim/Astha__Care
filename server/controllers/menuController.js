import Menu from '../models/Menu.js';

export const AUTHENTIC_BANGLA_MENU = [
  // --- সকালের নাস্তা (Breakfast) ---
  {
    name: "লাল আটার নরম রুটি, মিক্সড সবজি ও দেশি ডিম সিদ্ধ",
    bengaliMeal: "সকালের নাস্তা",
    day: "Everyday",
    meal: "breakfast",
    time: "সকাল ০৮:০০ - ০৯:০০",
    dietaryType: "ডায়াবেটিক ফ্রেন্ডলি ও হাই ফাইবার",
    calories: 310,
    protein: "14g",
    carbs: "45g",
    fat: "6g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    description: "লাল আটার নরম হাতে বেলা ২টি রুটি, তেল ছাড়া পেঁপে-মিষ্টি কুমড়া ও পটলের সবজি লাবড়া এবং ১টি সিদ্ধ দেশি ডিম।",
    items: ["লাল আটার রুটি (২টি)", "পেঁপে-পটল ভাজি", "সিদ্ধ ডিম", "শসা কুচি"]
  },
  {
    name: "লাল চালের পাতলা নরম জাউ ভাত ও কাঁচা পেঁপে ভাজি",
    bengaliMeal: "সকালের নাস্তা",
    day: "Everyday",
    meal: "breakfast",
    time: "সকাল ০৮:৩০ - ০৯:৩০",
    dietaryType: "লো সোডিয়াম ও সহজপাচ্য",
    calories: 260,
    protein: "9g",
    carbs: "48g",
    fat: "3g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    description: "সহজে হজমযোগ্য লাল চালের গরম নরম জাউ ভাত, হালকা জিরে ফোড়ন দেওয়া কাঁচা পেঁপে ভাজি ও লেবুর টুকরো।",
    items: ["লাল চালের জাউ ভাত", "কাঁচা পেঁপে ভাজি", "লেবুর টুকরো", "ধনেপাতা"]
  },
  {
    name: "চিনি ছাড়া সুজির নরম হালুয়া ও ডিম পোচ",
    bengaliMeal: "সকালের নাস্তা",
    day: "Everyday",
    meal: "breakfast",
    time: "সকাল ০৯:০০ - ০৯:৪৫",
    dietaryType: "হাই প্রোটিন ও নরম",
    calories: 290,
    protein: "12g",
    carbs: "38g",
    fat: "8g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    description: "ঘিয়ে ভাজা সুজির নরম হালুয়া (চিনি ছাড়া খাঁটি বাদাম দিয়ে), নরম পোচ করা ডিম ও পাকা কলা।",
    items: ["সুজির নরম হালুয়া", "ডিম পোচ", "পাকা কলা ১টি"]
  },

  // --- দুপুরের খাবার (Lunch) ---
  {
    name: "তাজা রুই মাছের পাতলা ঝোল, লাউ শাক ও নরম ভাত",
    bengaliMeal: "দুপুরের খাবার",
    day: "Everyday",
    meal: "lunch",
    time: "দুপুর ০১:০০ - ০২:০০",
    dietaryType: "হার্ট ফ্রেন্ডলি ও ওমেগা-৩",
    calories: 480,
    protein: "34g",
    carbs: "58g",
    fat: "9g",
    status: "রান্না হচ্ছে",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    description: "টাটকা রুই মাছের পেটি দিয়ে আলু ও ফুলকপির হালকা জিরে বাটা ঝোল, ভাপে সেদ্ধ লাউ শাক এবং গরম নরম ভাত।",
    items: ["মিনিকেট নরম ভাত", "রুই মাছের পাতলা ঝোল", "লাউ শাক ভাজি", "টমেটো সালাদ"]
  },
  {
    name: "সোনার মুগ ডালের পাতলা খিচুড়ি ও ডিম ভুনা",
    bengaliMeal: "দুপুরের খাবার",
    day: "Everyday",
    meal: "lunch",
    time: "দুপুর ০১:০০ - ০২:০০",
    dietaryType: "নরম খাদ্য (Soft Diet)",
    calories: 440,
    protein: "21g",
    carbs: "62g",
    fat: "11g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    description: "ভাজা মুগ ডাল ও গাজর-বরবটি দিয়ে রান্না করা নরম খিচুড়ি, সামান্য গাওয়া ঘি ও সেদ্ধ ডিমের হালকা ভুনা।",
    items: ["মুগ ডাল খিচুড়ি", "ডিম ভুনা", "গাজর ও বরবটি", "গাওয়া ঘি"]
  },
  {
    name: "দেশি মুরগি ও কাঁচা পেঁপের স্বাস্থ্যকর হালকা ঝোল",
    bengaliMeal: "দুপুরের খাবার",
    day: "Everyday",
    meal: "lunch",
    time: "দুপুর ০১:১৫ - ০২:১৫",
    dietaryType: "হাই প্রোটিন ও ডায়াবেটিক",
    calories: 490,
    protein: "38g",
    carbs: "48g",
    fat: "10g",
    status: "প্রস্তুত",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    description: "চামড়া ছাড়া দেশি মুরগির মাংস, কাঁচা পেঁপে ও গোলমরিচ দিয়ে দুর্বলতানাশক হালকা ঝোল ও লাল চালের ভাত।",
    items: ["লাল চালের ভাত", "দেশি মুরগির পেঁপে ঝোল", "লেবু ও শসা স্লাইস"]
  },
  {
    name: "কাঁচকলা দিয়ে পাবদা মাছের ঝোল ও ঘন মসুর ডাল",
    bengaliMeal: "দুপুরের খাবার",
    day: "Everyday",
    meal: "lunch",
    time: "দুপুর ০১:৩০ - ০২:৩০",
    dietaryType: "সহজপাচ্য ও পেটের জন্য উপকারি",
    calories: 430,
    protein: "28g",
    carbs: "50g",
    fat: "8g",
    status: "তৈরি আছে",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    description: "তাজা পাবদা মাছ ও কাঁচকলার আদা-জিরে বাটা হালকা ঝোল, রসুন ফোড়ন মসুর ডাল ও নরম সাদা ভাত।",
    items: ["পাবদা মাছ", "কাঁচকলার হালকা ঝোল", "ঘন মসুর ডাল", "সাদা ভাত"]
  },

  // --- বিকেলের নাস্তা (Snacks) ---
  {
    name: "হাতে ভাজা মুড়ি, শসা-টমেটো ও আদা-লেবু লাল চা",
    bengaliMeal: "বিকেলের নাস্তা",
    day: "Everyday",
    meal: "snack",
    time: "বিকেল ০৪:৩০ - ০৫:৩০",
    dietaryType: "লো ক্যালোরি ও গ্যাস রিলিফ",
    calories: 150,
    protein: "5g",
    carbs: "28g",
    fat: "2g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    description: "লবণ ছাড়া দেশি হাতে ভাজা মুড়ি, শসা-টমেটো কুচি ও খাঁটি আদা-লবঙ্গ দেওয়া চিনি ছাড়া গরম লাল চা।",
    items: ["হাতে ভাজা মুড়ি", "শসা কুচি", "টমেটো", "আদা-লেবু চিনি ছাড়া লাল চা"]
  },
  {
    name: "ঘরে পাতা মিষ্টিহীন টক দই ও মিষ্টি পাকা পেঁপের কিউব",
    bengaliMeal: "বিকেলের নাস্তা",
    day: "Everyday",
    meal: "snack",
    time: "বিকেল ০৫:০০ - ০৫:৪৫",
    dietaryType: "প্রোবায়োটিক ও হজম সহায়ক",
    calories: 130,
    protein: "8g",
    carbs: "20g",
    fat: "2g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    description: "আস্থা কেয়ার কিচেনে তৈরি মিষ্টিহীন খাঁটি টক দই, পাকা মিষ্টি পেঁপের টুকরো ও ডালিম দানা।",
    items: ["খাঁটি মিষ্টিহীন টক দই", "পাকা পেঁপে", "ডালিম দানা"]
  },
  {
    name: "সিদ্ধ দেশি ছোলা-বুট মাখা ও তাজা ডাবের পানি",
    bengaliMeal: "বিকেলের নাস্তা",
    day: "Everyday",
    meal: "snack",
    time: "বিকেল ০৫:১৫ - ০৬:০০",
    dietaryType: "মিনারেলস ও ইলেক্ট্রোলাইট",
    calories: 170,
    protein: "7g",
    carbs: "26g",
    fat: "3g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    description: "সিদ্ধ নরম ছোলা-বুট, সামান্য আদা ও ধনেপাতা কুচি, সাথে ১ গ্লাস খাঁটি তাজা ডাবের পানি।",
    items: ["সিদ্ধ ছোলা-বুট", "আদা কুচি", "লেবুর রস", "ডাবের পানি ১ গ্লাস"]
  },

  // --- রাতের খাবার (Dinner) ---
  {
    name: "শুপাচ্য কাঁচকলা ও আলু দিয়ে শিং মাছের জিরে ঝোল",
    bengaliMeal: "রাতের খাবার",
    day: "Everyday",
    meal: "dinner",
    time: "রাত ০৭:৩০ - ০৮:৩০",
    dietaryType: "রক্তবর্ধক ও প্রেসার কন্ট্রোল",
    calories: 350,
    protein: "28g",
    carbs: "44g",
    fat: "6g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    description: "বয়োজ্যেষ্ঠদের জন্য বিশেষভাবে প্রস্তুত শিং মাছ ও কাঁচকলার পুষ্টিকর ঝোল, নরম ভাত ও ধনেপাতা কুচি।",
    items: ["শিং মাছ", "কাঁচকলা", "জিরার হালকা ঝোল", "নরম ভাত"]
  },
  {
    name: "নরম আটার পাতলা রুটি, ঝিঙে-পটল ভাজি ও রসুন ফোড়ন ডাল",
    bengaliMeal: "রাতের খাবার",
    day: "Everyday",
    meal: "dinner",
    time: "রাত ০৮:০০ - ০৯:০০",
    dietaryType: "হালকা ও সহজে হজমযোগ্য",
    calories: 320,
    protein: "13g",
    carbs: "52g",
    fat: "5g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
    description: "হাতে গড়া পাতলা নরম ২টি রুটি, কম তেলে ঝিঙে-পটল ভাজি এবং রসুন ফোড়ন দেওয়া মসুর ডাল।",
    items: ["নরম রুটি (২টি)", "ঝিঙে-পটল ভাজি", "রসুন ফোড়ন মসুর ডাল", "কুসুম গরম পানি"]
  },
  {
    name: "পেঁপে ও গাজরের ভেজিটেবল ক্লিয়ার সুপ সাথে ডিমের সাদা অংশ",
    bengaliMeal: "রাতের খাবার",
    day: "Everyday",
    meal: "dinner",
    time: "রাত ০৮:১৫ - ০৯:০০",
    dietaryType: "লো ক্যালোরি নাইট ডায়েট",
    calories: 210,
    protein: "14g",
    carbs: "24g",
    fat: "4g",
    status: "পরিকল্পিত",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    description: "কাঁচা পেঁপে, গাজর ও গোলমরিচ দিয়ে ফুটানো গরম ক্লিয়ার সুপ এবং ২টি সিদ্ধ ডিমের সাদা অংশ।",
    items: ["কাঁচা পেঁপে", "গাজর সুপ", "গোলমরিচ", "সিদ্ধ ডিমের সাদা অংশ (২টি)"]
  }
];

export const getMenus = async (req, res) => {
  try {
    const filter = req.query.day ? { day: req.query.day } : {};
    let menus = await Menu.find(filter).sort({ createdAt: 1 });

    // If database has no items or has outdated dummy items (without name or image or only lunch)
    const needsReseed = !menus.length || menus.every(m => !m.image || !m.name || m.meal === 'lunch');
    if (needsReseed) {
      await Menu.deleteMany({});
      menus = await Menu.insertMany(AUTHENTIC_BANGLA_MENU);
    }

    res.json(menus);
  } catch (error) {
    // If DB is offline, send the in-memory authentic list
    res.json(AUTHENTIC_BANGLA_MENU);
  }
};

export const createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
  } catch (error) { 
    res.status(400).json({ message: error.message }); 
  }
};
