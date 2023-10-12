Server API & Web App
This project combines a server API with a frontend designed using HTML, CSS, and JavaScript. This README will guide you through the setup process and provide insights into the different technologies and frameworks used.

Getting Started
Follow the steps below to set up and understand the project on your local machine.

Prerequisites
Ensure you have Node.js and npm (Node Package Manager) installed. If they're not installed, download and install them from the Node.js official website.
Installing Required Libraries
First, navigate to the project's root directory:

cd path/to/your/directory/server
Install the required libraries and dependencies:

npm install
Setting Up The Database
From within the server directory, set up the database:

npm run setup-db
Running the Server
Choose from the following options to run the server:

Development Mode with Nodemon: Utilizes nodemon for hot reloading:

npm run dev
Live Server Mode: For frontend development with live reloading:

npm run dev2
Standard Mode:

npm start
By default, the server will start and log any pertinent information.

Built With & Explained
HTML/CSS/JavaScript: These are the core technologies for building web pages. HTML provides the structure, CSS styles the content, and JavaScript adds interactivity.

Express: A minimalist web framework for Node.js, designed for building web applications and APIs.

PostgreSQL: A powerful, open-source database management system. Used in this project for storing data.

bcrypt: A library for hashing passwords. It's essential for security to never store plain-text passwords; bcrypt helps by hashing them.

uuid: Generates universally unique identifiers (UUIDs), ensuring that each record or transaction is unique.

Jest: A delightful JavaScript testing framework with a focus on simplicity. It's used to ensure that the project's functions operate as expected.

dotenv: Manages environment variables, allowing you to keep sensitive information like database passwords outside of your code.

cors: Middleware that can be used to enable Cross-Origin Resource Sharing (CORS), ensuring that your API can be called from different domains (useful for frontend development).

Testing
Run tests:

npm run test
For detailed coverage reports:

npm run coverage
.env File
Before running the server, ensure you've set up your .env file in the root of the server directory. This file should contain configurations like your port and DB_URL from ElephantSQL.