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
  // --- photographs (high resolution) ---
  hero: '/photos/hero.webp',
  child: '/photos/child.webp',
  care: '/photos/care.webp',
  people: '/photos/people.webp',
  family: '/photos/family.webp',
  learning: '/photos/learning.webp',
  galleryExtra1: '/photos/gallery-extra-1.webp',
  galleryExtra2: '/photos/gallery-extra-2.webp',
  galleryExtra3: '/photos/gallery-extra-3.webp',

  // --- field stills (low resolution — tiles only) ---
  classroomTeaching: '/photos/classroom-teaching.webp', // teacher at whiteboard, "Welcome to Eagle's Wings Foundation"
  childSmile: '/photos/child-smile.webp', // smiling boy clapping on a sofa
  joyPortrait: '/photos/joy-portrait.webp', // staff member and boy laughing together
  lifeMopping: '/photos/life-mopping.webp', // life skills: mopping a floor
  lifeLaundry: '/photos/life-laundry.webp', // life skills: folding laundry
  lifeLaundryLine: '/photos/life-laundry-line.webp', // life skills: hanging washing
  lifeGardening: '/photos/life-gardening.webp', // life skills: gardening with a caregiver
  lifeWheelchairCare: '/photos/life-wheelchair-care.webp', // life skills: cleaning equipment
  lifeCarryingWater: '/photos/life-carrying-water.webp', // life skills: carrying water
  exerciseBike: '/photos/exercise-bike.webp', // physical activity: exercise bike
  playBasketball: '/photos/play-basketball.webp', // physical activity: basketball
  hydrotherapyPool: '/photos/hydrotherapy-pool.webp', // swimming / hydrotherapy session
  hydrotherapySupport: '/photos/hydrotherapy-support.webp', // supported swimming
  learningDrawing: '/photos/learning-drawing.webp', // children drawing together
  learningWriting: '/photos/learning-writing.webp', // writing practice

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
