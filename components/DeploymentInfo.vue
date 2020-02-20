<template>
  <div class="flex italic text-gray-700 print:hidden">
    <template v-if="isProduction" class="m-4 flex">
      Last deployed on {{ deployedTimestamp }} for commit&nbsp;<a
        :href="commitLink"
      >
        {{ commitSha }}
      </a>
    </template>
    <template v-else>Running locally</template>
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
