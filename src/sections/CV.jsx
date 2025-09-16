import { motion } from 'framer-motion'
import { containerStagger, fadeInUp } from '../anim/variants.js'
import SectionBg from '../ui/SectionBg'
import React, { useState, useEffect } from 'react'
import { 
  ArrowRight, 
  Eye, 
  FileText, 
  Car, 
  CreditCard, 
  CheckCircle, 
  AlertCircle
} from 'lucide-react'

// ----- Card Components -----
const Card = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ children }) => <div className="p-6 pb-4">{children}</div>
const CardContent = ({ children, className = "" }) => <div className={`px-6 pb-6 ${className}`}>{children}</div>
const CardTitle = ({ children, className = "" }) => <h3 className={`text-xl font-semibold text-white ${className}`}>{children}</h3>
const CardDescription = ({ children }) => <p className="text-white/70 mt-1">{children}</p>

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    secondary: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
    outline: "bg-white/10 border-white/20 text-white/80"
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

const Progress = ({ value, className = "" }) => (
  <div className={`bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm ${className}`}>
    <motion.div 
      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  </div>
)

// ----- Workflow Visualization -----
const WorkflowVisualization = () => {
  const [activeStep, setActiveStep] = useState(0)
  const workflowSteps = [
    { id: 1, name: 'Input Image', icon: FileText, confidence: 100 },
    { id: 2, name: 'OCR Processing', icon: Eye, confidence: 95 },
    { id: 3, name: 'Detect Car', icon: Car, confidence: 88 },
    { id: 4, name: 'Detect Plate', icon: CreditCard, confidence: 92 },
    { id: 5, name: 'Read Plate', icon: FileText, confidence: 78 },
    { id: 6, name: 'Compare & Correct', icon: CheckCircle, confidence: 0 }
  ]

  useEffect(() => {
    const interval = setInterval(() => setActiveStep((prev) => (prev + 1) % workflowSteps.length), 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-blue-400" /> Processing Workflow
        </CardTitle>
        <CardDescription>
          Real-time visualization of the computer vision pipeline
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {workflowSteps.map((step, index) => {
            const isActive = index === activeStep
            const isPast = index < activeStep
            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center space-y-2">
                  <motion.div
                    className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                      isActive ? 'bg-blue-500/30 text-blue-300 scale-110 animate-pulse border border-blue-400/50' :
                      isPast ? 'bg-green-500/30 text-green-300 border border-green-400/50' :
                      'bg-white/10 text-white/50 border border-white/20'
                    }`}
                    animate={{ scale: isActive ? 1.1 : 1, rotate: isActive ? [0,5,-5,0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="text-center">
                    <p className={`text-sm font-medium ${isActive ? 'text-blue-300' : 'text-white/80'}`}>{step.name}</p>
                    {step.confidence > 0 && (
                      <div className="flex items-center gap-1 mt-1">
                        <Progress value={step.confidence} className="w-12 h-2" />
                        <span className="text-xs text-white/60">{step.confidence}%</span>
                      </div>
                    )}
                  </div>
                </div>
                {index < workflowSteps.length - 1 && <ArrowRight className={`h-4 w-4 mx-2 transition-colors ${isActive ? 'text-blue-400 animate-pulse' : 'text-white/40'}`} />}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

// ----- OCR Section -----
const OCRSection = () => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5 text-indigo-400" /> Optical Character Recognition</CardTitle>
      <CardDescription>Advanced text extraction from license plate images</CardDescription>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 backdrop-blur-sm p-4 rounded-lg border border-indigo-400/20 mb-2">
        <h4 className="font-semibold mb-2 text-white">How OCR Works:</h4>
        <ul className="text-sm space-y-1 text-white/70">
          <li>• Image preprocessing and noise reduction</li>
          <li>• Character segmentation and isolation</li>
          <li>• Pattern recognition using neural networks</li>
          <li>• Confidence scoring for each character</li>
          <li>• Support for multiple fonts and plate formats</li>
          <li>• Real-time processing capabilities</li>
          <li>• Adaptive thresholding for varying lighting conditions</li>
          <li>• Multi-language character recognition</li>
          <li>• Seamless API output for downstream validation</li>
        </ul>
      </div>
      <motion.div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-400/30 backdrop-blur-sm mt-auto"
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <span className="font-mono text-lg text-white">ABC123</span>
        <Badge className="bg-green-500/20 text-green-300 border-green-400/30">95% Confidence</Badge>
      </motion.div>
    </CardContent>
  </Card>
)

// ----- Fuzzy Matching Section -----
const FuzzyMatchingSection = () => {
  const [activeResult, setActiveResult] = useState(0)
  const ocrResults = [
    { original: 'ABC123', corrected: 'ABC123', confidence: 95, needsCorrection: false },
    { original: '8BC123', corrected: 'BBC123', confidence: 78, needsCorrection: true },
    { original: 'XY2789', corrected: 'XYZ789', confidence: 82, needsCorrection: true }
  ]

  useEffect(() => {
    const interval = setInterval(() => setActiveResult((prev) => (prev + 1) % ocrResults.length), 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-400" /> Fuzzy Matching & Correction</CardTitle>
        <CardDescription>Intelligent error detection and correction system</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-2 mt-2">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-4 rounded-lg border border-green-400/20">
          <h4 className="font-semibold mb-2 text-white">Correction Process:</h4>
          <ul className="text-sm space-y-1 text-white/70">
            <li>• Compare against known plate patterns</li>
            <li>• Apply character similarity algorithms</li>
            <li>• Context-aware error correction</li>
            <li>• Confidence-based suggestions</li>
          </ul>
        </div>
        {ocrResults.map((result, index) => (
          <motion.div key={index} className={`flex items-center justify-between p-3 rounded-lg border backdrop-blur-sm ${result.needsCorrection ? 'bg-yellow-500/10 border-yellow-400/30' : 'bg-green-500/10 border-green-400/30'} ${index === activeResult ? 'ring-2 ring-blue-400/50 scale-105' : ''}`}
            animate={{ scale: index === activeResult ? 1.02 : 1, opacity: index === activeResult ? 1 : 0.8 }}>
            <div className="flex items-center gap-2">
              <span className="font-mono text-white">{result.original}</span>
              {result.needsCorrection && <><ArrowRight className="h-3 w-3 text-white/50" /><span className="font-mono text-green-300">{result.corrected}</span></>}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={result.needsCorrection ? "secondary" : "default"} className="text-xs">{result.confidence}%</Badge>
              {result.needsCorrection ? <AlertCircle className="h-4 w-4 text-yellow-400" /> : <CheckCircle className="h-4 w-4 text-green-400" />}
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

// ----- Performance Metrics -----
const PerformanceMetrics = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle>System Performance Metrics</CardTitle>
      <CardDescription>Real-time performance indicators and accuracy measurements</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center space-y-2">
          <motion.div className="text-3xl font-bold text-blue-400" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>94.2%</motion.div>
          <div className="text-sm text-white/70">OCR Accuracy</div>
          <Progress value={94.2} className="w-full" />
        </div>
        <div className="text-center space-y-2">
          <motion.div className="text-3xl font-bold text-green-400" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>87.8%</motion.div>
          <div className="text-sm text-white/70">Correction Success</div>
          <Progress value={87.8} className="w-full" />
        </div>
        <div className="text-center space-y-2">
          <motion.div className="text-3xl font-bold text-indigo-400" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>1.2s</motion.div>
          <div className="text-sm text-white/70">Avg Processing Time</div>
          <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
            <motion.div className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2 rounded-full" initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1, delay: 0.8 }} />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

// ----- Main Section -----
export default function SectionCV() {
  return (
    <section id="cv" className="relative min-h-screen bg-noir-800 text-white flex items-center justify-center overflow-hidden py-20" style={{ contentVisibility: 'auto', containIntrinsicSize: '700px 500px' }} aria-label="Computer Vision">
      <SectionBg tone="dark" />
      <div className="max-w-5xl mx-auto px-6 w-full space-y-6">
        {/* Header */}
        <motion.div className="text-center space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerStagger}>
          <motion.h1 className="text-3xl md:text-4xl font-semibold tracking-tight" variants={fadeInUp}>Computer Vision</motion.h1>
          <motion.p className="text-white/70 max-w-2xl mx-auto" variants={fadeInUp}>
            Advanced OCR and fuzzy matching system for automated license plate recognition with intelligent error correction
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <motion.div className="flex flex-col w-full space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerStagger}>
          
          {/* Workflow - Full Width */}
          <motion.div className="w-full max-w-4xl mx-auto" variants={fadeInUp}>
            <WorkflowVisualization />
          </motion.div>

          {/* OCR & Fuzzy Side by Side */}
          <motion.div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto gap-4" variants={fadeInUp}>
            <div className="flex-1"><OCRSection /></div>
            <div className="flex-1"><FuzzyMatchingSection /></div>
          </motion.div>

          {/* Performance Metrics - Full Width */}
          <motion.div className="w-full max-w-4xl mx-auto" variants={fadeInUp}>
            <PerformanceMetrics />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
