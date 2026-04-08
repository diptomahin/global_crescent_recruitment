import useAos from '../../hooks/useAos'
import {
  Building2,
  HeartPulse,
  Hotel,
  ShoppingCart,
  Factory,
  Sprout,
  Truck,
  Home,
  Sparkles,
  GraduationCap,
  Cpu,
  Landmark,
} from 'lucide-react'

const industries = [
  { name: 'Construction & Engineering', icon: Building2 },
  { name: 'Healthcare & Medical', icon: HeartPulse },
  { name: 'Hospitality & Tourism', icon: Hotel },
  { name: 'Retail & Commerce', icon: ShoppingCart },
  { name: 'Manufacturing & Production', icon: Factory },
  { name: 'Agriculture', icon: Sprout },
  { name: 'Transportation & Logistics', icon: Truck },
  { name: 'Domestic Care', icon: Home },
  { name: 'Beauty & Wellness', icon: Sparkles },
  { name: 'Education', icon: GraduationCap },
  { name: 'IT & Technology', icon: Cpu },
  { name: 'Finance & Banking', icon: Landmark },
]

export default function IndustriesGridReact() {
  useAos()

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sector expertise across multiple hiring environments</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our experience across industries helps us build more relevant shortlists and better placement outcomes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
            <div
              key={industry.name}
              data-aos="zoom-in-up"
              data-aos-delay={index * 60}
              className="group rounded-[28px] border border-gray-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8f8f8_100%)] p-6 text-center font-medium text-gray-800 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/18 hover:shadow-[0_22px_50px_rgba(214,0,0,0.08)]"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#D60000] text-white shadow-lg">
                <Icon size={26} strokeWidth={2.1} />
              </div>
              {industry.name}
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
