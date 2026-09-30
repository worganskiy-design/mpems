// controller.js - the Controller: connects taps to the Model and View

function refreshScreen() {
  showExpenses();
  showTotal();
}

function handleAdd() {
  var form = readForm();
  if (form.description === "" || form.amount === "" || form.date === "") {
    showMessage("Please fill in all the fields.");
    return;
  }
  addExpense(form.description, form.amount, form.category, form.date);
  showMessage("");
  clearForm();
  refreshScreen();
}

function handleDelete(id) {
  deleteExpense(id);
  refreshScreen();
}

document.getElementById("add-btn").onclick = handleAdd;
refreshScreen();