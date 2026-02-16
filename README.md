# Express Template

A lightweight Express.js API template built with Bun runtime, TypeScript, and JWT authentication.

## Features

- **Express.js** - Fast, minimalist web framework for Node.js
- **Bun** - All-in-one JavaScript runtime (faster than Node)
- **TypeScript** - Type safety out of the box
- **JWT Authentication** - Secure token-based auth utilities
- **CORS** - Cross-Origin Resource Sharing support
- **Environment Config** - Centralized environment variable management

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your machine

### Installation

```bash
bun install
```

### Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the environment variables in `.env`:
```env
PORT=5050
JWT_SECRET=your-secret-key
```

### Development

```bash
bun run server.ts
```

The server will start on `http://localhost:5050`

## Project Structure

```
├── src/
│   ├── config/
│   │   └── env.config.ts      # Environment configuration
│   ├── controllers/
│   │   └── example.controller.ts
│   ├── routes/
│   │   └── example.routes.ts
│   ├── services/
│   │   └── example.service.ts
│   └── utils/
│       └── jwt.utils.ts       # JWT utilities
├── .env.example
├── server.ts                  # Application entry point
└── package.json
```

## API Endpoints

### Example Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/example` | Get example data |
| POST | `/api/example` | Create example data |

## License

ISC
