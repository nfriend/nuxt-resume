<template>
  <div
    class="container font-serif min-h-screen flex flex-col mx-auto shadow-2xl p-20 m-20 bg-ivory"
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
html,
body {
  @apply bg-gray-200;
}
</style>
