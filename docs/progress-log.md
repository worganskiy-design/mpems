## Part 0 and 1 - Setup and page structure
- Done: created the GitHub repository "mpems", opened it in GitHub Codespaces, created the folders (css, js, docs) and the project files. Wrote the HTML structure in index.html (title bar, Add an Expense form, My Expenses list).
- Tested: previewed index.html in the browser and saw the form with labels, fields and the Add Expense button.
- Challenge: two commands were pasted together and created a stray folder name, and the js folder was missing when I listed the files with ls.
- Solution: ran the commands one at a time and used mkdir -p js and touch to create the missing folder and files. Confirmed with ls that all files were present.
- RAPID link: Responsibility (#3) - first commit pushed to GitHub. Inclusivity - every form field has a label linked to its input.

## Part 2

- Added CSS.
- Challenge: Could not find the preview. Fixed it by starting the server with Python and opening port 8000.

Part 3 - added the Model (localStorage). Challenge: opened the VS Code Debug Console instead of the browser Console; addExpense was not defined until I refreshed with Ctrl+Shift+R.

## Part 4 - View and Controller 
- Done: added view.js (shows the list, total and messages) and controller.js (connects the Add and Delete buttons to the Model). Added a style for the Delete button.
- Tested: added expenses, checked the total, deleted one, refreshed the page and the data stayed.
- Challenge: none

## Part 5 - Budgets and alerts ([date])
- Done: added budget functions to model.js (loadBudgets, setBudget, getCategoryTotal, checkBudget), a Set a Budget card in index.html, display functions in view.js, the Save Budget button in controller.js, and styles for the alert messages.
- Tested: checked the Model in the browser console first, then saved a Food budget of 500, added Food expenses and saw the "Careful" message near 80% and the "Warning" message at the limit. Budgets and expenses were still there after refreshing the page.
- Challenge: none
- RAPID link: Responsibility - budget warnings help users control spending. Integrity - budget data stays on the user's device.