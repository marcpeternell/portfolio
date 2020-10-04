<template>
  <div
    class="rounded overflow-hidden shadow-lg mt-10 md:col-span-2 lg:col-span-3 hover:shadow-2xl hover:cursor-pointer"
    @click="openUrl(url)"
  >
    <img v-lazy="this.getImageSrc" :data-srcset="this.getImageSrcSet" />

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ text }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2" v-if="tags !== undefined">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        v-for="(item, index) in tags"
        :key="`tag-${index}`"
      >#{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProjectCard",
    props: {
      image: {},
      title: String,
      text: String,
      tags: Array,
      url: String,
    },
    methods: {
      openUrl(url) {
        if (url) {
          window.open(url);
        }
      },
    },
    computed: {
      getImageSrcSet() {
        const baseName = this.image.url;
        return'/images/' + baseName + '_600.png 600w, /images/'+ baseName + '_800.png 800w, /images/' + baseName + '_1000.png 1000w, /images/' + baseName + '_1200.png 1200w, /images/' + baseName + '_1400.png 1400w';
      },
      getImageSrc() {
        return '/images/' + this.image.url + '_1400.png';
      },
    },
  };
</script>
