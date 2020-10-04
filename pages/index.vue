<template>
  <div class="">
    <div class="home w-full">
      <h2 class="font-sans font-bold text-3xl lowercase">Hi there</h2>
    </div>
    <div class="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 sm:mt-20">
      <div class="relative sm:col-span-1 self-center">
        <picture>
          <img
            class="rounded-full w-2/3 mx-auto"
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcset="
              /images/portrait/portrait_w_655.png   655w,
              /images/portrait/portrait_w_792.png   792w,
              /images/portrait/portrait_w_1022.png 1022w,
              /images/portrait/portrait_w_1213.png 1213w,
              /images/portrait/portrait_w_1301.png 1301w
            "
            src="/images/portrait/portrait_w_1400.png"
            alt="Portrait of Marc Peternell"
          />
        </picture>
        <div class="absolute animate__animated" id="thats_me-wrapper">
          <p id="thats_me" class="animate__animated animate__shakeX">
            <i class="fas fa-arrow-left"></i> That's me
          </p>
        </div>
      </div>
      <div class="text-2xl sm:col-span-1 self-center">
        <div class="flex p-0 mb-3">
          <p class="text-white bg-black p-3">Hi</p>
          <p class="p-3">I am Marc Peternell,</p>
        </div>
        <p class="mb-3">{{ getAge }} years old!</p>
        <p class="mb-3">
          Full Stack Developer
          <a
            href="https://www.iwavesmedia.com/de/home"
            target="_blank"
            class="text-blue-500 hover:text-blue-700 hover:underline"
          >@iwavesmedia</a
          >
        </p>
        <p>
          contact me on
          <a
            class="text-blue-500 hover:text-blue-700 hover:underline"
            href="https://linkedin.com/in/marcpeternell"
            target="_blank"
          >@LinkedIn</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Home',
        meta: []
      }
    },
    mounted() {
      setTimeout(function () {
        document
          .getElementById("thats_me-wrapper")
          .classList.add("animate__fadeOut");
      }, 4000);
    },
    computed: {
      getAge: () => {
        const today = new Date();
        const birthDate = new Date("1995/02/01");
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      },
    },
  }
</script>

<style scoped>
  .animate__animated.animate__shakeX {
    --animate-duration: 5s;
  }

  #thats_me-wrapper {
    top: 0;
    right: 0;
    transform: rotate(-45deg);
    transform-origin: 20% 40%;
  }
</style>
