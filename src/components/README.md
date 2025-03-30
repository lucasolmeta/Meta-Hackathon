# UI Components

This directory contains the React components used in the application. Each component is built using Next.js and follows modern React best practices.

## Components Overview

### Chat Component

A real-time chat interface that integrates with the Together AI API.

**Features:**
- Real-time message display
- Message history
- Loading states
- Error handling
- Responsive design

**Props:**
```typescript
interface ChatProps {
  className?: string;
}
```

**Usage:**
```tsx
<Chat className="w-full max-w-2xl mx-auto" />
```

### UserList Component

Displays a list of users with their details.

**Features:**
- User data display
- Loading states
- Error handling
- Responsive grid layout

**Props:**
```typescript
interface UserListProps {
  className?: string;
}
```

**Usage:**
```tsx
<UserList className="w-full max-w-4xl mx-auto" />
```

### ProductList Component

Displays a list of products with their details.

**Features:**
- Product data display
- Loading states
- Error handling
- Responsive grid layout
- Stock status indicators

**Props:**
```typescript
interface ProductListProps {
  className?: string;
}
```

**Usage:**
```tsx
<ProductList className="w-full max-w-4xl mx-auto" />
```

## Component Structure

Each component follows this structure:

1. **Imports**
   - React and Next.js imports
   - Type definitions
   - Utility functions

2. **Component Definition**
   - TypeScript interface for props
   - Component function definition
   - State management using React hooks

3. **Data Fetching**
   - API calls using fetch
   - Error handling
   - Loading states

4. **Rendering**
   - Conditional rendering based on state
   - Error messages
   - Loading indicators
   - Main content

5. **Styling**
   - Tailwind CSS classes
   - Responsive design
   - Dark mode support

## State Management

Components use React hooks for state management:

```typescript
// Loading state
const [isLoading, setIsLoading] = useState(true);

// Error state
const [error, setError] = useState<string | null>(null);

// Data state
const [data, setData] = useState<DataType[]>([]);
```

## Error Handling

Components implement error boundaries and error states:

```typescript
if (error) {
  return (
    <div className="text-red-500 p-4">
      Error: {error}
    </div>
  );
}
```

## Loading States

Components show loading indicators while fetching data:

```typescript
if (isLoading) {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}
```

## Styling

Components use Tailwind CSS for styling:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Component content */}
</div>
```

## Responsive Design

Components are responsive and adapt to different screen sizes:

- Mobile: Single column layout
- Tablet: Two column layout
- Desktop: Three column layout

## Dark Mode Support

Components support dark mode using Tailwind's dark mode classes:

```typescript
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  {/* Component content */}
</div>
```

## Testing

Components can be tested using:

1. Jest
2. React Testing Library
3. Cypress

Example test:

```typescript
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList', () => {
  it('renders loading state', () => {
    render(<UserList />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
```

## Future Improvements

1. **Performance**
   - Implement React.memo for pure components
   - Add virtualization for long lists
   - Optimize re-renders

2. **Accessibility**
   - Add ARIA labels
   - Implement keyboard navigation
   - Add screen reader support

3. **Features**
   - Add sorting and filtering
   - Implement pagination
   - Add search functionality

4. **Testing**
   - Add unit tests
   - Add integration tests
   - Add end-to-end tests

## Dependencies

- React
- Next.js
- Tailwind CSS
- TypeScript 