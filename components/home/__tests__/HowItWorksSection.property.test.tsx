// Feature: pureeco-marketing-site, Property 3: How It Works section always renders exactly three steps with complete content
// Validates: Requirements 6.1, 6.2

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import * as fc from 'fast-check'
import { HowItWorksSection } from '../HowItWorksSection'

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

describe('HowItWorksSection – Property 3: How It Works section always renders exactly three steps with complete content', () => {
  let container: HTMLElement

  beforeEach(() => {
    ;({ container } = render(<HowItWorksSection />))
  })

  afterEach(() => {
    cleanup()
  })

  it('renders exactly three steps, each with a non-empty title and description ≤20 words', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        // --- Step count: exactly 3 h3 headings (one per step) ---
        const titles = container.querySelectorAll('h3')
        expect(titles).toHaveLength(3)

        // --- Each title is non-empty ---
        for (const title of Array.from(titles)) {
          expect(title.textContent?.trim().length).toBeGreaterThan(0)
        }

        // --- Each step description: <p> whose direct parent also contains an <h3> sibling ---
        const allParagraphs = Array.from(container.querySelectorAll('p'))
        const stepDescriptions = allParagraphs.filter((p) => {
          const parent = p.parentElement
          if (!parent) return false
          return Array.from(parent.children).some((child) => child.tagName === 'H3')
        })

        expect(stepDescriptions).toHaveLength(3)

        for (const desc of stepDescriptions) {
          const text = desc.textContent ?? ''
          expect(text.trim().length).toBeGreaterThan(0)
          expect(countWords(text)).toBeLessThanOrEqual(20)
        }
      }),
      { numRuns: 100 }
    )
  })
})
