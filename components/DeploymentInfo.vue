<template>
  <div class="italic text-gray-700 text-center print:hidden">
    <span v-if="isProduction" class="mr-4">
      Last deployed on {{ deployedTimestamp }} for commit
      <a :href="commitLink">{{ commitSha }}</a>
    </span>
    <span v-else class="mr-2">Running locally</span>
    <a
      class="mr-2"
      href="https://gitlab.com/nfriend/nuxt-resume/pipelines/latest"
    >
      <img
        class="inline h-5 -mt-1"
        src="https://gitlab.com/nfriend/nuxt-resume/badges/master/pipeline.svg"
        alt="GitLab build status"
      />
    </a>
    <a
      href="https://gitlab.com/nfriend/nuxt-resume"
      class="inline-flex items-center"
    >
      View the source on GitLab
      <Icon class="ml-1" type="gitlab" />
    </a>
  </div>
</template>

<script>
import moment from 'moment';
import Icon from './utility/Icon';

export default {
  components: { Icon },
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
