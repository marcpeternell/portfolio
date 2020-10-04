<template>
  <div id="page-container">
    <div class="content-wrap">
      <the-navbar></the-navbar>
      <Nuxt class="pt-32 mx-8"/>
    </div>
    <the-footer id="footer"></the-footer>
  </div>
</template>

<script>
  import TheNavbar from "~/components/TheNavbar";
  import TheFooter from "~/components/TheFooter";
  export default {
    components: {
      TheNavbar,
      TheFooter
    }
  }
</script>

<style scoped>

  #page-container {
    position: relative;
    min-height: 99vh;
  }

  #content-wrap {
    padding-bottom: 2.5rem;    /* Footer height */
  }

  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;            /* Footer height */
  }

</style>
