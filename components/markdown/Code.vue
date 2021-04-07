<template lang="pug">
code {{ code }}
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
code {
  display: table-cell;
  word-break: break-all;
  white-space: normal;
}
</style>