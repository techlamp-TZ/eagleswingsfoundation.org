# Media asset map

Source folder: `media/` — originals, never edited in place.
Optimised copies live under `public/photos/`, `public/media/video/`, and `public/catalogue-img/`.
Only assets already optimised and wired into the site are "published"; everything else in `media/`
remains a raw candidate.

## Photographs in use (optimised → `public/photos/`)

| Optimised file | Dimensions | Role / section | Subject (from existing approved copy) |
| --- | --- | --- | --- |
| `hero-wheelchair.webp` | 607×1080 | Home hero, Find Support hero | Caregiver + young woman using a wheelchair |
| `hero.webp` | 1600×1200 | About hero | Foundation community work |
| `child.webp` | 1200×1599 | Home "who we are", program hero | Staff member and a young girl smiling |
| `family.webp` | 1200×1599 | Program hero (education/therapy) | Staff member with a young child |
| `care.webp` | 1600×1200 | Elderly-care/healthy-ageing imagery | Care / activity session |
| `people.webp` | 1200×1600 | Various "community" placements | Community members together |
| `learning.webp` | 1200×1600 | Learning / life-skills imagery | Learning activity |
| `gallery-extra-1/2/3.webp` | — | About, gallery | Additional high-resolution activity stills |
| `child-smile.webp` | 478×850 | Home + Programs neuro-diversity thumb | Child smiling (field still, tile only) |
| `exercise-bike.webp` | 360×640 | Home + Programs education/therapy thumb | Exercise bike (field still, tile only) |
| `life-laundry.webp` | 478×850 | Home + Programs life-skills thumb | Laundry folding (field still, tile only) |
| `life-gardening.webp` | 360×640 | Home + Programs caregiver thumb | Caregiver and child gardening (field still) |
| `classroom-teaching.webp` | 464×832 | Caregiver training imagery | Lesson at the classroom whiteboard |
| `life-mopping/laundry-line/wheelchair-care/carrying-water.webp`, `play-basketball`, `hydrotherapy-*`, `learning-drawing/writing`, `joy-portrait` | (field stills) | Programs / gallery / causes | Activity stills from Foundation phone video |
| `stock/*.webp` (8 files) | — | Blog/articles, reports | Pexels / CC-BY — illustrative only, labelled as such |

## Videos in use (optimised → `public/media/video/`, silent, click-to-play)

| Optimised file | Duration | Role / section | Caption (visible content only) |
| --- | --- | --- | --- |
| `washing-up-together.mp4` | 0:23 | Home, Gallery (life skills) | A young person rinses cups with a staff member alongside |
| `supported-swimming.mp4` | 0:17 | Home, Gallery (movement) | A child floats in a swim ring while a supervisor stays close |
| `drawing-together.mp4` | 0:38 | Home, Gallery (education) | A young person colours at a low table with a staff member |
| `exercise-bike.mp4` | 0:38 | Gallery (movement) | A young person pedals an exercise bike |
| `watering-the-garden.mp4` | 0:39 | Gallery (life skills) | A young person waters the vegetable beds |
| `classroom-session.mp4` | 0:27 | Gallery (caregiver learning) | A staff member leads a lesson at the whiteboard |

## Raw originals in `media/` (not yet selected)

- **23 JPEG images** (1080×325 up to 1600×1200) — candidate stills for program/gallery imagery.
- **53 MP4 videos** (1–15 MB each) — the source for the six clips above plus many more unprocessed clips.
- **1 DOCX** (`Catalogue July 2026.docx`) — likely the source of catalogue product data.

## Outstanding approval / caption requirements

1. **Consent (blocking):** clips and stills show children and people with disabilities. Confirm written
   consent per asset before any *new* asset is added — presence in `media/` is not approval (see
   `src/data/media.js` header).
2. **Elderly care:** no footage of older people yet — the program correctly uses an icon tile, not a photo.
3. **Original→optimised mapping:** the 76 raw files are WhatsApp-timestamped; matching each to its
   optimised copy requires visual inspection, which was not possible in this pass (the model cannot
   view images). The in-use table above is derived from the existing approved `photos.js` / `media.js`
   descriptions, not from fresh inspection.
4. **Silence check:** the six published clips are described as silent because their audio was removed;
   verify this remains true before reuse.
