# Community Async 🌟

## Table of Contents

- [About](#about)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Built With](#built-with)
- [Testing](#testing)
- [Contributing](#contributing)
- [Authors & Acknowledgment](#authors--acknowledgment)

## About ℹ️

Community Async is an application designed to connect local community residents, provide information about community events, and facilitate volunteering efforts. The platform allows users to explore and participate in various community activities and stay updated on local news.

### Project Structure 🏗️

The project follows the Model-View-Controller (MVC) architectural pattern to maintain a clear separation of concerns. Here's a brief overview of the project structure:

- **Models:** Data models define the structure of various entities. For instance, `Event`, `History`, `Token`, and `Volunteer` are models for different parts of the application.

- **Routers:** Routers handle API endpoints and direct requests to the appropriate controllers. In your project, `communityRouter`, `historyRouter`, and `volunteerRouter` are examples of routers.

- **Controllers:** Controllers handle the logic of the application. They interact with models to retrieve or manipulate data. Examples include `communityController`, `historyController`, and `volunteerController`.

- **Middleware:** Middleware functions, such as `authenticator` and `logRoutes`, provide additional functionality for request handling and authentication.

- **Database:** The database schema and setup scripts are included in the project to create and manage the necessary tables and relationships.

### Getting Started 🚀

To run the Community Async API locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_HTTPS_or_SSH_link>
   ```

2. Navigate to the project directory in your terminal:

   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:

   ```bash
   npm install express dotenv pg cors
   npm install -D nodemon
   ```

4. Create a `.env` file in the root directory and add your database URL and port information:

   ```
   DB_URL=<your_ElephantSQL_database_URL>
   PORT=3000
   ```

   To obtain the ElephantSQL URL, you must register for an ElephantSQL account at [ElephantSQL](https://www.elephantsql.com/) and establish a new instance. Then, copy and paste the link into the configuration above.

#### Database Setup 🗃️

Before running the Community Async API, you need to set up the database. Run the following command to establish a database connection and set up the required table:

```bash
npm run setup-db
```

If the setup is successful, you should see the following message:

```
DB connection established.
Set-up complete.
```

#### Running the Server ▶️

Now that the database is set up, you can start the API server using the following command:

```bash
npm run dev
```

The server will listen on port 3000 by default.

For testing POST, PATCH, and DELETE requests, consider using an API testing platform like Thunder.

### API Endpoints 🌐

You can access the following API endpoints:

#### Volunteers 🙋‍♂️

- **GET /Volunteers**: Retrieves a list of volunteers.
- **GET /Volunteers/:volunteer_id**: Retrieves a specific volunteer's details by their ID.
- **POST /Volunteers**: Creates a new volunteer.
- **POST /Volunteers/register**: Registers a new volunteer.
- **POST /Volunteers/login**: Logs in a volunteer.
- **PATCH /Volunteers/:volunteer_id**: Updates a specific volunteer's information.
- **DELETE /Volunteers/:volunteer_id**: Deletes a specific volunteer.

#### History 📜

- **GET /History**: Retrieves a list of history records.
- **GET /History/:history_id**: Retrieves a specific history record by its ID.
- **POST /History**: Creates a new history record.
- **PATCH /History/:history_id**: Updates a specific history record.
- **DELETE /History/:history_id**: Deletes a specific history record.

#### Community Events 📅

- **GET /Events**: Retrieves a list of community events.
- **GET /Events/:event_id**: Retrieves a specific event by its ID.
- **POST /Events**: Creates a new community event.
- **PATCH /Events/:event_id**: Updates a specific community event.
- **DELETE /Events/:event_id**: Deletes a specific community event.

## Built With 🛠️

- **Express:** A web application framework for Node.js, used for building the API.
- **PostgreSQL:** An open-source relational database management system, used for data storage.
- **bcrypt:** A library for securely hashing passwords.
- **uuid:** A library for generating unique identifiers.
- **Jest:** A JavaScript testing framework used to ensure the reliability of the application.
- **dotenv:** A module for handling environment variables.
- **cors:** Middleware for managing Cross-Origin Resource Sharing.

## Testing 🧪

You can run tests using the following command:

```bash
npm run test
```

To generate detailed coverage reports:

```bash
npm run coverage
```

## Contributing 🤝

Community Async welcomes contributions from the open-source community. Feel free to submit your ideas and enhancements to make the application better.

## Authors & Acknowledgment 🙌

- Khalifa Bamikole
- Hanieh Zaab
- Aarti Joshi
- Bruno Radoja
