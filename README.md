User API implemented using Node.js, Express, and an in-memory database. It provides endpoints for creating, reading, updating, and deleting user records. The application follows the MVC (Model-View-Controller) pattern to achieve modularity and separation of concerns.

The API is hosted and can be accessed through the endpoint: **http://3.111.58.148/api/users**

## Features

- Create a new user record by sending a `POST` request to `/api/users`
- Retrieve all user records by sending a `GET` request to `/api/users`
- Retrieve a user record by its ID by sending a `GET` request to `/api/users/{userId}`
- Update a user record by sending a `PUT` request to `/api/users/{userId}`
- Delete a user record by sending a `DELETE` request to `/api/users/{userId}`

## Prerequisites

- Node.js installed on your machine

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/kartikmishraa/ticktech-asm/
   ```

2. Install the dependencies:

```bash
 cd ticktech-asm
 npm install
```

3. Start the application in development mode:

```bash
npm run start:dev
```

4. The API will be available at **http://localhost:5000**

## Project Structure

The project is structured using the MVC pattern for better modularity and maintainability. Here's an overview of the directory structure:

- server.js: The entry point of the application where Express server is configured.
- controllers/: Contains the controller modules responsible for handling requests and responses for each endpoint.
- models/: Contains the model module representing the user data.
- routes/: Contains the route module defining the API endpoints and mapping them to the corresponding controllers.
- middlewares/: Contains custom middleware modules used for error handling and handling asynchronous operations.

## Error Handling

The application uses custom error handling middleware to handle errors that occur during the processing of requests. Errors are properly formatted and returned as JSON responses with the corresponding status codes. The middleware also ensures that error messages are human-friendly and do not expose sensitive information in a production environment.

## Testing

To be implemented
