/**
 * This file contains utility methods used by ContactInfo.vue
 * to abstract some of the nitty-gritty details around
 * extracting data from the resume JSON
 */

/**
 * Strips whitespace and transforms all
 * characters to lowercase
 * @param {String} str The string to transform
 */
const lowerCaseNoSpaces = str => str.toLowerCase().replace(/\s/g, '');

/**
 * Finds a network object in `resumeData.basics.profiles`
 * @param {*} resumeData The resume data to search
 * @param {*} network The name of the network to find
 * @returns {Object | undefined} The match, or `undefined` if no match was found
 */
const findProfile = (resumeData, network) => {
  const normalizedNetwork = lowerCaseNoSpaces(network);
  return resumeData.basics.profiles?.find(
    p => lowerCaseNoSpaces(p.network) === normalizedNetwork,
  );
};

/**
 * Transforms any email info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getEmailInfo = resumeData => {
  const email = resumeData.basics?.email;

  if (email) {
    return {
      type: 'email',
      display: email,
      link: `mailto:${email}`,
    };
  }

  return null;
};

/**
 * Transforms any location info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getLocationInfo = resumeData => {
  const location = resumeData.basics?.location;

  if (location) {
    const locationInfo = {
      type: 'location',
      display: [location.city, location.region].filter(l => l).join(', '),
    };

    if (location.city && location.region) {
      locationInfo.link = `https://www.google.com/maps/search/?api=1&query=${location.city}%2C+${location.region}`;
    }

    return locationInfo;
  }

  return null;
};

/**
 * Transforms any phone info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getPhoneInfo = resumeData => {
  const phone = resumeData.basics?.phone;

  if (phone) {
    // Format the phone number as 123.456.7890 for display
    const phoneDigits = phone.replace(/[-.\s()]/g, '');
    const displayPhone = [
      phoneDigits.slice(-10, -7),
      phoneDigits.slice(-7, -4),
      phoneDigits.slice(-4),
    ].join('.');

    return {
      type: 'phone',
      display: displayPhone,
      link: `tel:${phone}`,
    };
  }

  return null;
};

/**
 * Transforms any LinkedIn info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getLinkedInInfo = resumeData => {
  const linkedIn = findProfile(resumeData, 'LinkedIn');

  if (linkedIn) {
    return {
      type: 'linkedin',
      display: linkedIn.username,
      link: linkedIn.url,
    };
  }

  return null;
};

/**
 * Transforms any personal website info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getWebsiteInfo = resumeData => {
  const website = resumeData.basics?.website;

  if (website) {
    return {
      type: 'website',
      display: website.replace(/^https?:\/\//i, ''),
      link: website,
    };
  }

  return null;
};

/**
 * Transforms any GitLab and GitHub info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * This function returns a combined `gitlab+github`
 * info type, and only returns it if both GitLab and GitHub
 * info was provided **and** the user has the same
 * username on both networks.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getGitLabPlusGitHubInfo = resumeData => {
  const gitlab = findProfile(resumeData, 'GitLab');
  const github = findProfile(resumeData, 'GitHub');

  if (gitlab && github && gitlab.username === github.username) {
    return {
      type: 'gitlab+github',
      display: gitlab.username,
      links: {
        gitlab: gitlab.url,
        github: github.url,
      },
    };
  }

  return null;
};

/**
 * Transforms any GitLab info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getGitLabInfo = resumeData => {
  const gitlab = findProfile(resumeData, 'GitLab');

  if (gitlab) {
    return {
      type: 'gitlab',
      display: gitlab.username,
      link: gitlab.url,
    };
  }

  return null;
};

/**
 * Transforms any GitHub info in the resume JSON data
 * into an object usable by `ContactInfo.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object} A contact info object if the data was found, otherwise `null`
 */
export const getGitHubInfo = resumeData => {
  const github = findProfile(resumeData, 'GitHub');

  if (github) {
    return {
      type: 'github',
      display: github.username,
      link: github.url,
    };
  }

  return null;
};
