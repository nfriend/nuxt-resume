// Try and get data from ./resume-data.private.js
// If we find this file, its contents are used below.
// This is to avoid including personal info (e.g.
// phone numbers) in this project's repo.
let privateResumeData;
try {
  privateResumeData = require('./resume-data.private.mjs');
} catch (err) {
  /* Leave privateResumeData undefined */
}

const contactInfo = [
  {
    type: 'email',
    display: 'hello@nathanfriend.io',
    link: 'mailto:hello@nathanfriend.io',
  },

  // Twitter and Stack Overflow are not currently displayed;
  // only specified here for resume.json
  {
    type: 'twitter',
    display: 'NathanAFriend',
    link: 'https://twitter.com/NathanAFriend',
  },
  {
    type: 'stackoverflow',
    display: 'nathan-friend',
    link: 'https://stackoverflow.com/cv/nathanfriend',
  },
];

const phoneInformationExists = Boolean(
  privateResumeData && privateResumeData.phoneInfo,
);

// If we have phone information, add it here
if (phoneInformationExists) {
  contactInfo.push(privateResumeData.phoneInfo);
}

contactInfo.push({
  type: 'location',
  display: 'Woodstock, ON',
  link: 'https://goo.gl/maps/SWsAd7QpGtWYdVCE6',

  // used only for resume.json generation
  city: 'Woodstock',
  countryCode: 'CA',
  region: 'Ontario',
});

