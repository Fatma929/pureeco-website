// Feature: pureeco-marketing-site, Property 2: Services section always renders exactly four cards with complete content
// Validates: Requirements 4.1, 4.4

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import * as fc from 'fast-check'
import { ServicesSection } from '../ServicesSection'

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

describe('ServicesSection – Property 2: Services section always renders exactly four cards with complete content', () => {
  let container: HTMLElement

  beforeEach(() => {
    ;({ container } = render(<ServicesSection />))
  })

  afterEach(() => {
    cleanup()
  })

  it('renders exactly four cards, each with a non-empty title, description ≤30 words, and an icon', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        // --- Card count: exactly 4 h3 headings (one per card) ---
        const titles = container.querySelectorAll('h3')
        expect(titles).toHaveLength(4)

        // --- Each title is non-empty ---
        for (const title of Array.from(titles)) {
          expect(title.textContent?.trim().length).toBeGreaterThan(0)
        }

        // --- Each card description: <p> whose direct parent also contains an <h3> sibling ---
        const allParagraphs = Array.from(container.querySelectorAll('p'))
        const cardDescriptions = allParagraphs.filter((p) => {
          const parent = p.parentElement
          if (!parent) return false
          return Array.from(parent.children).some((child) => child.tagName === 'H3')
        })

        expect(cardDescriptions).toHaveLength(4)

        for (const desc of cardDescriptions) {
          const text = desc.textContent ?? ''
          expect(text.trim().length).toBeGreaterThan(0)
          expect(countWords(text)).toBeLessThanOrEqual(30)
        }

        // --- Each card has an icon: SVG with aria-hidden="true" inside the card grid ---
        const icons = container.querySelectorAll('svg[aria-hidden="true"]')
        expect(icons.length).toBeGreaterThanOrEqual(4)
      }),
      { numRuns: 100 }
    )
  })
})
