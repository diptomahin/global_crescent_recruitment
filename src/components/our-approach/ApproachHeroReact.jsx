import useAos from '../../hooks/useAos'

export default function ApproachHeroReact() {
  useAos()

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,_rgba(214,0,0,0.18),_transparent_22%),radial-gradient(circle_at_78%_22%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(135deg,#080808_0%,#151515_45%,#1f2b22_100%)] pt-28 text-white md:pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div data-aos="fade-right">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Our recruitment approach is structured, practical, and service-first.</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              We focus on understanding hiring goals, improving candidate fit, and keeping both employers and workers informed through each phase of the process.
            </p>
          </div>
          <div className="grid gap-4" data-aos="fade-left">
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
              <p className="font-semibold text-white">Strategic planning</p>
              <p className="mt-2 text-white/75">We start with a clear understanding of role requirements, hiring volume, and placement expectations.</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
              <p className="font-semibold text-white">Global sourcing</p>
              <p className="mt-2 text-white/75">Our network helps us identify suitable candidates across multiple regions and industries.</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
              <p className="font-semibold text-white">Quality control</p>
              <p className="mt-2 text-white/75">We focus on screening consistency so employers see more relevant and deployment-ready profiles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
