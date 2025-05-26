# 🧑💻 User Service API

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Kiran1810/UserService/blob/main/LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-green.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/express-4.x-lightgrey.svg)](https://expressjs.com/)

A modern Node.js backend service for user management with role-based access control.

## 📂 Project Structure

```bash
UserService/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── migrations/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── index.js
├── .env.example
├── package.json
└── README.md
```

## 🚀 Installation

1. Clone repo
```bash
git clone https://github.com/Kiran1810/UserService.git
cd UserService
```

2. Install dependencies
```bash
npm install
```

3. Configure environment
```bash
cp .env.example .env
# Edit .env file with your credentials
```

4. Run migrations
```bash
npx sequelize-cli db:migrate
```

5. Start server
```bash
npm start
```

## 📚 API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | /api/users     | Create user          |
| GET    | /api/users/:id | Get user             |
| PUT    | /api/users/:id | Update user          |
| DELETE | /api/users/:id | Delete user          |
| POST   | /api/login     | Get JWT token        |

