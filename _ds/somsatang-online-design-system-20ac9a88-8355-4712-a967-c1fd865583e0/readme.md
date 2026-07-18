# Somsatang Online — Design System

**Somsatang Online** (솜사탕 온라인, "Cotton Candy Online") is a Korean-market kawaii-style online shop brand built around a cotton-candy mascot, a fluffy bunny, and a pastel-storybook world of clouds, rainbows, and rolling grass hills.

No Figma file, GitHub repo, or codebase was attached for this brand — this design system was built **brand-guidelines-only**, from a set of uploaded brand-art assets:
- `uploads/somsatang_online_transparent_logo.png` — primary wordmark lockup (cotton candy + rainbow + bunny + "솜사탕 온라인" toon lettering)
- `uploads/somsatang_online_floating.gif` — animated version of the same lockup on a transparent background
- `uploads/imagaaae.png` / `uploads/ccn4zyw2ldwmejhgprgdxngz1a5r.png` — full-bleed pastel sky/hill scenes (square and wide-banner crops) with the logo composited in
- `uploads/1dafa7c69b101033.png` — pixel-art cotton-candy-skewer mascot icon (bear/cloud/bunny faces stacked on a stick)
- `uploads/dalmoori.ttf` — the brand's rounded Korean display typeface, used for the toon-outlined wordmark lettering

Because no product UI, app, or codebase was provided, there is **no UI kit recreation** of an existing screen — see `ui_kits/shop/` for an *original, brand-consistent* storefront concept built from the foundations below (clearly a new composition, not a recreation of anything real).

