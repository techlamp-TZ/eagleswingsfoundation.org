// Real Foundation media from /media (originals untouched), optimised into
// /public. Videos are silent: the audio track was removed because speech in
// these clips has not been transcribed and checked, so captions cannot be
// offered honestly. Descriptions state only what is visible.
//
// PUBLICATION: these clips show children and people with disabilities. Confirm
// written consent for each before deploying (see docs/media-asset-map.md).
export const videos = [
  {
    id: 'washing-up-together',
    title: 'Washing up together',
    text: 'A young person rinses cups at the sink with a staff member alongside.',
    program: 'Life skills',
    src: '/media/video/washing-up-together.mp4',
    poster: '/media/video/washing-up-together-poster.webp',
    width: 640,
    height: 360,
    seconds: 23,
  },
  {
    id: 'supported-swimming',
    title: 'Supported swimming',
    text: 'A child floats in a swim ring while a supervisor stays close in the water.',
    program: 'Movement and water safety',
    src: '/media/video/supported-swimming.mp4',
    poster: '/media/video/supported-swimming-poster.webp',
    width: 720,
    height: 406,
    seconds: 17,
  },
  {
    id: 'drawing-together',
    title: 'Drawing together',
    text: 'A young person colours a drawing at a low table, with a staff member beside them.',
    program: 'Education guidance',
    src: '/media/video/drawing-together.mp4',
    poster: '/media/video/drawing-together-poster.webp',
    width: 640,
    height: 360,
    seconds: 38,
  },
  {
    id: 'exercise-bike',
    title: 'Exercise bike session',
    text: 'A young person pedals an exercise bike in the activity room.',
    program: 'Movement',
    src: '/media/video/exercise-bike.mp4',
    poster: '/media/video/exercise-bike-poster.webp',
    width: 640,
    height: 360,
    seconds: 38,
  },
  {
    id: 'watering-the-garden',
    title: 'Watering the garden',
    text: 'A young person waters the vegetable beds with a bucket and cup.',
    program: 'Life skills',
    src: '/media/video/watering-the-garden.mp4',
    poster: '/media/video/watering-the-garden-poster.webp',
    width: 360,
    height: 640,
    seconds: 39,
  },
  {
    id: 'classroom-session',
    title: 'A classroom session',
    text: 'A staff member leads a lesson at the whiteboard in the Foundation classroom.',
    program: 'Caregiver and family learning',
    src: '/media/video/classroom-session.mp4',
    poster: '/media/video/classroom-session-poster.webp',
    width: 402,
    height: 720,
    seconds: 27,
  },
]

export const foundationPhotos = {
  poolGroup: { src: '/photos/foundation/pool-group.webp', alt: 'Young people swimming in the pool during a group session', w: 1600, h: 1200 },
  poolSession: { src: '/photos/foundation/pool-session.webp', alt: 'A young person swims across the pool', w: 1600, h: 1200 },
  poolFromAbove: { src: '/photos/foundation/pool-from-above.webp', alt: 'Swimmers and a supervisor in the pool, seen from the poolside', w: 900, h: 1600 },
  beachOuting: { src: '/photos/foundation/beach-outing.webp', alt: 'Three people standing together on a beach at sunset during an outing', w: 1200, h: 1600 },
  eveningGathering: { src: '/photos/foundation/evening-gathering.webp', alt: 'Two young men smiling at an evening gathering', w: 963, h: 1280 },
}

export const duration = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
