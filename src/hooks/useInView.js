import { useEffect, useRef, useState } from 'react'

const useInView = ({ once = true, margin = '0px', amount = 0.2 } = {}) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        rootMargin: margin,
        threshold: amount,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, margin, amount])

  return { ref, isInView }
}

export default useInView

