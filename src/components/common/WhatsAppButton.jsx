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
          <path d="M20.52 3.48C18.9 1.84 16.77 1 14.49 1 7.88 1 2.51 6.37 2.51 12.98c0 2.05.53 4.06 1.56 5.84L2.5 23l6.26-1.64c1.71.92 3.66 1.41 5.63 1.41 6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.24-6.21-3.5-8.48zm-5.95 18.34c-1.74 0-3.46-.46-4.99-1.34l-.36-.21-3.71.97.99-3.64-.23-.37c-1.02-1.62-1.56-3.5-1.56-5.42 0-5.53 4.5-10.03 10.03-10.03 2.68 0 5.2 1.05 7.09 2.94 1.89 1.89 2.93 4.4 2.93 7.09 0 5.53-4.5 10.03-10.03 10.03zm5.47-7.51c-.3-.15-1.76-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.025-.52-.075-.15-.68-1.63-.93-2.23-.24-.59-.49-.51-.68-.52-.18-.01-.38-.01-.58-.01-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </div>

      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
      </div>
    </button>
  )
}
