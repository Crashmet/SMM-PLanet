<template>
  <div class="register-page">
    <Header />
    <main>
      <Register />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Register from "@/components/section/Register.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "RegisterPage",

  middleware: ["searchRequestReset", "authDone"],

  components: {
    Header,
    Search,
    Register,
    Statistics,
    Footer,
  },
};
</script>
