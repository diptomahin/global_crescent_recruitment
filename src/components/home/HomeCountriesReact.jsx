import useAos from '../../hooks/useAos'
import { Earth, MapPinned } from 'lucide-react'

const countries = [
  { name: 'Romania', code: 'ro' },
  { name: 'Croatia', code: 'hr' },
  { name: 'Bulgaria', code: 'bg' },
  { name: 'Schengen Area', code: 'eu', isGroup: true },
  { name: 'Non-Schengen EU', code: 'eu', isGroup: true },
  { name: 'China', code: 'cn' },
]

export default function HomeCountriesReact() {
  useAos()

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(214,0,0,0.18),_transparent_25%),linear-gradient(135deg,#1a1a1a_0%,#232323_45%,#10261b_100%)] py-20 text-white">
      
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-14 text-center" data-aos="fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur">
            <Earth size={14} />
            Where We Operate
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Europe & China
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We connect employers and workers across European markets and China with localized expertise and compliance support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={country.name}
              data-aos="zoom-in"
              data-aos-delay={index * 35}
              className={`group rounded-2xl border border-white/10 px-4 py-6 text-center text-sm font-medium backdrop-blur transition ${
                country.isGroup
                  ? 'bg-white/6 text-white/70 hover:bg-white/12'
                  : 'bg-white/8 text-white/90 hover:-translate-y-1 hover:bg-white/14 hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]'
              }`}
            >
              {/* Flag Image */}
              <div className="mx-auto mb-4 h-12 w-16">
                <img
                  src={`https://flagcdn.com/h80/${country.code}.png`}
                  alt={country.name}
                  className="h-full w-full rounded-md object-cover shadow-md"
                />
              </div>

              {!country.isGroup && (
                <>
                  {/* Accent line */}
                  <div className="mx-auto mb-2 h-2 w-10 rounded-full bg-gradient-to-r from-[#D60000] to-emerald-400 opacity-80 transition group-hover:w-14" />
                </>
              )}

              <div className="flex items-center justify-center gap-2">
                <MapPinned size={14} className="text-white/70" />
                {country.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
