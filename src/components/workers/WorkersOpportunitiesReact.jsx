import useAos from '../../hooks/useAos'
import {
  HeartPulse,
  Hammer,
  Hotel,
  Factory,
  Sprout,
  ShoppingBag,
  Truck,
  Home,
  Sparkles,
  GraduationCap,
  Laptop2,
  Landmark,
} from 'lucide-react'

const sectors = [
  { name: 'Construction', icon: Hammer },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Agriculture', icon: Sprout },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Transportation', icon: Truck },
  { name: 'Domestic Care', icon: Home },
  { name: 'Beauty & Wellness', icon: Sparkles },
  { name: 'Education', icon: GraduationCap },
  { name: 'IT & Technology', icon: Laptop2 },
  { name: 'Finance & Banking', icon: Landmark },
]

export default function WorkersOpportunitiesReact() {
  useAos()

  return (
    <section id="worker-opportunities" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Opportunity areas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We work across a wide range of sectors, helping candidates explore roles that align with their skills and goals.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon

            return (
            <div
              key={sector.name}
              data-aos="zoom-in-up"
              data-aos-delay={index * 60}
              className="group rounded-[26px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)] p-6 text-center font-medium text-gray-800 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/18 hover:shadow-[0_22px_45px_rgba(214,0,0,0.08)]"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#111111] to-[#262626] text-white shadow-lg">
                <Icon size={26} strokeWidth={2.2} />
              </div>
              {sector.name}
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
