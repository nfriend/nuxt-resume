<template>
  <header>
    <h1 class="flex-grow flex-shrink-0">
      <Kerned :letters="title" />
    </h1>
    <section class="flex-shink-0">
      <ContactInfo />
    </section>
  </header>
</template>

<script>
import Kerned from '../utility/Kerned';
import ContactInfo from './ContactInfo';
import { resumeData } from '~/resume-data';

export default {
  components: { Kerned, ContactInfo },
  computed: {
    title() {
      return resumeData.title;
    },
  },
};
</script>
