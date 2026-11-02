# Simple full-stack site

A small starter site with a React (Vite) frontend, a Node.js/Express API, and MySQL persistence.

## Requirements

- Node.js 20+
- MySQL 8+

## Run it

1. Create a MySQL database and run `server/schema.sql`.
2. Copy `server/.env.example` to `server/.env` and set the MySQL credentials.
3. In `server/`, run `npm install` and then `npm run dev`.
4. In `client/`, run `npm install` and then `npm run dev`.
5. Open the Vite URL shown in the terminal (usually `http://localhost:5173`).

The page loads a short welcome message from the API. The API checks the MySQL connection and offers a health endpoint at `http://localhost:3001/api/health`.
