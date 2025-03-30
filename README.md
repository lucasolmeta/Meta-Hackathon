# AI Chat Assistant with User & Product Management

A full-stack web application built with Next.js, TypeScript, and Together AI API. This application provides a chat interface powered by AI, along with user and product management features.

## Features

- 🤖 AI Chat Interface powered by Together AI
- 👥 User Management System
- 🛍️ Product Management System
- 📱 Responsive Design with Tailwind CSS
- 🔒 Type-safe with TypeScript
- 🚀 Modern Next.js 14 App Router
- ⚡ Real-time Updates
- 🎨 Clean and Modern UI

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **AI Integration**: Together AI API
- **State Management**: React Hooks
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript

## Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn
- Together AI API key

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-chat-assistant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Together AI API key:
   ```
   TOGETHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   │   ├── chat/         # Chat API endpoints
│   │   ├── products/     # Product API endpoints
│   │   └── users/        # User API endpoints
│   └── page.tsx          # Main page
├── components/            # React components
│   ├── Chat.tsx          # Chat interface
│   ├── Message.tsx       # Message component
│   ├── ProductList.tsx   # Product list
│   └── UserList.tsx      # User list
├── models/               # Data models
│   ├── chat.ts          # Chat model
│   ├── productModel.ts  # Product model
│   └── userModel.ts     # User model
└── types/               # TypeScript types
    └── chat.ts         # Chat types
```

## API Endpoints

### Chat API
- `POST /api/chat` - Send a message to the AI

### User API
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/[id]` - Get a specific user
- `PUT /api/users/[id]` - Update a user
- `DELETE /api/users/[id]` - Delete a user

### Product API
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/[id]` - Get a specific product
- `PUT /api/products/[id]` - Update a product
- `DELETE /api/products/[id]` - Delete a product
- `GET /api/products/category/[category]` - Get products by category
- `PUT /api/products/[id]/stock` - Update product stock

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Together AI for providing the AI API
- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
