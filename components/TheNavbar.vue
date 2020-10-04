<template>
  <div class="mt-0 fixed w-full z-10 top-0" id="navigation-wrapper">
    <nav
      class="flex items-center justify-between flex-wrap p-6 bg-white shadow "
      :class="{ 'shadow-2xl': !view.atTopOfPage }"
      id="nav"
    >
      <n-link
        to="/"
        class="flex items-center flex-shrink-0 mr-6 text-black"
      >
        <svg class="icon">
          <use xlink:href="@/assets/svg/sprite.svg#white-on-black-logo" />
        </svg>
      </n-link>
      <div class="block lg:hidden" @click="isOpen = !isOpen">
        <button
          class="hamburger hamburger--collapse px-3 py-2 focus:border-black text-black border-black hover:underline hover:border-black"
          type="button"
          :class="isOpen ? 'is-active' : ''"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div
        class="w-full block lg:flex lg:items-center lg:justify-end lg:w-auto"
        :class="isOpen ? 'block' : 'hidden'"
      >
        <div class="text-sm lg:flex-grow">
          <n-link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-8 text-base n-link lowercase"
          >Home
          </n-link
          >
          <n-link
            to="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-8 text-base n-link lowercase"
          >About
          </n-link
          >
          <n-link
            to="/projects"
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline text-base n-link lowercase"
          >Projects
          </n-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "TheNavbar",
    data() {
      return {
        isOpen: false,
        view: {
          atTopOfPage: true,
        },
      };
    },
    beforeMount() {
      window.addEventListener("scroll", this.handleScroll);
      const navigation = document.getElementById("navigation-wrapper");
    },

    methods: {
      // the function to call when the user scrolls, added as a method
      handleScroll() {
        // when the user scrolls, check the pageYOffset
        if (window.pageYOffset > 0) {
          // user is scrolled
          if (this.view.atTopOfPage) this.view.atTopOfPage = false;
        } else {
          // user is at top of page
          if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
        }
      },
    },

    watch: {
      // close responsive navigation after router change
      $route() {
        this.isOpen = false;
      },
    },
  }
</script>

<style scoped>

</style>
