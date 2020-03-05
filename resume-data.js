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
                  link: 'https://about.gitlab.com/',
                },
                subtitle: 'Dec 2018 – Present | Senior Frontend Engineer',
                description:
                  'Built doner pork chop • Served salmon, cream soft cheese, and brisket • Acted 55% pork chop • Filled burgdoggen & frankfurter strip steak with 90% burger patties and broth',
                highlights: [
                  'Built doner pork chop',
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
              {
                title: {
                  display: 'DeltaWare',
                  link: 'https://maximuscanada.ca/locations',
                },
                subtitle: 'Aug 2016 – Dec 2018 | Project Architect',
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
                subtitle:
                  'May 2013 – Jul 2016 | Software Development Specialist',
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
                subtitle:
                  "2016 – 2019 | Master's in Human-Computer Interaction",
              },
              {
                title: {
                  display: 'Dordt University',
                  link: 'https://www.dordt.edu/',
                },
                subtitle: "2009 – 2013 | Bachelor's in Computer Science",
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
                title: 'UX Development Intern',
                subtitle: 'Jan 2013 – May 2013 | Visual Logic Group',
                tags: [
                  {
                    display: 'JavaScript',
                    link: 'https://vuejs.org/',
                  },
                  'CSS',
                ],
              },
              {
                title: 'Web Developer',
                subtitle: 'Jan 2012 – May 2013 | Dordt College',
                tags: ['Perl', 'PHP', 'Drupal'],
              },
              {
                title: 'Software Development Intern',
                subtitle: 'May 2012 – Aug 2012 | DuPont Pioneer',
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
                title: 'Web Development Intern',
                subtitle: 'Apr 2011 – Aug 2011 | SnupNow, LLC',
                tags: ['HTML', 'CSS'],
              },
            ],
          },
        ],
      },
    ],
  },
};
