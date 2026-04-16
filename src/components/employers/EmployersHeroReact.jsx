import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAos from '../../hooks/useAos'

const CountUpNumber = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const increment = Math.ceil(end / 100)
        return prev + increment >= end ? end : prev + increment
      })
    }, 80)
    return () => clearInterval(interval)
  }, [end])
  return <>{count}{suffix}</>
}

export default function EmployersHeroReact() {
  useAos()

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-[radial-gradient(circle_at_15%_20%,_rgba(214,0,0,0.23),_transparent_24%),radial-gradient(circle_at_85%_10%,_rgba(255,255,255,0.08),_transparent_20%),linear-gradient(135deg,#080808_0%,#131313_45%,#1f2a21_100%)] flex items-center text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:68px_68px] opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div data-aos="fade-right">
          <span className="rounded-full bg-[#D60000]/20 px-4 py-2 text-sm font-semibold text-[#ff7a7a]">FOR EMPLOYERS</span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Hire internationally with a recruitment partner built for scale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We help companies source qualified workers, manage hiring workflows, and reduce delays between demand and deployment.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/apply" className="rounded-xl bg-gradient-to-r from-[#D60000] to-[#9B0000] px-8 py-4 text-center font-semibold shadow-[0_16px_45px_rgba(214,0,0,0.35)] transition hover:-translate-y-0.5">
              Start Hiring
            </Link>
            <Link to="/our-approach" className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-center font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
              Our Process
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {['Faster hiring flow', 'Better shortlist quality', 'More predictable onboarding'].map((item, index) => (
              <div key={item} data-aos="fade-up" data-aos-delay={100 + index * 90} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm text-white/80 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
            <p className="text-4xl font-bold text-white"><CountUpNumber end={70} suffix="%" /></p>
            <p className="mt-2 text-white/80">Potential reduction in time-to-hire through structured sourcing.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
            <p className="text-4xl font-bold text-white"><CountUpNumber end={95} suffix="%" /></p>
            <p className="mt-2 text-white/80">Retention-oriented matching built around readiness and fit.</p>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-[#f4f1ea] p-7 text-[#111111] shadow-[0_22px_55px_rgba(0,0,0,0.3)] sm:col-span-2">
            <p className="text-4xl font-bold text-[#C0C0C0]">End-to-end</p>
            <p className="mt-2 text-[#4c4c4c]">Support from role planning to onboarding coordination.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
