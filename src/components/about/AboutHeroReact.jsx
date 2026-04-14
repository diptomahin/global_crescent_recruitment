import { useState, useEffect } from 'react'
import useAos from '../../hooks/useAos'

const CountUpNumber = ({ target }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / 100
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 20)
    return () => clearInterval(timer)
  }, [target])

  return <span>{count}</span>
}

export default function AboutHeroReact() {
  useAos()

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,_rgba(214,0,0,0.2),_transparent_22%),radial-gradient(circle_at_82%_18%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(135deg,#080808_0%,#151515_48%,#1f2723_100%)] min-h-screen flex items-center justify-center pb-20 pt-28 text-white md:pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8" data-aos="fade-up">
        <img
          src="/GCR-3.png"
          alt="Global Crescent Recruitment"
          className="mx-auto mb-8 h-24 w-72 object-contain"
        />
        <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/78 backdrop-blur">
          Company Story
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl">About Global Crescent Recruitment</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
          We connect employers with dependable international talent and support workers with structured access to overseas opportunities through a practical, service-driven recruitment model.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            ['1300', 'Placements supported', '+'],
            ['200', 'Employer relationships', '+'],
            ['99', 'Success ratio', '%'],
          ].map(([value, label, suffix], index) => (
            <div key={label} data-aos="fade-up" data-aos-delay={index * 100} className="rounded-[24px] border border-white/10 bg-white/10 px-5 py-6 backdrop-blur-xl">
              <p className="text-3xl font-bold text-[#ff6b6b]"><CountUpNumber target={parseInt(value)} />{suffix}</p>
              <p className="mt-2 text-sm text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
