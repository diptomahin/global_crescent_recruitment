import useAos from '../../hooks/useAos'

const testimonials = [
  {
    name: 'Muhammad Ali',
    role: 'Construction Supervisor',
    text: 'The process felt organized from the beginning, and I always knew what the next step was.',
  },
  {
    name: 'Fatima Hassan',
    role: 'Healthcare Professional',
    text: 'I appreciated the communication and support during placement preparation and onboarding.',
  },
  {
    name: 'Ahmed Khan',
    role: 'IT Specialist',
    text: 'The team helped match my profile with an opportunity that actually aligned with my experience.',
  },
]

export default function WorkersTestimonialsReact() {
  useAos()

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Worker experiences</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">A few examples of how candidates describe the support they received during the recruitment process.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.name}
              data-aos="flip-left"
              data-aos-delay={index * 110}
              className="rounded-[28px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbf9f8_100%)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="text-4xl leading-none text-[#D60000]">&ldquo;</div>
                <div className="rounded-full bg-[#111111] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">Verified</div>
              </div>
              <p className="text-gray-600">&quot;{testimonial.text}&quot;</p>
              <footer className="mt-5">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
