import { MessageCircle } from 'lucide-react'
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
        <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
      </div>
    </button>
  )
}
