<template>
  <div class="container min-h-screen flex flex-col mx-auto">
    <Header />
    <DeploymentInfo />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import DeploymentInfo from '~/components/DeploymentInfo.vue';

export default {
  components: {
    Header,
    DeploymentInfo,
  },
};
</script>
