<template lang="pug">
div
  NuxtContent.prose.prose-sm(:document="page", class="dark:prose-dark")
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const slug = "index";
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page,
    };
  },
};
</script>
