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
           text-xl md:text-base print:text-base
           shadow-none paper:shadow-2xl print:shadow-none
           bg-ivory print:bg-transparent"
    >
      <Header />
      <Content class="flex-grow" />
    </div>
    <DeploymentInfo class="mb-10" />
  </div>
</template>

<script>
import Content from './Content';
import Header from '~/components/header/Header.vue';
import DeploymentInfo from '~/components/DeploymentInfo.vue';

export default {
  components: {
    Header,
    DeploymentInfo,
    Content,
  },
  created() {
    this.isProduction = process.env.isProduction;
  },
};
</script>
