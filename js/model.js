// model.js - the Model: saves and loads expenses on the phone

var STORAGE_KEY = "mpems_expenses";

function loadExpenses() {
	var saved = localStorage.getItem(STORAGE_KEY);
	if (saved === null) {
		return [];
	}
	return JSON.parse(saved);
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