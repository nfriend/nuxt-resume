#!/usr/bin/env node

import { resumeData as data } from '../resume-data.mjs';
import request from 'request-promise';
import _ from 'lodash';
import md5 from 'md5';
import yargs from 'yargs';
import Ajv from 'ajv';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Construct __dirname, which points to the directory this script is in
const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const { githubPat, gitlabPat } = yargs
    .usage(
      'Usage: generate-resume.json.mjs --github-pat <pat> --gitlab-pat <pat>',
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

  const email = data.contactInfo.find(ci => ci.type === 'email').display;
  const website = data.contactInfo.find(ci => ci.type === 'website').link;
  const locationData = data.contactInfo.find(ci => ci.type === 'location');

  const linkedContactInfo = data.contactInfo.find(ci => ci.type === 'linkedin');
  const linkedInProfile = {
    network: 'LinkedIn',
    username: linkedContactInfo.display,
    url: linkedContactInfo.link,
  };

  const gitLabHubContactInfo = data.contactInfo.find(
    ci => ci.type === 'gitlab+github',
  );
  const gitLabProfile = {
    network: 'GitLab',
    username: gitLabHubContactInfo.display,
    url: gitLabHubContactInfo.links.gitlab,
  };
  const gitHubProfile = {
    network: 'GitHub',
    username: gitLabHubContactInfo.display,
    url: gitLabHubContactInfo.links.github,
  };

  const stackOverflowContactInfo = data.contactInfo.find(
    ci => ci.type === 'stackoverflow',
  );
  const stackOverflowProfile = {
    network: 'Stack Overflow',
    username: stackOverflowContactInfo.display,
    url: stackOverflowContactInfo.link,
  };

  const twitterContactInfo = data.contactInfo.find(ci => ci.type === 'twitter');
  const twitterProfile = {
    network: 'Twitter',
    username: twitterContactInfo.display,
    url: twitterContactInfo.link,
  };

  const experienceSection = findSection('Experience');
  const work = experienceSection.subsections.map(s => {
    let workInfo = {
      company: _.isString(s.title) ? s.title : s.title.display,
      website: _.isString(s.title) ? undefined : s.title.link,
      summary: s.description,
      highlights: s.highlights,
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
      summary: s.description,
      highlights: s.highlights,
    };

    if (s.subtitle && !_.isString(s.subtitle)) {
      educationInfo = {
        ...educationInfo,
        area: s.subtitle.description,
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
      name: _.isString(data.title)
        ? data.title
        : data.title.map(c => (_.isString(c) ? c : c.character)).join(''),
      label: data.label,
      picture: `https://secure.gravatar.com/avatar/${md5(
        email,
      )}?s=800&d=robohash`,
      email,
      website,
      location: {
        city: locationData.city,
        countryCode: locationData.countryCode,
        region: locationData.region,
      },
      profiles: [
        gitLabProfile,
        gitHubProfile,
        linkedInProfile,
        stackOverflowProfile,
        twitterProfile,
      ],
    },
    work,
    education,
    skills,
    meta: data.meta,
  };

  const stringifiedResumeJson = JSON.stringify(resumeJson, null, 2);

  console.log('Transformed resume data into the following resume.json format:');
  console.log(stringifiedResumeJson);

  console.log('Validating JSON...');
  const errors = await validateResumeJson(resumeJson);
  if (!errors) {
    console.log('Resume.json is valid ✅');
  } else {
    console.log('Resume.json is not valid! ❌');
    console.log(errors);
  }

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
  });

  // No require() in .mjs files :(
  const metaSchema = JSON.parse(
    fs.readFileSync(
      path.resolve(
        __dirname,
        '../node_modules/ajv/lib/refs/json-schema-draft-04.json',
      ),
    ),
  );

  ajv.addMetaSchema(metaSchema);

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
