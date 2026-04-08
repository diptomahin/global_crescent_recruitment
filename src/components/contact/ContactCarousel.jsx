import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useAos from '../../hooks/useAos'

export default function ContactCarousel() {
  useAos()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      alt: 'Professional Communication',
      title: 'Contact Us',
      subtitle: 'We are here to help you find the right solutions for your needs',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      alt: 'Team Collaboration',
      title: 'Get in Touch',
      subtitle: 'Connect with our recruitment specialists today',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      alt: 'Customer Support',
      title: 'Your Success is Our Mission',
      subtitle: 'Let us help you achieve your recruitment goals',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      alt: 'Global Network',
      title: 'Reach Out Today',
      subtitle: 'Join hundreds of satisfied clients worldwide',
    },
  ]

  useEffect(() => {
    if (!autoplay) return undefined;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoplay(false)
  }

  return (
    <section className="relative w-full bg-black pt-20 md:pt-16">
      <div className="relative h-96 w-full overflow-hidden md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,0,0,0.28),_transparent_25%)]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" data-aos="zoom-out-up">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
                Contact & Support
              </div>
              <h1 className="mb-4 text-center text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
                {slide.title}
              </h1>
              <p className="max-w-2xl text-center text-lg text-white/90 drop-shadow-lg md:text-xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white transition hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white transition hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2 focus:ring-offset-black ${
                index === currentSlide
                  ? 'bg-[#D60000] w-8 h-3'
                  : 'bg-white/50 hover:bg-white/75 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
