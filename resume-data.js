import { merge } from 'lodash';

// Try and get data from ./resume-data.private.js
// If we find this file, its contents are merged
// with the data specified below.
// This is to avoid including personal info (i.e
// addresses, phone numbers) in this project's repo.
let privateResumeData;
try {
  ({ privateResumeData } = require('./resume-data.private.js'));
} catch (err) {
  privateResumeData = {};
}

const publicResumeData = {
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
};

export const resumeData = merge({}, publicResumeData, privateResumeData);
