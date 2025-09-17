import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel({ slides = [], options = { loop: false, align: 'start' }, className = '' }) {
  const [viewportRef, embla] = useEmblaCarousel(options);
  const [selected, setSelected] = useState(0);
  const slideCount = slides.length;

  const updateSelected = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', updateSelected);
    embla.on('reInit', updateSelected);
    updateSelected();
    return () => {
      embla.off('select', updateSelected);
      embla.off('reInit', updateSelected);
    };
  }, [embla, updateSelected]);

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  const onDotKey = useCallback((e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollTo(i);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollTo(Math.min(i + 1, slideCount - 1));
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollTo(Math.max(i - 1, 0));
    }
  }, [scrollTo, slideCount]);

  const regionLabel = useMemo(() => ({
    role: 'region',
    'aria-roledescription': 'carousel',
    'aria-label': 'Carousel',
  }), []);

  return (
    <div {...regionLabel} className={`embla-root ${className}`}>
      <div className="embla-viewport overflow-visible" ref={viewportRef}>
        <div className="embla-container flex gap-2 px-1 box-border">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="embla-slide flex-[0_0_calc(50%-4px)] px-0 box-border"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slideCount}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="embla-dots mt-3 flex gap-2 justify-center" role="tablist" aria-label="Slide selector">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            tabIndex={0}
            aria-selected={selected === i}
            aria-controls={`embla-slide-${i}`}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${selected === i ? 'bg-white' : 'bg-white/40'}`}
            onClick={() => scrollTo(i)}
            onKeyDown={(e) => onDotKey(e, i)}
          >
            <span className="sr-only">Go to slide {i + 1}</span>
          </button>
        ))}
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {selected + 1} of {slideCount}
      </div>
    </div>
  );
}
