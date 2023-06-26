<template>
  <div class="admin-page">
    <Header />
    <main>
      <Admin />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Admin from "@/components/section/Admin.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AdminPage",

  middleware: ["searchRequestReset"],

  components: {
    Header,
    Search,
    Admin,
    Statistics,
    Footer,
  },
};
</script>
