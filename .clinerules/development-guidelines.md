# Development Guidelines

This document outlines the development practices and guidelines for the Lorentzian Geometry Visualization project.

## Code Style

- Use TypeScript for all new code
- Follow ESLint rules configured in the project
- Use functional components, written as normal functions with hooks for React components
- Use named exports for components and utilities

## Component Structure

- Each component should have a single responsibility
- Use the Context API for shared state (see `VelocityContext.tsx`)
- Keep components small and focused
- Extract reusable logic into custom hooks

## Styling

- Use Tailwind CSS utility classes for styling
- Follow the project's color scheme and design system
- Use responsive design principles
- Avoid inline styles unless absolutely necessary

## Performance Considerations

- Memoize expensive calculations
- Use React.memo for components that render often but rarely change
- Be mindful of re-renders in components that display visualizations
- Consider using useCallback for functions passed as props

## Physics Accuracy

- Ensure all physics calculations are accurate according to special relativity
- Document the mathematical basis for calculations in comments
- Use appropriate units and conversions
- Validate visualizations against known examples

## Accessibility

- Ensure all interactive elements are keyboard accessible
- Use semantic HTML elements
- Provide appropriate ARIA attributes
- Ensure sufficient color contrast for text

## Testing

- Write tests for physics calculations
- Test edge cases (e.g., velocities approaching c)
- Ensure visualizations render correctly at different screen sizes

## Documentation

- Document complex physics concepts
- Add JSDoc comments to functions and components
- Keep the README updated with setup and usage instructions
