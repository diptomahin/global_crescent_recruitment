import useAos from '../../hooks/useAos'

const services = [
  'Talent sourcing and recruitment',
  'Candidate screening and role matching',
  'Documentation and workflow coordination',
  'Onboarding support',
  'Accommodation and mobility guidance',
  'Ongoing post-placement communication',
]

export default function EmployersServicesReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f6f0ea_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Services for employer teams</h2>
            <p className="mt-4 text-gray-600">
              Our employer-facing workflow is built to reduce internal coordination overhead while improving placement readiness.
            </p>
            <div className="mt-8 rounded-[28px] bg-[#131313] p-7 text-white shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
              <p className="text-sm uppercase tracking-[0.28em] text-white/55">Delivery Lens</p>
              <p className="mt-4 text-2xl font-semibold">Less hiring friction, more operational control.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service}
                data-aos="zoom-in-up"
                data-aos-delay={index * 90}
                className="rounded-[24px] bg-white p-6 shadow-[0_15px_38px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]"
              >
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
