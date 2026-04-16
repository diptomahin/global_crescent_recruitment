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

const sectors = [
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

export default function WorkersOpportunitiesReact() {
  return (
    <section id="worker-opportunities" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
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
              className="group relative overflow-hidden rounded-[26px] border border-gray-200 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/18 hover:shadow-[0_22px_45px_rgba(214,0,0,0.08)]"
            >
              <img
                src={`/industries/${sector.image}`}
                alt={sector.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
              <div className="relative flex h-48 flex-col items-center justify-center p-6 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#D60000] to-[#9B0000] text-white shadow-lg">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <p className="font-medium text-white drop-shadow-lg">{sector.name}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
