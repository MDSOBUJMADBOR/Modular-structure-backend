# Category CRUD Backend

Node.js + Express + MongoDB + Mongoose backend for Category CRUD.

## Setup

1. Install dependencies:
   npm install

2. Create `.env` from `.env.example`:
   MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
   PORT=5000

3. Start development server:
   npm run dev

## API

POST   /api/categories
GET    /api/categories
GET    /api/categories/:id
PUT    /api/categories/:id
DELETE /api/categories/:id

## Example POST body

{
  "name": "Electronics",
  "description": "Electronic products",
  "image": "https://example.com/image.jpg",
  "status": true
}
