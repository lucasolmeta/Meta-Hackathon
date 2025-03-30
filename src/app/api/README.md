# API Routes

This directory contains the API routes for the application. Each route is implemented using Next.js API routes and follows RESTful conventions.

## Routes Overview

### Chat API

#### POST /api/chat
Handles chat interactions with the Together AI API.

**Request Body:**
```typescript
{
  messages: {
    role: 'user' | 'assistant';
    content: string;
  }[];
}
```

**Response:**
```typescript
{
  response: string;
  error?: string;
}
```

### Users API

#### GET /api/users
Retrieves all users.

**Response:**
```typescript
{
  users: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
  }[];
}
```

#### POST /api/users
Creates a new user.

**Request Body:**
```typescript
{
  name: string;
  email: string;
}
```

**Response:**
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
  };
}
```

#### GET /api/users/[id]
Retrieves a specific user by ID.

**Response:**
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
  };
}
```

#### PUT /api/users/[id]
Updates a specific user.

**Request Body:**
```typescript
{
  name?: string;
  email?: string;
}
```

**Response:**
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
  };
}
```

#### DELETE /api/users/[id]
Deletes a specific user.

**Response:**
```typescript
{
  success: boolean;
}
```

### Products API

#### GET /api/products
Retrieves all products.

**Response:**
```typescript
{
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
```

#### POST /api/products
Creates a new product.

**Request Body:**
```typescript
{
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}
```

**Response:**
```typescript
{
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
  };
}
```

#### GET /api/products/[id]
Retrieves a specific product by ID.

**Response:**
```typescript
{
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
  };
}
```

#### PUT /api/products/[id]
Updates a specific product.

**Request Body:**
```typescript
{
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  stock?: number;
}
```

**Response:**
```typescript
{
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
  };
}
```

#### DELETE /api/products/[id]
Deletes a specific product.

**Response:**
```typescript
{
  success: boolean;
}
```

## Error Handling

All API routes include error handling and return appropriate HTTP status codes:

- 200: Success
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error responses include a message explaining the error:

```typescript
{
  error: string;
}
```

## Authentication

Currently, the API routes do not include authentication. Future improvements will include:

1. JWT-based authentication
2. Role-based access control
3. API key validation
4. Rate limiting

## Rate Limiting

To be implemented in future versions:

1. Request rate limiting
2. IP-based blocking
3. API key quotas

## Caching

To be implemented in future versions:

1. Response caching
2. Cache invalidation
3. Cache headers

## Testing

API routes can be tested using:

1. Postman
2. cURL
3. Jest
4. Supertest

Example test using cURL:

```bash
# Get all users
curl http://localhost:3000/api/users

# Create a new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
``` 