# Technology Stack

This project is built with the following technologies:

## Core Framework
- **Vite 6.3+**: Fast build tool and development server
- **React 19.0+**: UI library for building component-based interfaces

## Styling
- **Tailwind CSS 4.1+**: Utility-first CSS framework
  - Using `@tailwindcss/vite` plugin for Vite integration
  - Using `@tailwindcss/postcss` for PostCSS integration

## Language
- **TypeScript 5.7+**: Typed JavaScript for better developer experience and code quality

## Development Tools
- **ESLint 9.22+**: For code linting
- **Bun**: Package manager and runtime

## Visualization Libraries
- **@visx/visx**: For data visualization components
- **mathjax-react**: For rendering mathematical equations

## Project Structure
- Standard Vite + React project structure
- Component-based architecture
- Context API for state management (see `src/context/VelocityContext.tsx`)

## Build Process
- TypeScript compilation
- Vite bundling
- PostCSS processing with Tailwind

## Development Workflow
- Use `bunx vite dev` to start the development server
- Use `bunx vite build` to create a production build
- Use `bunx vite preview` to preview the production build locally
