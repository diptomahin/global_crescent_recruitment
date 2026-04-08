import { Link } from 'react-router-dom'
import useAos from '../../hooks/useAos'

export default function WorkersHeroReact() {
  useAos()

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,_rgba(214,0,0,0.2),_transparent_22%),radial-gradient(circle_at_80%_18%,_rgba(0,176,116,0.18),_transparent_18%),linear-gradient(135deg,#080808_0%,#121212_50%,#16261e_100%)] pt-24 text-white md:pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div data-aos="fade-right">
          <span className="rounded-full bg-[#D60000]/20 px-4 py-2 text-sm font-semibold text-[#ff7a7a]">FOR WORKERS & AGENCIES</span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Find credible international opportunities with guidance at every step.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We connect workers and partner agencies with employers across multiple sectors while supporting the process from inquiry to placement.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="rounded-xl bg-gradient-to-r from-[#D60000] to-[#9B0000] px-8 py-4 text-center font-semibold shadow-[0_16px_45px_rgba(214,0,0,0.35)] transition hover:-translate-y-0.5">
              Apply Now
            </Link>
            <a href="#worker-opportunities" className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-center font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
              View Industries
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
            <p className="text-4xl font-bold text-[#D60000]">25+</p>
            <p className="mt-2 text-white/80">Active destination markets and placement regions.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/12 to-emerald-500/12 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
            <p className="text-4xl font-bold text-[#D60000]">50+</p>
            <p className="mt-2 text-white/80">Industry pathways across technical and service roles.</p>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-[#f4f1ea] p-7 text-[#111111] shadow-[0_22px_55px_rgba(0,0,0,0.3)] sm:col-span-2">
            <p className="text-4xl font-bold text-[#C0C0C0]">Step-by-step</p>
            <p className="mt-2 text-[#4d4d4d]">Support with job matching, documentation, and placement readiness.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
