import useAos from '../../hooks/useAos'

const highlights = [
  'Tailored recruitment plans aligned to business goals',
  'Pre-screened candidate pipelines for faster hiring',
  'Cross-border workforce support with practical coordination',
  'Long-term partnerships focused on retention and quality',
]

export default function HomeStrategiesReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div data-aos="fade-right">
          <div className="mb-5 inline-flex rounded-full border border-[#D60000]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D60000] shadow-sm">
            Why Us
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why companies choose Global Crescent</h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            We combine regional knowledge with international recruitment reach, making the hiring journey more predictable for employers and more accessible for workers.
          </p>
          <div className="mt-8 rounded-[28px] bg-[#111111] p-7 text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Execution Focus</p>
            <p className="mt-4 text-2xl font-semibold">A stronger bridge between candidate supply and employer readiness.</p>
            <p className="mt-4 text-white/72">
              Our workflow is designed to reduce slow handoffs, improve shortlist quality, and keep everyone informed as hiring moves forward.
            </p>
          </div>
        </div>
        <div className="space-y-4" data-aos="fade-left">
          {highlights.map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={120 + index * 90}
              className="group flex items-start gap-4 rounded-[24px] border border-[#D60000]/10 bg-white p-5 shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-[#D60000]/20 hover:shadow-[0_22px_45px_rgba(214,0,0,0.08)]"
            >
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D60000] to-[#9B0000] text-sm font-bold text-white">
                0{index + 1}
              </div>
              <div>
                <p className="font-medium text-gray-800">{item}</p>
                <p className="mt-1 text-sm text-gray-500">Designed to make the process feel clearer, faster, and more dependable.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
