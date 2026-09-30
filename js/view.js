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