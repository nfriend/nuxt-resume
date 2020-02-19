<template>
  <h1 class="font-light text-teal-800 tracking-tighter">
    <Kerned :letters="title" />
  </h1>
</template>

<script>
import { resumeData } from '../resume-data';
import Kerned from './Kerned';

export default {
  components: { Kerned },
  computed: {
    title() {
      return resumeData.title;
    },
  },
};
</script>
<style lang="css" scoped>
h1 {
  font-size: 100px;
}
</style>
