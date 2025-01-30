# Library Management API

## Overview
The Library Management API is a RESTful API designed to manage a library system. It allows users to perform CRUD operations on books, manage their availability, and incorporates rate limiting to ensure fair usage.

## Features
- Retrieve a list of all books with pagination.
- Get details of a specific book.
- Add new books to the library collection.
- Update existing book details.
- Delete books from the library system.
- Rate limiting to prevent abuse.

## Project Structure
```
library-management-api
├── src
│   ├── controllers
│   │   └── bookController.js
│   ├── models
│   │   └── bookModel.js
│   ├── routes
│   │   └── bookRoutes.js
│   ├── middlewares
│   │   └── rateLimiter.js
│   └── app.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd library-management-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
Create a `.env` file in the root directory and add your environment variables as needed.

## Running the API
To start the server, run:
```
npm start
```
The API will be available at `http://localhost:3000`.

## API Endpoints
### Books
- **GET** `/api/v1/books`: Retrieve a list of all books.
- **GET** `/api/v1/books/{id}`: Get details of a specific book.
- **POST** `/api/v1/books`: Add a new book to the library.
- **PUT** `/api/v1/books/{id}`: Update an existing book.
- **DELETE** `/api/v1/books/{id}`: Remove a book from the library.

## Rate Limiting
All endpoints are protected with rate limiting. Clients are allowed a maximum of 100 requests per minute. The response headers will include:
- `X-RateLimit-Limit`: The maximum number of requests allowed.
- `X-RateLimit-Remaining`: The number of requests remaining in the current window.
- `X-RateLimit-Reset`: The time when the rate limit will reset.

## Usage Examples
Refer to the Postman collection for detailed examples of how to interact with the API.

## License
This project is licensed under the MIT License.