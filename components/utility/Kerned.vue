<template>
  <span>
    <span
      v-for="(letter, index) in lettersArray"
      :key="index"
      :style="{ letterSpacing: letter.letterSpacing }"
      >{{ letter.character }}</span
    >
  </span>
</template>

<script>
import { isObject, isString, isArray } from 'lodash';

const stringToLettersArray = str =>
  [...str].map(c => ({ character: c, letterSpacing: '' }));

export default {
  props: {
    letters: {
      type: [String, Array, Object],
      required: true,
    },
  },
  computed: {
    lettersArray() {
      if (isString(this.letters)) {
        return stringToLettersArray(this.letters);
      }

      if (isArray(this.letters)) {
        return this.letters.reduce((accumulator, current) => {
          if (isObject(current)) {
            return accumulator.concat(current);
          }

          if (isString(current)) {
            return accumulator.concat(stringToLettersArray(current));
          }

          return accumulator;
        }, []);
      }

      if (isObject(this.letters)) {
        return [this.letters];
      }

      return [];
    },
  },
};
</script>
