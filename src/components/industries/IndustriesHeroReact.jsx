import useAos from '../../hooks/useAos'

export default function IndustriesHeroReact() {
  useAos()

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(214,0,0,0.18),_transparent_22%),radial-gradient(circle_at_80%_16%,_rgba(30,144,255,0.16),_transparent_20%),linear-gradient(135deg,#080808_0%,#151515_45%,#1e1e1e_100%)] flex items-center text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 text-center py-8 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur">
          Sector Coverage
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl">Industries We Serve</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
          We support recruitment programs across industrial, technical, service, and care-based sectors, adapting sourcing strategies to the practical needs of each market.
        </p>
      </div>
    </section>
  )
}
