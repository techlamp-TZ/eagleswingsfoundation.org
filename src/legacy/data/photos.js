// Real Eagle's Wings Foundation photos, served from public/photos/.
// Every page funnels through this one file, so swapping a file here updates
// the whole site.
//
// Two groups:
//  - PHOTOGRAPHS (hero/child/care/people/family/learning/galleryExtra*): high
//    resolution, safe for large layouts (heroes, split panels, full-bleed).
//  - FIELD STILLS (everything else): frames taken from the Foundation's phone
//    videos. Real and relevant, but LOW resolution (360–850px wide) — use them
//    only in tiles/thumbnails up to ~450px wide, never full-bleed. Replace with
//    proper originals when available.

export const photos = {
  // --- hero ---
  hero: '/photos/hero/hero.webp',

  // --- people (high resolution) ---
  child: '/photos/people/child.webp',
  care: '/photos/people/care.webp',
  people: '/photos/people/people.webp',
  family: '/photos/people/family.webp',
  childSmile: '/photos/people/child-smile.webp',
  joyPortrait: '/photos/people/joy-portrait.webp',

  // --- gallery ---
  galleryExtra1: '/photos/gallery/gallery-extra-1.webp',
  galleryExtra2: '/photos/gallery/gallery-extra-2.webp',
  galleryExtra3: '/photos/gallery/gallery-extra-3.webp',

  // --- activities ---
  classroomTeaching: '/photos/activities/classroom-teaching.webp',
  exerciseBike: '/photos/activities/exercise-bike.webp',
  playBasketball: '/photos/activities/play-basketball.webp',
  hydrotherapyPool: '/photos/activities/hydrotherapy-pool.webp',
  hydrotherapySupport: '/photos/activities/hydrotherapy-support.webp',

  // --- learning ---
  learning: '/photos/learning/learning.webp',
  learningDrawing: '/photos/learning/learning-drawing.webp',
  learningWriting: '/photos/learning/learning-writing.webp',

  // --- life skills ---
  lifeMopping: '/photos/life-skills/life-mopping.webp',
  lifeLaundry: '/photos/life-skills/life-laundry.webp',
  lifeLaundryLine: '/photos/life-skills/life-laundry-line.webp',
  lifeGardening: '/photos/life-skills/life-gardening.webp',
  lifeWheelchairCare: '/photos/life-skills/life-wheelchair-care.webp',
  lifeCarryingWater: '/photos/life-skills/life-carrying-water.webp',

  // --- stock photographs: illustrative only, not Foundation programmes or beneficiaries ---
  // Pexels licence: free to use, no attribution required.
  stockWheelchairUser: '/photos/stock/wheelchair-user.webp', // young woman using a wheelchair. pexels.com/photo/8524602
  stockWheelchairUserThumb: '/photos/stock/wheelchair-user-thumb.webp',
  stockReportReview: '/photos/stock/reading-report.webp', // woman reading printed papers. pexels.com/photo/6457510
  stockReportReviewThumb: '/photos/stock/reading-report-thumb.webp',
  stockHandWashing: '/photos/stock/hand-washing.webp', // hands under a tap. pexels.com/photo/3030281
  stockHandWashingThumb: '/photos/stock/hand-washing-thumb.webp',
  stockClassroom: '/photos/stock/classroom.webp', // children writing at desks. pexels.com/photo/28593055
  stockClassroomThumb: '/photos/stock/classroom-thumb.webp',
  stockHandshake: '/photos/stock/handshake.webp', // two clasped hands. pexels.com/photo/8069428
  stockHandshakeThumb: '/photos/stock/handshake-thumb.webp',
  stockHeadphones: '/photos/stock/headphones.webp', // two girls wearing headphones. pexels.com/photo/7577339
  stockHeadphonesThumb: '/photos/stock/headphones-thumb.webp',
  // CC BY 2.0: credit required wherever shown (see imageCredit in the article that uses it)
  stockGrandmotherBibiThumb: '/photos/stock/grandmother-bibi-thumb.webp', // grandmother and grandchild, Tanzania. flickr.com/photos/26016052@N00/27588343934
}
