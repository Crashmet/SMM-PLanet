<template>
  <div class="blogger-profile">
    <div
      class="blogger-profile__body body"
      v-if="!isOpenModalChangeData && !isOpenModalChangePassword"
    >
      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">E-mail</span>
        </li>

        <li class="body__cell">
          <p type="email" class="body__input">{{ bloggerData.email }}</p>
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Имя</span>
        </li>

        <li class="body__cell">
          <p type="text" class="body__input">{{ bloggerData.first_name }}</p>
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Фамилия</span>
        </li>

        <li class="body__cell">
          <p type="text" class="body__input">{{ bloggerData.last_name }}</p>
        </li>
      </ul>

      <ul class="body__row body__row_long">
        <li class="body__cell body__cell-label">
          <span class="body__label">Instagram</span>
        </li>

        <li class="body__cell">
          <ul class="body__cell-list">
            <li class="body__cell-item">
              <p type="text" class="body__input cell-item__input">nickname</p>
            </li>

            <!-- <li class="body__cell-item">
              <input
                type="text"
                placeholder="цена за пост"
                class="cell-item__input_price"
                disabled
              />
            </li>

            <li class="body__cell-item">
              <button class="cell-item__btn">
                Разрешить доступ к статистике
              </button>
            </li>

            <li class="body__cell-item body__cell-item__link">
              <a href="#" class="cell-item__link">
                Описать порядок работы api
              </a>
            </li> -->
          </ul>
        </li>
      </ul>

      <ul class="body__row body__row_long">
        <li class="body__cell body__cell-label">
          <span class="body__label">Tiktok</span>
        </li>

        <li class="body__cell">
          <ul class="body__cell-list">
            <li class="body__cell-item">
              <p type="text" class="body__input cell-item__input">nickname</p>
            </li>
            <!-- 
            <li class="body__cell-item">
              <input
                type="text"
                placeholder="цена за пост"
                class="cell-item__input_price"
                disabled
              />
            </li>

            <li class="body__cell-item">
              <button class="cell-item__btn">
                Разрешить доступ к статистике
              </button>
            </li>

            <li class="body__cell-item body__cell-item__link">
              <a href="#" class="cell-item__link">
                Описать порядок работы api
              </a>
            </li> -->
          </ul>
        </li>
      </ul>

      <nav class="body-change__row">
        <button class="body-change__btn" @click="changeDataModalStatus(true)">
          <span class="body-change__text">Изменить профиль</span>
        </button>

        <button
          class="body-change__btn"
          @click="changePasswordModalStatus(true)"
        >
          <span class="body-change__text">Изменить пароль</span>
        </button>
      </nav>
    </div>
    <change-blogger-profile-data v-else-if="isOpenModalChangeData" />
    <change-blogger-profile-password v-else-if="isOpenModalChangePassword" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import changeBloggerProfileData from "~/components/modal/changeBloggerProfileData.vue";
import changeBloggerProfilePassword from "~/components/modal/changeBloggerProfilePassword.vue";

export default {
  name: "BloggerProfile",

  components: { changeBloggerProfileData, changeBloggerProfilePassword },

  mounted() {
    this.addBloggerData();
  },

  computed: {
    ...mapGetters({
      bloggerData: "bloggerProfileStore/bloggerData",
      isOpenModalChangeData: "bloggerProfileStore/isOpenModalChangeData",
      isOpenModalChangePassword:
        "bloggerProfileStore/isOpenModalChangePassword",
    }),
  },

  methods: {
    ...mapActions({
      addBloggerData: "bloggerProfileStore/addBloggerData",
      changeDataModalStatus: "bloggerProfileStore/changeDataModalStatus",
      changePasswordModalStatus:
        "bloggerProfileStore/changePasswordModalStatus",
    }),
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
.blogger-profile {
  position: relative;
}

.body__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.body__row {
  margin-bottom: 0.8889rem;
}

.body__cell-label {
  max-width: 9.2222rem;
  width: 100%;
}

.body__label {
  color: var(--bs-gray-600);
}

.body__input {
  padding: 0.2778rem 0.6111rem;
  min-width: 8.3889rem;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1rem;
  text-align: center;
  color: var(--bs-gray-600);
  border: 1px solid var(--bs-secondary);
  border-radius: 10px;
  background-color: transparent;
}

.body__cell-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.body__cell-item:not(:last-child) {
  margin-right: 0.9rem;
}

.cell-item__input_price {
  max-width: 6.9444rem;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: var(--bs-gray-600);
  border: 1px solid var(--bs-secondary);
  border-radius: 10px;
  background-color: transparent;
  text-align: center;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.cell-item__input_price:hover,
.cell-item__input_price:active {
  border: 1.5px solid var(--bs-secondary);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.cell-item__btn {
  padding: 6px 8px;
  max-width: 19.4444rem;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.7778rem;
  line-height: 0.8889rem;
  background: var(--bs-secondary);
  border: 1px solid var(--bs-secondary);
  border-radius: 10px;
}

.body__cell-item__link {
  text-align: center;
  max-width: 216px;
}

.cell-item__link {
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}

.body-change__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;

  margin-top: 2.5rem;
}

.body-change__btn {
  margin-bottom: 0.5556rem;
  padding: 0.2222rem 0.5556rem;
  background: var(--bs-secondary);
  border: 1px solid var(--bs-secondary);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.body-change__btn:not(:last-child) {
  margin-right: 2.7778rem;
}

.body-change__btn:hover,
.body-change__btn:active {
  border: 1.5px solid var(--bs-secondary);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.body-change__text {
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: var(--bs-gray-600);
}

.body-change__btn:hover > .body-change__text,
.body-change__btn:active > .body-change__text {
  color: var(--bs-success);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.body-change__text_active {
  color: var(--bs-success);
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  text-decoration-line: underline;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

@media (max-width: 1175px) {
  .body__row_long {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
  }
  .body__row {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .body__row {
    margin-bottom: 13px;
  }

  .body__cell-item:not(:last-child) {
    margin-right: 6px;
  }

  .body__input {
    /* min-width: 0; */
    overflow: scroll;
    max-width: 170px;
    border-radius: 5px;
  }

  .cell-item__btn {
    border-radius: 5px;
    padding: 4px 4px;
    max-width: 104px;
    width: 100%;
  }

  .body__cell-item__link {
    max-width: 87px;
    width: 100%;
  }
}
</style>
