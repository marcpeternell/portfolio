<template>
  <div class="portfolio">
    <h2 class="font-sans font-bold text-3xl lowercase">Recent projects</h2>

    <div
      class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6 ml-6 mr-6"
    >
      <project-card
        v-for="(item, index) in cards"
        :key="`card-${index}`"
        :title="item.title"
        :text="item.text"
        :tags="item.tags"
        :image="item.image"
        :url="item.link"
      ></project-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "projects",
      head() {
        return {
          title: 'Projects',
          meta: []
        }
      },
      data() {
        return {
          cards: [
            {
              title: "Bachelor thesis",
              text:
                "The aim of this thesis is to prove the possibility of reworking an existing website on condition that only the colors black and white have to be used. Without completely redesigning the website from scratch.",
              tags: ["ui/ux", "adobe xd", "colors"],
              image: {
                url: "portfolio/bachelor/bachelor",
                alt: "Amazon landingpage Black and White",
              },
            },
            {
              title: "Untold Tales",
              text:
                "An interactive game trailer. Implemented with Babylon.js and a focus on easy expansion or modification of the characters and their additional information.",
              tags: ["games", "js", "3D", "babylon.js"],
              image: {
                url: "portfolio/untoldTales/untold-tales_games",
                alt: "Chupacabra character with animation controls",
              },
              link: "https://untold-tales.games/",
            },
            {
              title: "Weinbau Reiter",
              text:
                "A company website for a local wine grower from Krems. Realized with Laravel as a student project.",
              tags: ["laravel"],
              image: {
                url: "portfolio/weinbauReiter/weinbau-reiter_at",
                alt: "Weinbau Reiter Startseite",
              },
              link: "https://weinbau-reiter.at/",
            },
            {
              title: "Flat42 - Diploma graduation project",
              text:
                "A SPA to organize shared apartments. Cleaning plans can be made, a shopping list can be kept, news can be shared or common events can be planned.",
              tags: ["laravel", "vuejs", "pwa"],
              image: {
                url: "portfolio/flat42/flat42",
                alt: "Flat42 Landing Page",
              },
              link: "https://github.com/marcpeternell/flat42",
            },
          ],
        };
      },

    }
</script>

<style scoped>

</style>
