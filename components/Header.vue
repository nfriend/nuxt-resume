<template>
  <h1 class="font-light text-teal-800">
    <span
      v-for="(letter, index) in titleLetters"
      :key="index"
      :style="{ letterSpacing: letter.letterSpacing }"
      >{{ letter.character }}</span
    >
  </h1>
</template>

<script>
import { isObject, isString } from 'lodash';
import { resumeData } from '../resume-data';

export default {
  computed: {
    titleLetters() {
      return resumeData.titleLetters.reduce((accumulator, current) => {
        if (isObject(current)) {
          accumulator.push(current);
        } else if (isString(current)) {
          for (const c of current) {
            accumulator.push({
              character: c,
              letterSpacing: '',
            });
          }
        }

        return accumulator;
      }, []);
    },
  },
};
</script>
<style lang="css" scoped>
h1 {
  font-size: 100px;
}
</style>
