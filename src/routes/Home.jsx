import { lazy, Suspense } from 'react'

const Hero = lazy(() => import('../sections/Hero.jsx'))
const WhatWeDo = lazy(() => import('../sections/WhatWeDo.jsx'))
const Industries = lazy(() => import('../sections/Industries.jsx'))
const HowWeBuild = lazy(() => import('../sections/HowWeBuild.jsx'))
const Agentic = lazy(() => import('../sections/Agentic.jsx'))
const CV = lazy(() => import('../sections/CV.jsx'))
const Partners = lazy(() => import('../sections/Partners.jsx'))
const Security = lazy(() => import('../sections/Security.jsx'))
const Projects = lazy(() => import('../sections/Projects.jsx'))
const OpsFaq = lazy(() => import('../sections/OpsFaq.jsx'))

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-noir-900 text-white">
      <Suspense fallback={<div className="sr-only">Loading Hero…</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading What We Do…</div>}>
        <WhatWeDo />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading Industries…</div>}>
        <Industries />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading How We Build…</div>}>
        <HowWeBuild />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading Agentic…</div>}>
        <Agentic />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading Computer Vision…</div>}>
        <CV />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading Partners…</div>}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading Security…</div>}>
        <Security />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading Projects…</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="sr-only">Loading Ops & FAQ…</div>}>
        <OpsFaq />
      </Suspense>
    </main>
  )
}


