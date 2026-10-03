// model.js - the Model: saves and loads expenses on the phone

var STORAGE_KEY = "mpems_expenses";

function loadExpenses() {
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved === null) {
    return [];
  }
  try {
    return JSON.parse(saved);
  } catch (error) {
    logError("Saved expenses could not be read: " + error.message);
    return [];
  }
}

function saveExpenses(expenses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

function addExpense(description, amount, category, date) {
  var expenses = loadExpenses();
  var newExpense = {
    id: Date.now(),
    description: description,
    amount: Number(amount),
    category: category,
    date: date
  };
  expenses.push(newExpense);
  saveExpenses(expenses);
  return newExpense;
}

function deleteExpense(id) {
  var expenses = loadExpenses();
  var remaining = [];
  for (var i = 0; i < expenses.length; i++) {
    if (expenses[i].id !== id) {
      remaining.push(expenses[i]);
    }
  }
  saveExpenses(remaining);
}

function getTotal() {
  var expenses = loadExpenses();
  var total = 0;
  for (var i = 0; i < expenses.length; i++) {
    total = total + expenses[i].amount;
  }
  return total;
}

var BUDGET_KEY = "mpems_budgets";

function loadBudgets() {
  var saved = localStorage.getItem(BUDGET_KEY);
  if (saved === null) {
    return {};
  }
  return JSON.parse(saved);
}

function setBudget(category, limit) {
  var budgets = loadBudgets();
  budgets[category] = Number(limit);
  localStorage.setItem(BUDGET_KEY, JSON.stringify(budgets));
}

function getCategoryTotal(category) {
  var expenses = loadExpenses();
  var total = 0;
  for (var i = 0; i < expenses.length; i++) {
    if (expenses[i].category === category) {
      total = total + expenses[i].amount;
    }
  }
  return total;
}

function checkBudget(category) {
  var budgets = loadBudgets();
  var limit = budgets[category];
  if (limit === undefined) {
    return "";
  }
  var spent = getCategoryTotal(category);
  if (spent >= limit) {
    return "Warning: you have reached or passed your " + category +
      " budget of KES " + limit + ".";
  }
  if (spent >= limit * 0.8) {
    return "Careful: you have used " + Math.round(spent / limit * 100) +
      "% of your " + category + " budget.";
  }
  return "";
}

var LOG_KEY = "mpems_errorlog";

function loadErrorLog() {
  var saved = localStorage.getItem(LOG_KEY);
  if (saved === null) {
    return [];
  }
  return JSON.parse(saved);
}

function logError(message) {
  var log = loadErrorLog();
  log.push({ time: new Date().toLocaleString(), message: message });
  if (log.length > 50) {
    log.shift();
  }
  localStorage.setItem(LOG_KEY, JSON.stringify(log));
}

function clearErrorLog() {
  localStorage.removeItem(LOG_KEY);
}