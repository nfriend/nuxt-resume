<template>
  <div class="paper-page">
    <Header />
    <!-- <UnderConstructionMessage /> -->
    <!-- <LoremIpsum /> -->
    <PlaceholderContent />
    <!-- <DeploymentInfo /> -->
  </div>
</template>

<script>
// import LoremIpsum from './LoremIpsum';
import PlaceholderContent from './PlaceholderContent';
import Header from '~/components/header/Header.vue';
// import DeploymentInfo from '~/components/DeploymentInfo.vue';
// import UnderConstructionMessage from '~/components/UnderConstructionMessage';

export default {
  components: {
    Header,
    // DeploymentInfo,
    // UnderConstructionMessage,
    // LoremIpsum,
    PlaceholderContent,
  },
};
</script>
