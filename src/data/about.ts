export interface Language {
  name: string
  listening: string
  reading: string
  writing: string
  spokenProduction?: string
  spokenInteraction?: string
}

export const languages = {
  native: ['Nepali'],
  foreign: [
    {
      name: 'English',
      listening: 'C1',
      reading: 'C1',
      writing: 'B2',
      spokenProduction: 'B2',
      spokenInteraction: 'B2',
    },
  ],
}

export const interests = [
  'Project management',
   'Sustainability solutions',
  'Leadership and global networking',
  'Communication and team collaboration',
  'Critical thinking and problem solving',
]
