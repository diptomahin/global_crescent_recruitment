import useAos from '../../hooks/useAos'
import { Hammer, Heart, Truck } from 'lucide-react'

const highlights = [
  {
    title: 'Construction & Engineering',
    description: 'Skilled and semi-skilled workforce support for infrastructure, development, and maintenance roles.',
    icon: Hammer,
  },
  {
    title: 'Healthcare & Medical',
    description: 'Recruitment support for care, clinical, and allied health staffing needs.',
    icon: Heart,
  },
  {
    title: 'Manufacturing & Logistics',
    description: 'Reliable hiring pathways for production, warehouse, transport, and supply chain operations.',
    icon: Truck,
  },
]

export default function IndustriesCarouselReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">High-demand sectors with specialized support</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
            <article
              key={item.title}
              data-aos="flip-up"
              data-aos-delay={index * 100}
              className="rounded-[30px] bg-[linear-gradient(160deg,#101010_0%,#191919_55%,#2f120f_100%)] p-8 text-white shadow-[0_20px_55px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(214,0,0,0.5),_transparent_40%),linear-gradient(135deg,#242424_0%,#121212_100%)]">
                <Icon size={48} className="text-[#D60000]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-white/75">{item.description}</p>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
