# Accessibility Guidelines and Practices

This document outlines the accessibility guidelines and practices for the project.

## Accessibility Overview

The project follows WCAG 2.1 Level AA guidelines and implements comprehensive accessibility features:

- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast
- Focus management

## Semantic HTML

### 1. Proper HTML Structure

```typescript
// Semantic HTML structure
const Layout = ({ children }) => (
  <div role="document">
    <header role="banner">
      <nav role="navigation" aria-label="Main navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main role="main">
      {children}
    </main>
    
    <footer role="contentinfo">
      <p>&copy; 2024 Your Company</p>
    </footer>
  </div>
);
```

### 2. Form Elements

```typescript
// Accessible form elements
const LoginForm = () => (
  <form onSubmit={handleSubmit} noValidate>
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        aria-required="true"
        aria-invalid={errors.email ? 'true' : 'false'}
        aria-describedby="email-error"
      />
      {errors.email && (
        <div id="email-error" role="alert">
          {errors.email}
        </div>
      )}
    </div>
    
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        aria-required="true"
      />
    </div>
    
    <button type="submit">Login</button>
  </form>
);
```

### 3. Tables

```typescript
// Accessible tables
const DataTable = ({ data }) => (
  <div role="region" aria-label="User data table">
    <table>
      <caption>User Information</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
```

## ARIA Attributes

### 1. Dynamic Content

```typescript
// ARIA live regions
const NotificationSystem = () => (
  <div
    role="alert"
    aria-live="polite"
    aria-atomic="true"
  >
    {notification}
  </div>
);

// Progress indicators
const ProgressBar = ({ progress }) => (
  <div
    role="progressbar"
    aria-valuenow={progress}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div style={{ width: `${progress}%` }} />
  </div>
);
```

### 2. Interactive Elements

```typescript
// Accessible buttons
const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    aria-pressed="false"
    aria-label="Toggle menu"
  >
    {children}
  </button>
);

// Accessible dialogs
const Dialog = ({ isOpen, onClose, children }) => (
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="dialog-title"
    hidden={!isOpen}
  >
    <h2 id="dialog-title">Dialog Title</h2>
    {children}
    <button onClick={onClose}>Close</button>
  </div>
);
```

### 3. Landmarks

```typescript
// Page landmarks
const PageLayout = () => (
  <div>
    <header role="banner">
      <nav role="navigation" aria-label="Main navigation">
        {/* Navigation content */}
      </nav>
    </header>
    
    <main role="main">
      <article role="article">
        {/* Main content */}
      </article>
      
      <aside role="complementary">
        {/* Sidebar content */}
      </aside>
    </main>
    
    <footer role="contentinfo">
      {/* Footer content */}
    </footer>
  </div>
);
```

## Keyboard Navigation

### 1. Focus Management

```typescript
// Focus trap for modals
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0];
      firstFocusable.focus();
    }
  }, [isOpen]);
  
  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {children}
    </div>
  );
};
```

### 2. Skip Links

```typescript
// Skip to main content link
const SkipLink = () => (
  <a
    href="#main-content"
    className="skip-link"
    tabIndex={0}
  >
    Skip to main content
  </a>
);

// CSS for skip link
const styles = `
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
  }
  
  .skip-link:focus {
    top: 0;
  }
`;
```

### 3. Keyboard Shortcuts

```typescript
// Keyboard shortcut handler
const useKeyboardShortcut = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [key, callback]);
};
```

## Screen Reader Support

### 1. Hidden Content

```typescript
// Visually hidden but screen reader accessible
const VisuallyHidden = ({ children }) => (
  <span
    className="visually-hidden"
    aria-hidden="false"
  >
    {children}
  </span>
);

// CSS for visually hidden
const styles = `
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
```

### 2. Screen Reader Announcements

```typescript
// Screen reader announcements
const Announcement = ({ message }) => {
  const [announcement, setAnnouncement] = useState('');
  
  useEffect(() => {
    setAnnouncement(message);
  }, [message]);
  
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
};
```

### 3. Alternative Text

```typescript
// Image with alt text
const AccessibleImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    role="img"
    loading="lazy"
  />
);

