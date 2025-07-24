import { useEffect } from 'react'
import { initScrollAnimations } from '@/lib/animations'

export default function useScrollAnimations() {
  useEffect(() => {
    // inicializa y guarda la función de limpieza
    const cleanup = initScrollAnimations()
    return () => {
      cleanup()
    }
  }, [])
}
