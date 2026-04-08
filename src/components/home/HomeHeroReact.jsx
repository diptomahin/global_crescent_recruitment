import { Link } from 'react-router-dom'
import useAos from '../../hooks/useAos'

export default function HomeHeroReact() {
  useAos()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(214,0,0,0.28),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(41,133,77,0.35),_transparent_24%),linear-gradient(135deg,#070707_0%,#121212_50%,#1f2d24_100%)] pt-24 text-white md:pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="absolute -left-16 top-32 h-52 w-52 rounded-full bg-[#D60000]/20 blur-3xl" />
      <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-right">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#D60000]" />
              Global Recruitment Network
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Global Workforce,{' '}
              <span className="bg-gradient-to-r from-[#D60000] to-[#9B0000] bg-clip-text text-transparent">
                Local Excellence
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              We help employers hire with confidence and help workers access real international opportunities
              through a streamlined, compliance-first recruitment process.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/employers" className="rounded-xl bg-gradient-to-r from-[#D60000] to-[#9B0000] px-8 py-4 text-center font-semibold shadow-[0_16px_45px_rgba(214,0,0,0.35)] transition hover:-translate-y-0.5 hover:from-[#c10000] hover:to-[#7f0000]">
                Explore Employer Services
              </Link>
              <Link to="/workers" className="rounded-xl border border-white/20 bg-white/6 px-8 py-4 text-center font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
                Discover Worker Opportunities
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/75">
              <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="100">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D60000]" />
                Employer-first hiring support
              </div>
              <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="180">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Worker mobility guidance
              </div>
              <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="260">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                Cross-border recruitment coverage
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
            <div className="rounded-[28px] border border-white/12 bg-white/10 p-6 backdrop-blur-xl shadow-[0_22px_60px_rgba(0,0,0,0.35)] sm:translate-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">Placed Talent</p>
              <p className="mt-3 text-4xl font-bold text-[#ff6b6b]">1300+</p>
              <p className="mt-3 text-sm text-white/80">Successful worker placements across multiple sectors.</p>
            </div>
            <div className="rounded-[28px] border border-white/12 bg-gradient-to-br from-[#d60000]/25 to-white/8 p-6 backdrop-blur-xl shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">Employers Served</p>
              <p className="mt-3 text-4xl font-bold text-white">200+</p>
              <p className="mt-3 text-sm text-white/82">Employers supported with sourcing, screening, and onboarding.</p>
            </div>
            <div className="rounded-[30px] border border-white/12 bg-[#f4f1eb] p-7 text-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:col-span-2">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#6f6f6f]">Coverage Map</p>
                  <p className="mt-3 text-4xl font-bold text-[#111111]">30 countries active</p>
                  <p className="mt-3 max-w-lg text-sm text-[#4f4f4f]">
                    Serving across all EU member states and China with comprehensive recruitment coverage and local expertise in every region.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold text-[#5a5a5a]">
                  <div className="rounded-xl bg-white px-3 py-3 shadow-sm">EU</div>
                  <div className="rounded-xl bg-white px-3 py-3 shadow-sm">China</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
