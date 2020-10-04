<template>
  <div class="mb-10">
    <timeline>
      <timeline-title
        timeline-theme="black"
        icon-size="large"
        class="flex items-center"
      >
        <i :class="this.timelineIconText" slot="others"></i>
        <h3 class="font-black text-xl">{{ this.timelineTitleText }}</h3>
      </timeline-title>
      <timeline-item
        bg-color="black"
        v-for="item in this.timelineItemsText"
        v-bind:key="item.id"
      >
        <timeline-card>
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:description>{{ item.description }}</template>
          <template v-slot:institute>{{ item.institute }}</template>
          <template v-slot:time>{{ item.time }}</template>
        </timeline-card>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
  export default {
    name: "TimelineWrapper",

    props: {
      timelineTitleProp: String,
      timelineIconProp: String,
      timelineItemsProp: Array,
    },

    data() {
      return {
        timelineTitleText: this.timelineTitleProp,
        timelineIconText: this.timelineIconProp,
        timelineItemsText: this.timelineItemsProp,
      };
    },
  };
</script>
