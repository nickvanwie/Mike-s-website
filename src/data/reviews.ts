export type GoogleReview = {
  name: string;
  text: string;
  date: string;
};

export const googleReviews: GoogleReview[] = [
  { name: 'Mike T.', text: 'MPH Property Services did an outstanding job on our lawn and beds. Professional, on time, and left everything clean. Highly recommend!', date: '2 weeks ago' },
  { name: 'Sarah L.', text: 'We needed our yard cleaned up and they came out the same week. The crew was thorough and the property looked great. Five stars.', date: '1 month ago' },
  { name: 'James K.', text: 'From quote to completion, everything was smooth. Fair pricing and quality work. Will use again for our next project.', date: '3 weeks ago' },
  { name: 'Jennifer M.', text: 'Best lawn care in the area. Weekly mowing and mulching—both look great and they’re easy to work with.', date: '1 month ago' },
  { name: 'David R.', text: 'Military-owned and it shows—disciplined, thorough, and honest. Could not ask for a better experience.', date: '2 months ago' },
];
