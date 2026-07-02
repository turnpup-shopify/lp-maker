// Core data model for the Landing Page template library.

// Elements used in a template's recommended structure outline.
export type BlockType = 'H1' | 'H2' | 'H3' | 'Paragraph';

// The buckets that approved-copy examples are filed under, per template.
// Each template has exactly one list of H1 examples, one of H2 examples,
// and one of paragraph examples.
export const EXAMPLE_CATEGORIES = ['H1', 'H2', 'Paragraph'] as const;
export type ExampleCategory = (typeof EXAMPLE_CATEGORIES)[number];

// A single section in a template's recommended structure.
export interface StructureBlock {
  id: string;
  type: BlockType;
  label: string;
  guidance?: string;
  optional?: boolean;
  repeatable?: boolean;
}

// One approved copy example — a single snippet filed under a category
// (H1 / H2 / Paragraph) within a template.
export interface CopyExample {
  id: string;
  category: ExampleCategory;
  content: string;
  // Where the copy came from (brand, campaign, channel).
  source?: string;
  // Reviewer notes / why this is a good example.
  notes?: string;
  approved: boolean;
  // True for examples the user added in-app (stored locally).
  userAdded?: boolean;
}

// A specific template within a landing page type, e.g. "X Reasons Why".
export interface Template {
  id: string;
  name: string;
  summary: string;
  structure: StructureBlock[];
  // Flat list of snippets; the UI groups them by category.
  examples: CopyExample[];
}

// A top-level landing page type, e.g. "Listicles".
export interface LandingPageType {
  id: string;
  name: string;
  description: string;
  templates: Template[];
}

// Display labels.
export const BLOCK_LABELS: Record<BlockType, string> = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  Paragraph: 'Paragraph',
};

export const CATEGORY_LABELS: Record<ExampleCategory, string> = {
  H1: 'H1 examples',
  H2: 'H2 examples',
  Paragraph: 'Paragraph examples',
};
