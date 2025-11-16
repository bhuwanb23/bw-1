import useInView from '../hooks/useInView.js'

const Reveal = ({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  once = true,
  margin = '-10% 0px',
  amount = 0.2,
}) => {
  const { ref, isInView } = useInView({ once, margin, amount })

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-up ${isInView ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </Component>
  )
}

export default Reveal

