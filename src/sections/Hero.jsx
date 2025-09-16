
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { containerStagger, fadeInUp } from "../anim/variants.js";
import AuroraBackground from '../components/AuroraBackground';

export default function SectionHero() {
  const chipRefs = useRef([]);
  const [overlaySubhead, setOverlaySubhead] = useState(true);

  
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = chipRefs.current.filter(Boolean);
    if (prefersReduced) {
      els.forEach((el) => el?.setAttribute("data-visible", "true"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset?.idx || 0);
            setTimeout(() => entry.target.setAttribute("data-visible", "true"), idx * 80);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

 
  useEffect(() => {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    const off =
      html.dataset?.overlaySubhead === "0" ||
      new URLSearchParams(window.location.search).get("overlay") === "0";
    setOverlaySubhead(!off);
  }, []);

  
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
     
      document.documentElement.style.scrollBehavior = 'smooth';
      
     
      const handleAnchorClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      };
      
      document.addEventListener('click', handleAnchorClick);
      
      return () => {
        
        document.documentElement.style.scrollBehavior = '';
        document.removeEventListener('click', handleAnchorClick);
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-svh overflow-clip reveal flex items-center justify-center"
      style={{ contentVisibility: "auto", containIntrinsicSize: "960px 720px" }}
      aria-label="Hero"
    >
      
      <div className="absolute inset-0 z-0">
        <AuroraBackground />
      </div>
      
      
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      
      
      <div 
        className="relative z-10 w-full max-w-4xl px-6 text-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
          className="space-y-6"
        >
          
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur"
            variants={fadeInUp}
          >
            
          </motion.p>
          
          
          <motion.h1
            className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mx-auto"
            variants={fadeInUp}
          >
            We Integrate Security Systems
            <br />
            
          </motion.h1>
          
          
          {overlaySubhead && (
            <motion.p
              className="mt-4 max-w-2xl text-pretty text-lg text-white/80 mx-auto"
              variants={fadeInUp}
            >
              Purpose-built software, designed from the ground up for{" "}
              <b className="text-white">reliability</b> and{" "}
              <b className="text-white">security</b>.{" "}
              <br className="hidden md:block" />
              <i className="text-white/70">"Run it twice, same result."</i>
            </motion.p>
          )}
          
         
          <motion.ul
            aria-label="Assurances and compliance"
            role="list"
            className="mt-8 sm:mt-10 md:mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base"
            variants={containerStagger}
          >
            {[
               { txt: 'GDPR-aligned', desc: 'Privacy-first design and GDPR alignment' },
               { txt: 'Data minimisation', desc: 'We minimise stored data by default' },
               { txt: 'Residency on request (EU/UK/AU)', desc: 'Data residency available on request' },
               { txt: 'Confirm-first (HITL)', desc: 'Human-in-the-loop confirmation by default' },
               { txt: 'Audit trails by default', desc: 'Automatic audit trails for actions' },
            ].map((c, i) => (
              <motion.li
                key={c.txt}
                className="list-none"
                variants={fadeInUp}
              >
                <span
                  ref={(el) => (chipRefs.current[i] = el)}
                  data-idx={i}
                  tabIndex={0}
                  role="text"
                  className="inline-flex items-center gap-2 min-h-[36px] px-3 md:px-4 rounded-full relative select-none
                    border border-white/10 bg-white/5 backdrop-blur text-sm text-white/80
                    hover:-translate-y-0.5 active:translate-y-0 transition transform-gpu"
                  style={{ lineHeight: "1" }}
                  aria-label={c.txt}
                >
                  <span className="truncate">{c.txt}</span>
                  <span className="sr-only">{c.desc}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}