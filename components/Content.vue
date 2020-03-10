<template>
  <div class="flex mt-4 flex-col md:flex-row print:flex-row">
    <template v-for="(column, columnIndex) in columns">
      <div class="flex-1">
        <section
          v-for="(section, sectionIndex) in column.sections"
          :key="sectionIndex"
        >
          <h2 class="font-bold uppercase text-gray-700 text-sm mb-4">
            {{ section.title }}
          </h2>

          <section v-for="subsection in section.subsections" class="mb-6">
            <h3 v-if="subsection.title" class="font-bold text-lg">
              <a v-if="subsection.website" :href="subsection.website">
                {{ subsection.title }}
              </a>
              <span v-else>
                {{ subsection.title }}
              </span>
            </h3>
            <h4 v-if="subsection.subtitle" class="text-gray-700 mb-2">
              {{ subsection.subtitle }}
            </h4>
            <div
              v-if="subsection.summary"
              class="mb-2"
              v-html="showdown(subsection.summary)"
            ></div>
            <ul v-if="subsection.highlights && subsection.highlights.length">
              <li
                v-for="(highlight, highlightIndex) in subsection.highlights"
                :key="highlightIndex"
                class="flex ml-2 mb-1"
              >
                <Icon
                  type="check"
                  class="mr-1 mt-1 text-gray-600 flex-shrink-0"
                />
                <div v-html="showdown(highlight)"></div>
              </li>
            </ul>
            <section
              v-if="subsection.tags && subsection.tags.length"
              class="flex flex-wrap mb-4 justify-start mt-2"
            >
              <Tag
                v-for="(tag, tagIndex) in subsection.tags"
                :key="tagIndex"
                :website="tag.website"
              >
                {{ tag.display || tag }}
              </Tag>
            </section>
          </section>
        </section>
      </div>

      <!-- Column spacer -->
      <div
        v-if="columnIndex !== columns.length - 1"
        class="flex-shrink w-8"
      ></div>
    </template>
  </div>
</template>

<script>
import { isString } from 'lodash';
import { Converter as ShowdownConverter } from 'showdown';
import Tag from './Tag';
import Icon from './utility/Icon';
import * as helpers from './content-helper';

const showdown = new ShowdownConverter();

export default {
  components: { Tag, Icon },
  computed: {
    columns() {
      return [
        // column 1 contains work info
        {
          sections: [
            {
              title: 'Experience',
              subsections: helpers.getProfessionalWorkInfo(this.resumeData),
            },
          ],
        },

        // column 2 contains education, skills,
        // and part-time/internship info
        {
          sections: [
            {
              title: 'Education',
              subsections: helpers.getEducationInfo(this.resumeData),
            },
            {
              title: 'Skills',
              subsections: helpers.getSkillsInfo(this.resumeData),
            },
            {
              title: 'Internships/Part-time',
              subsections: helpers.getOtherWorkInfo(this.resumeData),
            },
          ],
        },
      ];
    },
  },
  methods: {
    isString,

    showdown(markdown) {
      return showdown.makeHtml(markdown);
    },
  },
};
</script>
