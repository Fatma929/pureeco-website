// Feature: pureeco-marketing-site, Property 4: Industries section renders at least five items, each with label and icon
// Validates: Requirements 7.1, 7.2

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import * as fc from 'fast-check'
import { IndustriesSection } from '../IndustriesSection'

describe('IndustriesSection – Property 4: Industries section renders at least five items, each with label and icon', () => {
  let container: HTMLElement

  beforeEach(() => {
    ;({ container } = render(<IndustriesSection />))
  })

  afterEach(() => {
    cleanup()
  })

  it('renders at least five industry items, each with a non-empty label and an icon element', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        // Priority sectors use <h3> for labels; additional sectors use <span> inside flex-col divs.
        // Collect all industry labels: h3 elements (priority cards) + spans inside the additional grid.
        const priorityLabels = Array.from(container.querySelectorAll('h3'))
        const additionalLabels = Array.from(
          container.querySelectorAll('div.flex.flex-col span')
        )
        const allLabels = [...priorityLabels, ...additionalLabels]

        // At least 5 industry items total
        expect(allLabels.length).toBeGreaterThanOrEqual(5)

        // Each label is non-empty
        for (const label of allLabels) {
          expect(label.textContent?.trim().length).toBeGreaterThan(0)
        }

        // Each industry item has an associated SVG icon (lucide renders <svg> elements)
        const svgIcons = container.querySelectorAll('svg')
        expect(svgIcons.length).toBeGreaterThanOrEqual(allLabels.length)
      }),
      { numRuns: 100 }
    )
  })
})
