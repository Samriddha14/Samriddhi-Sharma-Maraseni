import type { ProjectItem } from './types'

export const projects: ProjectItem[] = [
  {
    title: 'Waste to Walkways: Circular-Economy-Based Paver Block for Urban Sustainability',
    categories: ['Sustainable Materials', 'Circular Economy'],
    role: 'Researcher & Lead, Mix Design',
    year: '2024',
    description: `Led the design and evaluation of "Waste to Walkways," producing circular-economy-based paver blocks from urban waste. The work converts municipal waste into low-carbon paving units for resilient urban infrastructure.`,
    responsibilities: [
      'Designed and evaluated paver-block compositions derived from urban waste streams.',
      'Optimized concrete mix design for compressive strength, durability, and reduced landfill burden.',
      'Developed scalable, low-carbon urban paving solutions aligned with circular-economy and sustainability goals.',
      'Authored findings published in The OCEM Journal of Management, Technology & Social Sciences.',
    ],
    software: ['Concrete mix design', 'Compressive-strength testing', 'Materials testing'],
    publication: 'The OCEM Journal of Management, Technology & Social Sciences, Vol. 4(1) (2025)',
    image: 'images/projects/paver-block.svg',
    imageAlt: 'Paver blocks arranged in a herringbone pattern',
  },
  {
    title: 'Eco-Friendly Paver Block: Comparative Study by Composition Review',
    categories: ['Sustainable Materials', 'Research'],
    role: 'Main Author',
    year: '2025',
    description: `Evaluated multiple paver-block compositions to determine optimal material performance and environmental benefits. Findings informed climate-resilient, resource-efficient urban-infrastructure strategies aligned with circular-economy principles.`,
    responsibilities: [
      'Reviewed and compared alternative paver-block compositions (waste-based and conventional).',
      'Assessed compressive strength, water absorption, and environmental impact of each mix.',
      'Identified optimal compositions balancing structural performance with sustainability.',
    ],
    software: ['Literature review', 'Mix design', 'Strength testing', 'Life-cycle thinking'],
    publication: 'The OCEM Journal of Management, Technology & Social Sciences, Vol. 4(1) (2025)',
    image: 'images/projects/paver-comparison.svg',
    imageAlt: 'Comparison of paver-block specimens under testing',
  },
  {
    title: 'Surveying and Levelling Practical',
    categories: ['Geomatics', 'Site Survey'],
    role: 'Field & Office Engineer',
    description: `Conducted distance and angle measurements, differential levelling, contour mapping, and prepared survey plans for site evaluation.`,
    responsibilities: [
      'Performed traverse and detail surveying using total stations and levels.',
      'Executed differential levelling and generated spot levels for site modelling.',
      'Produced contour maps and survey plans supporting site evaluation and design.',
    ],
    software: ['Total Station', 'Level', 'Theodolite', 'GPS', 'AutoCAD', 'SketchUp'],
    image: 'images/projects/survey.svg',
    imageAlt: 'Survey plan with contour lines and control points',
  },
]
