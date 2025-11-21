export const blogCategories = [
  'All',
  'AI/ML',
  'Cloud & DevOps',
  'Software Engineering',
  'Product Strategy',
  'Open Source',
  'Design & UI/UX'
]

export const featuredArticle = {
  id: 'featured-ai',
  title: 'The Future of AI in Software Development',
  excerpt:
    'Exploring how generative AI copilots, autonomous QA, and self-healing pipelines will reshape product delivery over the next 24 months.',
  category: 'AI/ML',
  author: {
    name: 'Alex Morgan',
    avatar: 'AM'
  },
  readTime: '8 min read',
  date: 'May 15, 2025',
  image: '/images/blog/ai-future.jpg',
  highlight: 'Research'
}

export const blogArticles = [
  {
    id: 'microservices-k8s',
    title: 'Building Scalable Microservices with Kubernetes',
    excerpt:
      'A practical playbook covering multi-cluster deployments, progressive delivery, and cost governance for Kubernetes workloads.',
    category: 'Cloud & DevOps',
    author: { name: 'Sarah Johnson', avatar: 'SJ' },
    readTime: '12 min read',
    date: 'May 10, 2025',
    tags: ['Kubernetes', 'Scalability', 'DevOps'],
    content:
      'We migrated a 90-service estate from a single cluster to a multi-cluster deployment model across three regions. The keys to success were progressive delivery with Argo Rollouts, request-level tracing before cutover, and ruthless cost governance using cluster cost allocation dashboards. This article walks through the architecture, the IaC patterns, and the operational checklists you can adapt for your own platform team.'
  },
  {
    id: 'low-code-rise',
    title: 'The Rise of Low-Code Platforms in Enterprise',
    excerpt:
      'How product teams combine low-code with custom services to accelerate experimentation without compromising governance.',
    category: 'Product Strategy',
    author: { name: 'Michael Chen', avatar: 'MC' },
    readTime: '6 min read',
    date: 'May 5, 2025',
    tags: ['Low-code', 'Product', 'Teams'],
    content:
      'Low-code is not a silver bullet, but when paired with well-defined guardrails it unlocks new velocity. At Nulfinity we pair FusionAuth-backed micro frontends with a sanctioned low-code workspace. Designers can prototype data-driven workflows without waiting for sprint grooming, and engineers productize the validated flows inside a shared component library. This article shares the governance checklist, security model, and education loops that keep the program healthy.'
  },
  {
    id: 'nas-demystified',
    title: 'Demystifying Neural Architecture Search',
    excerpt:
      'A plain-language guide to NAS techniques, when to use them, and how to avoid runaway training compute.',
    category: 'AI/ML',
    author: { name: 'David Rodriguez', avatar: 'DR' },
    readTime: '15 min read',
    date: 'April 28, 2025',
    tags: ['AI', 'Deep Learning'],
    content:
      'Neural Architecture Search (NAS) sounds intimidating, but most production teams can treat it like a disciplined hyper-parameter search with smarter priors. We cover differentiable NAS, evolutionary approaches, and hardware-aware NAS. The goal: understand when NAS adds value and how to keep your GPU bill from exploding. A reference implementation using PyTorch and Ray Tune is included.'
  },
  {
    id: 'design-systems-enterprise',
    title: 'Design Systems for Enterprise Applications',
    excerpt:
      'Frameworks for governing tokens, documentation, and adoption inside organizations with dozens of product surfaces.',
    category: 'Design & UI/UX',
    author: { name: 'Emma Wilson', avatar: 'EW' },
    readTime: '9 min read',
    date: 'April 22, 2025',
    tags: ['Design', 'Systems', 'Accessibility'],
    content:
      'Enterprise design systems fail when they focus on pixel parity instead of workflows. We show how to structure tokens, accessibility reviews, and contribution guidelines so product squads can ship faster without breaking consistency. Includes a playbook for “design system office hours” and a migration checklist for legacy React/Angular hybrids.'
  },
  {
    id: 'oss-security',
    title: 'Open Source Security Best Practices',
    excerpt:
      'Implementing supply chain scanning, SBOM automation, and contributor policies that keep your OSS usage safe.',
    category: 'Open Source',
    author: { name: 'James Park', avatar: 'JP' },
    readTime: '7 min read',
    date: 'April 18, 2025',
    tags: ['Security', 'SBOM', 'Open Source'],
    content:
      'From SBOM automation to provenance checks, this article covers the minimum viable security posture for teams consuming hundreds of OSS packages. You will learn how to enforce signed commits, set up dependable scanners, and craft contributor policies that balance community trust with enterprise guardrails.'
  },
  {
    id: 'serverless-beyond-hype',
    title: 'Serverless Computing: Beyond the Hype',
    excerpt:
      'Benchmarks, latency considerations, and when to pair serverless with edge runtimes for global products.',
    category: 'Cloud & DevOps',
    author: { name: 'Lisa Thompson', avatar: 'LT' },
    readTime: '11 min read',
    date: 'April 12, 2025',
    tags: ['Serverless', 'Edge', 'Architecture'],
    content:
      'We compare cold start profiles, throughput ceilings, and cost curves across AWS Lambda, Cloudflare Workers, and Deno Deploy. The conclusion: serverless still shines for event-driven workloads, but pairing it with edge caching or durable execution unlocks global low-latency experiences. We include Terraform blueprints and observability dashboards you can fork.'
  }
]

