// Try and get data from ./resume-data.private.js
// If we find this file, its contents are used below.
// This is to avoid including personal info (e.g.
// phone numbers) in this project's repo.
let privateResumeData;
try {
  privateResumeData = require('./resume-data.private.js');
} catch (err) {
  /* Leave privateResumeData undefined */
}

const contactInfo = [
  {
    type: 'email',
    display: ' hello@nathanfriend.io',
    link: 'mailto:hello@nathanfriend.io',
  },
];

// If we have phone information, add it here
if (privateResumeData?.phoneInfo) {
  contactInfo.push(privateResumeData.phoneInfo);
}

contactInfo.push({
  type: 'location',
  display: 'Woodstock, ON',
  link: 'https://goo.gl/maps/SWsAd7QpGtWYdVCE6',
});

// If we _don't_ have phone information, add LinkedIn info instead. This is
// because the contact section looks too empty with less than 5 items.
if (!privateResumeData?.phoneInfo) {
  contactInfo.push({
    type: 'linkedin',
    display: 'nfriend',
    link: 'https://www.linkedin.com/in/nfriend/',
  });
}

contactInfo.push(
  {
    type: 'website',
    display: 'nathanfriend.io',
    link: 'https://nathanfriend.io',
  },
  {
    type: 'gitlab+github',
    display: 'nfriend',
    links: {
      gitlab: 'https://gitlab.com/nfriend',
      github: 'https://github.com/nfriend',
    },
  },
);

export const resumeData = {
  title: [
    { character: 'N', letterSpacing: '-0.08em' },
    { character: 'a', letterSpacing: '-0.07em' },
    { character: 't', letterSpacing: '-0.01em' },
    { character: 'h', letterSpacing: '-0.05em' },
    { character: 'a', letterSpacing: '-0.04em' },
    { character: 'n', letterSpacing: '-0.05em' },
    ' ',
    { character: 'F', letterSpacing: '-0.06em' },
    { character: 'r', letterSpacing: '-0.01em' },
    { character: 'i', letterSpacing: '-0.05em' },
    { character: 'e', letterSpacing: '-0.05em' },
    { character: 'n', letterSpacing: '-0.07em' },
    'd',
  ],
  contactInfo,
};
