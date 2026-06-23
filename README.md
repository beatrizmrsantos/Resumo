# Resumo — Technical Study Guide

A personal study guide built as a React web app. Plain `.txt` documents are parsed at runtime into a structured, navigable reference site with syntax-highlighted code, a searchable table of contents, and dynamic section navigation.

## Stack

- **React 18 + TypeScript** — built with Vite
- **React Router v6** — client-side navigation
- **react-syntax-highlighter** — Prism-based code highlighting
- **lucide-react** — icons

## Project structure

```
Resumo/
├── docs/
│   └── tech-study-guide.txt   # source document (plain text)
└── website/
    ├── src/
    │   ├── content/            # document registry (index.ts)
    │   ├── pages/              # HomePage, DocumentPage
    │   ├── components/         # Sidebar, SectionContent, CodeBlock, DocumentCard
    │   └── utils/
    │       └── parser.ts       # txt → structured AST (parts → chapters → blocks)
    ├── vercel.json
    └── vite.config.ts
```

## How documents are parsed

The parser (`website/src/utils/parser.ts`) reads the raw `.txt` file and produces a tree:

```
ParsedDocument
  └── Part[]        (e.g. "Part 1 — Programming Languages")
        └── Section[]   (chapters like "1.01 Java", subsections)
              └── Block[]   (paragraphs, headings, code blocks)
```

Code blocks are auto-detected from indented content using heuristics (`looksLikeCode`) — no backtick fences required in the source file.

## Adding a new document

1. Drop a `.txt` file into `docs/`
2. Register it in `website/src/content/index.ts`:

```ts
export const documents: DocumentMeta[] = [
  {
    id: 'my-doc',
    title: 'My Document',
    description: 'Short description shown on the home page.',
    icon: '📘',
    color: '#6366f1',
    tags: [],
    filename: 'my-doc.txt',
  },
]

import myDocRaw from '../../../docs/my-doc.txt?raw'
export const documentContents: Record<string, string> = {
  'my-doc': myDocRaw,
}
```

## Running locally

```bash
cd website
npm install
npm run dev
```

## Deploying to Vercel

The project is configured for Vercel with SPA routing handled via `vercel.json`.

When importing into Vercel, set:

| Setting | Value |
|---|---|
| Root Directory | `website` |
| Build Command | `tsc && vite build` |
| Output Directory | `dist` |

Production deploys trigger only on pushes to `main`.
