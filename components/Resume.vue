<template>
  <div
    class="paper-page
           flex flex-col
           w-full paper:w-paper print:w-print
           h-auto paper:h-paper print:h-paper
           mx-auto my-0 paper:my-20 print:my-0
           p-4 sm:p-10 paper:p-20 print:p-20
           text-xl md:text-base
           shadow-none paper:shadow-2xl print: shadow-none
           bg-ivory print:bg-transparent
           transform xl:scale-120 2xl:scale-10 3xl:scale-160 origin-top"
  >
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
