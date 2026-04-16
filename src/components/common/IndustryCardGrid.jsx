import { useEffect, useRef, useState } from 'react'

function LazyIndustryImage({ alt, image, eager = false }) {
  const [shouldLoad, setShouldLoad] = useState(eager)
  const cardRef = useRef(null)

  useEffect(() => {
    if (eager || shouldLoad) {
      return undefined
    }

    const node = cardRef.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '220px 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [eager, shouldLoad])

  return (
    <div
      ref={cardRef}
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(135deg,#2a2a2a_0%,#171717_55%,#0d0d0d_100%)]"
    >
      {shouldLoad ? (
        <img
          src={`/industries/${image}`}
          alt={alt}
          width="640"
          height="480"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'low'}
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : null}
    </div>
  )
}

export default function IndustryCardGrid({
  items,
  cardClassName,
  sectionClassName = 'bg-[linear-gradient(180deg,#f5efe8_0%,#ffffff_100%)] py-20',
  title,
  description,
}) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">{description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon
            const eager = index < 4

            return (
              <article
                key={item.name}
                className={cardClassName}
              >
                <LazyIndustryImage alt={item.name} image={item.image} eager={eager} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
                <div className="relative flex h-48 flex-col items-center justify-center p-6 text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#D60000] to-[#9B0000] text-white shadow-lg">
                    <Icon size={24} strokeWidth={2.1} />
                  </div>
                  <p className="font-medium text-white drop-shadow-lg">{item.name}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