// If we _don't_ have phone information, add LinkedIn info instead. This is
// because the contact section looks too empty with less than 5 items.
if (!phoneInformationExists) {
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

  // Used only for resume.json generation.
  label: 'Software Engineer',
  summary:
    'Senior Frontend Engineer at GitLab and cellist based out of Woodstock, Ontario. Fascinated with building usable, delightful software.',

  contactInfo,
  content: {
    columns: [
      {
        sections: [
          {
            title: 'Experience',
            subsections: [
              {
                title: {
                  display: 'GitLab',
                  link: 'https://about.gitlab.com',
                },
                subtitle: {
                  startDate: '2018-12-10',
                  description: 'Senior Frontend Engineer',
                },
                description:
                  'As a senior engineer on the Release team, I build features that help people release software more quickly, easily, and effectively.',
                highlights: [
                  "Implemented high-profile features such as [Let's Encrypt integration](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/28996), merge trains, and deploy freezes",
                  'Pushed Release vision forward through in-depth technical and business analysis',
                  'Performed technical interviews',
                ],
                tags: [
                  {
                    display: 'Vue.js',
                    link: 'https://vuejs.org/',
                  },
                  {
                    display: 'JavaScript',
                    link:
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                  },
                  {
                    display: 'SCSS',
                    link: 'https://sass-lang.com/',
                  },
                  {
                    display: 'Ruby',
                    link: 'https://www.ruby-lang.org/',
                  },
                ],
              },
              {
                title: {
                  display: 'DeltaWare',
                  link: 'https://maximuscanada.ca/locations',
                },
                subtitle: {
                  startDate: '2016-08-03',
                  endDate: '2018-12-05',
                  description: 'Project Architect',
                },
                description:
                  'Filet mignon burgdoggen tri-tip swine pork belly ham hock flank pork. Ribeye turducken pancetta sausage. Biltong atl. Bacon ham shankle, landjaeg pastrami beef',
                highlights: [
                  'Filet mignon burgdoggen tri-tip swine pork belly ham hock flank pork.',
                  'Ribeye turducken pancetta sausage.',
                ],
                tags: [
                  {
                    display: 'Vue.js',
                    link: 'https://vuejs.org/',
                  },
                  {
                    display: 'JavaScript',
                    link: 'https://vuejs.org/',
                  },
                  {
                    display: 'SCSS',
                    link: 'https://sass-lang.com/',
                  },
                  {
                    display: 'Ruby',
                    link: 'https://www.ruby-lang.org/en/',
                  },
                ],
              },
              {
                title: {
                  display: 'DuPont Pioneer',
                  link: 'https://www.pioneer.com/us',
                },
                subtitle: {
                  startDate: '2013-05-20',
                  endDate: '2016-07-20',
                  description: 'Software Development Specialist',
                },
                description:
                  'Built doner pork chop • Served salmon, cream soft cheese, and brisket • Acted 55% pork chop • Filet mignon burgdoggen tri-tip swine pork belly ham hock flank pork. Ribeye turducken pancetta sausage. Biltong atl. Bacon ham shankle, landjaeg pastrami beef.',
                highlights: [
                  'Filet mignon burgdoggen tri-tip swine pork belly ham hock flank pork.',
                  'Served salmon, cream soft cheese, and brisket',
                  'Acted 55% pork chop',
                  'Filled burgdoggen & frankfurter strip steak with 90% burger patties and broth',
                ],
                tags: [
                  {
                    display: 'Vue.js',
                    link: 'https://vuejs.org/',
                  },
                  {
                    display: 'JavaScript',
                    link: 'https://vuejs.org/',
                  },
                  {
                    display: 'SCSS',
                    link: 'https://sass-lang.com/',
                  },
                  {
                    display: 'Ruby',
                    link: 'https://www.ruby-lang.org/en/',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        sections: [
          {
            title: 'Education',
            subsections: [
              {
                title: {
                  display: 'Iowa State University',
                  link: 'https://www.iastate.edu/',
                },
                subtitle: {
                  startDate: '2016-08-01',
                  endDate: '2019-08-15',
                  dateFormat: 'YYYY',
                  description: "Master's in Human-Computer Interaction",

                  // Used only for resume.json generation.
                  area: 'Human-Computer Interaction',
                  studyType: 'Master',
                },
              },
              {
                title: {
                  display: 'Dordt University',
                  link: 'https://www.dordt.edu/',
                },
                subtitle: {
                  startDate: '2009-08-01',
                  endDate: '2013-05-10',
                  dateFormat: 'YYYY',
                  description: "Bachelor's in Computer Science",

                  // Used only for resume.json generation.
                  area: 'Computer Science',
                  studyType: 'Bachelor',
                },
              },
            ],
          },
          {
            title: 'Skills',
            subsections: [
              {
                title: 'Languages',
                tags: [
                  {
                    display: 'JavaScript',
                    link: 'https://vuejs.org/',
                  },
                  {
                    display: 'TypeScript',
                    link: 'https://www.typescriptlang.org/',
                  },
                  {
                    display: 'C♯',
                    link:
                      'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
                  },
                  {
                    display: 'Ruby',
                    link: 'https://www.ruby-lang.org/en/',
                  },
                  {
                    display: 'SQL',
                    link: 'https://en.wikipedia.org/wiki/SQL',
                  },
                ],
              },
              {
                title: 'Frameworks',
                tags: [
                  {
                    display: 'Vue.js',
                    link: 'https://vuejs.org/',
                  },
                  'Angular',
                  'React',
                  'ASP.NET',
                  'Rails',
                ],
              },
              {
                title: 'Concepts',
                tags: [
                  'Single Page Applications (SPAs)',
                  'Internationalization (i18n)',
                  'Web analytics',
                  'Unit testing',
                  'Continuous deployment',
                  'User experience testing',
                  'REST API design',
                  'Cross-browser debugging',
                  'Responsive design',
                  'Developer workflow optimization',
                ],
              },
            ],
          },
          {
            title: 'Internships/Part-time',
            subsections: [
              {
                title: 'Visual Logic Group',
                subtitle: {
                  startDate: '2013-01-15',
                  endDate: '2013-05-01',
                  description: 'UX Development Intern',
                },
                tags: [
                  {
                    display: 'JavaScript',
                    link: 'https://vuejs.org/',
                  },
                  'CSS',
                ],
              },
              {
                title: 'Dordt College',
                subtitle: {
                  startDate: '2012-01-20',
                  endDate: '2013-05-10',
                  description: 'Web Developer',
                },
                tags: ['Perl', 'PHP', 'Drupal'],
              },
              {
                title: 'DuPont Pioneer',
                subtitle: {
                  startDate: '2012-05-20',
                  endDate: '2012-08-05',
                  description: 'Software Development Intern',
                },
                tags: [
                  {
                    display: 'JavaScript',
                    link: 'https://vuejs.org/',
                  },
                  'jQuery',
                  'ASP.NET',
                  'C♯',
                ],
              },
              {
                title: 'SnupNow, LLC',
                subtitle: {
                  startDate: '2011-04-15',
                  endDate: '2011-08-05',
                  description: 'Web Development Intern',
                },
                tags: ['HTML', 'CSS'],
              },
            ],
          },
        ],
      },
    ],
  },

  // Used only for resume.json generation.
  // List of available themes here: https://jsonresume.org/themes/
  meta: { theme: 'flat' },
};
