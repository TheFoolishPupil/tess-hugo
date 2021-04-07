<template lang="pug">
.scroll-shadow(class="dark:text-gray-200")
  nav.fixed.z-20.w-full.bg-gray-100.safari_only.h-16.top-0.items-center.hidden(
    class="md:flex dark:bg-gray-900",
    :class="scrolledTop ? 'scroll-shadow' : ''"
  )
    .flex-1.flex.items-center.justify-between.max-w-6xl.mx-auto
      .flex.items-center
        IconsLogo.h-7.w-7.ml-4.ml-4.mr-1
        .text-lg.font-bold.pl-1.mt-1
          IconsRestore
      .flex
        ColorThemePicker.h-6.w-6.mr-4
  nav.fixed.z-20.flex.w-full.bg-gray-100.safari_only.h-16.bottom-0.items-center.flex(
    class="md:hidden dark:bg-gray-900",
    :class="scrolledBottom ? 'scroll-shadow' : ''"
  )
    .flex-1.flex.items-center.justify-between.max-w-6xl.mx-auto
      .flex.items-center
        IconsLogo.h-7.w-7.ml-4.ml-4.mr-1
        .text-lg.font-bold.pl-1.mt-1
          IconsRestoreSmall
      .flex.items-center
        ColorThemePicker.h-6.w-6.mr-4
</template>

<script>
export default {
  computed: {
    colorMode() {
      return this.$colorMode.preference;
    },
  },
  data() {
    return {
      scrolledTop: false,
      scrolledBottom: false,
    };
  },
  methods: {
    handleScroll() {
      this.scrolledTop = window.scrollY > 0;
      this.scrolledBottom =
        document.body.clientHeight - window.innerHeight - window.scrollY - 2 >
        0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.scroll-shadow {
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
}

/* Only applies to both macOS safari and iOS safari */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .safari_only {
      backdrop-filter: blur(10px);

      --tw-bg-opacity: 0.4;

      touch-action: none;
    }
  }
}
</style>