## Index
- `styles.css` — root stylesheet, imports everything in `tokens/`
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens
- `assets/` — logo, floating logo gif, hero art, mascot art, `fonts/dalmoori.ttf`
- `guidelines/colors/`, `guidelines/type/`, `guidelines/spacing/`, `guidelines/brand/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, IconButton, Card, Badge, Tag
- `components/forms/` — Input, Select, Checkbox, Switch
- `components/feedback/` — Toast, Tooltip
- `components/navigation/` — Tabs
- `components/surfaces/` — Dialog
- `ui_kits/shop/` — original storefront concept screen (see caveat above)
- `SKILL.md` — Claude Code–compatible skill wrapper

### Components
Standard core set (no component-library source was provided, so a conventional inventory was authored, sized to a small shop brand):
**Button, IconButton, Card, Badge, Tag** (core) · **Input, Select, Checkbox, Switch** (forms) · **Toast, Tooltip** (feedback) · **Tabs** (navigation) · **Dialog** (surfaces).

No Avatar, Accordion, Pagination, or Breadcrumb — the source imagery gave no evidence of these patterns, and the brand has no existing product UI to justify them.

## Content Fundamentals
- **Bilingual, Korean-first.** The wordmark itself is Korean (솜사탕 온라인) with an English subtitle (Somsatang Online). Copy for a Korean D2C audience should lead in Korean with English as a secondary/supporting line, not the reverse.
- **Warm, exclamatory, second-person.** The brand world "talks" through cute visual punctuation (sparkle stars, rainbows) more than dense text — keep copy short, upbeat, and address the customer directly ("Order yours today", not "Users may order").
- **Whimsical/childlike, not corporate.** No jargon, no hedging. Treat the shop like a treat stand, not a marketplace platform — playful nouns ("flavor", "treat") over commerce nouns ("SKU", "item").
- **No emoji in the logo art itself** — the mascots and stars ARE the emotional punctuation — but small single emoji in body copy (🎉, 🍬) is consistent with the brand's cute tone and used sparingly in this system's Toast example.
- **Exclamation points and soft interjections are welcome** in short bursts (a title or confirmation), but avoid stacking multiple per sentence.

## Visual Foundations
- **Color:** Cotton-candy pink is the primary hue (`--brand-primary`, `#FF8FBB`), sky blue is secondary (`--brand-secondary`, `#67C3F0`), warm yellow is the sparkle/accent color, and a soft grass green stands in for success/positive states. Backgrounds are a warm cream (`--surface-page`), never stark white or dark.
- **Type:** One display face — **Dalmoori**, the rounded Korean face used for the toon-outlined wordmark — reserved for short headline/logo-style moments. All readable body copy uses a clean system sans stack; Dalmoori was not designed as a body face and has no weight range in the single file provided.
- **Backgrounds:** Full-bleed illustrated pastel scenes (sky gradient, rolling hills, clouds) rather than flat color or geometric patterns — see `assets/hero-banner.png` / `assets/banner-wide.png`. No photographic imagery, no grain, no dark mode — the brand is uniformly light, bright, and warm.
- **Illustration style:** Thick, rounded "toon" outlines (dark brown, `--outline-toon`) around every character/object, with soft highlight blobs for a glossy 3D-candy look. Sparkle stars are a recurring decorative motif scattered around focal art.
- **Corner radii:** Generous and consistent — pills for buttons/tags/badges (`--radius-pill`), large rounded rectangles for cards and dialogs (`--radius-lg`/`--radius-md`). Nothing brand-facing is sharp-cornered.
- **Shadows / borders:** Two systems, used for different jobs. UI chrome (cards, dialogs, toasts) gets a soft ambient drop shadow (`--shadow-md`) with a thin pink hairline border. Interactive "toon" elements (primary/secondary buttons, badges-as-buttons) get a **hard flat drop shadow** (`--shadow-toon`, no blur, solid outline-brown) that visually "presses in" (shadow disappears, element shifts down 2px) on click — mirroring the thick-outline comic style of the source art.
- **Hover/press states:** Buttons darken one step on hover (400→500 token) and flatten their toon shadow + nudge down 2px on press — a tactile "sticker being pressed" feel, not a fade or scale-up.
- **Transparency/blur:** Used only for the modal scrim (semi-transparent brown overlay behind dialogs) — no frosted-glass/blur elsewhere; the flat illustrated style doesn't call for it.
- **Animation:** No easing/motion system was inferable from static art beyond the one provided GIF (a slow idle float/bob of the mascot lockup). Recommend: soft ease-out fades/slides for UI transitions, and reserve bounce/spring easing for mascot-adjacent moments only (matching the provided floating-logo loop), not for basic UI chrome.
- **Layout:** No fixed/sticky-nav evidence in source; kept the shop UI kit conventional (top nav, scrolling content) since no product screen was provided to contradict this.
- **Imagery color vibe:** Warm and saturated pastel — pink/blue/yellow/green in soft, slightly glossy tones; no black-and-white, no grain/texture, no cool/desaturated palette anywhere in the source art.

## Iconography
- **No icon font, sprite sheet, or SVG icon set was found** in the provided uploads — only illustrative mascot/scene art and one pixel-art icon (`assets/mascot-skewer-pixel.png`).
- No emoji or Unicode glyphs appear in the brand mark itself.
- **Recommendation for now:** since no icon system shipped with the brand, `IconButton` demos in this system use plain text/emoji glyphs (✕, 🛒, ♡) as placeholders only — this is a **flagged substitution**, not a brand decision. When a real icon set is available, swap these for brand-matched line icons (recommend a rounded/soft stroke style, ~2px weight, to match the toon-outline art direction) and update this section.
- The pixel-art skewer icon (`assets/mascot-skewer-pixel.png`) is a distinct, deliberately lower-fidelity mascot treatment (e.g. for a favicon/app-icon context) — keep it separate from the main illustrated mascot art rather than blending styles.

## Font substitution flag
Only one webfont (`Dalmoori.ttf`) was provided, used here for `--font-display`. No body/UI font file was supplied, so `--font-body` currently falls back to the system sans stack (no substitution invented) per the source-of-truth rule — **please attach a body font file (or confirm the system-sans fallback is acceptable)** if the brand has one in mind.

## Intentional additions
- `IconButton` — no icon system was provided, but a round icon-affordance wrapper is needed by any UI kit; added with a documented placeholder-glyph caveat above.
