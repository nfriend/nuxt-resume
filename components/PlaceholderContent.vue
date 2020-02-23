<template>
  <div class="flex mt-4 text-justify">
    <div class="flex-1 mr-4">
      <h2 class="font-bold uppercase text-gray-700 text-sm mb-4">Experience</h2>

      <h3 class="font-bold text-lg">GitLab</h3>
      <h4 class="text-gray-700 mb-2">
        Dec 2018 – Present | Senior Frontend Engineer
      </h4>
      <p class="mb-2">
        Built doner pork chop • Served salmon, cream soft cheese, and brisket •
        Acted 55% pork chop • Filled burgdoggen & frankfurter strip steak with
        90% burger patties and broth
      </p>
      <section class="tags-container flex mb-4">
        <Tag link="https://vuejs.org/">Vue.js</Tag>
        <Tag link="https://vuejs.org/">JavaScript</Tag>
        <Tag link="https://sass-lang.com/">SCSS</Tag>
        <Tag link="https://vuejs.org/">Ruby</Tag>
      </section>

      <h3 class="font-bold text-lg">DeltaWare</h3>
      <h4 class="text-gray-700 mb-2">
        Aug 2016 – Dec 2018 | Project Architect
      </h4>
      <p class="mb-4">
        Built doner pork chop • Served salmon, cream soft cheese, and brisket •
        Acted 55% pork chop • Filled burgdoggen & frankfurter strip steak with
        90% burger patties and broth
      </p>

      <h3 class="font-bold text-lg">DuPont Pioneer</h3>
      <h4 class="text-gray-700 mb-2">
        Dec 2018 – Present | Senior Frontend Engineer
      </h4>
      <p class="mb-4">
        Built doner pork chop • Served salmon, cream soft cheese, and brisket •
        Acted 55% pork chop • Filled burgdoggen & frankfurter strip steak with
        90% burger patties and broth
      </p>
    </div>
    <div class="flex-1 ml-4">
      <h2 class="font-bold uppercase text-gray-700 text-sm mb-4">Education</h2>

      <h3 class="font-bold text-lg">Iowa State University</h3>
      <h4 class="text-gray-700 mb-2">
        2016 – 2019 | Master's in Human-Computer Interaction
      </h4>
      <p class="mb-4">
        Built doner pork chop • Served salmon, cream soft cheese, and brisket •
        Acted 55% pork chop • Filled burgdoggen & frankfurter strip steak with
        90% burger patties and broth
      </p>

      <h3 class="font-bold text-lg">Dordt University</h3>
      <h4 class="text-gray-700 mb-2">
        2009 – 2013 | Bachelor's in Computer Science
      </h4>
      <p class="mb-4">
        Built doner pork chop • Served salmon, cream soft cheese, and brisket •
        Acted 55% pork chop • Filled burgdoggen & frankfurter strip steak with
        90% burger patties and broth
      </p>
    </div>
  </div>
</template>

<script>
import Tag from './Tag';
export default {
  components: { Tag },
};
</script>
