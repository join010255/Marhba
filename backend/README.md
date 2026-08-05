# Marhba Backend Service

Express.js REST API built with Node.js, PostgreSQL, and Sequelize ORM.

## Tech Stack
- **Framework**: Express 5
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Security**: JWT & Bcrypt
- **Validation**: Zod

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Setup `.env` configuration file in `src/.env` or root of backend:
   ```env
   DB_NAME=marhba_db
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   ```

3. Run server:
   ```bash
   npx nodemon src/server.js
   ```
