import useAos from '../../hooks/useAos'
import { BriefcaseBusiness, Clock3, ShieldCheck, Building2, Handshake, BarChart3 } from 'lucide-react'

const benefits = [
  { text: 'Pre-screened talent pipelines', icon: BriefcaseBusiness },
  { text: 'Shorter time from sourcing to deployment', icon: Clock3 },
  { text: 'Stronger quality control in candidate selection', icon: ShieldCheck },
  { text: 'Practical support for cross-border hiring workflows', icon: Building2 },
  { text: 'A more consistent recruitment experience for internal teams', icon: BarChart3 },
  { text: 'Longer-term partnership support after placement', icon: Handshake },
]

export default function EmployersBenefitsReact() {
  useAos()

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why employers work with us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We focus on operational clarity, candidate quality, and a recruitment process that is easier for hiring teams to manage.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
            <div
              key={benefit.text}
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="group rounded-[26px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f6_100%)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/20 hover:shadow-[0_22px_50px_rgba(214,0,0,0.08)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#D60000]">0{index + 1}</p>
                <div className="rounded-xl bg-[#D60000]/10 p-2 text-[#D60000]">
                  <Icon size={18} />
                </div>
              </div>
              <p className="mt-3 font-medium text-gray-800">{benefit.text}</p>
              <div className="mt-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#D60000] to-[#f2b2b2] transition group-hover:w-20" />
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
