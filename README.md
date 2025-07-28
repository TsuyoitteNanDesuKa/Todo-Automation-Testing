\# Todo List Application - Automation Testing Project



This project is a simple "To-Do List" application consisting of a frontend developed with React and a backend API developed with Node.js/Express. The project includes comprehensive automation tests for both UI and API layers.



---



\## ✨ Core Features



\- User login functionality

\- Add new todo items

\- Edit existing todos

\- Delete todo items

\- Real-time UI updates for all actions



---



\## 🛠️ Technologies Used



\- \*\*Frontend:\*\* React

\- \*\*Backend:\*\* Node.js, Express.js

\- \*\*Database:\*\* \[Your database choice, e.g., MongoDB, PostgreSQL or "In-Memory DB"]

\- \*\*UI Testing:\*\* Cypress

\- \*\*API Testing:\*\* Postman, Newman



---



\## 📂 Repository Structure



```

.

├── backend/          # Node.js Express API source code

├── frontend/         # React application source code

│   └── cypress/      # Cypress UI tests

├── api-tests/        # Postman collection and environment files

├── README.md         # Project documentation

└── TEST\_PLAN.md      # Detailed test plan documentation

```



---



\## 🚀 Running the Project



\### Requirements

\- Node.js (v18+)

\- Git

\- Newman (`npm install -g newman`)



\### Installation and Running Steps



1\. \*\*Clone the repository:\*\*

&nbsp;   open terminal

&nbsp;   git clone https://github.com/TsuyoitteNanDesuKa/Todo-Automation-Testing.git

&nbsp;   cd Todo-Automation-Testing

&nbsp;   ```



2\. \*\*Install and start the backend:\*\*

&nbsp;   open terminal

&nbsp;   cd backend

&nbsp;   npm install

&nbsp;   npm start

&nbsp;   ```

&nbsp;   \*The backend will start running at `http://localhost:5000` by default.\*



3\. \*\*Install and start the frontend:\*\*

&nbsp;   (Open a new terminal)

&nbsp;   ```bash

&nbsp;   cd frontend

&nbsp;   npm install

&nbsp;   npm start

&nbsp;   ```

&nbsp;   \*The React application will open at `http://localhost:3000`.\*



---



\## 🧪 Running Tests



Ensure both backend and frontend servers are running.



\### 1. UI Tests (Cypress)



While in the frontend directory, run:



```bash

\# To open tests in interactive Cypress interface:

npx cypress open



\# To run tests in command line (headless mode):

npx cypress run

```



\### 2. API Tests (Postman/Newman)



From the project root directory, run:



```bash

newman run "api-tests\Todo App API.postman_collection.json" -e "api-tests\todo API tests.postman_environment.json"

```



---



\## 📄 Test Documentation



For detailed information about the testing strategy, coverage, and tools used, please review the following document:



➡️ TEST_PLAN.md

