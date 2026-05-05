# PasteShareApp

A modern full-stack web application for sharing and managing text pastes with authentication, built with TypeScript, Python, and React.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Frontend Development](#frontend-development)
- [Backend Development](#backend-development)
- [Database](#database)
- [Docker Deployment](#docker-deployment)

## 🎯 Overview

**PasteShareApp** is a full-stack application that enables users to create, share, and manage text pastes. The application features user authentication, real-time updates, and a responsive user interface.

## 🛠️ Tech Stack

### Frontend 
- **React**
- **TypeScript**
- **Vite 8.0.9** - Build tool with HMR support
- **Redux Toolkit 2.11.2** - State management
- **React Redux 9.2.0** - React bindings for Redux
- **React Router DOM 7.14.2** - Client-side routing
- **SCSS** - Styling with Sass
- **ESLint** - Code linting

### Backend 
- **FastAPI** - High-performance web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation
- **SQLAlchemy** - ORM (via Poetry)
- **Alembic** - Database migrations
- **PostgreSQL** - Primary database
- **AsyncPG** - Async PostgreSQL driver
- **Psycopg2** - PostgreSQL adapter
- **JWT (PyJWT)** - Authentication
- **Passlib + Bcrypt** - Password hashing

### Infrastructure
- **Docker & Docker Compose** - Containerization
- **PostgreSQL 15** - Database service

## 📁 Project Structure

```
PasteShareApp/

├── backend
│   ├── alembic.ini
│   ├── app
│   │   ├── api
│   │   │   ├── auth.py
│   │   │   ├── paste_api.py
│   │   │   └── routers.py
│   │   ├── core
│   │   │   ├── database_config.py
│   │   │   └── project_config.py
│   │   ├── dependencies
│   │   │   ├── paste_dependencies.py
│   │   │   └── user_dependencies.py
│   │   ├── main.py
│   │   ├── models
│   │   │   ├── base_model.py
│   │   │   ├── paste_model.py
│   │   │   └── users_model.py
│   │   ├── repositories
│   │   │   ├── base_repository.py
│   │   │   ├── paste_repository.py
│   │   │   └── user_repository.py
│   │   ├── schemas
│   │   │   ├── auth_schema.py
│   │   │   ├── base_schema.py
│   │   │   ├── paste_schema.py
│   │   │   └── user_schema.py
│   │   ├── services
│   │   │   ├── paste_service.py
│   │   │   └── user_service.py
│   │   └── utils
│   │       ├── enums.py
│   │       ├── expire.py
│   │       ├── pasword_utils.py
│   │       └── short_hash.py
│   ├── Dockerfile
│   ├── .env.dev
│   ├── migrations
│   │   ├── env.py
│   │   ├── README
│   │   ├── script.py.mako
│   │   └── versions
│   ├── poetry.lock
│   └── pyproject.toml
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── .env_example
│   ├── eslint.config.js
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   └── store.ts
│   │   ├── App.module.scss
│   │   ├── App.tsx
│   │   ├── assets
│   │   ├── components
│   │   │   ├── Footer
│   │   │   │   ├── Footer.module.scss
│   │   │   │   └── Footer.tsx
│   │   │   ├── Header
│   │   │   │   ├── Header.module.scss
│   │   │   │   └── Header.tsx
│   │   │   ├── PasteItems
│   │   │   │   ├── PasteItems.module.scss
│   │   │   │   └── PasteItems.tsx
│   │   │   └── PlusButton
│   │   │       ├── PlusButton.module.scss
│   │   │       └── PlusButton.tsx
│   │   ├── .env
│   │   ├── features
│   │   │   └── auth
│   │   │       └── authSlice.ts
│   │   ├── hooks
│   │   │   └── useAuth.ts
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── pages
│   │   │   ├── CreatePage
│   │   │   │   ├── CreatePage.module.scss
│   │   │   │   └── CreatePage.tsx
│   │   │   ├── LoginPage
│   │   │   │   ├── LoginPage.module.scss
│   │   │   │   └── LoginPage.tsx
│   │   │   ├── ProtectedRoute
│   │   │   │   └── ProtectedRoute.tsx
│   │   │   ├── ReadPage
│   │   │   │   ├── ReadPage.module.scss
│   │   │   │   └── ReadPage.tsx
│   │   │   ├── RegisterPage
│   │   │   │   ├── RegisterPage.module.scss
│   │   │   │   └── RegisterPage.tsx
│   │   │   ├── RootPage
│   │   │   │   └── RootPage.tsx
│   │   │   └── UpdatePage
│   │   │       ├── UpdatePage.module.scss
│   │   │       └── UpdatePage.tsx
│   │   ├── services
│   │   │   ├── api.ts
│   │   │   ├── baseQuery.ts
│   │   │   ├── pasteApi.ts
│   │   │   ├── types.ts
│   │   │   └── userApi.ts
│   │   └── styles
│   │       ├── index.scss
│   │       └── _variables.scss
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── .gitignore
```

## ✨ Features

- **User Authentication** - JWT-based authentication with bcrypt password hashing
- **Paste Management** - Create, read, and manage text pastes
- **Real-time Updates** - Responsive UI with Redux state management
- **CORS Support** - Configurable CORS middleware for cross-origin requests
- **Type Safety** - Full TypeScript support on frontend and Pydantic validation on backend
- **Responsive Design** - SCSS-based responsive styling
- **Database Migrations** - Alembic for schema management
- **API Versioning** - RESTful API with v1 routing

## 📋 Prerequisites

- **Node.js 20+** (for frontend development)
- **Python 3.13+** (for backend development)
- **Docker & Docker Compose** (for containerized deployment)
- **PostgreSQL 15** (if running without Docker)

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/Shevchenko00/PasteShareApp.git
cd PasteShareApp
```

### Backend Setup

```bash
cd backend

# Install Python dependencies using Poetry
poetry install

# Install dependencies without creating a virtual environment (if preferred)
poetry install --no-root
```

### Frontend Setup

```bash
cd frontend

# Install npm dependencies
npm install
```

## ▶️ Running the Application

### Option 1: Docker Compose (Recommended)

```bash
# Build and start all services
docker-compose up --build

# Services will be available at:
# - Frontend: http://localhost:5174
# - Backend API: http://localhost:2222
# - PostgreSQL: localhost:5433
```

### Option 2: Local Development

#### Backend

```bash
cd backend

# Set up environment variables
# Create a .env file with your configuration

# Run database migrations
alembic upgrade head

# Start the FastAPI server
uvicorn app.main:app --host 0.0.0.0 --port 2222 --reload
```

#### Frontend

```bash
cd frontend

# Start the Vite development server
npm run dev

# App will be available at http://localhost:5174
```

## 📚 API Documentation

### FastAPI Integration

Once the backend is running, access the interactive API documentation:

- **Swagger UI**: http://localhost:2222/docs
- **ReDoc**: http://localhost:2222/redoc

### API Endpoints

The backend exposes v1 API routes via `app.api.routers.v1`. See the router file for detailed endpoint documentation.

### Authentication

The API uses JWT (JSON Web Tokens) for authentication:

```
Authorization: Bearer <token>
```

Passwords are hashed using bcrypt for secure storage.

## 🎨 Frontend Development

### Available Scripts

```bash
# Development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Redux Store

Redux Toolkit is configured for state management. Access the store at:
```
frontend/src/app/store.ts
```

### Routing

React Router DOM v7 handles client-side routing. Routes are configured in your App component.

## 🐍 Backend Development

### Project Structure

- `app/main.py` - FastAPI application with CORS middleware
- `app/api/routers/v1.py` - API v1 routes
- `app/core/project_config.py` - Settings and configuration
- `alembic/` - Database migration scripts

### Environment Variables

Configure via `.env` file (see `ALLOWED_ORIGINS`, `ALLOWED_CREDENTIALS`, `DEBUG` in `project_config.py`)

### CORS Configuration

CORS is configured via settings:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=settings.ALLOWED_CREDENTIALS,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🗄️ Database

### PostgreSQL Setup

The application uses PostgreSQL 15 for data persistence.

### Migrations

Database migrations are managed with Alembic:

```bash
# Create a new migration
alembic revision --autogenerate -m "Description"

# Apply migrations
alembic upgrade head

# Revert to previous migration
alembic downgrade -1
```

In Docker Compose, migrations run automatically on startup.

## 🐳 Docker Deployment

### Services

The `docker-compose.yml` defines three services:

1. **paste_app_backend** - FastAPI server on port 2222
2. **paste_app_postgres** - PostgreSQL database on port 5433
3. **paste_app_frontend** - React dev server on port 5174

### Building

```bash
# Build specific service
docker-compose build paste_app_backend
docker-compose build paste_app_frontend

# Build all services
docker-compose build
```

### Running

```bash
# Start services in foreground
docker-compose up

# Start services in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment Variables

Frontend `.env` file:
```
CHOKIDAR_USEPOLLING=true
```

Backend configuration is managed in `app/core/project_config.py` using Pydantic Settings.

## 📦 Dependencies

### Frontend
- `react@^19.2.5`
- `typescript@~6.0.2`
- `vite@^8.0.9`
- `@reduxjs/toolkit@^2.11.2`
- `react-router-dom@^7.14.2`

### Backend
- `fastapi@^0.136.0`
- `uvicorn@^0.45.0`
- `pydantic@^2.13.3`
- `sqlalchemy` (via Poetry)
- `psycopg2@^2.9.12`
- `asyncpg@^0.31.0`
- `pyjwt@^2.12.1`
- `passlib[bcrypt]@1.7.4`

## 📖 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)

## 📝 License

This project is open source and available on GitHub.

## 👨‍💻 Author

**Shevchenko Olexander**
- Email: shevchenko.oleksandr0209@gmail.com
- GitHub: [@Shevchenko00](https://github.com/Shevchenko00)
