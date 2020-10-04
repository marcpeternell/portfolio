import Vue from "vue";
import VueLazyload from "vue-lazyload";

import error from "../assets/images/error.png";
import loading from "../assets/images/loading.gif";

Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
});
