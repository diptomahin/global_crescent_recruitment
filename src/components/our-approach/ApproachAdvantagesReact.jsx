import useAos from '../../hooks/useAos'

const advantages = [
  'Faster turnaround through clearer workflows',
  'More relevant candidate matching',
  'Industry-aware sourcing decisions',
  'Better communication between stakeholders',
  'A practical balance of speed and quality',
  'Long-term support after placement',
]

export default function ApproachAdvantagesReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f6efe8_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What makes the approach different</h2>
            <p className="mt-4 text-gray-600">
              We are not just filling vacancies. We are designing a process that helps both sides move forward with more confidence.
            </p>
            <div className="mt-8 rounded-[28px] bg-[#111111] p-7 text-white shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
              <p className="text-sm uppercase tracking-[0.28em] text-white/55">Core Advantage</p>
              <p className="mt-4 text-2xl font-semibold">A practical model that balances speed, fit, and communication.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage, index) => (
              <div
                key={advantage}
                data-aos="zoom-in-up"
                data-aos-delay={index * 80}
                className="rounded-[24px] bg-white p-6 shadow-[0_15px_38px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]"
              >
                <p className="font-medium text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
