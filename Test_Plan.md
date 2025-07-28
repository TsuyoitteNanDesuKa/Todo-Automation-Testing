Project Name: Todo List Application

Date: 28.07.2025

Author: Enes Furkan Aysel



1\. Document Overview

This document outlines the test strategy, scope, tools, and execution procedures for the Todo List Application.

The application consists of a React frontend and a Node.js backend API. This plan covers both functional User Interface (UI) tests and backend API tests.



2\. Test Strategy and Scope

This section defines what will be tested and what is considered out of scope for this testing phase.



2.1. In-Scope Items

•	Functional UI Tests (React App):

o	User Login: Scenarios for logging in with both valid and invalid credentials.

o	Create New Item: Verifying the creation of a new todo item.

o	Edit Existing Item: Updating the content of an existing todo item.

o	Delete Item: Removing a todo item from the system.

o	Data Assertion: Asserting that the UI correctly reflects the data state after each create, update, or delete action.





•	API Tests (Node.js Backend):

o	POST /login: Positive and negative tests for the user authentication endpoint.

o	GET /items: Tests for the endpoint that retrieves all todo items.

o	POST /items: Test for the endpoint that creates a new todo item.

o	PUT /items/:id: Tests for the endpoint that updates a specific todo item.

o	DELETE /items/:id: Tests for the endpoint that deletes a specific todo item.




2.2. Out-of-Scope Items

The following test types are not covered in this plan:

•	Performance and Load Testing.

•	Security Vulnerability Testing.

•	Usability Testing.

•	Comprehensive Cross-Browser and Cross-Platform Compatibility Testing.





3\. Tools \& Rationale

The tools selected for test automation and the reasons for their selection are detailed below.



Test Type	Selected Tool	Rationale

Functional UI Automation	Cypress	Chosen for its simple setup, fast and reliable test execution, and unique features like "time-travel" debugging. Its ability to integrate seamlessly with a React frontend and its excellent documentation make it an ideal choice for modern web application testing.

API Test Automation	Postman 	Postman provides a user-friendly interface for creating, organizing, and manually verifying API requests. Test collections can be easily exported and run.




4\. Executing the Tests

Follow the steps below to run the automated tests on a local machine.

4.1. Prerequisites

•	Node.js (v18 or higher)

•	npm or yarn

•	Git

4.2. Setup

1\.	Clone the project repository:

Generated bash

&nbsp;     git clone \[Your Project's Git Repository URL]

cd \[project-folder]

&nbsp;   

2\.	Install backend dependencies:

&nbsp;     cd backend

npm install

&nbsp;   

3\.	Install frontend dependencies:

&nbsp;     cd ../frontend

npm install

&nbsp;   

4.3. Test Commands

•	To run UI Tests (from the /frontend directory):

o	For interactive mode:

Generated bash

&nbsp;     npx cypress open

&nbsp;   

&nbsp;   To run API Tests (from the root directory):

o	First, export your Postman collection and environment file.

o	Run the collection. 

&nbsp;   

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



5\. Assumptions and Limitations

5.1. Assumptions

•	The test environment (local machine or CI server) has all prerequisites (Node.js, npm) installed.

•	The backend and frontend application servers are running before the tests are initiated.

5.2. Limitations

•	UI tests have been validated primarily on the Google Chrome browser. Minor visual or functional discrepancies on other browsers (Firefox, Safari) have not been tested.

•	The tests do not measure application behavior under high network latency or poor connectivity.

•	No specific tests have been designed for mobile devices or varying screen resolutions.





