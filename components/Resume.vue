<template>
  <div
    class="flex flex-col items-stretch
           mx-auto
           w-full paper:w-paper print:w-print
           transform xl:scale-120 2xl:scale-10 3xl:scale-160 origin-top"
  >
    <div
      class="paper-page
           flex flex-col
           h-auto paper:h-paper print:h-paper
           my-0 paper:my-20 print:my-0
           p-4 sm:p-10 paper:p-20 print:p-20
           text-xl md:text-base
           shadow-none paper:shadow-2xl print:shadow-none
           bg-ivory print:bg-transparent"
    >
      <Header />
      <!-- <UnderConstructionMessage v-if="isProduction" /> -->
      <PlaceholderContent class="flex-grow" />
    </div>
    <DeploymentInfo class="self-center mb-10" />
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
