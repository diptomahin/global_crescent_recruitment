import useAos from '../../hooks/useAos'
import { Users, Filter, Clipboard, UserCheck, MapPin, MessageSquare } from 'lucide-react'

const services = [
  { label: 'Talent sourcing and recruitment', icon: Users },
  { label: 'Candidate screening and role matching', icon: Filter },
  { label: 'Documentation and workflow coordination', icon: Clipboard },
  { label: 'Onboarding support', icon: UserCheck },
  { label: 'Accommodation and mobility guidance', icon: MapPin },
  { label: 'Ongoing post-placement communication', icon: MessageSquare },
]

export default function EmployersServicesReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
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
            {services.map((service, index) => {
              const Icon = service.icon
              return (
              <div
                key={service.label}
                data-aos="zoom-in-up"
                data-aos-delay={index * 90}
                className="rounded-[24px] bg-white p-6 shadow-[0_15px_38px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D60000]/15 to-[#D60000]/5">
                  <Icon size={22} className="text-[#D60000]" strokeWidth={2.2} />
                </div>
                <p className="font-medium text-gray-800">{service.label}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
