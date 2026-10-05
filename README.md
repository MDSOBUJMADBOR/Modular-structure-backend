# 📦 Category CRUD API

A RESTful Category Management API built with **Node.js, Express.js, MongoDB, and Mongoose**. This backend provides complete CRUD (Create, Read, Update, Delete) operations for managing product categories in an e-commerce application.

## ✨ Features

* **Create Category** — Add a new product category.
* **Get All Categories** — Retrieve all categories.
* **Get Single Category** — Find a category by its ID.
* **Update Category** — Update existing category information.
* **Delete Category** — Remove a category from the database.
* **MongoDB Integration** — Store and manage category data using Mongoose.
* **Environment Configuration** — Manage application settings securely with environment variables.
* **RESTful API** — Organized and easy-to-use API endpoints.

## 🛠️ Tech Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | JavaScript runtime              |
| Express.js | Backend framework               |
| MongoDB    | NoSQL database                  |
| Mongoose   | MongoDB object modeling         |
| dotenv     | Environment variable management |

## 📁 Project Structure

```text
category-crud-backend/
├── src/
│   ├── models/
│   │   └── Category.js
│   ├── routes/
│   │   └── categoryRoutes.js
│   ├── controllers/
│   │   └── categoryController.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

> Note: Adjust the folder structure above to match your actual project.

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/try/download/community) or a MongoDB Atlas account
* npm (included with Node.js)

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd category-crud-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following configuration:

```env
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
PORT=5000
```

For MongoDB Atlas, replace the local MongoDB connection string with your Atlas connection URI.

### 4. Start the Development Server

```bash
npm run dev
```

The server will start at:

```text
http://localhost:5000
```

**Base API URL:**

```text
http://localhost:5000/api/categories
```

## 📡 API Documentation

All endpoints use the base path `/api/categories`.

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| POST   | `/api/categories`     | Create a new category |
| GET    | `/api/categories`     | Get all categories    |
| GET    | `/api/categories/:id` | Get a category by ID  |
| PUT    | `/api/categories/:id` | Update a category     |
| DELETE | `/api/categories/:id` | Delete a category     |

### 1. Create a Category

Create a new product category.

**Endpoint:** `POST /api/categories`

**Request Body:**

```json
{
  "name": "Electronics",
  "description": "Electronic products",
  "image": "https://example.com/image.jpg",
  "status": true
}
```

**Example Response:**

```json
{
  "success": true,
  "message": "Category created successfully",
  "data": {
    "_id": "670a1234567890abcdef1234",
    "name": "Electronics",
    "description": "Electronic products",
    "image": "https://example.com/image.jpg",
    "status": true
  }
}
```

### 2. Get All Categories

Retrieve all categories from the database.

**Endpoint:** `GET /api/categories`

**Example Response:**

```json
{
  "success": true,
  "message": "Categories retrieved successfully",
  "data": []
}
```

### 3. Get a Single Category

Retrieve a specific category using its MongoDB ID.

**Endpoint:** `GET /api/categories/:id`

**Example:**

```text
GET /api/categories/670a1234567890abcdef1234
```

### 4. Update a Category

Update an existing category.

**Endpoint:** `PUT /api/categories/:id`

**Request Body:**

```json
{
  "name": "Updated Electronics",
  "description": "Updated electronic products",
  "image": "https://example.com/updated-image.jpg",
  "status": true
}
```

### 5. Delete a Category

Delete a category using its MongoDB ID.

**Endpoint:** `DELETE /api/categories/:id`

**Example:**

```text
DELETE /api/categories/670a1234567890abcdef1234
```

## 🧪 Testing the API

You can test the endpoints using any of the following tools:

* [Postman](https://www.postman.com/)
* [Thunder Client](https://www.thunderclient.com/)
* cURL

Example cURL request:

```bash
curl -X POST http://localhost:5000/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"Electronics","description":"Electronic products","image":"https://example.com/image.jpg","status":true}'
```

## ⚙️ Available Scripts

| Command       | Description                  |
| ------------- | ---------------------------- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |

## 🔐 Environment Variables

| Variable    | Description               | Example                               |
| ----------- | ------------------------- | ------------------------------------- |
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/ecommerce` |
| `PORT`      | Server port               | `5000`                                |

**Security:** Never commit your `.env` file or expose database credentials in a public repository.

## 🔮 Future Improvements

* Request validation
* Centralized error handling
* Pagination and search
* Category filtering by status
* Authentication and authorization
* API documentation with Swagger

## 👨‍💻 Author

**Sobuj Madbor**

* GitHub: [@MDSOBUJMADBOR](https://github.com/MDSOBUJMADBOR)

## 📄 License

This project is open-source and available for learning and development purposes.
