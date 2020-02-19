<template>
  <div
    class="container min-h-screen flex flex-col mx-auto shadow-2xl p-20 m-20 bg-white"
  >
    <Header />
    <UnderConstructionMessage class="pb-4" />
    <DeploymentInfo />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import DeploymentInfo from '~/components/DeploymentInfo.vue';
import UnderConstructionMessage from '~/components/UnderConstructionMessage';

export default {
  components: {
    Header,
    DeploymentInfo,
    UnderConstructionMessage,
  },
};
</script>

<style lang="postcss">
body,
html {
  font-family: 'Bitter', serif;
  @apply bg-gray-200;
}
</style>
