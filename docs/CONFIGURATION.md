# Project Configuration

This document outlines the configuration and environment setup for the project.

## Environment Variables

The project uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

```env
# API Keys
TOGETHER_API_KEY=your_together_api_key

# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration (Future)
DATABASE_URL=your_database_url

# Authentication (Future)
JWT_SECRET=your_jwt_secret
```

## Next.js Configuration

The project uses Next.js 14+ with the following configuration in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  // API configuration
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
}

module.exports = nextConfig
```

## TypeScript Configuration

TypeScript configuration is defined in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Tailwind CSS Configuration

Tailwind CSS is configured in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}
```

## ESLint Configuration

ESLint is configured in `.eslintrc.json`:

```json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "root": true,
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Prettier Configuration

Prettier is configured in `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100
}
```

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Production Setup

1. Build the application:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

## Testing Setup

1. Run unit tests:
   ```bash
   npm run test
   ```

2. Run tests with coverage:
   ```bash
   npm run test:coverage
   ```

## Deployment

The application can be deployed to various platforms:

1. **Vercel**
   - Connect your GitHub repository
   - Configure environment variables
   - Deploy automatically on push

2. **Netlify**
   - Connect your GitHub repository
   - Configure build settings
   - Deploy automatically on push

3. **AWS**
   - Use AWS Amplify
   - Configure build settings
   - Set up environment variables

## Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - Configure image domains
   - Use appropriate image formats

2. **Code Splitting**
   - Use dynamic imports
   - Configure chunk sizes
   - Optimize bundle size

3. **Caching**
   - Configure API caching
   - Use SWR for data fetching
   - Implement service workers

## Security Configuration

1. **CORS**
   - Configure allowed origins
   - Set up CORS headers
   - Handle preflight requests

2. **Rate Limiting**
   - Implement API rate limiting
   - Configure rate limit rules
   - Handle rate limit errors

3. **Authentication**
   - Set up JWT authentication
   - Configure session management
   - Implement role-based access

## Monitoring and Logging

1. **Error Tracking**
   - Set up error monitoring
   - Configure error reporting
   - Implement error boundaries

2. **Performance Monitoring**
   - Set up performance tracking
   - Configure metrics collection
   - Implement performance budgets

3. **Logging**
   - Configure logging levels
   - Set up log aggregation
   - Implement structured logging 