<template>
  <h1 class="font-light text-teal-800 tracking-tighter">{{ title }}</h1>
</template>

<script>
import { resumeData } from '../resume-data';

export default {
  computed: {
    title() {
      return resumeData.title;
    },
  },
};
</script>
<style lang="css" scoped>
h1 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
}
</style>
