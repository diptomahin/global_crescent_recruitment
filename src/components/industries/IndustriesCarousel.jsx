'use client';

import { useEffect, useState } from 'react';

export default function IndustriesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop',
      alt: 'Construction Industry',
      title: 'Construction & Engineering',
      description: 'Skilled workforce for building and infrastructure projects',
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
      alt: 'Healthcare Industry',
      title: 'Healthcare & Medical',
      description: 'Professional medical and nursing staff',
    },
    {
      image: 'https://images.unsplash.com/photo-1581092916550-e323807efb99?w=1200&h=600&fit=crop',
      alt: 'Manufacturing Industry',
      title: 'Manufacturing & Production',
      description: 'Industrial and production workers',
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
      alt: 'Information Technology',
      title: 'Information Technology',
      description: 'Tech professionals and IT specialists',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      alt: 'Hospitality Industry',
      title: 'Hospitality & Tourism',
      description: 'Customer service and hospitality professionals',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      alt: 'Logistics Industry',
      title: 'Logistics & Transportation',
      description: 'Supply chain and logistics experts',
    },
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
  };

  return (
    <section className="relative w-full bg-black">
      {/* Slides Container */}
      <div className="relative w-full h-96 md:h-[600px] overflow-hidden">
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
            {/* Dark Overlay */}
            <div className=" inset-0 bg-black bg-opacity-30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-lg mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 text-center px-6 drop-shadow-lg max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full transition"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full transition"
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide
                  ? 'bg-[#D60000] w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
