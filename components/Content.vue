<template>
  <div class="flex mt-4 flex-col md:flex-row print:flex-row">
    <template v-for="(column, columnIndex) in resumeData.content.columns">
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
              <a
                v-if="isString(subsection.title.link)"
                :href="subsection.title.link"
              >
                {{ subsection.title.display }}
              </a>
              <span v-else>
                {{ subsection.title.display || subsection.title }}
              </span>
            </h3>
            <h4 v-if="subsection.subtitle" class="text-gray-700 mb-2">
              <template v-if="isString(subsection.subtitle)">
                {{ subsection.subtitle }}
              </template>
              <template v-else>
                {{
                  formatDate(
                    subsection.subtitle.startDate,
                    subsection.subtitle.dateFormat,
                  )
                }}
                –
                {{
                  formatDate(
                    subsection.subtitle.endDate,
                    subsection.subtitle.dateFormat,
                  )
                }}
                |
                {{ subsection.subtitle.description }}
              </template>
            </h4>
            <div
              v-if="subsection.description"
              class="mb-2"
              v-html="showdown(subsection.description)"
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
                :link="isString(tag.link) ? tag.link : undefined"
              >
                {{ tag.display || tag }}
              </Tag>
            </section>
          </section>
        </section>
      </div>

      <!-- Column spacer -->
      <div
        v-if="columnIndex !== resumeData.content.columns.length - 1"
        class="flex-shrink w-8"
      ></div>
    </template>
  </div>
</template>

<script>
import moment from 'moment';
import { isString } from 'lodash';
import { Converter as ShowdownConverter } from 'showdown';
import Tag from './Tag';
import Icon from './utility/Icon';

const showdown = new ShowdownConverter();

export default {
  components: { Tag, Icon },
  methods: {
    isString,
    formatDate(dateString, format = 'MMM YYYY') {
      if (!dateString) {
        return 'Present';
      }

      return moment(dateString).format(format);
    },
    showdown(markdown) {
      return showdown.makeHtml(markdown);
    },
  },
};
</script>
