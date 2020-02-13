<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-resume
      </h1>
      <h2 class="subtitle">
        My résumé, built with NuxtJS and Tailwind CSS
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="m-8 flex justify-center italic text-gray-700">
        <template v-if="showBuildInfo" class="m-4 flex">
          Last deployed on {{ lastDeployed }} for commit&nbsp;
          <a :href="commitLink">{{ commitSha }}</a>
        </template>
        <template v-else>Running locally</template>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
  computed: {
    showBuildInfo() {
      return process.env.NODE_ENV === 'production';
    },
    lastDeployed() {
      return moment('%%%GITLAB_CI_TIMESTAMP%%%').format(
        'Y/MM/DD \\a\\t HH:mm:ss ZZ',
      );
    },
    commitLink() {
      return `%%%CI_PROJECT_URL%%%/commit/${this.commitSha}`;
    },
    commitSha() {
      return '%%%CI_COMMIT_SHORT_SHA%%%';
    },
  },
};
</script>

<style lang="postcss">
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
