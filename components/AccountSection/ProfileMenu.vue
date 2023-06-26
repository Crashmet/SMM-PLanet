<template>
  <div class="profile-menu">
    <div class="profile-menu__block" v-if="users[0].isActive">
      <h3 class="profile-menu__title">Blogger Custom Menu</h3>

      <nav class="profile-menu__row">
        <button
          class="profile-menu__btn"
          v-for="setting in bloggerMenu"
          :key="setting.name"
          @click="handlerClickBloggerMenu(setting.name, setting.routerName)"
        >
          <p
            class="profile-menu__text"
            :class="setting.isActive ? 'profile-menu__text_active' : ''"
          >
            {{ setting.name }}
          </p>
        </button>
      </nav>
    </div>

    <div class="profile-menu__block" v-else>
      <h3 class="profile-menu__title">Advertiser Custom Menu</h3>

      <nav class="profile-menu__row">
        <button
          class="profile-menu__btn"
          v-for="setting in advertiserMenu"
          :key="setting.name"
          @click="handlerClickAdvertiserMenu(setting.name, setting.routerName)"
        >
          <p
            class="profile-menu__text"
            :class="setting.isActive ? 'profile-menu__text_active' : ''"
          >
            {{ setting.name }}
          </p>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileMenu",

  data() {
    return {};
  },

  mounted() {
    this.setUserStatus(this.role);
  },

  computed: {
    ...mapGetters({
      role: "role",
      users: "profileMenuStore/users",
      bloggerMenu: "profileMenuStore/bloggerMenu",
      advertiserMenu: "profileMenuStore/advertiserMenu",
    }),
  },

  methods: {
    ...mapActions({
      setUserStatus: "profileMenuStore/setUserStatus",
      setBloggerMenuStatus: "profileMenuStore/setBloggerMenuStatus",
      setBloggerMenuRouter: "profileMenuStore/setBloggerMenuRouter",
      setAdvertiserMenuStatus: "profileMenuStore/setAdvertiserMenuStatus",
      setAdvertiserMenuRouter: "profileMenuStore/setAdvertiserMenuRouter",
    }),

    handlerClickBloggerMenu(name, routerName) {
      this.setBloggerMenuStatus(name);
      this.setBloggerMenuRouter(routerName);
      this.$router.push(routerName);
    },

    handlerClickAdvertiserMenu(name, routerName) {
      this.setAdvertiserMenuStatus(name);
      this.setAdvertiserMenuRouter(routerName);
      this.$router.push(routerName);
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

.profile-menu__block {
  margin-bottom: 1.6667rem;
}

.profile-menu__title {
  margin-bottom: 30px;
  color: var(--bs-secondary);
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  font-weight: 600;
}

.profile-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.9444rem;
}

.profile-menu__btn {
  margin-bottom: 0.5556rem;
  background-color: var(--bs-secondary);
  padding: 5px 18px;
  border-radius: 20px;

  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.profile-menu__btn:not(:last-child) {
  margin-right: 2.8571rem;
}

.profile-menu__btn:hover,
.profile-menu__btn:active {
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.profile-menu__text {
  color: #fff;
}

.profile-menu__btn:hover > .profile-menu__text {
  color: var(--bs-orange);
  -webkit-transition: color 0.3s ease;
  -o-transition: color 0.3s ease;
  transition: color 0.3s ease;
}

.profile-menu__text_active {
  color: var(--bs-orange);
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  text-decoration-line: underline;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

@media (max-width: 700px) {
  .profile-menu__btn:not(:last-child) {
    margin-right: 30px;
  }
}

@media (max-width: 540px) {
  .profile-menu__btn {
    padding: 4px 10px;
  }

  .profile-menu__btn:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
