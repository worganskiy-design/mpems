// controller.js - the Controller: connects taps to the Model and View

function refreshScreen() {
  showExpenses();
  showTotal();
  showBudgets();
}

function handleAdd() {
  var form = readForm();
  if (form.description === "" || form.amount === "" || form.date === "") {
    showMessage("Please fill in all the fields.");
    return;
  }
  addExpense(form.description, form.amount, form.category, form.date);
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
    return;
  }
  setBudget(form.category, form.limit);
  showBudgetMessage("");
  document.getElementById("budget-limit").value = "";
  refreshScreen();
}

document.getElementById("add-btn").onclick = handleAdd;
document.getElementById("budget-btn").onclick = handleSetBudget;
refreshScreen();