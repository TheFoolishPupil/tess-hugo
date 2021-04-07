<template lang="pug">
div
  iframe.rounded-xl(:src="src", allowfullscreen)
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
  padding-top: 56.25%;
}
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
