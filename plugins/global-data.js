import Vue from 'vue';
import _ from 'lodash';

const publicResumeData = require('../resume-data.json');

let privateResumeData = {};
try {
  privateResumeData = require('../resume-data.private.json');
} catch (e) {
  // resume-data.private.json does not exist
}

const resumeData = _.merge({}, publicResumeData, privateResumeData);

// Make resume data globally available
// to Vue templates as "resumeData"
Vue.mixin({
  created() {
    this.resumeData = resumeData;
  },
});
