import useAos from '../../hooks/useAos'

export default function WhatsAppButton() {
  useAos({ duration: 700 })

  const phoneNumber = '447493478440'
  const message = 'Hello! I am interested in learning more about Global Crescent Recruitment services.'

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      data-aos="zoom-in-left"
      data-aos-delay="180"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-75"></div>

      <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20ba5e] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-4 border-white">
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.967 1.523 9.829 9.829 0 00-6.064 9.307c0 2.637.694 5.218 2.021 7.523l-2.148 6.844 7.08-2.177a9.922 9.922 0 004.827 1.231h.004c5.446 0 9.869-4.423 9.869-9.869 0-2.631-.997-5.101-2.81-6.96a9.826 9.826 0 00-7.008-2.892M2.059 23.25l2.275-7.241A9.986 9.986 0 012 11.914C2 6.465 6.477 2 11.986 2c2.709 0 5.25 1.055 7.16 2.965a9.9 9.9 0 012.967 7.08c0 5.449-4.423 9.869-9.869 9.869a9.9 9.9 0 01-4.864-1.245l-7.321 2.251z" />
        </svg>
      </div>

      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
      </div>
    </button>
  )
}
