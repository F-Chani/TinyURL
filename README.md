# TinyUrl Project

TinyUrl is a URL shortening service designed for business clients who publish links to landing pages and online files. The service allows for URL shortening, click tracking, and identification of click sources.

## Features

- **Shortening**: Shortening URLs to obtain user-friendly and concise addresses.
- **Tracking**: Tracking the number of clicks and visits on each link.
- **Targeting**: Mapping different sources to the same link to identify the exposure brought by each source.

## Development Process

The project is developed using Node.js and MongoDB, following the Agile methodology.

### Sprint 1: Base API
- Creating the base API in Node.js.
- Setting up an initial database with `links` and `users` collections.
- CRUD operations for Links and Users.

### Sprint 2: Tracking
- Developing a redirect mechanism that redirects from a shortened URL to the original URL.
- Saving click data including the user's IP address.

### Sprint 3: Targeting
- Ability to associate each click with the source from which it originated.
- Adding parameters in the query string to identify click sources.

## System Requirements

- Node.js
- MongoDB

## Installation

1. Clone the project:

    ```sh
    git clone https://github.com/F-Chani/TinyURL.git
    ```

2. Navigate to the project directory:

    ```sh
    cd TinyURL
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Connect to the database:
    - Update the `dataBase.js` file with your database connection details.

## Running the Project

1. Start the local server:

    ```sh
    npm run dev
    ```

2. The server will run at `http://localhost:3000`.

## Project Structure

- `index.js`: The main entry file of the project.
- `Routers/`: Directory containing the routing files.
- `Controllers/`: Directory containing the controllers for various actions.
- `Models/`: Directory containing the database models.
- `dataBase.js`: Database connection file.

## Using the API

### Users

- **GET /users**: Retrieve a list of all users.
- **GET /users/:id**: Retrieve a user by ID.
- **POST /users**: Add a new user.
- **PUT /users/:id**: Update an existing user.
- **DELETE /users/:id**: Delete a user.

### Links

- **GET /links**: Retrieve a list of all links.
- **GET /links/:id**: Retrieve a link by ID.
- **POST /links**: Add a new link.
- **PUT /links/:id**: Update an existing link.
- **DELETE /links/:id**: Delete a link.
- **GET /links/redirect/:id**: Redirect to the original link.
- **GET /links/:id/clicksByTarget**: Retrieve click data by target sources.

## Contribution

We welcome feedback and improvements to the project. Feel free to open Issues and Pull Requests on our [GitHub repository](https://github.com/yourusername/tinyurl-project).

## License

This project is licensed under the MIT License. For more information, please refer to the LICENSE file included in the repository.
