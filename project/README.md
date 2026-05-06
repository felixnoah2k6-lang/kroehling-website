# Schönhärl · Kroehling · Gloßner — Design System

A small, warm design system for **Gemeinschaftspraxis Schönhärl · Kroehling · Gloßner**, a rural family-medicine practice in the Naabtal valley near Regensburg, Bavaria. It powers the redesign of their website.

## Practice at a glance
- **Two locations:** Pielenhofen (main, Etterzhausener Str. 20, 93188) and Wolfsegg (branch — blood draws & consultations; Friday draws by 10:15 latest).
- **Phone:** 09409 / 86290 — phone is the only patient channel; no online booking.
- **Three doctors:** Dr. med. Bernhard Schönhärl, Philipp Kroehling, Dr. med. Sebastian Gloßner.
- **Reputation:** 5/5 over 55 Google reviews, currently accepting new patients, fully wheelchair-accessible.
- **Philosophy:** *"Wir behandeln Menschen, keine Symptome."*

## Sources used
- Brief from the project owner (practice facts, tone, visual direction).
- Logo + photography uploaded to `uploads/` and copied into `assets/`.
- Original site at `schoenhaerl-kroehling-glossner.de` (referenced for content; visuals not copied).

## Index

| File / folder | What it is |
| --- | --- |
| `README.md` | This file — context, content + visual foundations, iconography. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code / Agent Skills. |
| `colors_and_type.css` | All design tokens (color, type, spacing, radii, shadows). |
| `assets/` | Logo, doctor portraits, team photos, interiors, Naabtal landscape. |
| `assets/team/` | Individual MFA portraits. |
| `preview/` | Standalone HTML cards rendered in the Design System tab. |
| `ui_kits/website/` | Website UI kit — components + interactive index.html. |

## Content fundamentals

**Language.** German only. Patients are largely older rural Bavarians; copy must read like a trusted village doctor speaking to a neighbour, not a hospital chain talking at a patient.

**Voice.**
- *Warm, calm, plain.* Avoid clinical jargon and corporate filler.
- *"Wir" form* for the practice ("Wir behandeln Menschen…", "Wir sind für Sie da").
- *"Sie" form* for the patient — formal, respectful, always.
- Sentences are short. Nouns are concrete. Lists are practical.
- Never use marketing superlatives (*revolutionär*, *innovativ*, *modernste*); the practice trades on continuity, not novelty.

**Tone tells.**
- "Herzensangelegenheit" — *a matter of the heart* — is the brand's emotional register. Use this language sparingly but consciously.
- Reassurance over urgency: "*Nehmen Sie sich Zeit*", "*Rufen Sie uns gerne an*".
- For practical info (hours, vaccine paperwork) the voice flips to direct, numbered, calmly bossy: "*Bitte bringen Sie Ihren Impfausweis mit*."

**Casing.** Standard German title casing (sentence case for headings; nouns capitalised; no all-caps on body text). Eyebrows above sections use small-caps tracking, not full caps.

**Phone numbers.** Always shown as `09409 / 86290` (with the spaced slash) — that's how the practice has presented it for years and locals recognise it.

**Address pattern.** `Etterzhausener Str. 20` on line 1, `93188 Pielenhofen` on line 2.

**Hours pattern.** Vormittag / Nachmittag split, German weekday abbreviations (Mo, Di, Mi, Do, Fr). Closed slots show as a dash, never empty.

**No emoji. No exclamation marks** (rare, only in genuine welcomes — *Herzlich willkommen!*).

**Examples (from sample copy in the kit).**
- Hero tagline: *"Ihre Landarztpraxis im Naabtal."*
- Philosophy: *"Wir behandeln Menschen, keine Symptome — und nehmen uns Zeit dafür."*
- Vaccine note: *"Für eine Impfung bringen Sie bitte Ihren Impfausweis und einen ausgefüllten Anamnesebogen mit."*
- Wolfsegg note: *"Freitags bitte spätestens bis 10:15 Uhr — danach holt das Labor ab."*
- Email caveat (Impressum only): *"Bitte keine Patientenanfragen per E-Mail — wir können diese aus Datenschutzgründen nicht beantworten."*

## Visual foundations

**Palette.** Warm cream base (`--cream-50`, `#faf7f1`) — never pure white, which feels clinical. Primary is **Naabtal Sage** (`--sage-500`, `#5e8556`), an earthy, slightly muted forest green that matches the wooded valley around the practice. Text is a warm near-black (`--ink-900`, `#2a2620`), not pure black. The logo's orange/blue/green dots are kept as small accent moments only — orange for the emergency strip, the green for the medical-cross mark. No cool corporate blues, no neon, no gradients.

