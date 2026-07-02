import type { DocumentMeta } from '../types'

// Raw content imports — add new .md files to /docs/ and register them here
import techStudyGuideRaw from '../../../docs/tech-study-guide.md?raw'
import systemDesignRaw from '../../../docs/system-design.md?raw'

export const documentContents: Record<string, string> = {
  'tech-study-guide': techStudyGuideRaw,
  'system-design': systemDesignRaw,
}

export const documents: DocumentMeta[] = [
  {
    id: 'tech-study-guide',
    title: 'Technical Study Guide',
    description: 'Interview prep covering 128 chapters across backend, frontend, cloud, databases, testing, and engineering practices.',
    icon: '💻',
    color: '#E84393',
    tags: ['Java', 'TypeScript', 'React', 'Spring Boot', 'Docker', 'Kubernetes', 'SQL', 'Python', 'GraphQL', 'Next.js'],
    filename: 'tech-study-guide.md',
  },
  {
    id: 'system-design',
    title: 'System Design Interview Guide',
    description: 'System design interview prep: the 5-step framework, 32 chapters on core building blocks, and 5 fully solved exercises with detailed answers.',
    icon: '🏗️',
    color: '#7C3AED',
    tags: ['Scalability', 'Caching', 'Load Balancing', 'Kafka', 'CDN', 'Microservices', 'CAP Theorem', 'Redis', 'SQL', 'NoSQL'],
    filename: 'system-design.md',
  },
]
