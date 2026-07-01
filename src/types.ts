// Core data model for the Landing Page template library.

// The kind of copy block a template section holds. Used both for the
// template "skeleton" and for the concrete copy inside an example.
export type BlockType =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'Description'
  | 'TLDR'
  | 'Subhead'
  | 'List'
  | 'Quote'
  | 'CTA'
  | 'Disclaimer'
  | 'Byline';

// A single section in a template's recommended structure.
export interface StructureBlock {
  id: string;
  type: BlockType;
  // Human label shown in the outline, e.g. "H2 — First reason".
  label: string;
  // What belongs here + best-practice guidance for writing it.
  guidance?: string;
  optional?: boolean;
  // Sections like "H2 + Description" repeat once per list item.
  repeatable?: boolean;
}

// One concrete block of copy inside an example.
export interface ExampleBlock {
  type: BlockType;
  // Optional override label, e.g. "H2 - Second".
  label?: string;
  content: string;
}

// A full worked example of approved copy that follows a template.
export interface CopyExample {
  id: string;
  title: string;
  // Where the copy came from (brand, campaign, channel).
  source?: string;
  // Reviewer notes / why this is a good example.
  notes?: string;
  approved: boolean;
  blocks: ExampleBlock[];
  // True for examples the user added in-app (stored locally).
  userAdded?: boolean;
}

// A specific template within a landing page type, e.g. "X Reasons Why".
export interface Template {
  id: string;
  name: string;
  summary: string;
  structure: StructureBlock[];
  examples: CopyExample[];
}

// A top-level landing page type, e.g. "Listicles".
export interface LandingPageType {
  id: string;
  name: string;
  description: string;
  templates: Template[];
}

// Nice display labels for each block type.
export const BLOCK_LABELS: Record<BlockType, string> = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  Description: 'Description',
  TLDR: 'TL;DR',
  Subhead: 'Subhead',
  List: 'List',
  Quote: 'Quote',
  CTA: 'CTA',
  Disclaimer: 'Disclaimer',
  Byline: 'Byline',
};
