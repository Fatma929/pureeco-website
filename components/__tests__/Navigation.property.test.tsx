// Feature: pureeco-marketing-site, Property 1: Active navigation link reflects current route
// Validates: Requirements 1.5

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as fc from 'fast-check'
import { Navigation } from '../Navigation'

// Mock next/navigation's usePathname
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}))

// Mock next/link to render a plain anchor so we can inspect href/style
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

import { usePathname } from 'next/navigation'

// jsdom converts #00FF87 to rgb(0, 255, 135)
const ACTIVE_COLOR = 'rgb(0, 255, 135)'

// The three nav link labels (excludes logo and CTA button)
const NAV_LABELS = ['Home', 'About', 'Contact']
const NAV_HREFS = ['/', '/about', '/contact']

describe('Navigation – Property 1: Active navigation link reflects current route', () => {
  it('renders exactly one active nav link matching the current pathname', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...NAV_HREFS),
        (pathname) => {
          vi.mocked(usePathname).mockReturnValue(pathname)

          const { unmount } = render(<Navigation />)

          // Get only the three named nav links (Home, About, Contact) — excludes logo and CTA
          const navLinks = NAV_LABELS.map((label) => screen.getAllByRole('link', { name: label })[0])

          // Count links whose inline color style matches the active color
          const activeLinks = navLinks.filter((link) => {
            return (link as HTMLElement).style.color === ACTIVE_COLOR
          })

          // Exactly one active link
          expect(activeLinks).toHaveLength(1)

          // The active link's href must match the current pathname
          expect(activeLinks[0].getAttribute('href')).toBe(pathname)

          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })
})
