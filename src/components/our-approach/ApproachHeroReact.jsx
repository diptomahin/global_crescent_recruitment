import { BarChart3, Globe, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import useAos from '../../hooks/useAos'

export default function ApproachHeroReact() {
  useAos()

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-[radial-gradient(circle_at_18%_18%,_rgba(214,0,0,0.18),_transparent_22%),radial-gradient(circle_at_78%_22%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(135deg,#080808_0%,#151515_45%,#1f2b22_100%)] flex items-center text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div data-aos="fade-right">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Our recruitment approach is structured, practical, and service-first.</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              We focus on understanding hiring goals, improving candidate fit, and keeping both employers and workers informed through each phase of the process.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/apply" className="rounded-xl bg-gradient-to-r from-[#D60000] to-[#9B0000] px-8 py-4 text-center font-semibold shadow-[0_16px_45px_rgba(214,0,0,0.35)] transition hover:-translate-y-0.5">
                Get Started
              </Link>
              <Link to="/contact" className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-center font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
          <div className="grid gap-4" data-aos="fade-left">
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:bg-white/15">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-10 h-10 text-[#D60000]" />
              </div>
              <p className="font-semibold text-white text-center">Strategic planning</p>
              <p className="mt-2 text-white/75 text-center">We start with a clear understanding of role requirements, hiring volume, and placement expectations.</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:bg-white/15">
              <div className="flex justify-center mb-4">
                <Globe className="w-10 h-10 text-[#D60000]" />
              </div>
              <p className="font-semibold text-white text-center">Global sourcing</p>
              <p className="mt-2 text-white/75 text-center">Our network helps us identify suitable candidates across multiple regions and industries.</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:bg-white/15">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-[#D60000]" />
              </div>
              <p className="font-semibold text-white text-center">Quality control</p>
              <p className="mt-2 text-white/75 text-center">We focus on screening consistency so employers see more relevant and deployment-ready profiles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
