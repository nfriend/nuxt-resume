<template>
  <header>
    <div class="flex items-stretch sm:items-start flex-col sm:flex-row">
      <h1 class="flex-grow flex-shrink-0">
        <Kerned :letters="title" />
      </h1>
      <PdfLink />
    </div>
    <section>
      <ContactInfo />
    </section>
  </header>
</template>

<script>
import Kerned from '../utility/Kerned';
import ContactInfo from './ContactInfo';
import PdfLink from './PdfLink';
import { resumeData } from '~/resume-data';

export default {
  components: { Kerned, ContactInfo, PdfLink },
  computed: {
    title() {
      return resumeData.title;
    },
  },
};
</script>
