import type { LandingPageType, StructureBlock } from '../types';

// Every template follows the same generalized shape: one H1, an optional
// intro paragraph, then any number of H2 sections, each with any number of
// paragraphs beneath it. The guidance below just tailors what each section
// is for. Copy inside the examples is illustrative sample copy — replace it
// with your own approved copy, or add your own examples in-app.

function structure(
  h1: string,
  intro: string,
  h2: string,
  para: string,
): StructureBlock[] {
  return [
    { id: 'h1', type: 'H1', label: 'H1 — the headline', guidance: h1 },
    { id: 'intro', type: 'Paragraph', label: 'Paragraph — intro', guidance: intro, optional: true },
    { id: 'h2', type: 'H2', label: 'H2 — a section', guidance: h2, repeatable: true },
    { id: 'para', type: 'Paragraph', label: 'Paragraph — under each H2', guidance: para, repeatable: true },
  ];
}

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
        summary:
          'A single promise up top, then N discrete reasons — each its own H2 with a short paragraph of proof.',
        structure: structure(
          'State the number and the payoff, e.g. "7 Reasons Why…". Lead with benefit.',
          'Frame the problem and tee up the list in a sentence or two.',
          'One H2 per reason, ordered strongest first. Make it a benefit-led claim.',
          'Back the reason with one concrete proof point (a stat, mechanism, or detail).',
        ),
        examples: [
          {
            id: 'ex-reasons-sleep',
            title: '5 Reasons Why (sleep supplement — sample)',
            source: 'Sample copy',
            approved: true,
            notes: 'Strongest reason first; each H2 is a claim, each paragraph is one concrete proof.',
            blocks: [
              { type: 'H1', content: '5 Reasons Why People Are Switching to a Drug-Free Sleep Routine' },
              {
                type: 'Paragraph',
                content:
                  'If you lie awake replaying your day — or wake at 3am and can’t drift back off — you don’t need another prescription. Here’s why thousands are rebuilding their nights around a simple nightly ritual instead.',
              },
              { type: 'H2', content: 'You fall asleep faster — without feeling drugged' },
              {
                type: 'Paragraph',
                content:
                  'The blend leans on magnesium glycinate and L-theanine to quiet a racing mind rather than sedate you. Most people drift off in under 20 minutes within the first week.',
              },
              { type: 'H2', content: 'You wake up clear, not groggy' },
              {
                type: 'Paragraph',
                content:
                  'Because it works with your body’s own wind-down signals instead of overriding them, there’s no morning fog — the complaint that makes people quit sleep aids.',
              },
              { type: 'H2', content: 'It’s non-habit-forming' },
              {
                type: 'Paragraph',
                content:
                  'No dependency, no escalating doses, nothing to taper off. Use it every night or only on the rough ones.',
              },
              { type: 'H2', content: 'You’re not risking anything to try it' },
              {
                type: 'Paragraph',
                content:
                  'Every order is backed by a 60-night guarantee. Sleep on it for two months; if your nights aren’t better, get every penny back.',
              },
              { type: 'H2', content: 'It costs less than your morning coffee' },
              {
                type: 'Paragraph',
                content: 'At about a dollar a night, better sleep costs less than the drink you reach for because you slept badly.',
              },
            ],
          },
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
          {
            id: 'ex-roundup-blender',
            title: 'Best blenders roundup (sample)',
            source: 'Sample copy',
            approved: true,
            notes: 'Top pick first; each section names who it’s for and stays honest so #1 shines fairly.',
            blocks: [
              { type: 'H1', content: 'The 5 Best Blenders for Daily Smoothies in 2026' },
              {
                type: 'Paragraph',
                content:
                  'We ran twelve blenders through a month of morning smoothies, frozen fruit, and leafy greens. These five came out ahead — starting with the one we’d buy again.',
              },
              { type: 'H2', content: 'Best overall: the everyday workhorse' },
              {
                type: 'Paragraph',
                content:
                  'It crushed frozen berries and ice without leaving grit, and the jar wiped clean in seconds. Pricier than most here, but the one we reached for every morning.',
              },
              { type: 'H2', content: 'Best budget: nearly as good for half the price' },
              {
                type: 'Paragraph',
                content:
                  'Handles daily smoothies without complaint. The motor slows on very thick frozen blends, so add a splash more liquid.',
              },
              { type: 'H2', content: 'Best for small kitchens: compact and quiet' },
              {
                type: 'Paragraph',
                content:
                  'A personal-size jar that blends to-go and tucks into a drawer. Not built for big batches, but ideal for one.',
              },
            ],
          },
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
          {
            id: 'ex-adv-skincare',
            title: 'Story advertorial (skincare — sample)',
            source: 'Sample copy',
            approved: true,
            notes: 'Opens in-scene, lists failed fixes to pre-handle objections, then bridges to the mechanism.',
            blocks: [
              { type: 'H1', content: 'I Tried Everything for My Dry Winter Skin — Here’s the Only Thing That Finally Stuck' },
              {
                type: 'Paragraph',
                content:
                  'Every January my hands would crack at the knuckles — the kind of dry that stings when you wash a dish. I’d slather on lotion after lotion and by lunch it was like I’d applied nothing at all.',
              },
              {
                type: 'Paragraph',
                content:
                  'I tried the drugstore stuff, the luxury stuff, the "clinical" stuff. Some felt nice for an hour. None of them lasted, and a few left my skin feeling tight and worse than before.',
              },
              { type: 'H2', content: 'Then a dermatologist told me I was moisturizing backwards' },
              {
                type: 'Paragraph',
                content:
                  'The problem wasn’t hydration — it was that nothing was holding it in. The fix was a barrier cream with ceramides and squalane that seals moisture in overnight instead of letting it evaporate.',
              },
              { type: 'H2', content: 'The first morning it actually worked' },
              {
                type: 'Paragraph',
                content:
                  'I woke up and my hands were still soft. That had never happened. Three weeks later I’ve stopped buying lotion entirely — I use it at night and I’m set until morning.',
              },
            ],
          },
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
          {
            id: 'ex-pas-posture',
            title: 'PAS advertorial (posture — sample)',
            source: 'Sample copy',
            approved: true,
            notes: 'Problem → agitate the hidden cost → solve, one H2 per beat.',
            blocks: [
              { type: 'H1', content: 'That Nagging Upper-Back Ache Isn’t "Just Getting Older"' },
              {
                type: 'Paragraph',
                content:
                  'By mid-afternoon your shoulders creep toward the screen and the ache between your shoulder blades sets in. You stretch, you forget, it comes back.',
              },
              { type: 'H2', content: 'It’s quietly costing you more than comfort' },
              {
                type: 'Paragraph',
                content:
                  'Slouched hours compound into stiffer mornings, worse sleep, and the low-grade fatigue that makes everything harder. Left alone, it rarely fixes itself.',
              },
              { type: 'H2', content: 'The fix is a gentle reminder, not another gadget' },
              {
                type: 'Paragraph',
                content:
                  'A lightweight posture trainer buzzes softly when you slump, so you correct in the moment and build the habit in a couple of weeks — no rigid brace, no app to babysit.',
              },
            ],
          },
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
          {
            id: 'ex-vs-crm',
            title: 'A vs B (software — sample)',
            source: 'Sample copy',
            approved: true,
            notes: 'One H2 per criterion; concedes a point to stay credible.',
            blocks: [
              { type: 'H1', content: 'Acme vs Bolt: Which Project Tool Is Right for Your Team?' },
              {
                type: 'Paragraph',
                content:
                  'Both are solid — teams happily use each every day. The right pick depends on how big your team is and how much structure you want.',
              },
              { type: 'H2', content: 'Setup and onboarding' },
              {
                type: 'Paragraph',
                content:
                  'Acme gets a new team running in an afternoon with templates and sensible defaults. Bolt is more configurable up front, which helps large orgs but slows small teams down.',
              },
              { type: 'H2', content: 'Price' },
              {
                type: 'Paragraph',
                content:
                  'Bolt is cheaper at the entry tier — if budget is the deciding factor, they win it. Acme’s value shows up once you’re past a handful of seats.',
              },
            ],
          },
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
          {
            id: 'ex-review-headphones',
            title: 'Product review (headphones — sample)',
            source: 'Sample copy',
            approved: true,
            notes: 'Verdict up top, honest drawback section, concrete hands-on detail.',
            blocks: [
              { type: 'H1', content: 'Wave Pro Headphones Review: Worth It in 2026?' },
              {
                type: 'Paragraph',
                content:
                  'Short version: if you want all-day comfort and strong noise cancelling for the price, these are an easy recommendation. Bass-heads may want to look elsewhere.',
              },
              { type: 'H2', content: 'What’s good' },
              {
                type: 'Paragraph',
                content:
                  'Two weeks of eight-hour days and my ears never got sore. Noise cancelling flattened the coffee-shop hum and a full charge genuinely lasted the workweek.',
              },
              { type: 'H2', content: 'The drawbacks' },
              {
                type: 'Paragraph',
                content:
                  'The bass is polite rather than punchy, and the app’s EQ only partly fixes it. The case is also bigger than it needs to be.',
              },
              { type: 'H2', content: 'How they held up day to day' },
              {
                type: 'Paragraph',
                content:
                  'They paired instantly every morning, survived being crammed into a backpack, and the call quality held up on a windy walk — the test most headphones fail.',
              },
            ],
          },
        ],
      },
    ],
  },
];