// Decorative image
const DecorativeImage = ({ src }) => (
  <img
    src={src}
    alt=""
    role="presentation"
    aria-hidden="true"
  />
);
```

## Color Contrast

### 1. Color Palette

```typescript
// Color contrast utility
const getContrastRatio = (color1: string, color2: string) => {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

// Theme configuration
const theme = {
  colors: {
    primary: {
      main: '#007AFF',
      light: '#47A1FF',
      dark: '#0055B3',
      contrast: '#FFFFFF'
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
      disabled: '#999999'
    }
  }
};
```

### 2. Focus States

```typescript
// Focus styles
const styles = `
  :focus {
    outline: 2px solid #007AFF;
    outline-offset: 2px;
  }
  
  :focus:not(:focus-visible) {
    outline: none;
  }
  
  :focus-visible {
    outline: 2px solid #007AFF;
    outline-offset: 2px;
  }
`;
```

## Testing Accessibility

### 1. Automated Testing

```typescript
// Jest accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<MyComponent />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### 2. Manual Testing

```typescript
// Accessibility testing checklist
const accessibilityChecklist = {
  keyboard: [
    'Can navigate using Tab key',
    'Can navigate using Shift+Tab',
    'Focus is visible',
    'No keyboard traps'
  ],
  screenReader: [
    'All interactive elements are announced',
    'Form labels are properly associated',
    'Error messages are announced',
    'Dynamic content updates are announced'
  ],
  visual: [
    'Color contrast meets WCAG 2.1 AA',
    'Text is resizable',
    'Content is readable at 200% zoom',
    'No content is lost at different zoom levels'
  ]
};
```

### 3. Lighthouse Testing

```javascript
// Lighthouse accessibility configuration
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000'],
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'accessibility:aria-allowed-attr': ['error', { minScore: 1 }],
        'accessibility:aria-required-attr': ['error', { minScore: 1 }],
        'accessibility:aria-valid-attr-value': ['error', { minScore: 1 }],
        'accessibility:aria-valid-attr': ['error', { minScore: 1 }],
        'accessibility:button-name': ['error', { minScore: 1 }],
        'accessibility:color-contrast': ['error', { minScore: 1 }],
        'accessibility:document-title': ['error', { minScore: 1 }],
        'accessibility:html-has-lang': ['error', { minScore: 1 }],
        'accessibility:landmark-one-main': ['error', { minScore: 1 }],
        'accessibility:meta-viewport': ['error', { minScore: 1 }],
        'accessibility:object-alt': ['error', { minScore: 1 }],
        'accessibility:tabindex': ['error', { minScore: 1 }]
      }
    }
  }
};
```

## Accessibility Resources

### 1. Documentation

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)

### 2. Tools

- [axe DevTools](https://www.deque.com/axe/)
- [WAVE Web Accessibility Tool](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 3. Testing Tools

- [jest-axe](https://github.com/nickcolley/jest-axe)
- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)
- [pa11y](https://github.com/pa11y/pa11y)

## Accessibility Checklist

### 1. Content

- [ ] All images have alt text
- [ ] Form fields have labels
- [ ] Error messages are clear
- [ ] Content is properly structured
- [ ] Color is not the only means of conveying information
- [ ] Text is readable and resizable
- [ ] Links have clear purpose
- [ ] Tables have proper headers

### 2. Structure

- [ ] Proper heading hierarchy
- [ ] Semantic HTML elements
- [ ] ARIA landmarks
- [ ] Skip links
- [ ] Focus management
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Dynamic content updates

### 3. Design

- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Focus indicators are visible
- [ ] Interactive elements are properly sized
- [ ] No content flashing
- [ ] Responsive design
- [ ] Touch targets are large enough
- [ ] Text is properly spaced
- [ ] Forms are properly labeled

### 4. Testing

- [ ] Automated accessibility testing
- [ ] Manual keyboard testing
- [ ] Screen reader testing
- [ ] Color contrast testing
- [ ] Responsive design testing
- [ ] Cross-browser testing
- [ ] User testing with assistive technologies
- [ ] Regular accessibility audits 