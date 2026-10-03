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

## Part 5 - Budgets and alerts (02/10/2026)
- Done: added budget functions to model.js (loadBudgets, setBudget, getCategoryTotal, checkBudget), a Set a Budget card in index.html, display functions in view.js, the Save Budget button in controller.js, and styles for the alert messages.
- Tested: checked the Model in the browser console first, then saved a Food budget of 500, added Food expenses and saw the "Careful" message near 80% and the "Warning" message at the limit. Budgets and expenses were still there after refreshing the page.
- Challenge: none
- RAPID link: Responsibility - budget warnings help users control spending. Integrity - budget data stays on the user's device.

## Part 6 - Clear error messages and error log (02/10/2026)
- Done: added logError, loadErrorLog and clearErrorLog to model.js, made loadExpenses safe with try and catch, added the Error Log card to index.html, added showErrorLog to view.js, and added validateExpense to controller.js so each problem has its own clear message.
- Tested: submitted the form empty, with no amount, with an amount of 0 and with no date. Each showed a specific message and was recorded in the error log with the time. Show and Clear Error Log buttons worked.
- Challenge: the console showed a 404 and an "Unsafe attempt to load URL" message, and I was unsure which part of loadExpenses to replace. 
- Solution: the 404 was only the missing tab icon and the other message came from the Codespaces sign-in step, so neither was a code error. I replaced only the loadExpenses function and kept the rest of model.js. 
- RAPID link: Responsibility (#5) - clear error messages. Integrity (#17) - errors are logged, not hidden.

## Part 7 - Offline mode and installation (04/10/2026)
- Done: added manifest.json, two icons made with make_icons.py, a service worker (service-worker.js) that stores the app files, and the registration code in controller.js.
- Tested: the Manifest panel showed the name and icons, the service worker was activated and running, and the page still loaded with Offline ticked. Chrome offered an Install button.
- Challenge: none
- RAPID link: Inclusivity (#24) - offline mode for users with poor connectivity. Responsibility - lightweight files and no server.

## Part 8 - Language switch and accessibility (04/10/2026)
- Done: added language.js with English and Kiswahili text, a language selector in the header, translated error messages, and added language.js to the offline file list (cache version v2).
- Tested: choosing Kiswahili changed headings, labels, buttons and categories, the choice stayed after refresh, and language.js appeared in Cache storage. Keyboard Tab test and 200% zoom test: [result]. Lighthouse accessibility score: [score].
- Challenge: I pasted a line of code into the terminal instead of the file.
- Solution: I opened service-worker.js in the editor and added the line there. Rule learned: bash blocks go in the terminal, code blocks go in files.
- Limitations: budget alerts and the expense list lines stay in English, and the error log is English only. Translations need review by a Swahili speaker.
- RAPID link: Inclusivity (#21, #22, #23).