**Typography.** Two-family system: **Source Serif 4** for display + headings (warmth, faint Bavarian newspaper feel), **Source Sans 3** for body (humanist, optimised for legibility at large sizes). Body sits at **17px** — explicitly oversized for the elderly audience. Lead paragraphs run 20px. Display headlines have negative tracking; body has neutral tracking and a 1.55 line-height (1.7 for long-form). One eyebrow style (small caps, sage, 0.16em tracking) is the only place tracking goes positive. *Substitution flag: brief suggested Inter or Source Sans; we ship Source Sans 3 + Source Serif 4 from Google Fonts. If you want self-hosted .woff2 files, drop them into `fonts/` and update `colors_and_type.css`.*

**Spacing & rhythm.** 8px base. Sections breathe at `--space-9` (96px) on desktop, `--space-7` on mobile. Cards use `--space-6` interior padding. Generous whitespace is a feature — patients should never feel rushed by the layout.

**Backgrounds.** Three modes: cream page background (default), white surface (cards, content panels), and **sage-700 dark surface** for the Wolfsegg branch / contact strip. **Real photography is hero**: the team group portrait, the Naabtal aerial, and the bright white interiors. No stock, no illustrations, no gradients, no patterns. When a photo is full-bleed it is paired with a sage-tinted overlay (~25% sage-900 alpha) so cream/white text reads cleanly without losing the image.

**Animation.** Calm. 200ms ease-out for hovers, 300ms for entry transitions. No bounces, no parallax. Hovers darken sage by one stop, soften shadow by 2px. Press states: scale 0.98, no colour change. Reduced-motion users get instant transitions.

**Borders.** Hairline 1px in `--border-soft` (`#e7e0cf`). Inputs and buttons share an 8–10px radius. Cards: `--radius-lg` (16px). Phone CTA pill: fully rounded `--radius-pill`. Photos take a 16–24px radius — friendly, never sharp.

**Shadows.** Two registers. Tight `--shadow-sm` for cards and inputs; long, soft `--shadow-lg` for the floating phone CTA and the sticky hours bar. Shadows are warm grey, not blue-black: `rgba(60, 50, 30, 0.x)`.

**Imagery treatment.** Real, colour, slightly warm. Interior shots are bright and natural. The Naabtal landscape is the one cinematic moment — used in the Standorte section, lightly desaturated and given a sage tint. No black-and-white, no grain, no duotone.

**Layout rules.**
- Maximum content width: **1200px**.
- Hero pins phone number + opening hours within the first viewport, every page.
- Sticky top bar collapses on scroll to a slim "Jetzt anrufen · Mo–Fr · 09409 / 86290" strip — visible at all times.
- Mobile-first; nav becomes a sheet from the right.

**Transparency / blur.** Used once: the sticky top bar uses `backdrop-filter: blur(12px)` over a 80% cream surface. Otherwise solid colours.

**Iconography.** See ICONOGRAPHY section below.

## Iconography

**System.** [Lucide](https://lucide.dev) icons via CDN, **stroke-1.75** weight to match the warmth of the type. Lucide's rounded line-caps and humanist drawing fit the brand better than Heroicons (too sharp) or Material (too flat).

**Why CDN, not bundled.** The original site has no icon system at all — we're adding one. Picking a stable, free, neutral set keeps the door open for the practice to take this design forward without licensing concerns.

**Sizes.** 20px in nav and inline, 24px in cards, 32px in feature blocks, 48px in the services grid icons.

**Colour rule.** Icons inherit `currentColor`. In default contexts they take the same warm gray as text; on sage-emphasis backgrounds they go cream; in the services grid they take sage-700 against cream tiles.

**Icons in active use** (referenced in the website kit): `phone`, `phone-call`, `clock`, `map-pin`, `calendar-days`, `accessibility`, `syringe`, `stethoscope`, `activity`, `heart-pulse`, `file-text`, `mail`, `printer`, `arrow-right`, `menu`, `x`, `chevron-down`.

**Logo.** The original three-dot mark (orange / blue / green-with-cross) lives on the website as a small mark beside the wordmark. The dots are a brand quirk worth preserving — they have no designed-system meaning, they're just *theirs*. We keep the original PNG (`assets/logo.png`) rather than redrawing it.

**Emoji.** Never. Unicode glyphs (·, →, –) are fine and used in microcopy.

**Substitution flags.**
- Source Serif 4 + Source Sans 3 are the substitutes for the brief's "Inter / Source Sans / similar" — **flagged for review**.
- Lucide icon set is an addition, not a replacement — **flagged for review**.
- Mark dots (`#f0a020`, `#94a8e8`, `#1ea876`) sampled visually from `assets/logo.png` — exact brand values not provided. **Flagged**.

## Iterating
This is a starting system — colour, type, and one website kit. Look at the Design System tab to see all tokens; open `ui_kits/website/index.html` for the live page.
