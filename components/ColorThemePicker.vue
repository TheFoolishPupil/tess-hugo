<template lang="pug">
button(@click="changeColorMode")
  IconsColorTheme(:mode="buttonLabel")
</template>

<script>
export default {
  computed: {
    buttonLabel() {
      return this.$colorMode.preference;
    },
  },
  methods: {
    changeColorMode() {
      if (this.$colorMode.preference === "system")
        this.$colorMode.preference = "light";
      else if (this.$colorMode.preference === "light")
        this.$colorMode.preference = "dark";
      else if (this.$colorMode.preference === "dark")
        this.$colorMode.preference = "system";
    },
  },
};
</script>
