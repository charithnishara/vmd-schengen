import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=85&auto=format&fit=crop',
    city: 'Paris', country: 'France',
    caption: 'The City of Light awaits',
  },
  {
    url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=85&auto=format&fit=crop',
    city: 'Rome', country: 'Italy',
    caption: 'Eternal beauty, timeless history',
  },
  {
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=85&auto=format&fit=crop',
    city: 'Santorini', country: 'Greece',
    caption: 'Azure waters and whitewashed dreams',
  },
  {
    url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=85&auto=format&fit=crop',
    city: 'Barcelona', country: 'Spain',
    caption: 'Vibrant culture, stunning architecture',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop',
    city: 'Swiss Alps', country: 'Switzerland',
    caption: 'Majestic mountains, pristine landscapes',
  },
  {
    url: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=85&auto=format&fit=crop',
    city: 'Amsterdam', country: 'Netherlands',
    caption: 'Canals, culture and charm',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const go = (idx) => {
    setFading(true)
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length)
      setFading(false)
    }, 400)
  }

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5500)
    return () => clearInterval(t)
  }, [current])

  const slide = slides[current]

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${slide.url})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/50 text-cream text-xs font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse inline-block"></span>
          Trusted Schengen Visa Experts
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white text-shadow-lg mb-4 leading-tight">
          Your Gateway to<br />
          <span className="text-cream">26 Schengen Nations</span>
        </h1>

        <p className="text-cream/80 text-base sm:text-lg mb-2 text-shadow">
          Professional visa assistance — from document preparation to appointment booking.
        </p>

        <div
          className={`text-gold font-medium text-sm sm:text-base mb-8 transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
          ✈ {slide.city}, {slide.country} — {slide.caption}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#packages"
            className="bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            View Packages
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-cream font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 backdrop-blur-sm"
          >
            Free Consultation
          </a>
        </div>

        {/* Destination pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['France', 'Italy', 'Greece', 'Spain', 'Germany', 'Switzerland', '+ 20 more'].map(d => (
            <span
              key={d}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cream/80 backdrop-blur-sm"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Slide controls */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 border border-white/20 text-white p-2 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 border border-white/20 text-white p-2 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cream/50 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  )
}
