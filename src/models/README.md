# Data Models

This directory contains the data models for the application. Each model follows the Singleton pattern and provides methods for data management.

## Models Overview

### UserModel

Manages user data with the following features:
- User creation and management
- User authentication (to be implemented)
- User profile updates
- User deletion

#### Interface
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  lastLogin: Date;
}
```

#### Methods
- `createUser(name: string, email: string): Promise<User>`
- `getUser(id: string): Promise<User | null>`
- `updateUser(id: string, updates: Partial<User>): Promise<User | null>`
- `deleteUser(id: string): Promise<boolean>`
- `getAllUsers(): Promise<User[]>`

### ProductModel

Manages product data with the following features:
- Product creation and management
- Stock management
- Category-based filtering
- Product updates and deletion

#### Interface
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Methods
- `createProduct(name: string, description: string, price: number, category: string, stock: number): Promise<Product>`
- `getProduct(id: string): Promise<Product | null>`
- `updateProduct(id: string, updates: Partial<Product>): Promise<Product | null>`
- `deleteProduct(id: string): Promise<boolean>`
- `getAllProducts(): Promise<Product[]>`
- `getProductsByCategory(category: string): Promise<Product[]>`
- `updateStock(id: string, quantity: number): Promise<Product | null>`

### ChatModel

Manages chat interactions with the Together AI API.

#### Methods
- `sendMessage(messages: Message[]): Promise<ChatResponse>`

## Usage Examples

### User Management
```typescript
const userModel = UserModel.getInstance();

// Create a user
const user = await userModel.createUser('John Doe', 'john@example.com');

// Get a user
const userData = await userModel.getUser(user.id);

// Update a user
const updatedUser = await userModel.updateUser(user.id, { name: 'Jane Doe' });
```

### Product Management
```typescript
const productModel = ProductModel.getInstance();

// Create a product
const product = await productModel.createProduct(
  'Smartphone',
  'Latest model smartphone',
  999.99,
  'Electronics',
  10
);

// Update stock
const updatedProduct = await productModel.updateStock(product.id, -1);

// Get products by category
const electronics = await productModel.getProductsByCategory('Electronics');
```

## Future Improvements

1. Database Integration
   - Replace in-memory storage with a proper database
   - Add data persistence
   - Implement proper indexing

2. Authentication
   - Add user authentication
   - Implement role-based access control
   - Add session management

3. Validation
   - Add input validation
   - Implement data sanitization
   - Add error handling middleware

4. Caching
   - Implement caching layer
   - Add cache invalidation
   - Optimize performance

## Dependencies

- TypeScript
- Node.js
- Together AI API (for ChatModel) 