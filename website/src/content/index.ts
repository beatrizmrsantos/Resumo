import type { DocumentMeta } from '../types'

// Raw content imports — add new .txt files to /docs/ and register them here
import techStudyGuideRaw from '../../../docs/tech-study-guide.txt?raw'

export const documentContents: Record<string, string> = {
  'tech-study-guide': techStudyGuideRaw,
}

export const documents: DocumentMeta[] = [
  {
    id: 'tech-study-guide',
    title: 'Technical Study Guide',
    description: 'Complete interview prep guide covering 47+ technologies across backend, frontend, cloud, databases, testing and engineering practices.',
    icon: '💻',
    color: '#E84393',
    tags: ['Java', 'TypeScript', 'React', 'Spring Boot', 'Docker', 'Kubernetes', 'SQL', 'Python', 'GraphQL', 'Next.js'],
    filename: 'tech-study-guide.txt',
  },
  // Add more documents here:
  // {
  //   id: 'system-design',
  //   title: 'System Design Notes',
  //   description: '...',
  //   icon: '🏗️',
  //   color: '#7C3AED',
  //   tags: [...],
  //   filename: 'system-design.txt',
  // },
]
