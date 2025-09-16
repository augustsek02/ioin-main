const standards = [
  { code: 'ISO 27001', sub: 'Security Management' },
  { code: 'ONVIF', sub: 'Video Interop' },
  { code: 'OCPP', sub: 'EV Charging' },
  { code: 'REST / gRPC', sub: 'APIs' },
  { code: 'SLA', sub: 'Determinism & SLOs' },
]

export default function StandardsStrip() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="mx-auto max-w-7xl px-6 py-20 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-white">Industry Standards & Compliance</h2>
          <p className="mt-3 max-w-3xl mx-auto text-slate-300">Built to meet the highest industry standards and regulatory requirements.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-8">
        {standards.map((s) => (
          <div key={s.code} className="flex min-w-[160px] flex-col items-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-base font-semibold text-white">{s.code}</span>
            <span className="text-sm text-slate-300 mt-1">{s.sub}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

