import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useAos from '../../hooks/useAos'

export default function HomeCarousel() {
  useAos()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const slides = [
    {
      image: '/images/arlington-research-kN_kViDchA0-unsplash.jpg',
      alt: 'Professional Team Meeting',
      title: 'Build Your Dream Team',
    },
    {
      image: '/images/israel-andrade-YI_9SivVt_s-unsplash.jpg',
      alt: 'Global Recruitment Network',
      title: 'Connect Globally, Hire Locally',
    },
    {
      image: '/images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg',
      alt: 'Diverse Workforce',
      title: 'Diversity Drives Innovation',
    },
    {
      image: '/images/arlington-research-kN_kViDchA0-unsplash.jpg',
      alt: 'Business Growth',
      title: 'Scale Your Business',
    },
    {
      image: '/images/israel-andrade-YI_9SivVt_s-unsplash.jpg',
      alt: 'Career Opportunities',
      title: 'Unlock Opportunities',
    },
  ]

  useEffect(() => {
    if (!autoplay) return undefined

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
    <section className="relative w-full bg-black" data-aos="fade-up">
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
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,0,0,0.24),_transparent_26%)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center" data-aos="zoom-in" data-aos-delay="120">
                <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
                  Featured Strength
                </div>
                <h2 className="px-6 text-center text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
                {slide.title}
                </h2>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white transition hover:bg-white/60"
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white transition hover:bg-white/60"
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide
                  ? 'bg-[#D60000] w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
