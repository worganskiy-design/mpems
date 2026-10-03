// language.js - English and Kiswahili text for MPEMS

var SW = {
  "Manual Personal Expense Management System": "Mfumo wa Kusimamia Matumizi ya Kibinafsi kwa Mkono",
  "Add an Expense": "Ongeza Matumizi",
  "What did you spend on?": "Ulitumia pesa kwa nini?",
  "Amount (KES)": "Kiasi (KES)",
  "Category": "Aina",
  "Date": "Tarehe",
  "Add Expense": "Weka Matumizi",
  "Set a Budget": "Weka Bajeti",
  "Limit (KES)": "Kikomo (KES)",
  "Save Budget": "Hifadhi Bajeti",
  "My Expenses": "Matumizi Yangu",
  "Total spent: KES": "Jumla iliyotumika: KES",
  "Error Log": "Kumbukumbu za Makosa",
  "Problems recorded by the app on this device.": "Matatizo yaliyorekodiwa na programu kwenye kifaa hiki.",
  "Show Error Log": "Onyesha Kumbukumbu za Makosa",
  "Clear Error Log": "Futa Kumbukumbu za Makosa",
  "Delete": "Futa",
  "Food": "Chakula",
  "Transport": "Usafiri",
  "Entertainment": "Burudani",
  "Other": "Nyingine",
  "Please enter what you spent on.": "Tafadhali andika ulitumia pesa kwa nini.",
  "Please enter the amount.": "Tafadhali andika kiasi.",
  "The amount must be more than 0.": "Kiasi lazima kiwe zaidi ya 0.",
  "Please choose the date.": "Tafadhali chagua tarehe.",
  "Please enter a budget amount greater than 0.": "Tafadhali weka kiasi cha bajeti kinachozidi 0."
};

var currentLang = localStorage.getItem("mpems_lang") || "en";

function tr(text) {
  if (currentLang === "sw" && SW[text] !== undefined) {
    return SW[text];
  }
  return text;
}

function applyLanguage() {
  var items = document.querySelectorAll("h2, label, button, option, header p, .tr");
  for (var i = 0; i < items.length; i++) {
    var el = items[i];
    if (el.getAttribute("data-en") === null) {
      el.setAttribute("data-en", el.textContent);
    }
    el.textContent = tr(el.getAttribute("data-en"));
  }
  document.documentElement.lang = currentLang;
}

function setLanguage(code) {
  currentLang = code;
  localStorage.setItem("mpems_lang", code);
  applyLanguage();
}