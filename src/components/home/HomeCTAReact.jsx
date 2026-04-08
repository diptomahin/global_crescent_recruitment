import { Link } from 'react-router-dom'
import useAos from '../../hooks/useAos'

export default function HomeCTAReact() {
  useAos()

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#D60000] via-[#b30000] to-[#7e0000] py-20 text-white">
      <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-black/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8" data-aos="zoom-in-up">
        <div className="rounded-[32px] border border-white/20 bg-white/8 px-6 py-12 shadow-[0_28px_70px_rgba(80,0,0,0.22)] backdrop-blur">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to move your hiring plans forward?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">
          Whether you are building teams or looking for overseas opportunities, we can help you take the next step with a practical plan.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/apply" className="rounded-xl bg-white px-8 py-4 font-semibold text-[#D60000] shadow-[0_14px_35px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5 hover:bg-gray-100">
            Contact Our Team
          </Link>
          <Link to="/our-approach" className="rounded-xl border border-white/40 bg-white/6 px-8 py-4 font-semibold transition hover:-translate-y-0.5 hover:bg-white/10">
            See How We Work
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}
