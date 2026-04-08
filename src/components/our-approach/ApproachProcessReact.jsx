import useAos from '../../hooks/useAos'
import { MessagesSquare, SearchCheck, UserRoundSearch, Handshake, HousePlus, LifeBuoy } from 'lucide-react'

const steps = [
  { text: 'Initial consultation and hiring needs review', icon: MessagesSquare },
  { text: 'Worker sourcing through aligned talent channels', icon: SearchCheck },
  { text: 'Screening, interviews, and candidate selection', icon: UserRoundSearch },
  { text: 'Onboarding planning and readiness support', icon: Handshake },
  { text: 'Mobility and accommodation coordination when required', icon: HousePlus },
  { text: 'Continued communication after placement', icon: LifeBuoy },
]

export default function ApproachProcessReact() {
  useAos()

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How the process works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">Each stage is built to reduce uncertainty and improve fit between employer needs and worker readiness.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
            <div
              key={step.text}
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="group rounded-[26px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf8f7_100%)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/20 hover:shadow-[0_22px_48px_rgba(214,0,0,0.08)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#D60000]">STEP {index + 1}</p>
                <div className="rounded-xl bg-[#D60000]/10 p-2 text-[#D60000]">
                  <Icon size={18} />
                </div>
              </div>
              <p className="mt-3 font-medium text-gray-800">{step.text}</p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
