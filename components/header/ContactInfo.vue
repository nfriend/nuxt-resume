<template>
  <address
    class="flex flex-wrap flex-col sm:flex-row sm:justify-start lg:justify-between print:justify-between lg:flex-no-wrap text-2xl sm:text-base"
  >
    <template v-for="(item, index) in resumeData.contactInfo">
      <!-- Combined GitLab/GitHub info requires some special handling -->
      <span
        v-if="item.type === 'gitlab+github'"
        class="flex items-center whitespace-no-wrap mr-6 lg:mr-0 print:mr-0 mb-2 sm:mb-0"
      >
        <a :href="item.links.gitlab">
          <Icon type="gitlab" class="mr-1" />
        </a>
        <a :href="item.links.github">
          <Icon type="github" class="mr-1" />
        </a>
        <a :href="item.links.gitlab">
          {{ item.display }}
        </a>
      </span>

      <!-- All other contact info types -->
      <template v-else>
        <a
          class="flex items-center whitespace-no-wrap mr-6 lg:mr-0 print:mr-0 mb-2 sm:mb-0"
          :href="item.link"
        >
          <Icon :type="item.type" class="mr-1" />
          {{ item.display }}
        </a>
      </template>

      <!-- Don't append a separator to the last item  -->
      <span
        v-if="index !== resumeData.contactInfo.length - 1"
        class="text-gray-600 mx-4 hidden lg:inline print:inline"
      >
        /
      </span>
    </template>
  </address>
</template>

<script>
import Icon from '../utility/Icon';

export default {
  components: { Icon },
};
</script>
