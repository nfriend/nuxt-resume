<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="postcss">
html,
body {
  @apply bg-gray-200
         font-serif
         box-border
         antialiased;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

@page {
  margin: 0;
}

@media print {
  html,
  body {
    @apply bg-transparent;
  }
}
</style>
