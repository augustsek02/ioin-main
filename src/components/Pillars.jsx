const pillars = [
  {
    title: 'Purpose-built middleware',
    blurb: 'Connect disparate systems with deterministic behavior and clear contracts.',
    points: ['Protocol translation', 'Event normalization', 'Data routing']
  },
  {
    title: 'Secure & reliable integrations',
    blurb: 'Hardened pipelines with idempotency, retries, and observability.',
    points: ['Least-privilege access', 'Auditability', 'SLA-driven design']
  },
  {
    title: 'Automation & agentic (in development)',
    blurb: 'Workflow orchestration and policy-driven actions across systems.',
    points: ['Rules engine', 'Task automation', 'Human-in-the-loop']
  },
  {
    title: 'Computer vision (in development)',
    blurb: 'Video analytics for safety, mobility, and estates signal extraction.',
    points: ['Edge + cloud', 'Privacy by design', 'Accuracy benchmarking']
  }
]

export default function Pillars() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="mx-auto max-w-7xl px-6 py-20 w-full">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-white">What we deliver</h2>
        <p className="mt-3 max-w-3xl text-slate-300">Solutions to spec and industry standards. Built for councils and private industry alike.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-300/90">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

