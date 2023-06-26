<template>
  <section class="search-result">
    <div class="search-result__container">
      <nav v-if="count > 0" class="search__nav">
        <ul class="search-nav__list">
          <li
            v-for="item in filtersTitles"
            :key="item.title"
            :class="[item.isSortUp ? 'search-nav__item_arrow_up' : '']"
            @click="handlerClickFiltersTitles(item)"
            class="search-nav__item search-nav__item_arrow"
          >
            <span
              :class="[item.isActive ? 'search-nav__item_active' : '']"
              class="search-nav__text"
              >{{ item.title }}</span
            >
          </li>
        </ul>
      </nav>

      <ul class="search-result__list-cards row">
        <li
          class="property-item col-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3"
          v-for="item in searchResult"
          :key="item.id"
          @click="handlerClickCards(item)"
        >
          <div class="item-card__img">
            <img src="#" alt="Image-card" class="img-fluid" />
          </div>

          <div class="property-content">
            <div class="d-block mb-2 text-black-50">
              Подписчики:
              <div class="price mb-2">
                <span>{{ item.subscribers }}</span>
              </div>
            </div>
            <div>
              <span class="d-block mb-2 text-black-50"
                >Дата создания: {{ item.created }}</span
              >
              <span class="d-block mb-2 text-black-50">
                {{ item.social_network.name }} - nickname:</span
              >
              <span class="city d-block mb-3">{{ item.nickname }}</span>
            </div>

            <div class="item-card__item-description item-description">
              Цена за пост:
              {{ item.price_for_post ? item.price_for_post : 0 }} руб.
            </div>
            <div class="item-card__item-description item-description">
              Цена за сторис:
              {{ item.price_for_stories ? item.price_for_stories : 0 }} руб.
            </div>
            <div class="item-card__item-description item-description">
              Цена за рилс:
              {{ item.price_for_reels ? item.price_for_reels : 0 }} руб.
            </div>
          </div>
        </li>
      </ul>

      <div v-if="!count" class="search-result__not-found">
        "По вашему запросу ничего не найдено"
      </div>
    </div>

    <div v-if="countPages > 1" class="search-pagination">
      <button
        v-if="activePage > 1"
        @click="handlerClickPrevPage()"
        class="search-pagination__btn left-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="search-pagination__icon left-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div class="search-page-numbers page-numbers">
        <button
          v-if="activePage > 3"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          1
        </button>

        <span v-if="activePage > 3 && countPages > 5" class="page-numbers__dots"
          >...</span
        >

        <button
          v-if="activePage > 1"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage - 1 }}
        </button>

        <button
          @click="handlerClickActivePage"
          class="page-numbers__btn page-numbers__btn_selected"
        >
          {{ activePage }}
        </button>

        <button
          v-if="countPages > activePage + 1"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage + 1 }}
        </button>

        <!-- <button
          v-if="countPages > activePage + 2"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage + 2 }}
        </button> -->

        <span
          v-if="countPages > activePage + 3 && countPages > 3"
          class="page-numbers__dots"
          >...</span
        >

        <button
          v-if="countPages !== activePage"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ countPages }}
        </button>
      </div>

      <button
        v-if="countPages !== activePage"
        @click="handlerClickNextPage()"
        class="search-pagination__btn right-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="search-pagination__icon right-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchResult",

  async fetch({ store }) {
    const activePage = store.state.searchStore.activePage;

    await store.dispatch("searchStore/addSearchResult", {
      ordering: "",
      activePage,
      pageSize: 12,
      searchInput: "",
    });

    // const searchResultSSR = store.state.searchStore.searchResult;

    // const countSSR = store.state.searchStore.count;

    // console.log(process.client);

    return;
  },

  data() {
    return {
      pageSize: null,

      ordering: "",
    };
  },

  mounted() {
    const maxWidth = window.screen.width;

    if (maxWidth < 735) {
      this.pageSize = 10;
    } else {
      this.pageSize = 12;
    }

    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );

    if (windowData.page) {
      this.setActivePage(Number(windowData.page));
    }

    if (windowData.search) {
      this.setSearchRequest(windowData.search);
    }

    this.addSearchResult({
      ordering: this.ordering,
      activePage: this.activePage,
      pageSize: this.pageSize,
      searchInput: this.searchRequest,
    });

    this.historyPushState();
  },

  computed: {
    ...mapGetters({
      searchRequest: "searchStore/searchRequest",
      count: "searchStore/count",
      searchResult: "searchStore/searchResult",
      activePage: "searchStore/activePage",
      filtersTitles: "searchStore/filtersTitles",
    }),

    countPages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },

  methods: {
    ...mapActions({
      setSearchRequest: "searchStore/setSearchRequest",
      addSearchResult: "searchStore/addSearchResult",
      setActivePage: "searchStore/setActivePage",
      refreshFiltersTitles: "searchStore/refreshFiltersTitles",
      addBloggerData: "bloggerCardStore/addBloggerData",
    }),

    handlerClickCards(data) {
      this.addBloggerData(data);

      this.$router.push({ path: `/search-result/${data.id}` });
    },

    handlerClickFiltersTitles(item) {
      let { title, isSortUp, APIRequestUp, APIRequestDown } = item;

      const filterTitle = {
        title,
        isActive: true,
        isSortUp: !isSortUp,
      };

      this.refreshFiltersTitles(filterTitle);

      this.ordering = isSortUp ? APIRequestUp : APIRequestDown;

      this.addSearchResult({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchRequest,
      });
    },

    historyPushState() {
      window.history.pushState(
        window.history.state,
        document.title,
        `/search-result?page=${this.activePage}&page_size=${this.pageSize}&search=${this.searchRequest}`
      );
    },

    handlerClickNextPage() {
      this.setActivePage(this.activePage + 1);

      this.addSearchResult({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchRequest,
      });
    },

    handlerClickPrevPage() {
      this.setActivePage(this.activePage - 1);

      this.addSearchResult({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchRequest,
      });
    },

    handlerClickActivePage(e) {
      this.setActivePage(+e.target.textContent);

      this.addSearchResult({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchRequest,
      });
    },
  },

  watch: {
    searchResult() {
      this.historyPushState();
    },

    activePage() {
      this.historyPushState();
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

.search-result {
  margin-top: 3.8889rem;
  margin-bottom: 5.6111rem;
}

.search-result__container {
  padding: 0 4.4444rem;
}

/* **** SEARCH-NAV **** */

.search__nav {
  margin-bottom: 2.2222rem;
}

.search-nav__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.search-nav__item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-bottom: 24px;
  height: 2.2222rem;
  background: #fefefe;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
}

.search-nav__item:not(:last-child) {
  margin-right: 10px;
}

.search-nav__item_active {
  color: var(--bs-orange);
}

.search-nav__item_arrow::after {
  content: "";
  position: absolute;
  top: 0.6111rem;
  right: 0.6111rem;
  width: 1.0556rem;
  height: 1.0556rem;
  background-image: url("@/static/img/arrow.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.search-nav__item_arrow_up::after {
  top: 0.5556rem;
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
  -webkit-transition: -webkit-transform 0.3s easy;
  transition: -webkit-transform 0.3s easy;
  -o-transition: transform 0.3s easy;
  transition: transform 0.3s easy;
  transition: transform 0.3s easy, -webkit-transform 0.3s easy;
}

.search-nav__item:nth-child(4) {
  max-width: 12rem;
}

.search-nav__item:nth-child(5) {
  max-width: 12rem;
}

.search-nav__text {
  padding: 0.5556rem 2.2222rem 0.5556rem 1.6111rem;
}

/* **** CARDS ****  */

.search-result__container {
  margin-bottom: 50px;
}

.item-card__img {
  margin-bottom: 0.9444rem;
  height: 155.5554px;
  background: #d9d9d9;
}

.item-description {
  font-size: 0.8889rem;
}

.item-card__item-description:not(:last-child) {
  margin-bottom: 0.2222rem;
}

/* **** PAGINATION ****  */

.search-pagination,
.page-numbers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 0.8889rem;
}

.search-pagination__btn {
  padding: 0.4444rem;
  width: 2.3333rem;
  height: 2.3333rem;
  color: var(--bs-secondary);
  background-color: #fff;
  border-radius: 50%;
  border: 1.5px solid var(--bs-secondary);
  cursor: pointer;
}

.page-numbers__btn {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.page-numbers__btn_selected {
  background-color: var(--bs-success);
  color: #fff;
}

/* **** NOT FOUND ****  */

.search-result__not-found {
  text-align: center;
  margin-bottom: 8.3333rem;
  font-size: 1.2222rem;
}

@media (min-width: 980px) {
  .search-pagination__btn:hover,
  .page-numbers__btn:hover {
    background-color: var(--bs-success);
    color: #fff;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
}

@media (max-width: 480px) {
  .search-result {
    margin-top: 36px;
  }

  .search-result__container {
    padding: 0 40px;
  }

  .search-nav__item {
    margin-bottom: 16px;
  }

  .search-nav__text {
    padding-left: 14px;
  }

  .search-nav__list {
    margin-left: 10px;
  }

  .search-nav__item {
    margin-right: 15px;
  }

  .item-card__item-description:not(:last-child) {
    margin-bottom: 2px;
  }
}

@media (max-width: 390px) {
  .search-result__container {
    padding: 0 20px;
  }
}

@media (max-width: 350px) {
  .search-result__container {
    padding: 0 10px;
  }
}

@media (max-width: 330px) {
  .search-result__container {
    padding: 0;
  }
}

@media (max-width: 307px) {
  .search-result__container {
    padding: 0 40px;
  }
}
</style>
