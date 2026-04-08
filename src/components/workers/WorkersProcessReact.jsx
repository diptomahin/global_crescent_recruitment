import useAos from '../../hooks/useAos'

const steps = [
  'Register and share your profile',
  'Complete screening and assessment',
  'Get matched with suitable openings',
  'Attend interviews and selection rounds',
  'Finalize documentation and preparation',
  'Move into onboarding and deployment',
]

export default function WorkersProcessReact() {
  useAos()

  return (
    <section className="bg-[linear-gradient(180deg,#111111_0%,#181818_100%)] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold sm:text-4xl">Your path to placement</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">A simple, structured process designed to keep candidates informed and prepared.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="rounded-[26px] border border-white/10 bg-white/6 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur"
            >
              <p className="text-sm font-semibold text-[#ff7a7a]">STEP {index + 1}</p>
              <p className="mt-3 font-medium text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
