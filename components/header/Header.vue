<template>
  <header>
    <div class="flex items-stretch sm:items-start flex-col sm:flex-row">
      <h1 class="flex-grow flex-shrink-0 text-center sm:text-left">
        <Kerned :letters="resumeData.title" />
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

export default {
  components: { Kerned, ContactInfo, PdfLink },
};
</script>
