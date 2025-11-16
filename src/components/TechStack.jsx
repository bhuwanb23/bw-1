import SectionTitle from './SectionTitle.jsx'
import Reveal from './Reveal.jsx'

const categories = [
  {
    title: 'Frontend Experience',
    tools: ['React', 'Next.js', 'Remix', 'Vite', 'Tailwind CSS', 'Three.js'],
  },
  {
    title: 'Backend & Cloud',
    tools: ['Node.js', 'Python', 'Go', 'GraphQL', 'AWS', 'Azure'],
  },
  {
    title: 'Mobile & Edge',
    tools: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Ionic', 'Firebase'],
  },
  {
    title: 'Data, AI & Automation',
    tools: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'Supabase', 'Airflow'],
  },
]

const TechStack = () => {
  const orbitTools = ['React', 'Node', 'AWS', 'AI', 'K8s', 'Cloud']

  return (
    <section id="tech" className="py-32 min-h-screen flex items-center">
      <div className="rounded-xl border border-white/5 bg-white/5 p-10 backdrop-blur-sm w-full">
        <div className="flex flex-col gap-12">
          <Reveal className="reveal-up" amount={0.2}>
            <SectionTitle
              eyebrow="Technology"
              title="Modern stack, infinite scale"
              subtitle="Built for velocity and resilience."
              align="center"
            />
          </Reveal>

          <Reveal className="reveal-up" amount={0.25} delay={140}>
            <div className="tech-orbit">
              <div className="tech-orbit__core"></div>
              {orbitTools.map((item, index) => {
                const angle = (index / orbitTools.length) * 360
                const radius = 100
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                return (
                  <span
                    key={item}
                    className="tech-orbit__item"
                    style={{
                      transform: `translate(calc(120px + ${x}px - 50%), calc(120px + ${y}px - 50%))`,
                    }}
                  >
                    {item}
                  </span>
                )
              })}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Reveal
                key={category.title}
                as="div"
                delay={index * 80}
                className="group rounded-2xl border border-blue-500/10 bg-black/40 backdrop-blur p-4 text-center transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/5"
              >
                <h3 className="text-sm font-semibold text-white mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-blue-500/20 bg-black/60 px-2 py-1 text-xs text-white/70 hover:border-blue-400/40 hover:text-white transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

