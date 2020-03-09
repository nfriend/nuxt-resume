<template>
  <address
    class="flex
           flex-wrap lg:flex-no-wrap
           flex-col sm:flex-row
           sm:justify-start lg:justify-between print:justify-between
           text-2xl sm:text-base
           pb-4
           not-italic"
  >
    <template v-for="(item, index) in contactInfo">
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
        v-if="index !== contactInfo.length - 1"
        class="text-gray-600 mx-4 hidden lg:inline print:inline"
      >
        /
      </span>
    </template>
  </address>
</template>

<script>
import Icon from '../utility/Icon';
import * as utils from './contact-info-util';

export default {
  components: { Icon },
  computed: {
    // Build an opinionated list of contact info.
    // Note: not all contact info listed in the resume
    // data are displayed, and the order of the data
    // in the file is ignored.
    contactInfo() {
      const info = [
        utils.getEmailInfo(this.resumeData),
        utils.getLocationInfo(this.resumeData),
      ];

      // If we don't have phone information, add LinkedIn info instead. This is
      // because the contact section looks too empty with less than 5 items.
      // (This is rather specific to my personal resume.json.)
      const phoneInfo = utils.getPhoneInfo(this.resumeData);
      const linkedInInfo = utils.getLinkedInInfo(this.resumeData);
      if (phoneInfo) {
        info.push(phoneInfo);
      } else if (linkedInInfo) {
        info.push(linkedInInfo);
      }

      info.push(utils.getWebsiteInfo(this.resumeData));

      const gitLabPlusGitHubInfo = utils.getGitLabPlusGitHubInfo(
        this.resumeData,
      );

      // if the user has listed both GitLab and GitHub info,
      // and the usernames are the same, display these
      // as a single "gitlab+github" item. Otherwise, display
      // them separately.
      if (gitLabPlusGitHubInfo) {
        info.push(gitLabPlusGitHubInfo);
      } else {
        info.push(
          utils.getGitLabInfo(this.resumeData),
          utils.getGitHubInfo(this.resumeData),
        );
      }

      // Remove any of the items above that
      // weren't found in the resume data
      return info.filter(i => i);
    },
  },
};
</script>
