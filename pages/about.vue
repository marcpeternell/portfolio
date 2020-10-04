<template>
  <div class="about">
    <div>
      <h2 class="font-sans font-bold text-3xl lowercase">About me</h2>
    </div>
    <div
      class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
      <timeline-wrapper
        class="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3"
        timeline-title-prop="Work"
        timeline-icon-prop="fas fa-code"
        :timeline-items-prop="this.timelineItemsTextWork"
      ></timeline-wrapper>
      <timeline-wrapper
        class="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3"
        timeline-title-prop="Education"
        timeline-icon-prop="fas fa-book-open"
        :timeline-items-prop="this.timelineItemsTextEdu"
      ></timeline-wrapper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about",
    head() {
      return {
        title: 'About',
        meta: []
      }
    },

    data() {
      return {
        timelineItemsTextWork: [
          {
            title: "Full Stack Developer",
            description: "Frontend and Backend Developer.",
            institute: "IWAVES Medientechnik",
            time: "09/2020 - now",
          },
          {
            title: "Head Instructor of Web Development",
            description:
              "Responsible for the organization of the department, as well as the education and training of students.",
            institute: "SAE Institut Wien",
            time: "03/2020 - 07/2020",
          },
          {
            title: "Apple Solution Consultant",
            description:
              "Apple Shop Manager in a branch of Media - Saturn Beteiligungs GmbH.",
            institute: "Apple GmbH",
            time: "06/2016 - 03/2020",
          },
          {
            title: "Computer consultant ",
            description:
              "Offer customers the best possible technical solution through a needs analysis.",
            institute: "Media - Saturn Beteiligungs GmbH",
            time: "06/2015 - 06/2016",
          },
        ],
        timelineItemsTextEdu: [
          {
            title: "Bachelor of Arts - Web Design & Development",
            description:
              "Focus on scientific work, but also in the field of web animation.",
            institute: "SAE - Institute",
            time: "03/2019 - 08/2020",
          },
          {
            title: "Diploma Degree in Web Design and Development",
            description:
              "Getting to know fundamental knowledge in frontend and backend.",
            institute: "SAE - Institute",
            time: "03/2017 - 03/2018",
          },
          {
            title: "Matura and an apprenticeship as a mechatronics technician ",
            description:
              "Compulsory school and Matura and besides an apprenticeship as a mechatronics engineer.",
            institute: "Werkshulheim Felbertal",
            time: "09/2005 - 06/2014",
          },
        ],
      };
    },

  }
</script>

<style scoped>

</style>
