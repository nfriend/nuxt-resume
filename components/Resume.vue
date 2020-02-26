<template>
  <div class="paper-page flex flex-col">
    <Header />
    <!-- <UnderConstructionMessage v-if="isProduction" /> -->
    <PlaceholderContent class="flex-grow" />
    <DeploymentInfo />
  </div>
</template>

<script>
import PlaceholderContent from './PlaceholderContent';
import Header from '~/components/header/Header.vue';
import DeploymentInfo from '~/components/DeploymentInfo.vue';
// import UnderConstructionMessage from '~/components/UnderConstructionMessage';

export default {
  components: {
    Header,
    DeploymentInfo,
    // UnderConstructionMessage,
    PlaceholderContent,
  },
  created() {
    this.isProduction = process.env.isProduction;
  },
};
</script>
