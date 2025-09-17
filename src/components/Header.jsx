import { useEffect, useMemo, useState } from 'react'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'what-we-do', label: 'What we do' },
      { id: 'industries', label: 'Industries' },
      { id: 'how-we-build', label: 'How we build' },
      { id: 'agentic', label: 'AI & Agentic' },
      { id: 'cv', label: 'Computer Vision' },
      { id: 'partners', label: 'Partners' },
      { id: 'security', label: 'Security' },
      { id: 'projects', label: 'Projects' },
      { id: 'ops-faq', label: 'Ops & FAQ' },
    ],
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) {
          history.replaceState(null, '', `#${visible.target.id}`)
          document.querySelectorAll('[data-nav-link]').forEach((el) =>
            el.classList.remove('text-cyan-400', 'font-semibold'),
          )
          const active = document.querySelector(
            `[data-nav-link][href="#${visible.target.id}"]`,
          )
          if (active) {
            active.classList.add('text-cyan-400', 'font-semibold')
            active.setAttribute('aria-current', 'page')
          }
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.2 },
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])
  const handleLinkClick = () => {
    setIsNavOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <a
        href="#page-scroll"
        className="absolute left-4 top-4 z-50 p-2 bg-white text-slate-900 rounded-md -translate-y-8 opacity-0 focus:translate-y-0 focus:opacity-100 transition-all"
      >
        Skip to main content
      </a>

      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/60 backdrop-blur-md shadow-sm">
          <nav aria-label="Primary" className="flex items-center justify-between gap-4 px-4 py-3">
            <a href="#hero" className="font-semibold text-slate-900" aria-label="IOIN Home">
              IOIN
            </a>
            <div className="hidden md:flex items-center gap-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  data-nav-link
                  href={`#${s.id}`}
                  className="text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={isNavOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </nav>
          {isNavOpen && (
            <div className="md:hidden border-t border-white/20 bg-white/50 py-4 px-3 backdrop-blur-sm">
              <div className="space-y-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    data-nav-link
                    onClick={handleLinkClick}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}