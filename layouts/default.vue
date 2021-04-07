<template lang="pug">
div
  Navbar
  .flex.min-h-screen.justify-center.pt-0.pb-20(
    class="md:pt-20 md:pb-0 dark:bg-gray-800"
  )
    Nuxt.p-4
</template>

<style>
html {
  font-family: "Inter", sans-serif;
  scroll-behavior: smooth;
}

:target:before {
  content: "";
  display: block;
  margin-top: -90px;
  height: 80px;
  visibility: hidden;
  pointer-events: none;
}

html.dark body {
  background-color: #1f2937;
}

a {
  text-decoration: none !important;
}

code {
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
  overflow: scroll;

  /* word-break: break-all; */
  background-color: theme("colors.gray.200");
}

html.dark code {
  text-overflow: scroll;
  background-color: theme("colors.gray.700");
}
</style>
