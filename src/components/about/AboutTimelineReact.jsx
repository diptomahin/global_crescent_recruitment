import useAos from '../../hooks/useAos'

const milestones = [
  { year: '2010', text: 'Company founded with a focus on international recruitment and workforce support.' },
  { year: '2014', text: 'Expanded reach into more regional hiring markets and employer partnerships.' },
  { year: '2018', text: 'Scaled placement volume and built a stronger multi-country sourcing network.' },
  { year: '2022', text: 'Reached major growth milestones in worker placement and employer retention.' },
  { year: '2026', text: 'Continuing to modernize our recruitment model while keeping service practical and responsive.' },
]

export default function AboutTimelineReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our journey</h2>
          <p className="mt-4 text-gray-600">A steady expansion built on long-term employer trust and worker support.</p>
        </div>
        <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-[#D60000]/20 sm:before:left-16">
          {milestones.map((item, index) => (
            <div
              key={item.year}
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="relative rounded-[26px] border border-gray-200 bg-white p-6 shadow-[0_15px_38px_rgba(0,0,0,0.05)] sm:ml-8 sm:flex sm:items-start sm:gap-6"
            >
              <div className="absolute left-3 top-8 h-3 w-3 rounded-full bg-[#D60000] sm:-left-10" />
              <div className="text-2xl font-bold text-[#D60000] sm:min-w-24">{item.year}</div>
              <p className="mt-3 text-gray-600 sm:mt-0">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
