// controller.js - the Controller: connects taps to the Model and View

function refreshScreen() {
  showExpenses();
  showTotal();
  showBudgets();
}

function validateExpense(form) {
  if (form.description.trim() === "") {
    return "Please enter what you spent on.";
  }
  if (form.amount === "") {
    return "Please enter the amount.";
  }
  if (Number(form.amount) <= 0) {
    return "The amount must be more than 0.";
  }
  if (form.date === "") {
    return "Please choose the date.";
  }
  return "";
}

function handleAdd() {
  var form = readForm();
  var problem = validateExpense(form);
  if (problem !== "") {
    showMessage(problem);
    logError("Add expense failed: " + problem);
    return;
  }
  addExpense(form.description.trim(), form.amount, form.category, form.date);
  showMessage("");
  showAlert(checkBudget(form.category));
  clearForm();
  refreshScreen();
}

function handleDelete(id) {
  deleteExpense(id);
  refreshScreen();
}

function handleSetBudget() {
  var form = readBudgetForm();
  if (form.limit === "" || Number(form.limit) <= 0) {
    showBudgetMessage("Please enter a budget amount greater than 0.");
    logError("Set budget failed: amount was empty or not above 0.");
    return;
  }
  setBudget(form.category, form.limit);
  showBudgetMessage("");
  document.getElementById("budget-limit").value = "";
  refreshScreen();
}

function handleShowLog() {
  showErrorLog();
}

function handleClearLog() {
  clearErrorLog();
  showErrorLog();
}

document.getElementById("add-btn").onclick = handleAdd;
document.getElementById("budget-btn").onclick = handleSetBudget;
document.getElementById("log-btn").onclick = handleShowLog;
document.getElementById("clear-log-btn").onclick = handleClearLog;
refreshScreen();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}