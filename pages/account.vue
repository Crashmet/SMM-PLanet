<template>
  <div class="account-page">
    <Header />
    <main>
      <Search />

      <section class="account">
        <div class="account__container container">
          <div class="account__main">
            <status-massage-modal v-if="isOpenModal" />
            <profile-menu />
            <nuxt-child />
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

import ProfileMenu from "@/components/AccountSection/ProfileMenu.vue";
import statusMassageModal from "~/components/modal/statusMassageModal.vue";

export default {
  name: "AccountPage",

  middleware: ["searchRequestReset", "authGuard"],

  components: {
    Header,
    Search,
    Statistics,
    Footer,
    ProfileMenu,
    statusMassageModal,
  },

  mounted() {
    const pageActive = this.users.find((el) => el.isActive === true);

    if (pageActive) {
      this.$router.push(pageActive.routerName);
    } else {
      this.$router.push({ path: "/" });
    }
  },

  computed: {
    ...mapGetters({
      users: "profileMenuStore/users",
      isOpenModal: "statusMassageModalStore/isOpenModal",
      status: "statusMassageModalStore/status",
    }),
  },

  methods: {
    ...mapActions({
      changeMessageModalStatus:
        "statusMassageModalStore/changeMessageModalStatus",
      addStatus: "advertiserOrdersStore/addStatus",
    }),
  },

  watch: {
    isOpenModal() {
      if (this.isOpenModal) {
        setTimeout(() => this.changeMessageModalStatus(false), 3500);
      }
    },

    status() {
      setTimeout(() => this.changeMessageModalStatus(true), 1000);
    },
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.account {
  margin-top: 4.1111rem;
  margin-bottom: 5.5556rem;
}

.account__container {
  padding: 0 48.9996px;
}

.account__main {
  position: relative;
  overflow-x: auto;
  max-width: 61.2222rem;
  width: 100%;
  padding: 2.2222rem 2.1111rem;
  background: rgba(255, 119, 0, 0.15);
  -webkit-box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

@media (max-width: 480px) {
  .account {
    margin-bottom: 60px;
  }

  .account__main {
    padding: 27px 10px 15px;
  }

  .account__container {
    padding: 0;
  }
}

@media (max-width: 320px) {
}
</style>
