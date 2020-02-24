import Vue from 'vue';
import { resumeData } from '../resume-data';

// Make resume data globally available
// to Vue templates as "resumeData"
Vue.mixin({
  created() {
    this.resumeData = resumeData;
  },
});
