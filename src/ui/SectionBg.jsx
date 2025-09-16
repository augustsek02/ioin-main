import React from 'react'

export default function SectionBg({ tone = 'dark' }) {
  return (
    <div aria-hidden className={`${tone === 'light' ? 'section-anim-light' : 'section-anim-dark'}`}>
      <div className="section-anim-bg" />
      <div className="section-anim-blobs">
        <div className="section-blob blob-1" />
        <div className="section-blob blob-2" />
        <div className="section-blob blob-3" />
      </div>
    </div>
  )
}


