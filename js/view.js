// view.js - the View: shows things on the screen

function makeDeleteButton(id, name) {
	var btn = document.createElement("button");
	btn.textContent = "Delete";
	btn.setAttribute("aria-label", "Delete " + name);
	btn.onclick = function () {
		handleDelete(id);
	};
	return btn;
}

function showExpenses() {
	var list = document.getElementById("expense-list");
	list.innerHTML = "";
	var expenses = loadExpenses();
	for (var i = 0; i < expenses.length; i++) {
		var e = expenses[i];
		var item = document.createElement("li");
		item.textContent = e.date + " - " + e.description +
			" (" + e.category + "): KES " + e.amount;
		item.appendChild(makeDeleteButton(e.id, e.description));
		list.appendChild(item);
	}
}

function showTotal() {
	document.getElementById("total").textContent = getTotal();
}

function showMessage(text) {
	document.getElementById("message").textContent = text;
}

function readForm() {
	return {
		description: document.getElementById("description").value,
		amount: document.getElementById("amount").value,
		category: document.getElementById("category").value,
		date: document.getElementById("date").value
	};
}

function clearForm() {
	document.getElementById("description").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("category").value = "";
	document.getElementById("date").value = "";
}

var CATEGORIES = ["Food", "Transport", "Entertainment", "Other"];

function showBudgets() {
  var list = document.getElementById("budget-list");
  list.innerHTML = "";
  var budgets = loadBudgets();
  for (var i = 0; i < CATEGORIES.length; i++) {
    var c = CATEGORIES[i];
    if (budgets[c] !== undefined) {
      var item = document.createElement("li");
      item.textContent = c + ": KES " + getCategoryTotal(c) +
        " spent of KES " + budgets[c];
      list.appendChild(item);
    }
  }
}

function showAlert(text) {
  document.getElementById("alert").textContent = text;
}

function showBudgetMessage(text) {
  document.getElementById("budget-message").textContent = text;
}

function readBudgetForm() {
  return {
    category: document.getElementById("budget-category").value,
    limit: document.getElementById("budget-limit").value
  };
}

function showErrorLog() {
  var list = document.getElementById("log-list");
  list.innerHTML = "";
  var log = loadErrorLog();
  if (log.length === 0) {
    var empty = document.createElement("li");
    empty.textContent = "No errors recorded.";
    list.appendChild(empty);
    return;
  }
  for (var i = 0; i < log.length; i++) {
    var item = document.createElement("li");
    item.textContent = log[i].time + " - " + log[i].message;
    list.appendChild(item);
  }
}