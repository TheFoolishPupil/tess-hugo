<template lang="pug">
div
  Navbar
  .min-h-screen.justify-center.pt-0.pb-20(class="md:pt-20 md:pb-0 dark:bg-gray-800")
    Nuxt.p-4
</template>

<style>
@font-face {
  font-family: "Iosevka";
  src: local("Iosevka"),
    url(~assets/isoveka/iosevka-regular.ttf) format("truetype");
}

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
</style>
