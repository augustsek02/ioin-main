import { useEffect, useMemo, useState } from 'react'

const THEMES = [
  { id: 'noir', name: 'Noir Aurora', bg: 'bg-noir-900', text: 'text-white' },
  { id: 'city', name: 'City Grid', bg: 'bg-white', text: 'text-noir-900' },
  { id: 'neo', name: 'Neo-Industrial', bg: 'bg-noir-800', text: 'text-white' },
]

export default function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'noir')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Skip link for keyboard users */}
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
            <div className="hidden items-center gap-4 md:flex">
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
            <div className="flex items-center gap-2">
              <label htmlFor="theme" className="sr-only">
                Theme
              </label>
              <select
                id="theme"
                className="rounded-md border border-slate-300 bg-white/80 px-2 py-1 text-sm text-slate-900"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                {THEMES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
