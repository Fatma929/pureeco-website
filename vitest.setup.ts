import '@testing-library/jest-dom'

// Mock IntersectionObserver for components that use useReveal
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver
