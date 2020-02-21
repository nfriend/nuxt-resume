<template>
  <address class="flex justify-between">
    <template v-for="(item, index) in contactInfo">
      <!-- Combined GitLab/GitHub info requires some special handling -->
      <span v-if="item.type === 'gitlab+github'" class="flex items-center">
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
        <a class="contact-item" :href="item.link">
          <Icon :type="item.type" class="mr-1" />
          {{ item.display }}
        </a>
      </template>

      <!-- Don't append a separator to the last item  -->
      <span v-if="index !== contactInfo.length - 1" class="text-gray-600">
        /
      </span>
    </template>
  </address>
</template>

<script>
import Icon from '../utility/Icon';
import { resumeData } from '~/resume-data';

export default {
  components: { Icon },
  computed: {
    contactInfo() {
      return resumeData.contactInfo;
    },
  },
};
</script>

<style lang="postcss">
.contact-item {
  @apply flex items-center;
}
</style>
