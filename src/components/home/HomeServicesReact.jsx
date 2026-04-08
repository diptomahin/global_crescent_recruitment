import useAos from '../../hooks/useAos'
import { Users, Eye, CheckCircle, MessageSquare } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Talent Sourcing',
    description: 'We identify and engage qualified candidates for employers across high-demand industries.',
  },
  {
    icon: Eye,
    title: 'Screening & Selection',
    description: 'Every shortlist is built through structured vetting, document checks, and role-fit reviews.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Support',
    description: 'Our process covers documentation, mobility planning, and recruitment coordination.',
  },
  {
    icon: MessageSquare,
    title: 'Placement Follow-through',
    description: 'We stay involved after placement to support onboarding and long-term workforce stability.',
  },
]

export default function HomeServicesReact() {
  useAos()

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f6f6f6] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Recruitment Services Built for Real Outcomes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            From sourcing to onboarding, our service model is designed to reduce hiring friction and improve placement quality.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
            <article
              key={service.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 110}
              className="group relative overflow-hidden rounded-[28px] border border-gray-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfb_100%)] p-6 shadow-[0_18px_45px_rgba(20,20,20,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#D60000]/25 hover:shadow-[0_28px_60px_rgba(214,0,0,0.12)]"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#D60000]/8 blur-2xl transition duration-300 group-hover:bg-[#D60000]/14" />
              <div className="relative mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#111111] to-[#262626] text-white shadow-lg">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <p className="text-sm font-semibold text-[#D60000]">0{index + 1}</p>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="relative text-gray-600">{service.description}</p>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
