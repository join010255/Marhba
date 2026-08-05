# Marhba - Full-Stack Mobile Authentication System

**Marhba** is a full-stack mobile application featuring a **Node.js / Express / PostgreSQL** backend and a **React Native / Expo** mobile frontend. It provides a secure user authentication system complete with password hashing, JWT Access & Refresh Token rotation, persistent storage, and client-state management with Zustand.

---

## 📐 Project Architecture

```
Marhba/
├── backend/            # Express.js REST API & PostgreSQL Database Layer
└── frontend/           # React Native (Expo) Mobile Application
```

---

## 🛠️ Tech Stack

### **Backend**
* **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
* **Framework**: [Express 5](https://expressjs.com/)
* **Database**: [PostgreSQL](https://www.postgresql.org/)
* **ORM**: [Sequelize](https://sequelize.org/)
* **Security & Auth**: [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken), [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* **Validation**: [Zod](https://zod.dev/)

### **Frontend**
* **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 54)
* **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based navigation)
* **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
* **API Client**: [Axios](https://axios-http.com/)
* **Local Storage**: [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
* **Icons & Fonts**: `@expo/vector-icons`, `@expo-google-fonts/inter`

---

## ✨ Features

- 🔑 **User Authentication**: Register & Login with input validation and encrypted passwords.
- 🛡️ **JWT Access & Refresh Tokens**: Dual-token architecture with automatic token refresh upon access token expiration.
- 📱 **Auto Session Check**: Remembers logged-in users and restores sessions automatically on app launch.
- 👤 **User Profile**: Protected endpoint fetching and displaying current user information.
- 🎨 **Modern Dark UI**: Mobile interface built with reusable custom components and Expo vector icons.

---

## 📁 Repository Structure

```
Marhba/
├── backend/
│   ├── src/
│   │   ├── config/          # Sequelize PostgreSQL database connection
│   │   ├── controllers/     # Authentication & user controllers
│   │   ├── middlewares/     # Auth checks, token verification & input validation
│   │   ├── models/          # Sequelize database models (User)
│   │   ├── routes/          # Express API route definitions
│   │   ├── utils/           # JWT generator & Bcrypt helper functions
│   │   └── server.js        # Express app entry point
│   ├── .env.example         # Template for environment variables
│   └── package.json
│
└── frontend/
    ├── app/
    │   ├── (tabs)/          # Screen components (login, register, profile, loading)
    │   └── _layout.jsx      # Root navigation layout
    ├── Components/          # Reusable UI components (Input, etc.)
    ├── hookForm/            # Validation schemas & resolvers
    ├── service/             # Axios instance & API integration methods
    ├── Storage/             # AsyncStorage token wrapper
    ├── store/               # Zustand global state store
    └── package.json
```

---

## 🔌 API Endpoints (Backend)

Base URL: `http://<SERVER_IP>:3000/api`

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/api/register` | ❌ | Create a new user account (`firstName`, `lastName`, `email`, `password`) |
| `POST` | `/api/login` | ❌ | Authenticate user and receive Access Token & Refresh Token |
| `GET` | `/api/refresh` | 🔑 Refresh Token | Rotates tokens and issues new Access & Refresh tokens |
| `GET` | `/api/me` | 🔒 Access Token | Retrieves the authenticated user's profile details |

---

## ⚙️ Environment Variables (Backend)

Create a `.env` file inside the `backend/src/` or `backend/` directory:

```env
DB_NAME=marhba_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- PostgreSQL server installed and running
- Expo Go app on mobile device OR Android/iOS Emulator

---

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the database in PostgreSQL (e.g., `marhba_db`).

4. Configure your `.env` file with database credentials and secret keys.

5. Start the backend development server:
   ```bash
   npm start
   # or
   npx nodemon src/server.js
   ```
   *The backend will automatically synchronize database models and start listening on port `3000`.*

---

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the API Base URL in `frontend/service/service.js` with your local IP address:
   ```javascript
   const api = axios.create({
     baseURL: "http://<YOUR_LOCAL_IP>:3000/api"
   });
   ```

4. Start the Expo development server:
   ```bash
   npm run start
   ```

5. Scan the QR code using the **Expo Go** app (Android/iOS) or press `a` for Android Emulator / `i` for iOS Simulator.

---

## 📝 License

This project is open source and available under the [ISC License](LICENSE).