export const trendingTopics = [
  'React 19 Upgrades',
  'AI in Product Design',
  'Serverless Analytics',
  'Micro-frontend Strategies',
  'Security Automation',
  'Observability'
]

export const popularArticles = [
  { id: 'popular-1', title: 'Design Tokens at Scale', views: '14.2K' },
  { id: 'popular-2', title: 'Shipping Faster with Platform Teams', views: '11.1K' },
  { id: 'popular-3', title: 'Edge Functions for Global Commerce', views: '9.4K' }
]

export const communityQuestions = [
  {
    id: 'q1',
    title: 'How to optimize React performance with useMemo and useCallback?',
    excerpt:
      "Working on a large React application and experiencing performance issues. What are the best practices for using these hooks effectively?",
    author: { name: 'Alex Johnson', avatar: 'AJ' },
    tags: ['React', 'Performance', 'JavaScript'],
    votes: 24,
    answers: 8,
    timestamp: '2 hours ago',
    responses: [
      {
        id: 'q1-a1',
        body: 'Memoize expensive derived data and avoid wrapping every function with useCallback. Profile with React DevTools Profiler to find actual bottlenecks instead of guessing.',
        author: { name: 'Priya Menon', avatar: 'PM' },
        timestamp: '1 hour ago'
      },
      {
        id: 'q1-a2',
        body: 'Switch to React 18 concurrent mode features and use memoized selectors from Zustand/Redux Toolkit query for heavy lists.',
        author: { name: 'Leo Martin', avatar: 'LM' },
        timestamp: '34 minutes ago'
      }
    ]
  },
  {
    id: 'q2',
    title: 'Best practices for securing REST APIs?',
    excerpt:
      'What are the essential security measures I should implement for a REST API serving a web application?',
    author: { name: 'Sarah Miller', avatar: 'SM' },
    tags: ['Security', 'API', 'Backend'],
    votes: 18,
    answers: 5,
    timestamp: '5 hours ago',
    responses: [
      {
        id: 'q2-a1',
        body: 'Layered auth (mTLS + OAuth2), strict input validation, and observability for anomalous traffic. Also rotate secrets automatically via your cloud secret manager.',
        author: { name: 'Noah Patel', avatar: 'NP' },
        timestamp: '4 hours ago'
      }
    ]
  },
  {
    id: 'q3',
    title: 'Implementing CI/CD with GitHub Actions',
    excerpt:
      'Looking for a reference workflow for Node.js + PNPM monorepos that deploy to multiple regions.',
    author: { name: 'Mike Chen', avatar: 'MC' },
    tags: ['CI/CD', 'GitHub', 'DevOps'],
    votes: 15,
    answers: 3,
    timestamp: '1 day ago',
    responses: [
      {
        id: 'q3-a1',
        body: 'Use reusable workflows for lint/test/build, cache pnpm store, and gate deploy with environment protection rules. We included a sample workflow here: https://gist.github.com.',
        author: { name: 'Sara Klein', avatar: 'SK' },
        timestamp: '22 hours ago'
      }
    ]
  }
]

export const sidebarTags = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'AI',
  'Machine Learning',
  'Kubernetes',
  'Docker',
  'Cloud',
  'DevOps',
  'Security',
  'UI/UX'
]

