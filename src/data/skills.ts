export const skills = {
  engineeringSoftware: ['AutoCAD (2D & 3D)', 'ETABS', 'SketchUp (3D Modelling)', 'Microsoft Office', 'Canva', 'InDesign'],
  surveying: ['GPS', 'Level', 'Theodolite', 'Total Station'],
  materialsTesting: ['Concrete manufacture & experimentation', 'Soil testing'],
  programming: ['C', 'C++'],
  technical: [
    'Data collection, analysis & reporting',
    'Data Science',
    'GIS & Remote Sensing',
    'Math & Statistics',
    'Environmental Impact Assessment (EIA)',
  ],
  engineeringDomains: [
    'Structural analysis',
    'Surveying & levelling',
    'Hydrology & hydraulics',
    'Concrete mix design & analysis',
    'Soil mechanics & classification',
    'Engineering geology & site investigation',
  ],
}

export const skillCategories = [
  { label: 'Engineering Software', key: 'engineeringSoftware' as const },
  { label: 'Surveying Equipment', key: 'surveying' as const },
  { label: 'Materials Testing', key: 'materialsTesting' as const },
  { label: 'Programming', key: 'programming' as const },
  { label: 'Technical & Analysis Tools', key: 'technical' as const },
  { label: 'Engineering Domains', key: 'engineeringDomains' as const },
]
