<template>
  <div
    class="page font-serif flex flex-col p-20 my-20 print:my-0 mx-auto shadow-2xl print:shadow-none bg-ivory print:bg-transparent"
  >
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
