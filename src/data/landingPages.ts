import type { CopyExample, LandingPageType, StructureBlock } from '../types';

// Every template shares the same generalized structure outline: an H1, an
// optional intro paragraph, then repeatable H2 sections with paragraphs.
function structure(h1: string, intro: string, h2: string, para: string): StructureBlock[] {
  return [
    { id: 'h1', type: 'H1', label: 'H1 — the headline', guidance: h1 },
    { id: 'intro', type: 'Paragraph', label: 'Paragraph — intro', guidance: intro, optional: true },
    { id: 'h2', type: 'H2', label: 'H2 — a section', guidance: h2, repeatable: true },
    { id: 'para', type: 'Paragraph', label: 'Paragraph — under each H2', guidance: para, repeatable: true },
  ];
}

// Small helper to build categorized snippet examples for a template.
let seq = 0;
function ex(
  category: CopyExample['category'],
  content: string,
  source = 'Sample copy',
  notes?: string,
): CopyExample {
  seq += 1;
  return { id: `seed-${seq}`, category, content, source, notes, approved: true };
}

// The examples below are illustrative sample copy grouped by slot — a few
// approved H1s, H2s, and paragraphs per template. Replace with your own, or
// add your own in-app.
export const SEED_DATA: LandingPageType[] = [
  {
    id: 'listicles',
    name: 'Listicles',
    description:
      'Numbered or list-driven pages that break a pitch into scannable, individually persuasive points. Great for cold traffic and skeptical readers.',
    templates: [
      {
        id: 'x-reasons-why',
        name: 'X Reasons Why',
        summary: 'A single promise up top, then N discrete reasons — each its own H2 with a short paragraph of proof.',
        structure: structure(
          'State the number and the payoff, e.g. "7 Reasons Why…". Lead with benefit.',
          'Frame the problem and tee up the list in a sentence or two.',
          'One H2 per reason, ordered strongest first. Make it a benefit-led claim.',
          'Back the reason with one concrete proof point (a stat, mechanism, or detail).',
        ),
        examples: [
          ex('H1', '5 Reasons Why People Are Switching to a Drug-Free Sleep Routine'),
          ex('H1', '7 Reasons Your Morning Coffee Isn’t Working Anymore'),
          ex('H2', 'You fall asleep faster — without feeling drugged'),
          ex('H2', 'You wake up clear, not groggy'),
          ex('H2', 'It’s non-habit-forming'),
          ex('H2', 'You’re not risking anything to try it'),
          ex(
            'Paragraph',
            'If you lie awake replaying your day — or wake at 3am and can’t drift back off — you don’t need another prescription. Here’s why thousands are rebuilding their nights around a simple nightly ritual instead.',
            'Sample copy',
            'Good intro paragraph: names the pain, teases the list.',
          ),
          ex(
            'Paragraph',
            'The blend leans on magnesium glycinate and L-theanine to quiet a racing mind rather than sedate you. Most people drift off in under 20 minutes within the first week.',
            'Sample copy',
            'Proof paragraph: one concrete mechanism + a specific result.',
          ),
          ex(
            'Paragraph',
            'Every order is backed by a 60-night guarantee. Sleep on it for two months; if your nights aren’t better, get every penny back.',
          ),
        ],
      },
      {
        id: 'best-x-for-y',
        name: 'Best X for Y (Roundup)',
        summary: 'A ranked roundup that positions your product as the top pick among options.',
        structure: structure(
          'Name the category and reader, e.g. "The 6 Best X for Y".',
          'Say briefly how the picks were chosen — credibility is everything in a roundup.',
          'One H2 per pick, each with a superlative ("Best overall", "Best budget").',
          'Who the pick is for, its standout feature, and one honest limitation.',
        ),
        examples: [
          ex('H1', 'The 5 Best Blenders for Daily Smoothies in 2026'),
          ex('H2', 'Best overall: the everyday workhorse'),
          ex('H2', 'Best budget: nearly as good for half the price'),
          ex('H2', 'Best for small kitchens: compact and quiet'),
          ex(
            'Paragraph',
            'We ran twelve blenders through a month of morning smoothies, frozen fruit, and leafy greens. These five came out ahead — starting with the one we’d buy again.',
            'Sample copy',
            'Methodology intro — establishes credibility.',
          ),
          ex(
            'Paragraph',
            'It crushed frozen berries and ice without leaving grit, and the jar wiped clean in seconds. Pricier than most here, but the one we reached for every morning.',
          ),
        ],
      },
    ],
  },
  {
    id: 'advertorial',
    name: 'Advertorial',
    description:
      'Editorial-style pages that read like an article but sell. They earn attention with a story or discovery, then bridge to the product.',
    templates: [
      {
        id: 'story-based',
        name: 'Story-Based Advertorial',
        summary: 'A first-person discovery story: a relatable problem, failed fixes, then the product as the turning point.',
        structure: structure(
          'An editorial, curiosity-driven headline. Avoid looking like an ad.',
          'Open in-scene with a specific, relatable moment. The reader should think "that’s me".',
          'Each H2 moves the story forward — the failed attempts, the turning point, the result.',
          'Tell that beat of the story plainly; let the product emerge as the discovery.',
        ),
        examples: [
          ex('H1', 'I Tried Everything for My Dry Winter Skin — Here’s the Only Thing That Finally Stuck'),
          ex('H1', 'I Was Skeptical of "Smart" Water Bottles. Then Mine Fixed a Habit I’d Failed at for Years.'),
          ex('H2', 'Then a dermatologist told me I was moisturizing backwards'),
          ex('H2', 'The first morning it actually worked'),
          ex(
            'Paragraph',
            'Every January my hands would crack at the knuckles — the kind of dry that stings when you wash a dish. I’d slather on lotion after lotion and by lunch it was like I’d applied nothing at all.',
            'Sample copy',
            'In-scene opener — specific and sensory.',
          ),
          ex(
            'Paragraph',
            'I tried the drugstore stuff, the luxury stuff, the "clinical" stuff. Some felt nice for an hour. None of them lasted, and a few left my skin feeling tight and worse than before.',
            'Sample copy',
            'Failed-attempts paragraph — pre-handles objections.',
          ),
          ex(
            'Paragraph',
            'The problem wasn’t hydration — it was that nothing was holding it in. The fix was a barrier cream with ceramides and squalane that seals moisture in overnight instead of letting it evaporate.',
          ),
        ],
      },
      {
        id: 'pas-advertorial',
        name: 'Problem–Agitate–Solve',
        summary: 'Name the problem, show what it’s really costing, then present the product as relief.',
        structure: structure(
          'Call out the exact pain in the reader’s own words.',
          'Describe the problem so precisely the reader feels seen.',
          'Each H2 is a beat: the problem, the hidden cost, the solution.',
          'Escalate the stakes, then turn to how the product resolves them.',
        ),
        examples: [
          ex('H1', 'That Nagging Upper-Back Ache Isn’t "Just Getting Older"'),
          ex('H2', 'It’s quietly costing you more than comfort'),
          ex('H2', 'The fix is a gentle reminder, not another gadget'),
          ex(
            'Paragraph',
            'By mid-afternoon your shoulders creep toward the screen and the ache between your shoulder blades sets in. You stretch, you forget, it comes back.',
            'Sample copy',
            'Problem paragraph — precise enough that the reader feels seen.',
          ),
          ex(
            'Paragraph',
            'Slouched hours compound into stiffer mornings, worse sleep, and the low-grade fatigue that makes everything harder. Left alone, it rarely fixes itself.',
            'Sample copy',
            'Agitate paragraph — the hidden cost.',
          ),
        ],
      },
    ],
  },
  {
    id: 'comparison',
    name: 'Comparison / Alternative',
    description:
      'Head-to-head pages aimed at buyers already evaluating options ("A vs B", "the best alternative to…"). High intent, high converting.',
    templates: [
      {
        id: 'vs-page',
        name: 'A vs B',
        summary: 'Compares your product to a named competitor across the criteria buyers actually weigh.',
        structure: structure(
          'A neutral-sounding matchup, e.g. "You vs Competitor: which is right for you?".',
          'Acknowledge both are good; frame it as fit, not winner-take-all.',
          'One H2 per decision factor (price, speed, support…).',
          'A specific, fair head-to-head for that factor — concede where they win.',
        ),
        examples: [
          ex('H1', 'Acme vs Bolt: Which Project Tool Is Right for Your Team?'),
          ex('H2', 'Setup and onboarding'),
          ex('H2', 'Price'),
          ex(
            'Paragraph',
            'Both are solid — teams happily use each every day. The right pick depends on how big your team is and how much structure you want.',
            'Sample copy',
            'Framing intro — fit, not winner-take-all.',
          ),
          ex(
            'Paragraph',
            'Bolt is cheaper at the entry tier — if budget is the deciding factor, they win it. Acme’s value shows up once you’re past a handful of seats.',
            'Sample copy',
            'Head-to-head paragraph that concedes a point (credibility).',
          ),
        ],
      },
    ],
  },
  {
    id: 'review',
    name: 'Editorial Review',
    description: 'Long-form, credible product reviews that read like a trusted third party put the product through its paces.',
    templates: [
      {
        id: 'product-review',
        name: 'Product Review',
        summary: 'A structured, seemingly-independent review with a verdict and a hands-on account.',
        structure: structure(
          'A review headline that signals a verdict, e.g. "X Review: is it worth it?".',
          'Open with the verdict and who it’s for — reviewers read this first.',
          'Each H2 is a review section: the good, the drawbacks, the hands-on test.',
          'Specifics beat adjectives — narrate what using it was actually like.',
        ),
        examples: [
          ex('H1', 'Wave Pro Headphones Review: Worth It in 2026?'),
          ex('H2', 'What’s good'),
          ex('H2', 'The drawbacks'),
          ex('H2', 'How they held up day to day'),
          ex(
            'Paragraph',
            'Short version: if you want all-day comfort and strong noise cancelling for the price, these are an easy recommendation. Bass-heads may want to look elsewhere.',
            'Sample copy',
            'Verdict paragraph up top.',
          ),
          ex(
            'Paragraph',
            'The bass is polite rather than punchy, and the app’s EQ only partly fixes it. The case is also bigger than it needs to be.',
            'Sample copy',
            'Honest drawbacks paragraph — credibility.',
          ),
        ],
      },
    ],
  },
];
