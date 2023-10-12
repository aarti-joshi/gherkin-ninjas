# 🌟 Community Async

## 📋 Table of Contents

- [About](#about)
- [User Story](#user-story)
- [Project Planning](#project-planning)
- [Getting Started](#getting-started)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Authors & Acknowledgments](#authors--acknowledgments)

## 📝 About

Community Async is an application designed for local community residents to build awareness about community events, volunteering, and news. It helps the local council spread information on local news and gather viewpoints from local residents to build a better and more inclusive society.

🚀 Main features of the app:

- 📅 Calendar feature for event information
- 📢 Tracking of previous and upcoming events
- 🌟 Rewards system linked to points attained
- 🚀 Fast loading time
- 👩‍💻 Reader-friendly user interface
- 💡 Simple UX

## 🙋‍♂️ User Story

The application allows users to sign up or log in to the portal, providing access to a range of events, such as volunteering, recycling, gardening, and more.

## 📅 Project Planning

The project combines a server API with a frontend designed using HTML, CSS, Bootstrap, and JavaScript. This README will guide you through the setup process and provide insights into the different technologies and frameworks used.

## 🚀 Getting Started

**Installation:** To run the Community Async API locally, follow these steps:

1. Clone the repository to your local machine.
   
   ```bash
   git clone <repository HTTPS or SSH link>
   ```

2. Once you open the project, navigate to the project directory in your terminal.

   ```bash
   cd <api>
   ```

3. Install the required dependencies. Some dependencies may already exist, but by running the following command, you will ensure you have the latest versions.

   ```bash
   npm install express dotenv pg cors
   npm install -D nodemon
   ```

4. Create a `.env` file in the root directory and add your database URL and port information.

   ```env
   DB_URL=<your ElephantSQL database URL>
   PORT=3000
   ```

   (To obtain the ElephantSQL URL, you must register for an ElephantSQL account at [ElephantSQL](https://www.elephantsql.com/) and establish a new instance. Then, copy and paste the link into the configuration above.)

**Database Setup:** Before running the API, you need to set up the database. Run the following command to establish a database connection and set up the required table.

   ```bash
   npm run setup-db
   ```

   If the setup is successful, you should see the following message:

   ```plaintext
   DB connection established.
   Set-up complete.
   ```

**Running the Server:** Now that the database is set up, you can start the API server using the following command:

   ```bash
   npm run dev
   ```

   The server will listen on port 3000 by default.

   - **Live Server Mode:** For frontend development with live reloading:

   ```bash
   npm run dev2
   ```

   - **Standard Mode:**

   ```bash
   npm start
   ```

   By default, the server will start and log any pertinent information.

## 🛠️ Built With & Explained

- **HTML/CSS/JavaScript:** Core technologies for building web pages. HTML provides the structure, CSS styles the content, and JavaScript adds interactivity.
- **Express:** A minimalist web framework for Node.js, designed for building web applications and APIs.
- **PostgreSQL:** A powerful, open-source database management system. Used in this project for storing data.
- **bcrypt:** A library for hashing passwords, essential for security.
- **uuid:** Generates universally unique identifiers (UUIDs), ensuring that each record or transaction is unique.
- **Jest:** A JavaScript testing framework to ensure that the project's functions operate as expected.
- **dotenv:** Manages environment variables, allowing you to keep sensitive information like database passwords outside of your code.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS), ensuring that your API can be called from different domains (useful for frontend development).

🧪 **Testing:** Run tests:

```bash
npm run test
```

For detailed coverage reports:

```bash
npm run coverage
```

📡 **API Endpoints:** You can access the following API endpoints:

🐛 **Bugs:** As of the latest update, there are no known bugs in the Community Async project. If you encounter any issues, please don't hesitate to reach out for assistance.

## 🤝 Contributing

We welcome contributions from the open-source community to make Community Async even better.

## 🙌 Authors & Acknowledgments

- Khalifa Bamikole
- Hanieh Zaab
- Aarti Joshi
- Bruno Radoja




