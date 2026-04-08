import { useEffect } from 'react'
import AOS from 'aos'

export default function useAos(options = {}) {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
      ...options,
    })

    AOS.refresh()
  }, [])
}
