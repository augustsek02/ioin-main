import Hero from '../components/Hero'
import SectionWhatWeDo from '../sections/WhatWeDo'
import Pillars from '../components/Pillars'
import IntegrationsWeave from '../components/IntegrationsWeave'
import StandardsStrip from '../components/StandardsStrip'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <Hero />
      </section>
      <SectionWhatWeDo />
      <section className="relative min-h-svh">
        <Pillars />
      </section>
      <section className="relative min-h-svh">
        <IntegrationsWeave />
      </section>
      <section className="relative min-h-svh">
        <StandardsStrip />
      </section>
      <footer className="border-t border-white/10">
        <Footer />
      </footer>
    </main>
  )
}

