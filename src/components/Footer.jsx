import AuroraBackground from '../components/AuroraBackground';

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white overflow-hidden" role="contentinfo">
      {/* Aurora background visible behind footer and slightly above */}
      <div className="absolute -top-16 -z-20 inset-x-0 h-[250px]">
        <AuroraBackground />
      </div>

      {/* Soft multi-color gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-emerald-500/10" />

      {/* Top and bottom fade overlays */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/70 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-medium">IOIN</div>
          <p className="text-xs text-white/70">Run it twice, same result.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-white/80">
          <a
            className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-600"
            href="/product"
          >
            Product
          </a>
          <a
            className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-600"
            href="/security-policy"
          >
            Security policy
          </a>
          <a
            className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-600"
            href="/privacy-policy"
          >
            Privacy policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
