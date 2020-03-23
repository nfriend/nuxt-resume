<template>
  <p
    class="ie-9-up bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
    aria-hidden="true"
  >
    <strong class="font-bold">You are using an outdated browser!</strong>
    <span>
      Please visit this site using
      <a href="https://browsehappy.com/">a modern browser</a>.
    </span>
  </p>
</template>

<style lang="postcss" scoped>
.ie-9-up {
  @apply hidden;
}

/*
 * Hack to only show message in IE 9 and above
 * https://stackoverflow.com/a/27315792/1063392
 */
@media screen and (min-width: 0\0) and (min-resolution: +72dpi) {
  .ie-9-up {
    @apply block;
  }
}
</style>
