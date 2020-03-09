#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');
const request = require('request-promise');
const _ = require('lodash');
const yargs = require('yargs');
const Ajv = require('ajv');
const removeMd = require('remove-markdown');

const data = require(path.resolve(__dirname, '../resume-data.json'));

(async () => {
  const { githubPat, gitlabPat } = yargs
    .usage(
      'Usage: generate-resume.json.js --github-pat <pat> --gitlab-pat <pat>',
    )
    .alias('h', 'github-pat')
    .describe(
      'github-pat',
      'A GitHub PAT with "gist" scope. If not provided, the Gist will not be updated.',
    )
    .alias('l', 'gitlab-pat')
    .describe(
      'gitlab-pat',
      'A GitLab PAT with "api" scope. If not provided, the Snippet will not be updated.',
    ).argv;

  const experienceSection = findSection('Experience');
  const internshipsSection = findSection('Internships/Part-time');
  const workSubsections = [
    ...experienceSection.subsections,
    ...internshipsSection.subsections,
  ];
  const work = workSubsections.map(s => {
    let workInfo = {
      company: _.isString(s.title) ? s.title : s.title.display,
      website: _.isString(s.title) ? undefined : s.title.link,
      summary: removeMd(s.description),
      highlights: s.highlights ? s.highlights.map(h => removeMd(h)) : undefined,
    };

    if (s.subtitle && !_.isString(s.subtitle)) {
      workInfo = {
        ...workInfo,
        position: s.subtitle.description,
        startDate: s.subtitle.startDate,
        endDate: s.subtitle.endDate,
      };
    }

    return workInfo;
  });

  const educationSection = findSection('Education');
  const education = educationSection.subsections.map(s => {
    let educationInfo = {
      institution: _.isString(s.title) ? s.title : s.title.display,
      website: _.isString(s.title) ? undefined : s.title.link,
      summary: s.description ? removeMd(s.description) : undefined,
      highlights: s.highlights ? s.highlights.map(h => removeMd(h)) : undefined,
    };

    if (s.subtitle && !_.isString(s.subtitle)) {
      educationInfo = {
        ...educationInfo,
        startDate: s.subtitle.startDate,
        endDate: s.subtitle.endDate,
        area: s.subtitle.area,
        studyType: s.subtitle.studyType,
      };
    }

    return educationInfo;
  });

  const skillsSection = findSection('Skills');
  const skills = skillsSection.subsections
    .filter(s => ['Languages', 'Frameworks', 'Concepts'].includes(s.title))
    .map(s => ({
      name: s.title,
      keywords: s.tags.map(t => (_.isString(t) ? t : t.display)),
    }));

  const resumeJson = {
    // Strangely, including the $schema property
    // causes jsonresume.org to throw errors
    // $schema: 'http://json.schemastore.org/resume',
    basics: {
      ...data.basics,

      // remove nameKerned
      nameKerned: undefined,
    },
    work,
    education,
    skills,
    meta: data.meta,
  };

  console.log('Validating JSON...');
  const errors = await validateResumeJson(resumeJson);
  if (!errors) {
    console.log('Resume.json is valid ✅');
  } else {
    console.log('Resume.json is not valid! ❌');
    console.log(errors);
  }

  const stringifiedResumeJson = JSON.stringify(resumeJson, null, 2);

  console.log('Transformed resume data into the following resume.json format:');
  console.log(stringifiedResumeJson);

  if (githubPat) {
    const gistId = '36d83b1526df75a663d9c3ad0b1cd630';
    console.log(
      `Updating the GitHub resume.json Gist (https://gist.github.com/nfriend/${gistId})...`,
    );
    updateGitHubGist({ pat: githubPat, gistId, stringifiedResumeJson });
  } else {
    console.log(
      'No GitHub PAT was provided, so skipping the Gist update.',
      'You can provide a GitHub PAT using the --github-pat option.',
    );
  }

  if (gitlabPat) {
    const snippetId = '1948091';
    console.log(
      `Updating the GitLab resume.json Snippet (https://gitlab.com/snippets/${snippetId})...`,
    );
    updateGitLabSnippet({ pat: gitlabPat, snippetId, stringifiedResumeJson });
  } else {
    console.log(
      'No GitLab PAT was provided, so skipping the Snippet update.',
      'You can provide a GitLab PAT using the --gitlab-pat option.',
    );
  }
})();

/**
 * Finds a section by title
 * @param sectionTitle The title of the section to find
 */
function findSection(sectionTitle) {
  return _.flatten(data.content.columns.map(c => c.sections)).find(
    s => s.title === sectionTitle,
  );
}

/**
 * Validates the resume.json adheres to the JSON schema
 * @param {Object} resumeJson The resume.json data to validate
 * @returns An array of error objects, or null if the data is valid
 */
async function validateResumeJson(resumeJson) {
  const schema = await request.get({
    url: 'http://json.schemastore.org/resume',
    json: true,
    headers: { Accept: '*/*' },
  });

  // Options provided allow draft-04 schema support
  // See https://github.com/epoberezkin/ajv/releases/tag/5.0.0
  const ajv = new Ajv({
    schemaId: 'id',
    meta: false,
    extendRefs: true,
    unknownFormats: 'ignore',
    missingRefs: 'ignore',

    // removes any properties that aren't in the schema
    removeAdditional: true,
  });

  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

  const validate = await ajv.compile(schema);
  validate(resumeJson);
  return validate.errors;
}

/**
 * Updates the GitLab resume.json Snippet
 * @param {Object} snippetInfo
 * @param {String} snippetInfo.pat A GitLab PAT with API scope
 * @param {String} snippetInfo.stringifiedResumeJson The contents of resume.json, stringified
 */
async function updateGitLabSnippet({ pat, snippetId, stringifiedResumeJson }) {
  await request.put({
    url: `https://gitlab.com/api/v4/snippets/${snippetId}`,
    json: true,
    body: {
      id: snippetId,
      title: 'resume.json',
      file_name: 'resume.json',
      description:
        'My [resume.json](https://jsonresume.org/). This file is automatically generated by the CI pipeline of my [Nuxt Résumé project](https://gitlab.com/nfriend/nuxt-resume#resumejson).',
      content: stringifiedResumeJson,
      visibility: 'public',
    },
    headers: {
      'PRIVATE-TOKEN': pat,
    },
  });
}

/**
 * Updates the GitHub resume.json Gist
 * @param {Object} snippetInfo
 * @param {String} snippetInfo.pat A GitHub PAT with Gist scope
 * @param {String} snippetInfo.stringifiedResumeJson The contents of resume.json, stringified
 */
async function updateGitHubGist({ pat, gistId, stringifiedResumeJson }) {
  await request.patch({
    url: `https://nfriend:${pat}@api.github.com/gists/${gistId}`,
    json: true,
    body: {
      description:
        'My resume.json: https://jsonresume.org/. This file is automatically generated by the CI pipeline of my Nuxt Résumé project: https://gitlab.com/nfriend/nuxt-resume#resumejson',
      files: {
        'resume.json': {
          content: stringifiedResumeJson,
        },
      },
    },
    headers: {
      'User-Agent': 'nfriend',
    },
  });
}
