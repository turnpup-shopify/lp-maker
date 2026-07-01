// Core data model for the Landing Page template library.

// A generalized document hierarchy: a single H1, then any number of H2
// sections, each with any number of paragraphs (and optional H3 subheads)
// beneath it. Kept deliberately simple so every template and example reads
// as a plain outline.
export type BlockType = 'H1' | 'H2' | 'H3' | 'Paragraph';

// A single section in a template's recommended structure.
export interface StructureBlock {
  id: string;
  type: BlockType;
  // Human label shown in the outline, e.g. "H2 — a section".
  label: string;
  // Short note on what belongs here.
  guidance?: string;
  optional?: boolean;
  // Sections that repeat (e.g. "an H2 with paragraphs" repeats per section).
  repeatable?: boolean;
}

// One concrete block of copy inside an example.
export interface ExampleBlock {
  type: BlockType;
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

// Display labels for each block type.
export const BLOCK_LABELS: Record<BlockType, string> = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  Paragraph: 'Paragraph',
};
