# Aastha Care — Real Data Ready

Aastha Care is a MERN-based elderly care platform.

## Important

This version intentionally contains **no demo users, demo credentials, seed data, or hardcoded resident/medical/billing records**.

The frontend reads application data from the backend API. The backend is prepared for MongoDB/Mongoose, but no database setup or database data is included in this package.

## Project structure

- `client/` — React + Vite frontend
- `server/` — Express + Mongoose backend
- `server/models/` — MongoDB models
- `server/routes/` — API routes
- `server/controllers/` — API logic
- `server/middleware/` — JWT and role/access control

## Run frontend

```bash
cd client
npm install
npm run dev
```

Create `client/.env` from `.env.example` if the backend is not running on the default URL.

## Run backend

```bash
cd server
npm install
npm run dev
```

Create `server/.env` from `.env.example` and add the MongoDB connection string and JWT secret.

## Authentication

- Real register/login endpoints
- JWT authentication
- Family and Resident roles
- No demo credentials
- Family access is limited to its linked resident
- Resident access is limited to its own records

## Main API areas

- `/api/auth`
- `/api/vitals`
- `/api/appointments`
- `/api/medications`
- `/api/activities`
- `/api/tasks`
- `/api/billing`
- `/api/menus`
- `/api/emergency`

Database schema/data creation is intentionally left for the backend/database team.
