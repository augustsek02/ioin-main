import { useEffect, useMemo, useState } from 'react'

function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return [path, setPath]
}

const scrollPositions = new Map()

export default function SimpleRouter({ routes }) {
  const [path, setPath] = usePathname()
  const Element = useMemo(() => routes[path] || routes['/'], [routes, path])
  const [fadeKey, setFadeKey] = useState(() => path)

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href]')
      if (!a) return
      const url = new URL(a.href)
      if (url.origin !== location.origin) return
      if (a.getAttribute('href').startsWith('#')) return
      e.preventDefault()
      navigate(url.pathname)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  function navigate(nextPath) {
    // Save current scroll
    scrollPositions.set(path, window.scrollY)
    window.history.pushState({}, '', nextPath)
    setFadeKey(nextPath + ':' + Date.now())
    setPath(nextPath)
    // Restore scroll for path or top
    const y = scrollPositions.get(nextPath) ?? 0
    window.scrollTo({ top: y, behavior: 'instant' })
  }

  return (
    <div className="route-fade" key={fadeKey}>
      <Element />
      <style>{`.route-fade{animation:route-fade .35s ease both}@keyframes route-fade{from{opacity:.6;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}


