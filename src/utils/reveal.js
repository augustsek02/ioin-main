export function mountReveals() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function makeVisible(el) {
    el.classList.add('reveal-visible')
  }

  if (prefersReduced || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(makeVisible)
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) makeVisible(e.target)
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
  )

  
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return
        if (node.classList?.contains('reveal')) io.observe(node)
        node.querySelectorAll?.('.reveal').forEach((el) => io.observe(el))
      })
    }
  })
  mo.observe(document.body, { childList: true, subtree: true })
}


