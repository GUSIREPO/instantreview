"use client";

import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  /** Override the palette — expects up to 10 hex values */
  colors?: string[];
  /** Override the overlay palette */
  overlayColors?: string[];
  /** Animation speed for the main gradient (default 0.3) */
  speed?: number;
  /** Extra Tailwind / CSS classes on the wrapper */
  className?: string;
}

/**
 * Animated MeshGradient background using @paper-design/shaders-react.
 *
 * Renders two stacked layers:
 *  1. A rich colour mesh gradient
 *  2. A semi-transparent grain overlay for depth
 *
 * Intended to be placed inside a `position: relative; overflow: hidden`
 * container so it fills the background without affecting content flow.
 */
export default function ShaderBackground({
  colors = ["#001a1c", "#00848e", "#006970", "#164e63", "#ff6d00"],
  overlayColors = ["#001a1c", "#ffffff", "#00848e", "#ff6d00"],
  speed = 0.8,
  className = "",
}: ShaderBackgroundProps) {
  return (
    <>
      {/* SVG filter definitions used across the page */}
      <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02  0 1 0 0 0.02  0 0 1 0 0.05  0 0 0 0.9 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      {/* Primary mesh gradient */}
      <MeshGradient
        className={`absolute inset-0 w-full h-full ${className}`}
        colors={colors}
        speed={speed}
        distortion={0.6}
        swirl={0.5}
      />

      {/* Subtle overlay for depth + grain */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-35"
        colors={overlayColors}
        speed={speed * 0.5}
        distortion={0.5}
        swirl={0.4}
        grainMixer={0.1}
        grainOverlay={0.06}
      />
    </>
  );
}
