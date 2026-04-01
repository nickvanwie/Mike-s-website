export const serviceAreas = [
  {
    slug: 'brockport',
    title: 'BROCKPORT',
    shortDesc: 'Local lawn care and landscaping tailored to Brockport homes and seasonal weather.',
    longDesc:
      'We serve Brockport with weekly mowing, edging, trimming, mulch and stone, aeration, and full property transformations. Whether you are near the canal village or farther out, we know the soil and turf challenges common here and keep your property looking sharp year round.',
    img: '/stock-pics/1.png',
  },
  {
    slug: 'spencerport',
    title: 'SPENCERPORT',
    shortDesc: 'Reliable maintenance and curb appeal upgrades for Spencerport residential properties.',
    longDesc:
      'Spencerport homeowners count on us for consistent mowing height, clean bed edges, and healthy turf. From routine upkeep to seasonal refreshes, we help your yard stay thick, neat, and ready for Western New York weather.',
    img: '/stock-pics/2.png',
  },
  {
    slug: 'hamlin',
    title: 'HAMLIN',
    shortDesc: 'Seasonal lawn and landscape care built for Hamlin lots and lake-country conditions.',
    longDesc:
      'Hamlin properties often deal with wind, moisture, and varied soil. We adjust mowing schedules, drainage-sensitive bed work, and trimming so your lawn and plantings stay healthy through wet springs and dry summer stretches.',
    img: '/stock-pics/3.png',
  },
  {
    slug: 'ogden',
    title: 'OGDEN',
    shortDesc: 'Professional mowing, edging, and landscape services across Ogden neighborhoods.',
    longDesc:
      'From smaller village lots to larger suburban parcels in Ogden, we deliver the same attention to detail: sharp lines, even cuts, and landscape beds that look intentional. Ask us about mulch, stone, and one-time cleanups.',
    img: '/stock-pics/4.png',
  },
  {
    slug: 'holley',
    title: 'HOLLEY',
    shortDesc: 'Dependable lawn care for Holley homes—mowing, trimming, and seasonal improvements.',
    longDesc:
      'We support Holley residents with weekly mowing, shrub and tree trimming, aeration when needed, and property transformations that boost curb appeal without the guesswork.',
    img: '/stock-pics/5.png',
  },
  {
    slug: 'kendall',
    title: 'KENDALL',
    shortDesc: 'Rural and residential lawn services throughout Kendall with a professional finish.',
    longDesc:
      'Kendall properties range from compact yards to larger spreads. We scale our crew and equipment to your needs while keeping the same gold-standard finish—clean edges, healthy turf, and landscapes you are proud to pull up to.',
    img: '/stock-pics/6.png',
  },
] as const;

export type ServiceAreaSlug = (typeof serviceAreas)[number]['slug'];
