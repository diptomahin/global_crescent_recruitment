import useAos from '../../hooks/useAos'

const benefits = [
  'Competitive pay opportunities',
  'Career growth through new markets',
  'More structured placement support',
  'Improved access to employer networks',
  'Practical help with onboarding readiness',
  'Responsive communication throughout the process',
]

export default function WorkersGrowthReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why workers stay engaged with us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We focus on helping candidates move through the hiring process with more clarity, support, and realistic expectations.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="rounded-[24px] bg-white p-6 shadow-[0_15px_38px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]"
            >
              <p className="font-medium text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
