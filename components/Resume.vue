<template>
  <div class="paper-page">
    <Header />
    <UnderConstructionMessage />
    <LoremIpsum />
    <DeploymentInfo />
  </div>
</template>

<script>
import LoremIpsum from './LoremIpsum';
import Header from '~/components/Header.vue';
import DeploymentInfo from '~/components/DeploymentInfo.vue';
import UnderConstructionMessage from '~/components/UnderConstructionMessage';

export default {
  components: {
    Header,
    DeploymentInfo,
    UnderConstructionMessage,
    LoremIpsum,
  },
};
</script>
