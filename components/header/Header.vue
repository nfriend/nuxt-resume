<template>
  <header class="flex flex-col">
    <div class="flex items-stretch sm:items-start flex-col-reverse sm:flex-row">
      <h1 class="flex-grow flex-shrink-0 text-center sm:text-left">
        <Kerned
          :letters="resumeData.basics.name_kerned || resumeData.basics.name"
        />
      </h1>
      <PdfLink />
    </div>
    <section class="self-center -mr-16 sm:self-stretch sm:mr-0">
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
