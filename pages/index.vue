<template>
  <div class="home-page">
    <!-- <Header /> -->

    <main>
      <Search />
      <About />
      <Statistics />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import About from "@/components/section/About.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomePage",

  middleware: ["searchRequestReset", "authDone"],

  components: {
    Header,
    Search,
    About,
    Statistics,
    Footer,
  },
};
</script>

<style scoped>
.home-page {
  overflow: hidden;
}
</style>
