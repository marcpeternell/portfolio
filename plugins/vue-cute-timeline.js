import Vue from 'vue'
import {Timeline, TimelineItem, TimelineTitle} from "vue-cute-timeline";

const components = {Timeline, TimelineItem, TimelineTitle};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
