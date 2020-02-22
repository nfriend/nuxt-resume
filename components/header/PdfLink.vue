<template>
  <a
    class="btn flex items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-600 hover:text-gray-700 active:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    href="/Nathan Friend - Résumé.pdf"
  >
    <Icon type="pdf" class="mr-1" />
    View as PDF
  </a>
</template>

<script>
import Icon from '~/components/utility/Icon';

export default {
  components: { Icon },
};
</script>
