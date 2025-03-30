# Chat Component

The Chat component provides a real-time chat interface that integrates with the Together AI API. It features a modern design with message history, loading states, and error handling.

## Features

- Real-time message display
- Loading indicators
- Error handling
- Auto-scrolling to latest messages
- Responsive design
- Type-safe implementation

## Props

None. The component manages its own state internally.

## State Management

The component uses the following React hooks:
- `useState` for messages, input, and loading state
- `useRef` for auto-scrolling
- `useEffect` for scroll behavior

## API Integration

The component communicates with the Together AI API through the `/api/chat` endpoint.

### Request Format
```typescript
{
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
    id: string;
  }>;
}
```

### Response Format
```typescript
{
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
  }>;
}
```

## Usage

```tsx
import Chat from '@/components/Chat';

export default function Page() {
  return (
    <div>
      <Chat />
    </div>
  );
}
```

## Styling

The component uses Tailwind CSS for styling and includes:
- Responsive layout
- Message bubbles with different colors for user and assistant
- Loading animation
- Input field with disabled state
- Send button with hover effects

## Error Handling

The component handles various error scenarios:
- Network errors
- API errors
- Invalid responses
- Empty messages

## Dependencies

- React
- TypeScript
- Tailwind CSS
- Together AI API

## Related Components

- `Message.tsx`: Renders individual chat messages
- `Loading.tsx`: Displays loading state 