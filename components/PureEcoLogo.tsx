interface PureEcoLogoProps {
  /** Height of the logo in px — width scales proportionally */
  height?: number
  /** Override the icon color (default: #4ADE80) */
  iconColor?: string
  /** Override the text color (default: #FFFFFF) */
  textColor?: string
  className?: string
}

/**
 * PureEco wordmark + leaf-circle icon — pure SVG, no raster images.
 *
 * Icon anatomy:
 *  - Outer circle ring (brand green)
 *  - Stylised leaf formed by two arcs meeting at a point (filled, brand green)
 *  - Thin stem line rising from the leaf base
 */
export function PureEcoLogo({
  height = 36,
  iconColor = '#4ADE80',
  textColor = '#FFFFFF',
  className = '',
}: PureEcoLogoProps) {
  // The SVG viewBox is 160 × 36; icon occupies the left 36 × 36 square
  return (
    <svg
      viewBox="0 0 160 36"
      height={height}
      width={(160 / 36) * height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PureEco"
      role="img"
      className={className}
    >
      {/* ── Icon: circle ring ── */}
      <circle cx="18" cy="18" r="16" stroke={iconColor} strokeWidth="1.5" />

      {/* ── Icon: leaf shape (two bezier arcs) ── */}
      {/* Left arc: from stem-base (18,26) curving left to tip (18,8) */}
      {/* Right arc: from tip (18,8) curving right back to stem-base (18,26) */}
      <path
        d="M18 26 C10 22 8 12 18 8 C28 12 26 22 18 26Z"
        fill={iconColor}
        opacity="0.9"
      />

      {/* ── Icon: stem ── */}
      <line x1="18" y1="26" x2="18" y2="30" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Wordmark: Pure ── */}
      <text
        x="42"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.04em"
        fill={iconColor}
      >
        Pure
      </text>

      {/* ── Wordmark: Eco ── */}
      <text
        x="84"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.04em"
        fill={textColor}
      >
        Eco
      </text>
    </svg>
  )
}
