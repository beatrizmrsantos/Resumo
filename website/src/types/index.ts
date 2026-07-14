export interface Block {
  type: 'paragraph' | 'code' | 'heading' | 'subheading' | 'table' | 'detail';
  content: string;
  language?: string;
  spacingBefore?: number;
  headers?: string[];
  rows?: string[][];
  summary?: string;
}

export interface Section {
  id: string;
  title: string;
  level: 'chapter' | 'subsection';
  number?: string;
  partColor?: string;
  blocks: Block[];
}

export interface Part {
  id: string;
  number: string;
  title: string;
  color: string;
  sections: Section[];
}

export interface ParsedDocument {
  parts: Part[];
}

export interface TocEntry {
  id: string;
  label: string;
  number?: string;
  level: 'part' | 'chapter';
  color: string;
  children: TocEntry[];
}

export interface DocumentMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
  filename: string;
}

export interface SearchMatch {
  sectionId: string;
  sectionTitle: string;
  partTitle: string;
  snippet: string;
  color: string;
}
