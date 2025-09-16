import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import DarkVeil from './DarkVeil';
 // ✅ fixed import (removed space)

const Hero = () => {
    const chipRefs = useRef([]);

    const chips = [
        { txt: 'GDPR-aligned' },
        { txt: 'Data minimisation' },
        { txt: 'Residency on request (EU/UK/AU)' },
        { txt: 'Confirm-first (HITL)' },
        { txt: 'Audit trails by default' },
    ];

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <DarkVeil /> {/* full-page background */}

            {/* 👇 CENTERED TEXT CONTENT */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    maxWidth: '50vw',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 300 }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        fontFamily: 'Arial Black, system-ui, sans-serif',
                        position: 'relative',
                        cursor: 'default',
                        color: '#00aaff',
                    }}
                >
                    IOIN
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        color: '#ffffff',
                        fontSize: 'clamp(1rem, 2.5vw, 2rem)',
                        fontFamily: 'Arial Black, system-ui, sans-serif',
                        lineHeight: '1.0',
                        marginBottom: '2rem',
                        letterSpacing: '-0.03em',
                        textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                    }}
                >
                    We Intergrate <span style={{ color: '#ffffff', fontWeight: '700' }}>Security Systems</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    style={{
                        color: '#cccccc',
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        marginBottom: '2.5rem',
                        margin: '0 auto',
                    }}
                >
                    <p style={{ margin: 0 }}>
                        Purpose-built software, designed from the ground up for <b>reliability</b> and <b>security</b>.
                        <br />
                        <i>“Run it twice, same result.”</i>
                    </p>
                </motion.div>

                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '2rem',
                        padding: 0,
                        listStyle: 'none',
                    }}
                    aria-label="Assurances and compliance"
                    role="list"
                >
                    {chips.map((c, i) => (
                        <li key={c.txt} style={{ listStyle: 'none' }}>
                            <span
                                ref={(el) => (chipRefs.current[i] = el)}
                                data-idx={i}
                                tabIndex={0}
                                className="hero-chip"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    minHeight: '36px',
                                    padding: '0 1rem',
                                    fontSize: '0.875rem',
                                    color: '#e2e8f0',
                                    lineHeight: '1',
                                    cursor: 'default',                                
                                    position: 'relative',
                                    WebkitTapHighlightColor: 'transparent',
                                }}
                                aria-label={c.txt}
                            >
                                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {c.txt}
                                </span>
                                <span className="sr-only">{c.desc}</span>
                                <span aria-hidden className="ring-outer" />
                            </span>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default Hero;
