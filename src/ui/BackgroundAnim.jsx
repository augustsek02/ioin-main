import React from 'react'
import Threads from './Threads'
import Squares from './Squares'
import RippleGrid from './RippleGrid'

export default function BackgroundAnim({
  variant = 'squares',
  className = '',
  intensity = 1,
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`} aria-hidden>
      {variant === 'threads' && (
        <Threads
          style={{ width: '100%', height: '100%' }}
          color={[0.6, 0.7, 1.0]}
          amplitude={0.8 * intensity}
          distance={0.2}
          enableMouseInteraction={false}
        />
      )}
      {variant === 'squares' && (
        <div className="w-full h-full">
          <Squares
            direction="diagonal"
            speed={0.3 * intensity}
            borderColor="rgba(255,255,255,0.06)"
            squareSize={56}
            hoverFillColor="rgba(255,255,255,0.04)"
          />
        </div>
      )}
      {variant === 'ripple' && (
        <RippleGrid
          enableRainbow={false}
          gridColor="#88aaff"
          rippleIntensity={0.06 * intensity}
          gridSize={9.0}
          gridThickness={12.0}
          fadeDistance={1.6}
          vignetteStrength={2.2}
          glowIntensity={0.08}
          opacity={0.8}
          gridRotation={15}
          mouseInteraction={false}
          mouseInteractionRadius={1}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  )
}



