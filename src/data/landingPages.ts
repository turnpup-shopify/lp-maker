import type { LandingPageType } from '../types';

// Seed library. Copy inside each example is illustrative sample copy meant to
// show the shape of a good, approved landing page — replace with your own
// approved copy, or add your own examples in-app.
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
          'A single promise up top, then N discrete reasons — each its own H2 + short proof. Reads fast, converts skeptics by stacking small yeses.',
        structure: [
          {
            id: 'h1',
            type: 'H1',
            label: 'H1 — The core promise',
            guidance:
              'State the number and the payoff. Include the count ("7 Reasons…") so the reader knows the scope. Lead with benefit, not product.',
          },
          {
            id: 'desc',
            type: 'Description',
            label: 'Description — Intro / context',
            guidance:
              'Two to three sentences that frame the problem and tee up the list. Name who this is for and the tension the reasons resolve.',
          },
          {
            id: 'tldr',
            type: 'TLDR',
            label: 'TL;DR summary',
            guidance:
              'A one-glance recap for skimmers. Bullet the reasons or give the single strongest takeaway + CTA. Many readers decide here.',
          },
          {
            id: 'h2-first',
            type: 'H2',
            label: 'H2 — Reason #1',
            guidance:
              'Lead with your strongest reason. Make the H2 a complete, benefit-led claim, not a label.',
            repeatable: true,
          },
          {
            id: 'desc-first',
            type: 'Description',
            label: 'Description — Reason #1 proof',
            guidance:
              'Back the claim with a specific proof point: a stat, mechanism, or concrete detail. Keep to 2–4 sentences.',
            repeatable: true,
          },
          {
            id: 'h2-second',
            type: 'H2',
            label: 'H2 — Reason #2',
            guidance: 'Second-strongest reason. Vary the angle (e.g. from outcome to ease-of-use).',
            repeatable: true,
          },
          {
            id: 'desc-second',
            type: 'Description',
            label: 'Description — Reason #2 proof',
            guidance: 'Proof for reason #2.',
            repeatable: true,
          },
          {
            id: 'h2-third',
            type: 'H2',
            label: 'H2 — Reason #3 … (repeat for each reason)',
            guidance:
              'Continue the H2 + Description pattern for every remaining reason. Aim for 3–7 total. Order by persuasive strength, not chronology.',
            repeatable: true,
          },
          {
            id: 'cta',
            type: 'CTA',
            label: 'CTA — Close',
            guidance:
              'Restate the promise and give one clear action. Reduce risk (guarantee, free trial) right next to the button.',
          },
          {
            id: 'disclaimer',
            type: 'Disclaimer',
            label: 'Disclaimer',
            optional: true,
            guidance: 'Any required legal, results-vary, or substantiation language.',
          },
        ],
        examples: [
          {
            id: 'ex-reasons-sleep',
            title: '5 Reasons Why (sleep supplement — sample)',
            source: 'Sample copy · paid social → advertorial',
            approved: true,
            notes:
              'Strongest reason first (falling asleep faster), each proof point is concrete and specific. TL;DR carries the whole pitch for skimmers.',
            blocks: [
              {
                type: 'H1',
                content: '5 Reasons Why People Are Switching to a Drug-Free Sleep Routine',
              },
              {
                type: 'Description',
                content:
                  'If you lie awake replaying your day — or wake at 3am and can’t drift back off — you’re not broken, and you don’t need another prescription. Here are five reasons thousands are rebuilding their nights around a simple nightly ritual instead.',
              },
              {
                type: 'TLDR',
                content:
                  'TL;DR: Falls asleep faster, no morning grogginess, non-habit-forming, backed by a 60-night guarantee, and costs less than your daily coffee. Skip to the routine →',
              },
              { type: 'H2', label: 'H2 - First', content: '1. You fall asleep faster — without feeling drugged' },
              {
                type: 'Description',
                content:
                  'The blend leans on magnesium glycinate and L-theanine, which help quiet a racing mind rather than sedate you. Most people report drifting off in under 20 minutes within the first week.',
              },
              { type: 'H2', label: 'H2 - Second', content: '2. You wake up clear, not groggy' },
              {
                type: 'Description',
                content:
                  'Because it works with your body’s own wind-down signals instead of overriding them, there’s no morning fog — the complaint that makes people quit sleep aids in the first place.',
              },
              { type: 'H2', label: 'H2 - Third', content: '3. It’s non-habit-forming' },
              {
                type: 'Description',
                content:
                  'No dependency, no escalating doses, nothing to taper off. Use it every night or only on the rough ones — your call.',
              },
              { type: 'H2', label: 'H2 - Fourth', content: '4. You’re not risking anything to try it' },
              {
                type: 'Description',
                content:
                  'Every order is backed by a 60-night guarantee. Sleep on it for two months; if your nights aren’t better, get every penny back.',
              },
              { type: 'H2', label: 'H2 - Fifth', content: '5. It costs less than your morning coffee' },
              {
                type: 'Description',
                content:
                  'At about a dollar a night, better sleep costs less than the drink you reach for because you slept badly.',
              },
              { type: 'CTA', content: 'Start your first 60 nights →  (Free shipping · 60-night money-back guarantee)' },
              {
                type: 'Disclaimer',
                content:
                  'These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results vary.',
              },
            ],
          },
        ],
      },
      {
        id: 'best-x-for-y',
        name: 'Best X for Y (Roundup)',
        summary:
          'A ranked roundup that positions your product as the top pick among options. Trades on the reader’s "help me choose" intent.',
        structure: [
          {
            id: 'h1',
            type: 'H1',
            label: 'H1 — The roundup promise',
            guidance: 'Name the category and the reader ("The 6 Best X for Y in {year}"). Signal it’s a comparison.',
          },
          { id: 'desc', type: 'Description', label: 'Description — Methodology / why trust this', guidance: 'Briefly say how picks were made. Credibility is the whole game for roundups.' },
          { id: 'tldr', type: 'TLDR', label: 'TL;DR — Top pick', guidance: 'Name the #1 pick and who each runner-up is best for.' },
          { id: 'pick-1-h2', type: 'H2', label: 'H2 — #1 pick (Best overall)', guidance: 'Your product. Lead with the single reason it wins.', repeatable: true },
          { id: 'pick-1-desc', type: 'Description', label: 'Description — #1 pick', guidance: 'Who it’s for, standout feature, one honest limitation for credibility.', repeatable: true },
          { id: 'pick-n', type: 'H2', label: 'H2 — Remaining picks (repeat)', guidance: 'Give each a superlative ("Best budget", "Best for X"). Keep them real so #1 shines fairly.', repeatable: true },
          { id: 'cta', type: 'CTA', label: 'CTA — Shop the top pick', guidance: 'Point at the #1 pick with a low-friction action.' },
        ],
        examples: [],
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
        summary:
          'First-person discovery story: a relatable person hits a wall, tries the usual fixes, then finds the product. Sells through narrative, not claims.',
        structure: [
          { id: 'h1', type: 'H1', label: 'H1 — Curiosity headline', guidance: 'Editorial, story-forward, benefit implied. Avoid looking like an ad ("Why I finally stopped…").' },
          { id: 'byline', type: 'Byline', label: 'Byline / dateline', optional: true, guidance: 'Author + date. Reinforces the editorial frame.' },
          { id: 'subhead', type: 'Subhead', label: 'Subhead — The hook', guidance: 'One line that raises the stakes or the question the story answers.' },
          { id: 'hook', type: 'Description', label: 'Description — The relatable problem', guidance: 'Open in-scene with a specific, sensory moment. Reader should think "that’s me".' },
          { id: 'struggle', type: 'Description', label: 'Description — Failed attempts', guidance: 'The things they tried that didn’t work. Builds tension and pre-handles objections.' },
          { id: 'discovery', type: 'H2', label: 'H2 — The turning point', guidance: 'Introduce the product as the discovery — the moment the story changes.' },
          { id: 'mechanism', type: 'Description', label: 'Description — Why it worked', guidance: 'Explain the mechanism plainly. This is where story becomes reason-to-believe.' },
          { id: 'proof', type: 'Quote', label: 'Quote — Social proof', optional: true, guidance: 'A short testimonial or result that echoes the reader’s situation.' },
          { id: 'cta', type: 'CTA', label: 'CTA — Soft close', guidance: 'Invitation, not a hard sell. Tie the action back to the story’s payoff.' },
          { id: 'disclaimer', type: 'Disclaimer', label: 'Advertorial disclosure', guidance: 'Required "Advertisement" / sponsored disclosure and any results-vary language.' },
        ],
        examples: [
          {
            id: 'ex-adv-skincare',
            title: 'Story advertorial (skincare — sample)',
            source: 'Sample copy · native ad → advertorial',
            approved: true,
            notes:
              'Opens in-scene, lists failed fixes (pre-handles objections), then bridges to mechanism. Disclosure present up top.',
            blocks: [
              { type: 'Disclaimer', content: 'Advertisement' },
              { type: 'H1', content: 'I Tried Everything for My Dry Winter Skin — Here’s the Only Thing That Finally Stuck' },
              { type: 'Byline', content: 'By Jordan Ellis · Updated March 2026' },
              { type: 'Subhead', content: 'After a decade of $60 creams that quit by noon, a dermatologist’s offhand comment changed my whole routine.' },
              {
                type: 'Description',
                content:
                  'Every January my hands would crack at the knuckles — the kind of dry that stings when you wash a dish. I’d slather on lotion after lotion and by lunch it was like I’d applied nothing at all.',
              },
              {
                type: 'Description',
                content:
                  'I tried the drugstore stuff, the luxury stuff, the "clinical" stuff. Some felt nice for an hour. None of them lasted, and a few left my skin feeling tight and worse than before.',
              },
              { type: 'H2', content: 'Then a dermatologist told me I was moisturizing backwards' },
              {
                type: 'Description',
                content:
                  'The problem wasn’t hydration — it was that nothing was holding it in. The fix was a barrier cream with ceramides and squalane that seals moisture in overnight instead of letting it evaporate. First morning after using it, my hands were still soft. That had never happened.',
              },
              { type: 'Quote', content: '"Three weeks in and I’ve stopped buying lotion entirely. I use it at night and I’m set until morning." — verified customer' },
              { type: 'CTA', content: 'See the overnight barrier cream →' },
              {
                type: 'Disclaimer',
                content:
                  'Results vary from person to person. This is an advertisement and the author was compensated. Not intended to treat any medical condition.',
              },
            ],
          },
        ],
      },
      {
        id: 'pas-advertorial',
        name: 'Problem–Agitate–Solve',
        summary:
          'The classic PAS structure in editorial clothing: name the problem, twist the knife, then present the solution as relief.',
        structure: [
          { id: 'h1', type: 'H1', label: 'H1 — Name the problem', guidance: 'Call out the exact pain in the reader’s words.' },
          { id: 'problem', type: 'Description', label: 'Description — Problem', guidance: 'Describe the problem so precisely the reader feels seen.' },
          { id: 'agitate', type: 'H2', label: 'H2 — Agitate (the hidden cost)', guidance: 'Show what it’s really costing them — time, money, confidence, health.' },
          { id: 'agitate-desc', type: 'Description', label: 'Description — Why it gets worse', guidance: 'Escalate. What happens if nothing changes?' },
          { id: 'solve', type: 'H2', label: 'H2 — Solve', guidance: 'Introduce the product as the turn from tension to relief.' },
          { id: 'solve-desc', type: 'Description', label: 'Description — How it solves it', guidance: 'Mechanism + the fastest proof you have.' },
          { id: 'cta', type: 'CTA', label: 'CTA', guidance: 'Clear action with risk reversal.' },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'comparison',
    name: 'Comparison / Alternative',
    description:
      'Head-to-head pages aimed at buyers who are already evaluating options ("Brand A vs Brand B", "the best alternative to…"). High intent, high converting.',
    templates: [
      {
        id: 'vs-page',
        name: 'A vs B',
        summary:
          'Directly compares your product to a named competitor across the criteria buyers actually weigh. Wins the "which one" search.',
        structure: [
          { id: 'h1', type: 'H1', label: 'H1 — The matchup', guidance: '"{You} vs {Competitor}: Which is right for you?" Neutral-sounding earns trust.' },
          { id: 'desc', type: 'Description', label: 'Description — Framing', guidance: 'Acknowledge both are good; frame it as fit, not winner-take-all.' },
          { id: 'tldr', type: 'TLDR', label: 'TL;DR — Bottom line', guidance: 'One line: who should pick you, who should pick them. Honesty here builds credibility.' },
          { id: 'criteria', type: 'H2', label: 'H2 — Criterion (repeat per dimension)', guidance: 'One H2 per decision factor (price, speed, support…). Concede where they win.', repeatable: true },
          { id: 'criteria-desc', type: 'Description', label: 'Description — Head-to-head', guidance: 'Specific, fair comparison for that criterion.', repeatable: true },
          { id: 'cta', type: 'CTA', label: 'CTA — For the right reader', guidance: 'CTA framed for the buyer you’re the better fit for.' },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'review',
    name: 'Editorial Review',
    description:
      'Long-form, credible product reviews that read like a trusted third party put the product through its paces.',
    templates: [
      {
        id: 'product-review',
        name: 'Product Review',
        summary:
          'A structured, seemingly-independent review with a verdict, pros/cons, and a hands-on account. Converts research-stage buyers.',
        structure: [
          { id: 'h1', type: 'H1', label: 'H1 — Review headline', guidance: '"{Product} Review: Is it worth it in {year}?" Signals a verdict is coming.' },
          { id: 'verdict', type: 'TLDR', label: 'TL;DR — The verdict + rating', guidance: 'Rating + one-sentence verdict + who it’s for. Reviewers read this first.' },
          { id: 'pros', type: 'List', label: 'List — Pros', guidance: '3–5 concrete strengths.' },
          { id: 'cons', type: 'List', label: 'List — Cons', guidance: '1–3 honest drawbacks. Credibility depends on real cons.' },
          { id: 'hands-on', type: 'H2', label: 'H2 — Hands-on / testing', guidance: 'What using it was actually like. Specifics beat adjectives.' },
          { id: 'hands-on-desc', type: 'Description', label: 'Description — Experience', guidance: 'Narrate the test with concrete detail and a result.' },
          { id: 'cta', type: 'CTA', label: 'CTA — Check price / buy', guidance: 'Low-friction action, often "check latest price".' },
        ],
        examples: [],
      },
    ],
  },
];
