import useAos from '../../hooks/useAos'
import { Zap, Target, Briefcase, MessageSquare, BarChart3, Heart } from 'lucide-react'

const advantages = [
  { label: 'Faster turnaround through clearer workflows', icon: Zap },
  { label: 'More relevant candidate matching', icon: Target },
  { label: 'Industry-aware sourcing decisions', icon: Briefcase },
  { label: 'Better communication between stakeholders', icon: MessageSquare },
  { label: 'A practical balance of speed and quality', icon: BarChart3 },
  { label: 'Long-term support after placement', icon: Heart },
]

export default function ApproachAdvantagesReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
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
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
              <div
                key={advantage.label}
                data-aos="zoom-in-up"
                data-aos-delay={index * 80}
                className="rounded-[24px] bg-white p-6 shadow-[0_15px_38px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D60000]/15 to-[#D60000]/5">
                  <Icon size={22} className="text-[#D60000]" strokeWidth={2.2} />
                </div>
                <p className="font-medium text-gray-800">{advantage.label}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
