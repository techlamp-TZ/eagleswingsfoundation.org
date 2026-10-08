// Therapy & sensory equipment catalogue (July 2026), prepared by OneStop
// Therapeutics. Prices are in Tanzanian shillings (TZS) as listed in the
// catalogue; availability and current prices are confirmed when ordering.
// Product photos live in public/catalogue-img/<id>.webp. Items without an `image`
// show an icon tile instead.

export const supplier = {
  name: 'OneStop Therapeutics',
  phoneDisplay: '0794 700 946',
  phone: '+255794700946',
  whatsapp: 'https://wa.me/255794700946',
  instagram: 'https://instagram.com/onestoptherapeutics',
  instagramHandle: '@onestoptherapeutics',
  edition: 'July 2026',
}

export const catalogueCategories = [
  {
    "id": "cognitive",
    "name": "Cognitive & fine motor"
  },
  {
    "id": "sensory",
    "name": "Sensory equipment"
  },
  {
    "id": "speech",
    "name": "Speech therapy"
  },
  {
    "id": "motor",
    "name": "Motor function"
  }
]

export const catalogueItems = [
  {
    "category": "cognitive",
    "name": "Fishing jigsaw puzzle",
    "detail": "3 in 1, large box",
    "image": "/catalogue-img/fishing-jigsaw-puzzle-3-in-1-large-box.webp",
    "variants": [
      {
        "qty": "1 box",
        "price": 35000
      }
    ],
    "id": "fishing-jigsaw-puzzle-3-in-1-large-box"
  },
  {
    "category": "cognitive",
    "name": "Fine motor wooden puzzles",
    "image": "/catalogue-img/fine-motor-wooden-puzzles.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 15000
      }
    ],
    "id": "fine-motor-wooden-puzzles"
  },
  {
    "category": "cognitive",
    "name": "Word pad",
    "detail": "With writing Sand",
    "image": "/catalogue-img/word-pad-with-writing-sand.webp",
    "variants": [
      {
        "qty": "1 box",
        "price": 30000
      }
    ],
    "id": "word-pad-with-writing-sand"
  },
  {
    "category": "cognitive",
    "name": "Geometric Shapes",
    "image": "/catalogue-img/geometric-shapes.webp",
    "variants": [
      {
        "qty": "1 box",
        "price": 30000
      }
    ],
    "id": "geometric-shapes"
  },
  {
    "category": "cognitive",
    "name": "Logarithmic board",
    "detail": "5 Games in 1",
    "image": "/catalogue-img/logarithmic-board-5-games-in-1.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 45000
      }
    ],
    "id": "logarithmic-board-5-games-in-1"
  },
  {
    "category": "cognitive",
    "name": "Pencil grip",
    "image": "/catalogue-img/pencil-grip.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 12000
      }
    ],
    "id": "pencil-grip"
  },
  {
    "category": "cognitive",
    "name": "Memory game",
    "detail": "4 Games in 1",
    "image": "/catalogue-img/memory-game-4-games-in-1.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 45000
      }
    ],
    "id": "memory-game-4-games-in-1"
  },
  {
    "category": "cognitive",
    "name": "Colorful peg board",
    "image": "/catalogue-img/colorful-peg-board.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 35000
      }
    ],
    "id": "colorful-peg-board"
  },
  {
    "category": "cognitive",
    "name": "Memory chess",
    "image": "/catalogue-img/memory-chess.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 30000
      }
    ],
    "id": "memory-chess"
  },
  {
    "category": "cognitive",
    "name": "Wooden beads set",
    "image": "/catalogue-img/wooden-beads-set.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 45000
      }
    ],
    "id": "wooden-beads-set"
  },
  {
    "category": "cognitive",
    "name": "Busy Book",
    "detail": "8 pages · 30 Games",
    "image": "/catalogue-img/busy-book-8-pages-30-games.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 45000
      }
    ],
    "id": "busy-book-8-pages-30-games"
  },
  {
    "category": "cognitive",
    "name": "Plastic ball darts",
    "image": "/catalogue-img/plastic-ball-darts.webp",
    "variants": [
      {
        "qty": "1 set",
        "price": 15000
      }
    ],
    "id": "plastic-ball-darts"
  },
  {
    "category": "cognitive",
    "name": "Twistable crayons",
    "image": "/catalogue-img/twistable-crayons.webp",
    "variants": [
      {
        "qty": "12 colors",
        "price": 8000
      }
    ],
    "id": "twistable-crayons"
  },
  {
    "category": "cognitive",
    "name": "Lego blocks",
    "image": "/catalogue-img/lego-blocks.webp",
    "variants": [
      {
        "qty": "1 package",
        "price": 35000
      }
    ],
    "id": "lego-blocks"
  },
  {
    "category": "sensory",
    "name": "Gym ball + pump",
    "image": "/catalogue-img/gym-ball-pump.webp",
    "variants": [
      {
        "qty": "55cm",
        "price": 45000
      },
      {
        "qty": "65cm",
        "price": 55000
      }
    ],
    "id": "gym-ball-pump"
  },
  {
    "category": "sensory",
    "name": "Peanut Gymball + Pump",
    "image": "/catalogue-img/peanut-gymball-pump.webp",
    "variants": [
      {
        "qty": "Small",
        "price": 45000
      },
      {
        "qty": "Medium",
        "price": 55000
      }
    ],
    "id": "peanut-gymball-pump"
  },
  {
    "category": "sensory",
    "name": "Trampoline",
    "image": "/catalogue-img/stock/trampoline.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "4.5ft",
        "price": 300000
      },
      {
        "qty": "6ft",
        "price": 700000
      },
      {
        "qty": "8ft",
        "price": 900000
      },
      {
        "qty": "10ft",
        "price": 1000000
      },
      {
        "qty": "12ft",
        "price": 1300000
      },
      {
        "qty": "14ft",
        "price": 1600000
      }
    ],
    "id": "trampoline"
  },
  {
    "category": "sensory",
    "name": "Hammock",
    "detail": "Children - Medium",
    "image": "/catalogue-img/hammock-children-medium.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 60000
      }
    ],
    "id": "hammock-children-medium"
  },
  {
    "category": "sensory",
    "name": "Sensory mats",
    "image": "/catalogue-img/sensory-mats.webp",
    "variants": [
      {
        "qty": "1 set (6 mats)",
        "price": 130000
      }
    ],
    "id": "sensory-mats"
  },
  {
    "category": "sensory",
    "name": "Sensory Brush",
    "image": "/catalogue-img/sensory-brush.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 15000
      }
    ],
    "id": "sensory-brush"
  },
  {
    "category": "sensory",
    "name": "Noise-cancelling ear muffs",
    "image": "/catalogue-img/stock/noise-cancelling-ear-muffs.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "Each",
        "price": 45000
      }
    ],
    "id": "noise-cancelling-ear-muffs"
  },
  {
    "category": "sensory",
    "name": "Bubble fish light",
    "image": "/catalogue-img/stock/bubble-fish-light.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "85cm height",
        "price": 150000
      }
    ],
    "id": "bubble-fish-light"
  },
  {
    "category": "sensory",
    "name": "Visual Stimulation Lights",
    "image": "/catalogue-img/visual-stimulation-lights.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 30000
      }
    ],
    "id": "visual-stimulation-lights"
  },
  {
    "category": "sensory",
    "name": "Therapy putty",
    "image": "/catalogue-img/therapy-putty.webp",
    "variants": [
      {
        "qty": "1 set (4 pc)",
        "price": 60000
      }
    ],
    "id": "therapy-putty"
  },
  {
    "category": "sensory",
    "name": "Fidget set",
    "image": "/catalogue-img/fidget-set.webp",
    "variants": [
      {
        "qty": "1 box",
        "price": 60000
      }
    ],
    "id": "fidget-set"
  },
  {
    "category": "sensory",
    "name": "Potty Trainer",
    "image": "/catalogue-img/potty-trainer.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 70000
      }
    ],
    "id": "potty-trainer"
  },
  {
    "category": "sensory",
    "name": "Sensory Tunnel",
    "image": "/catalogue-img/sensory-tunnel.webp",
    "variants": [
      {
        "qty": "180cm x 46cm",
        "price": 90000
      }
    ],
    "id": "sensory-tunnel"
  },
  {
    "category": "sensory",
    "name": "Wooden balance board",
    "image": "/catalogue-img/wooden-balance-board.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 70000
      }
    ],
    "id": "wooden-balance-board"
  },
  {
    "category": "sensory",
    "name": "Weighted blanket",
    "image": "/catalogue-img/weighted-blanket.webp",
    "variants": [
      {
        "qty": "4.5kg",
        "price": 175000
      }
    ],
    "id": "weighted-blanket"
  },
  {
    "category": "sensory",
    "name": "Weighted vest",
    "detail": "Adjustable weights",
    "image": "/catalogue-img/weighted-vest-adjustable-weights.webp",
    "variants": [
      {
        "qty": "5kg",
        "price": 95000
      },
      {
        "qty": "8kg",
        "price": 100000
      }
    ],
    "id": "weighted-vest-adjustable-weights"
  },
  {
    "category": "sensory",
    "name": "Weighted bracelets",
    "image": "/catalogue-img/weighted-bracelets.webp",
    "variants": [
      {
        "qty": "1 pair (2 = 0.25 kg each)",
        "price": 30000
      },
      {
        "qty": "1 pair (2 = 0.5 kg each)",
        "price": 40000
      },
      {
        "qty": "1 pair (2 = 1 kg each)",
        "price": 50000
      }
    ],
    "id": "weighted-bracelets"
  },
  {
    "category": "sensory",
    "name": "Spiked balance cushion",
    "image": "/catalogue-img/stock/spiked-balance-cushion.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "Each",
        "price": 55000
      }
    ],
    "id": "spiked-balance-cushion"
  },
  {
    "category": "sensory",
    "name": "Balance Ball",
    "image": "/catalogue-img/balance-ball.webp",
    "variants": [
      {
        "qty": "Small",
        "price": 110000
      },
      {
        "qty": "Large",
        "price": 210000
      }
    ],
    "id": "balance-ball"
  },
  {
    "category": "sensory",
    "name": "Spiked massage ball",
    "image": "/catalogue-img/spiked-massage-ball.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 25000
      }
    ],
    "id": "spiked-massage-ball"
  },
  {
    "category": "sensory",
    "name": "Spiked massage ball",
    "detail": "Peanut shaped",
    "image": "/catalogue-img/spiked-massage-ball-peanut-shaped.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 25000
      }
    ],
    "id": "spiked-massage-ball-peanut-shaped"
  },
  {
    "category": "sensory",
    "name": "Anti-stress balls",
    "image": "/catalogue-img/antistress-balls.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 15000
      }
    ],
    "id": "antistress-balls"
  },
  {
    "category": "sensory",
    "name": "Spongy exercise balls",
    "image": "/catalogue-img/spongy-exercise-balls.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 15000
      }
    ],
    "id": "spongy-exercise-balls"
  },
  {
    "category": "sensory",
    "name": "Therapy mat",
    "image": "/catalogue-img/therapy-mat.webp",
    "variants": [
      {
        "qty": "(6ft x 4ft)",
        "price": 90000
      }
    ],
    "id": "therapy-mat"
  },
  {
    "category": "sensory",
    "name": "Electric toothbrush",
    "image": "/catalogue-img/stock/electric-toothbrush.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "Each",
        "price": 35000
      }
    ],
    "id": "electric-toothbrush"
  },
  {
    "category": "sensory",
    "name": "Indoor Swing",
    "image": "/catalogue-img/indoor-swing.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 250000
      }
    ],
    "id": "indoor-swing"
  },
  {
    "category": "sensory",
    "name": "Plastic colored balls",
    "image": "/catalogue-img/plastic-colored-balls.webp",
    "variants": [
      {
        "qty": "50 pcs",
        "price": 40000
      }
    ],
    "id": "plastic-colored-balls"
  },
  {
    "category": "sensory",
    "name": "Interlocking mats",
    "image": "/catalogue-img/interlocking-mats.webp",
    "variants": [
      {
        "qty": "1.8M x 1.5M",
        "price": 140000
      }
    ],
    "id": "interlocking-mats"
  },
  {
    "category": "sensory",
    "name": "Intex Swimming pool",
    "image": "/catalogue-img/intex-swimming-pool.webp",
    "variants": [
      {
        "qty": "4M x 2M x 1M",
        "price": 1100000
      }
    ],
    "id": "intex-swimming-pool"
  },
  {
    "category": "sensory",
    "name": "Starry Night Light Projector",
    "image": "/catalogue-img/starry-night-light-projector-starr.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 210000
      }
    ],
    "id": "starry-night-light-projector-starr"
  },
  {
    "category": "sensory",
    "name": "Fidget Spinners",
    "image": "/catalogue-img/stock/fidget-spinners.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "Each",
        "price": 10000
      }
    ],
    "id": "fidget-spinners"
  },
  {
    "category": "speech",
    "name": "Flashcards",
    "image": "/catalogue-img/flashcards.webp",
    "variants": [
      {
        "qty": "1 box",
        "price": 15000
      }
    ],
    "id": "flashcards"
  },
  {
    "category": "speech",
    "name": "Spelling game",
    "image": "/catalogue-img/spelling-game.webp",
    "variants": [
      {
        "qty": "1 box (4Games in 1)",
        "price": 45000
      }
    ],
    "id": "spelling-game"
  },
  {
    "category": "speech",
    "name": "Magnetic word recognition",
    "image": "/catalogue-img/magnetic-word-recognition.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 25000
      }
    ],
    "id": "magnetic-word-recognition"
  },
  {
    "category": "motor",
    "name": "Arm Trolley",
    "image": "/catalogue-img/arm-trolley.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 45000
      }
    ],
    "id": "arm-trolley"
  },
  {
    "category": "motor",
    "name": "TENS unit",
    "detail": "2 channels",
    "image": "/catalogue-img/stock/tens.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "Each",
        "price": 200000
      }
    ],
    "id": "tens"
  },
  {
    "category": "motor",
    "name": "TENS unit",
    "detail": "4 channels",
    "image": "/catalogue-img/tens-2.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 250000
      }
    ],
    "id": "tens-2"
  },
  {
    "category": "motor",
    "name": "Hand grip set",
    "detail": "Adjustable Resistance",
    "image": "/catalogue-img/hand-grip-set-adjustable-resistance.webp",
    "variants": [
      {
        "qty": "1 set",
        "price": 60000
      }
    ],
    "id": "hand-grip-set-adjustable-resistance"
  },
  {
    "category": "motor",
    "name": "Wooden blocks",
    "variants": [
      {
        "qty": "10",
        "price": 20000
      }
    ],
    "id": "wooden-blocks"
  },
  {
    "category": "motor",
    "name": "Push and Pull",
    "image": "/catalogue-img/push-and-pull.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 40000
      }
    ],
    "id": "push-and-pull"
  },
  {
    "category": "motor",
    "name": "Rehabilitation Velcro board",
    "image": "/catalogue-img/rehabilitation-velcro-board.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 60000
      }
    ],
    "id": "rehabilitation-velcro-board"
  },
  {
    "category": "motor",
    "name": "Thermoplast",
    "detail": "Perforated",
    "image": "/catalogue-img/thermoplast-perforated.webp",
    "variants": [
      {
        "qty": "(61cm x 46cm)",
        "price": 140000
      }
    ],
    "id": "thermoplast-perforated"
  },
  {
    "category": "motor",
    "name": "Elastic resistance band",
    "image": "/catalogue-img/elastic-resistance-band.webp",
    "variants": [
      {
        "qty": "1 meter",
        "price": 18000
      },
      {
        "qty": "2 meter",
        "price": 33000
      },
      {
        "qty": "3 meter",
        "price": 48000
      },
      {
        "qty": "4 meter",
        "price": 63000
      },
      {
        "qty": "5 meter",
        "price": 78000
      }
    ],
    "id": "elastic-resistance-band"
  },
  {
    "category": "motor",
    "name": "Resistance band loop set",
    "detail": "Different resistance",
    "image": "/catalogue-img/stock/resistance-band-loop-set-different-resistance.webp",
    "photoNote": true,
    "variants": [
      {
        "qty": "5 pcs",
        "price": 50000
      }
    ],
    "id": "resistance-band-loop-set-different-resistance"
  },
  {
    "category": "motor",
    "name": "Parallel bar",
    "detail": "Stainless steel",
    "image": "/catalogue-img/parallel-bar-stainless-steel.webp",
    "variants": [
      {
        "qty": "3 Meters",
        "price": 1100000
      }
    ],
    "id": "parallel-bar-stainless-steel"
  },
  {
    "category": "motor",
    "name": "Chewing tube",
    "image": "/catalogue-img/chewing-tube.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 15000
      }
    ],
    "id": "chewing-tube"
  },
  {
    "category": "motor",
    "name": "Paediatric standing frame",
    "detail": "Supine Stand",
    "image": "/catalogue-img/paediatric-standing-frame-supine-stand.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 350000
      }
    ],
    "id": "paediatric-standing-frame-supine-stand"
  },
  {
    "category": "motor",
    "name": "Prone wedge",
    "image": "/catalogue-img/prone-wedge.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 160000
      }
    ],
    "id": "prone-wedge"
  },
  {
    "category": "motor",
    "name": "Corner chair",
    "image": "/catalogue-img/corner-chair.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 250000
      }
    ],
    "id": "corner-chair"
  },
  {
    "category": "motor",
    "name": "Special chair",
    "image": "/catalogue-img/special-chair.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 300000
      }
    ],
    "id": "special-chair"
  },
  {
    "category": "motor",
    "name": "Treatment table",
    "detail": "6ft x 2ft",
    "image": "/catalogue-img/treatment-table.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 950000
      }
    ],
    "id": "treatment-table"
  },
  {
    "category": "motor",
    "name": "Treatment table",
    "detail": "6ft x 5ft",
    "image": "/catalogue-img/treatment-table-2.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 1550000
      }
    ],
    "id": "treatment-table-2"
  },
  {
    "category": "motor",
    "name": "Training Stairs",
    "image": "/catalogue-img/training-stairs.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 900000
      }
    ],
    "id": "training-stairs"
  },
  {
    "category": "motor",
    "name": "Angled Training Stairs",
    "image": "/catalogue-img/angled-training-stairs.webp",
    "variants": [
      {
        "qty": "Each",
        "price": 1300000
      }
    ],
    "id": "angled-training-stairs"
  }
]
