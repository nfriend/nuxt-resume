<template>
  <h1>
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
