export const services = [
  {
    slug: 'weekly-mowing',
    title: 'WEEKLY MOWING',
    shortDesc: 'Consistent mowing that keeps your lawn clean, even, and healthy.',
    longDesc: 'Keep your lawn looking its best with reliable weekly mowing. We maintain a consistent cut height, trim as needed, and leave your property looking sharp after every visit.',
    img: '/stock-pics/1.png',
  },
  {
    slug: 'trimming',
    title: 'TREE/SHRUB/BUSH TRIMMING',
    shortDesc: 'Neat, healthy trimming to shape growth and improve curb appeal.',
    longDesc: 'We trim trees, shrubs, and bushes with care to promote healthy growth and a clean, balanced look. Great for routine upkeep or getting things back under control.',
    img: '/stock-pics/2.png',
  },
  {
    slug: 'edging',
    title: 'EDGING',
    shortDesc: 'Crisp edges along driveways, sidewalks, and beds for a finished look.',
    longDesc: 'Sharp edging makes a big difference. We define clean lines around walkways, driveways, and landscape beds to give your property a polished, professional finish.',
    img: '/stock-pics/3.png',
  },
  {
    slug: 'aeration',
    title: 'AERATION',
    shortDesc: 'Improve airflow and nutrient absorption for healthier turf.',
    longDesc: 'Lawn aeration helps relieve compaction so water, air, and nutrients reach the roots more effectively. It’s a simple seasonal service that supports thicker, healthier growth.',
    img: '/stock-pics/4.png',
  },
  {
    slug: 'lawn-rolling',
    title: 'LAWN ROLLING',
    shortDesc: 'Smooth out bumps and improve your lawn’s overall appearance.',
    longDesc: 'Lawn rolling helps level minor unevenness for a smoother, more even-looking yard. It’s ideal after seasonal shifts or when you want a cleaner finish.',
    img: '/stock-pics/5.png',
  },
  {
    slug: 'mulch-stone',
    title: 'MULCH AND STONE',
    shortDesc: 'Refresh beds with clean, durable materials that boost curb appeal.',
    longDesc: 'We install mulch and stone to define landscape beds, improve drainage where needed, and give your property a fresh, finished look that lasts.',
    img: '/stock-pics/6.png',
  },
  {
    slug: 'property-transformations',
    title: 'COMPLETE PROPERTY TRANSFORMATIONS',
    shortDesc: 'Full-service upgrades that dramatically improve your outdoor space.',
    longDesc: 'From cleanup and trimming to bed refreshes and finishing touches, we handle complete property transformations that elevate curb appeal and create a space you’ll be proud of.',
    img: '/stock-pics/7.png',
  },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];
