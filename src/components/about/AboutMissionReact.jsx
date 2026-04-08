import useAos from '../../hooks/useAos'
import {
  Target,
  Eye,
  Gem,
  Users,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  UserCheck,
  CheckCircle2,
} from 'lucide-react'

const pillars = [
  {
    title: 'Mission',
    description:
      'Create reliable cross-border employment pathways that support business growth and worker mobility.',
    icon: Target,
  },
  {
    title: 'Vision',
    description:
      'Become a trusted international recruitment partner known for consistency, compliance, and long-term value.',
    icon: Eye,
  },
  {
    title: 'Values',
    description:
      'Integrity, transparency, responsiveness, and quality are central to how we work with every client and candidate.',
    icon: Gem,
  },
]

const solutions = [
  { text: 'Worker acquisition', icon: Users },
  { text: 'Workforce solutions', icon: Briefcase },
  { text: 'Regulatory support', icon: ShieldCheck },
  { text: 'Skills development coordination', icon: GraduationCap },
  { text: 'Candidate onboarding support', icon: UserCheck },
  { text: 'Background verification', icon: CheckCircle2 },
]

export default function AboutMissionReact() {
  useAos()

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* PILLARS */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <article
                key={pillar.title}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="group rounded-[28px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f5_100%)] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D60000]/10 text-[#D60000]">
                  <Icon size={22} />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {pillar.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {pillar.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* LOWER SECTION */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          
          {/* LEFT PANEL */}
          <div
            data-aos="fade-right"
            className="rounded-[32px] bg-[linear-gradient(145deg,#101010_0%,#1f1f1f_60%,#2f1512_100%)] p-8 text-white shadow-[0_22px_60px_rgba(0,0,0,0.18)]"
          >
            <h3 className="text-3xl font-bold">
              What we bring to the table
            </h3>

            <p className="mt-4 text-white/80">
              Our team supports hiring programs from planning to placement, helping clients manage both scale and quality with less operational friction.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon

              return (
                <div
                  key={solution.text}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 80}
                  className="group rounded-[24px] border border-[#D60000]/15 bg-white p-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#D60000]">
                      0{index + 1}
                    </p>

                    <div className="text-[#D60000]/80 transition group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                  </div>

                  <p className="mt-3 font-medium text-gray-800">
                    {solution.text}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}