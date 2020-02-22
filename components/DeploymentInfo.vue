<template>
  <div class="italic text-gray-700 print:hidden">
    <span v-if="isProduction" class="mr-4">
      Last deployed on {{ deployedTimestamp }} for commit
      <a :href="commitLink">{{ commitSha }}</a>
    </span>
    <span v-else class="mr-4">Running locally</span>
    <a href="https://gitlab.com/nfriend/nuxt-resume/pipelines">
      <img
        class="inline h-5 -mt-1"
        src="https://gitlab.com/nfriend/nuxt-resume/badges/master/pipeline.svg"
        alt="GitLab build status"
      />
    </a>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  computed: {
    isProduction() {
      return process.env.isProduction;
    },
    deployedTimestamp() {
      return moment(process.env.gitlabCi.timestamp)
        .utc()
        .format('Y/MM/DD \\a\\t HH:mm:ss z');
    },
    commitLink() {
      return `${process.env.gitlabCi.projectUrl}/commit/${this.commitSha}`;
    },
    commitSha() {
      return process.env.gitlabCi.commitSha;
    },
  },
};
</script>
