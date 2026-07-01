# LP Maker — Landing Page Copy Library

A browsing tool for landing page templates and approved copy. Pick a
**landing page type** → drill into a **template** → see the recommended
**structure** and **good examples of approved copy** you can copy in one click.

## What it does

- **Landing Page Types** in the sidebar (Listicles, Advertorial, Comparison, Editorial Review…), each containing one or more **templates**.
- Each template shows a **Structure** outline — the recommended blocks (H1, Description, TL;DR, repeating H2 + Description, CTA, …) with best-practice guidance for what goes in each.
- Under the structure, a list of **approved copy examples** that follow the template. Every block is individually copyable, plus a "Copy full example" button.
- **Add your own examples** in-app — the form pre-fills the template's structure so you just paste in copy. Your examples are saved in your browser (localStorage) and tagged "Yours".
- **Search** filters examples within the current template.

## Data model

- **Seed content** (types, templates, structure, and the starter examples) lives in code at `src/data/landingPages.ts`. Edit that file to change the built-in library; it's version-controlled and shared with everyone.
- **User-added examples** are stored per-template in the browser via `src/storage.ts`. They're local to whoever added them — a good fit for personal/quick capture. To promote one into the shared library, copy it into `src/data/landingPages.ts`.

> The starter examples are **illustrative sample copy** to show the shape of a good page. Replace them with your own approved copy.

## Adding a new type or template (in code)

Open `src/data/landingPages.ts` and add to the `SEED_DATA` array:

```ts
{
  id: 'my-type',
  name: 'My Type',
  description: '…',
  templates: [
    {
      id: 'my-template',
      name: 'My Template',
      summary: '…',
      structure: [
        { id: 'h1', type: 'H1', label: 'H1 — Headline', guidance: '…' },
        // …
      ],
      examples: [],
    },
  ],
}
```

Block types available: `H1`, `H2`, `H3`, `Description`, `TLDR`, `Subhead`, `List`, `Quote`, `CTA`, `Disclaimer`, `Byline` (see `src/types.ts`).

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

Stack: Vite + React + TypeScript. No backend required.
