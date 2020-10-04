<template>
  <div
    class="bg-white w-full border-t border-gray p-6 flex justify-between mt-16"
  >
    <div>
      <router-link to="/" class="text-black">
        <i class="far fa-copyright"></i> Marc Peternell
      </router-link>
    </div>
    <div>
      <a
        href="https://linkedin.com/in/marcpeternell"
        class="ml-3 hover:bg-black hover:text-white rounded p-2"
        target="_blank"
      ><i class="fab fa-linkedin-in"></i
      ></a>
      <a
        href="https://www.instagram.com/its.cark/"
        class="ml-3 hover:bg-black hover:text-white rounded p-2"
        target="_blank"
      ><i class="fab fa-instagram"></i
      ></a>
      <a
        href="https://github.com/marcpeternell"
        class="ml-3 hover:bg-black hover:text-white rounded p-2"
        target="_blank"
      ><i class="fab fa-github"></i
      ></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style scoped>

</style>
