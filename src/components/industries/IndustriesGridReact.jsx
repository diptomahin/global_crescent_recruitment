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
  { name: 'Construction & Engineering', icon: Building2, image: 'construction.webp' },
  { name: 'Healthcare & Medical', icon: HeartPulse, image: 'medical.webp' },
  { name: 'Hospitality & Tourism', icon: Hotel, image: 'hospitality.webp' },
  { name: 'Retail & Commerce', icon: ShoppingCart, image: 'retail.webp' },
  { name: 'Manufacturing & Production', icon: Factory, image: 'manufacturing.webp' },
  { name: 'Agriculture', icon: Sprout, image: 'agriculture.webp' },
  { name: 'Transportation & Logistics', icon: Truck, image: 'transportation.webp' },
  { name: 'Domestic Care', icon: Home, image: 'domestic-care.webp' },
  { name: 'Beauty & Wellness', icon: Sparkles, image: 'beauty-wellness.webp' },
  { name: 'Education', icon: GraduationCap, image: 'education.webp' },
  { name: 'IT & Technology', icon: Cpu, image: 'technology.webp' },
  { name: 'Finance & Banking', icon: Landmark, image: 'banking.webp' },
]

export default function IndustriesGridReact() {
  return (
    <section className="bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
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
              className="group relative overflow-hidden rounded-[28px] border border-gray-200 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/18 hover:shadow-[0_22px_50px_rgba(214,0,0,0.08)]"
            >
              <img
                src={`/industries/${industry.image}`}
                alt={industry.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
              <div className="relative flex h-48 flex-col items-center justify-center p-6 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#D60000] to-[#9B0000] text-white shadow-lg">
                  <Icon size={24} strokeWidth={2.1} />
                </div>
                <p className="font-medium text-white drop-shadow-lg">{industry.name}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
