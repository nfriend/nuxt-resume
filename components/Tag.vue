<template>
  <a
    v-if="link"
    :href="link"
    class="tag hover:bg-gray-400 hover:text-gray-800 active:bg-gray-500 active:text-gray-900"
  >
    <slot></slot>
  </a>
  <span v-else class="tag">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
a,
span {
  @apply text-gray-700 bg-gray-300 text-sm px-2 py-1 mr-1 mb-1;
}
</style>
