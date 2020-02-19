<template>
  <div class="flex italic text-gray-700">
    <template v-if="isProduction" class="m-4 flex">
      Last deployed on {{ deployedTimestamp }} ({{ deployedAgo }}) for
      commit&nbsp;<a
        :href="commitLink"
        class="text-blue-500 hover:text-blue-600 hover:underline"
      >
        {{ commitSha }}
      </a>
    </template>
    <template v-else>Running locally</template>
  </div>
</template>

<script>
import moment from 'moment';

const deployedMoment = moment(process.env.gitlabCi.timestamp);

export default {
  computed: {
    isProduction() {
      return process.env.isProduction;
    },
    deployedTimestamp() {
      return deployedMoment.format('Y/MM/DD \\a\\t HH:mm:ss ZZ');
    },
    deployedAgo() {
      return deployedMoment.fromNow();
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
