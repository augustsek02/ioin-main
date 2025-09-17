import React from 'react';
import { motion } from "framer-motion";
import { Link, Settings, Eye, Shield } from 'lucide-react'; 

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const pillars = [
  {
    title: 'Connect',
    desc: 'Retry-safe data flows between platforms (e.g., Genetec ↔ EasyPark) with bidirectional sync and audit trails.',
    icon: Link,
  },
  {
    title: 'Orchestrate',
    desc: 'Rules and automation that drive decisions, escalations, and notifications across operations.',
    icon: Settings,
  },
  {
    title: 'Detect ',
    desc: 'Computer vision designed for high-confidence, corrective alerts with transparent thresholds.',
    icon: Eye,
  },
  {
    title: 'Assure',
    desc: 'Health checks, rollbacks, and visibility so changes are predictable and downtime is rare.',
    icon: Shield,
  },
];

function EnhancedIOINVisualization() {
  const STACK_X = 450;
  const STACK_Y = 300;
  const LAYER_HEIGHT = 80;

  const pathData = [
    "M110,380 Q200,340 280,320 Q360,300 450,300 Q550,300 650,240", 
    "M110,300 Q200,280 280,280 Q380,280 450,300 Q550,320 650,280", 
    "M110,220 Q200,200 280,220 Q380,240 450,300 Q550,360 650,320", 
  ];

  const inputEndpoints = [
    { x: 80, y: 380, label: 'Genetec', color: '#3b82f6', id: 'genetec' },
    { x: 80, y: 300, label: 'EasyPark', color: '#10b981', id: 'easypark' },
    { x: 80, y: 220, label: 'Avigilon', color: '#8b5cf6', id: 'avigilon' },
  ];

  const outputEndpoints = [
    { x: 680, y: 240, label: 'API Gateway', color: '#06b6d4', id: 'api-gateway' },
    { x: 680, y: 280, label: 'Rules Engine', color: '#10b981', id: 'rules-engine' },
    { x: 680, y: 320, label: 'Observability', color: '#f59e0b', id: 'observability' },
  ];

  const layers = [
    { name: 'Connect', gradient: 'g-connect', delay: 0, color: '#3b82f6', textColor: '#0F172A' },
    { name: 'Orchestrate', gradient: 'g-orchestrate', delay: 1, color: '#10b981', textColor: '#0F172A' },
    { name: 'Analyze', gradient: 'g-analyze', delay: 2, color: '#8b5cf6', textColor: '#0F172A' },
  ];

  return (
    <div className="relative aspect-[4/3] w-full max-w-2xl select-none overflow-visible">
      <svg
        viewBox="0 0 800 600"
        className="h-full w-full transition-transform duration-500 hover:scale-[1.01]"
        role="img"
        aria-label="IOIN Middleware Integration Visualization: Data flows from connected devices through orchestration to intelligent analysis"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient id="g-connect" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="g-orchestrate" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="g-analyze" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
          </linearGradient>         
          <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {pathData.map((d, i) => (
            <path key={`path-${i}`} id={`p${i + 1}`} d={d} />
          ))}
          <pattern id="particle-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="0.5" fill="rgba(96,165,250,0.05)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="800" height="600" fill="transparent" />
        

        {layers.map((layer, idx) => {
          const translateY = idx * LAYER_HEIGHT - (LAYER_HEIGHT * (layers.length - 1)) / 2;
          const baseY = STACK_Y + translateY;
          const isMiddle = idx === 1;

          return (
            <g key={layer.name} transform={`translate(${STACK_X - 100}, ${baseY})`} className="group">
              <polygon
                points="-100,-30 100,-30 120,-10 -80,-10"
                fill={`url(#${layer.gradient})`}
                stroke="rgba(15,23,42,0.2)"
                strokeWidth="1.5"
                filter="url(#glow-strong)"
                className="cursor-pointer transition-all duration-300 group-hover:scale-[1.02] group-hover:filter-none"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,-6; 0,0`}
                  dur="5s"
                  repeatCount="indefinite"
                  begin={`${layer.delay}s`}
                  calcMode="spline"
                  keySplines="0.4 0 0.6 1"
                />
              </polygon>
              <polygon
                points="-100,-30 -80,-10 -80,20 -100,0"
                fill={`rgba(${parseInt(layer.color.slice(1, 3), 16)}, ${parseInt(layer.color.slice(3, 5), 16)}, ${parseInt(layer.color.slice(5, 7), 16)}, 0.5)`}
                stroke="rgba(15,23,42,0.08)"
                strokeWidth="0.5"
              />
              <polygon
                points="100,-30 120,-10 120,20 100,0"
                fill={`rgba(${parseInt(layer.color.slice(1, 3), 16)}, ${parseInt(layer.color.slice(3, 5), 16)}, ${parseInt(layer.color.slice(5, 7), 16)}, 0.7)`}
                stroke="rgba(15,23,42,0.08)"
                strokeWidth="0.5"
              />
              <text
                x="0"
                y="-5"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#0F172A"
                className="drop-shadow[0_1px_2px_rgba(0,0,0,0.2)]"
              >
                {layer.name}
                {isMiddle && (
                  <tspan dx="0" dy="20" fontSize="10" fill="#0F172A">
                    
                  </tspan>
                )}
              </text>

              <title>{`${layer.name} Layer: Manages ${idx === 0 ? 'device connections' : idx === 1 ? 'workflow coordination' : 'AI-driven insights'}`}</title>
            </g>
          );
        })}

        {pathData.map((_, i) => {
          const layer = layers[i];
          return (
            <g key={`flow-${i}`}>
              <use
                href={`#p${i + 1}`}
                stroke={`url(#${layer.gradient})`}
                strokeWidth="2.5"
                fill="none"
                opacity="0.5"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,1000; 50,950; 100,900"
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.8}s`}
                  calcMode="spline"
                  keySplines="0.4 0 0.6 1"
                />
              </use>
            </g>
          );
        })}

       
        {pathData.map((_, i) => {
          const layer = layers[i];
          const packetSpeed = 8 - i;

          return (
            <g key={`packet-group-${i}`}>           
              <circle r="10" fill={`url(#${layer.gradient})`} opacity="0.15" filter="url(#glow-soft)">
                <animateMotion dur={`${packetSpeed}s`} repeatCount="indefinite" rotate="auto" begin={`${i * 0.7}s`}>
                  <mpath xlinkHref={`#p${i + 1}`} />
                </animateMotion>
              </circle>            
              <circle r="6" fill={`url(#${layer.gradient})`} filter="url(#glow-strong)">
                <animateMotion dur={`${packetSpeed}s`} repeatCount="indefinite" rotate="auto" begin={`${i * 0.7}s`}>
                  <mpath xlinkHref={`#p${i + 1}`} />
                </animateMotion>
              </circle>
              <circle
                r="2.5"
                fill={`url(#${layer.gradient})`}
                opacity="1"
                filter="url(#glow-soft)"
              >
                <animateMotion dur={`${packetSpeed}s`} repeatCount="indefinite" rotate="auto" begin={`${i * 0.7}s`}>
                  <mpath xlinkHref={`#p${i + 1}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
        {inputEndpoints.map((endpoint) => (
          <g key={endpoint.id} transform={`translate(${endpoint.x}, ${endpoint.y})`}>
            <rect x="-45" y="-18" width="90" height="36" rx="8" fill="rgba(255,255,255,0.8)" stroke={endpoint.color} strokeWidth="2" filter="url(#glow-soft)">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </rect>
            <circle cx="-30" cy="0" r="4" fill={endpoint.color} opacity="0.8">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
            </circle>
            <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0F172A">
              {endpoint.label}
            </text>
            <title>{`${endpoint.label}: Connected IoT Device`}</title>
          </g>
        ))}
        {outputEndpoints.map((endpoint) => (
          <g key={endpoint.id} transform={`translate(${endpoint.x}, ${endpoint.y})`}>
            <rect x="-55" y="-18" width="110" height="36" rx="8" fill="rgba(255,255,255,0.8)" stroke={endpoint.color} strokeWidth="2" filter="url(#glow-soft)">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin={endpoint.id === 'api-gateway' ? '0.5s' : '1s'} />
            </rect>
            <circle cx="40" cy="0" r="4" fill={endpoint.color} opacity="0.8">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" begin={endpoint.id === 'api-gateway' ? '0.5s' : '1s'} />
            </circle>
            <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0F172A">
              {endpoint.label}
            </text>
            <title>{`${endpoint.label}: Integrated System Endpoint`}</title>
          </g>
        ))}
        
      </svg>
    </div>
  );
}

export default function SectionWhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '960px 720px' }}
      aria-label="What we do"
    >
      <div className="section-anim-bg section-anim-light" />
      <div className="section-anim-blobs section-anim-light">
        <div className="section-blob blob-1" />
        <div className="section-blob blob-2" />
        <div className="section-blob blob-3" />
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8 w-full relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: '#0F172A' }}>
            What we do
          </h2>
          <p className="max-w-3xl mx-auto text-lg" style={{ color: '#0F172A', opacity: 0.8 }}>
            Purpose-built middleware to connect, orchestrate, detect and assure your operations.
          </p>
        </motion.div>

        <motion.div variants={containerStagger} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
            <EnhancedIOINVisualization />
          </motion.div>

          <motion.div variants={containerStagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 flex flex-col items-start gap-3"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-6 h-6 text-blue-500" />
                  <h3 className="mb-2 text-lg font-medium" style={{ color: '#0F172A' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#0F172A', opacity: 0.8 }}>
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}