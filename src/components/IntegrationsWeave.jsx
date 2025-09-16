export default function IntegrationsWeave() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="mx-auto max-w-7xl px-6 py-20 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-white">Integrations that hold under pressure</h2>
          <p className="mt-3 max-w-3xl mx-auto text-slate-300">From legacy systems to modern APIs—IOIN stitches them together with observability and guarantees.</p>
          <p className="mt-4 text-sm text-slate-400">Deterministic • Idempotent • Observable</p>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
        <svg viewBox="0 0 900 420" className="h-[380px] w-full" aria-hidden>
          <defs>
            <linearGradient id="w1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left sources */}
          {[
            { y: 60, label: 'VMS / Cameras' },
            { y: 140, label: 'Access Control' },
            { y: 220, label: 'Parking / Mobility' },
            { y: 300, label: 'Sensors / IoT' },
          ].map((n, i) => (
            <g key={n.label} transform={`translate(80, ${n.y})`}>
              <rect x="-70" y="-18" width="140" height="36" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
              <text x="0" y="6" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.95)">{n.label}</text>
              <animateTransform attributeName="transform" additive="sum" type="translate" values={`0,-1; 0,1; 0,-1`} dur={`${6 + i}s`} repeatCount="indefinite" keyTimes="0;0.5;1" keySplines=".42 0 .58 1; .42 0 .58 1" calcMode="spline" />
            </g>
          ))}

          {/* Weave core */}
          <g stroke="url(#w1)" strokeWidth="2.5" fill="none" opacity="0.9" strokeLinecap="round">
            {[60, 140, 220, 300].map((y, i) => (
              <path key={y} d={`M150 ${y} C 300 ${y - 50}, 420 ${y + 50}, 560 210 S 760 ${y}, 820 ${y}`} strokeDasharray="8 12">
                <animate attributeName="stroke-dashoffset" from="0" to="-360" dur={`${8 - i * 1}s`} repeatCount="indefinite" />
              </path>
            ))}
          </g>

          {/* Right targets */}
          {[
            { y: 100, label: 'APIs' },
            { y: 210, label: 'Data Lake' },
            { y: 320, label: 'Dashboards' },
          ].map((n, i) => (
            <g key={n.label} transform={`translate(820, ${n.y})`}>
              <rect x="-70" y="-18" width="140" height="36" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
              <text x="0" y="6" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.95)">{n.label}</text>
              <animateTransform attributeName="transform" additive="sum" type="translate" values={`0,-1; 0,1; 0,-1`} dur={`${6 + i}s`} repeatCount="indefinite" keyTimes="0;0.5;1" keySplines=".42 0 .58 1; .42 0 .58 1" calcMode="spline" />
            </g>
          ))}

          {/* Moving packets */}
          {[60, 140, 220, 300].map((y, i) => (
            <g key={`pkt-${y}`}>
              <circle r="5" fill="#7dd3fc" filter="url(#glow2)">
                <animateMotion path={`M150 ${y} C 300 ${y - 50}, 420 ${y + 50}, 560 210 S 760 ${y}, 820 ${y}`} dur={`${9 - i}s`} repeatCount="indefinite" rotate="auto" keyTimes="0;0.5;1" keySplines=".42 0 .58 1; .42 0 .58 1" calcMode="spline" />
              </circle>
              <circle r="3" fill="#34d399" opacity="0.95">
                <animateMotion path={`M150 ${y} C 300 ${y - 50}, 420 ${y + 50}, 560 210 S 760 ${y}, 820 ${y}`} dur={`${7.5 - i * 0.8}s`} begin={`${0.6 + i * 0.3}s`} repeatCount="indefinite" rotate="auto" keyTimes="0;0.5;1" keySplines=".42 0 .58 1; .42 0 .58 1" calcMode="spline" />
              </circle>
            </g>
          ))}

          {/* Center badge */}
          <g transform="translate(560,210)">
            <circle r="44" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.2)" />
            <text x="0" y="4" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.95)">IOIN Middleware</text>
          </g>
        </svg>
        </div>
      </div>
    </div>
  )
}

