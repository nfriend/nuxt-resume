/**
 * This file contains utility methods used by Content.vue
 * to abstract some of the nitty-gritty details around
 * extracting data from the resume JSON
 */

import moment from 'moment';

/**
 * Converts a date string (i.e. `'2020-03-09'`) into
 * another format (i.e. `'Mar 2020'`). If the input
 * is falsy, `'Present'` is returned.
 * @param {String} dateString The date string to format
 * @param {String} format An optional format string, used to
 * determine the output format. Defaults to 'MMM YYYY'
 */
const formatDate = (dateString, format = 'MMM YYYY') => {
  if (!dateString) {
    return 'Present';
  }

  return moment(dateString).format(format);
};

/**
 * Used internally by `getProfessionalWorkInfo` and
 * `getOtherWorkInfo` to extract work info.
 * @param {Object} resumeData The resume data to search
 * @param {Function} filterFn A function used to filter the work info
 * @returns {Object[]} An array of section objects
 */
const getWorkInfo = (resumeData, filterFn) => {
  return resumeData.work.filter(filterFn).map(w => ({
    ...w,
    title: w.company,
    subtitle: `${formatDate(w.startDate)} – ${formatDate(w.endDate)} | ${
      w.position
    }`,
  }));
};

/**
 * Transforms any full-time work info in the resume JSON data
 * into an array of section objects usable by `Content.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object[]} An array of section objects
 */
export const getProfessionalWorkInfo = resumeData => {
  return getWorkInfo(
    resumeData,
    w => !['parttime', 'internship'].includes(w.type),
  );
};

/**
 * Transforms any part-time or internship work info in the resume
 * JSON data into an array of section objects usable by `Content.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object[]} An array of section objects
 */
export const getOtherWorkInfo = resumeData => {
  return getWorkInfo(resumeData, w =>
    ['parttime', 'internship'].includes(w.type),
  );
};

/**
 * Transforms any education info in the resume JSON data
 * into an array of section objects usable by `Content.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object[]} An array of section objects
 */
export const getEducationInfo = resumeData => {
  return resumeData.education.map(ed => ({
    ...ed,
    title: ed.institution,
    subtitle: `${formatDate(ed.startDate, 'YYYY')} – ${formatDate(
      ed.endDate,
      'YYYY',
    )} | ${ed.studyType}'s in ${ed.area}`,
  }));
};

/**
 * Transforms any skills info in the resume JSON data
 * into an array of section objects usable by `Content.vue`.
 * @param {Object} resumeData The resume data to search
 * @returns {Object[]} An array of section objects
 */
export const getSkillsInfo = resumeData => {
  return resumeData.skills.map(s => ({
    title: s.name,
    tags: s.keywords,
  }));
};
