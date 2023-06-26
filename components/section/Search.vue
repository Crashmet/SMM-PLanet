<template>
  <div class="hero">
    <section class="search">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-9 text-center">
            <h1 class="heading">Easiest way to find your dream blogger</h1>
            <form
              action="#"
              class="narrow-w form-search d-flex align-items-stretch mb-3"
            >
              <input
                type="text"
                class="form-control px-4"
                placeholder="Your nickname or name bloggers."
                v-model="searchInput"
              />
              <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="handlerClickSearch()"
              >
                Search
              </button>
            </form>
            <template v-if="searchRequest">
              <p class="search-bar__desc">
                Выдача по слову «{{ searchRequest }}»
              </p>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Search",

  data() {
    return {
      searchInput: "",

      pageSize: null,
    };
  },

  mounted() {
    const maxWidth = window.screen.width;

    if (maxWidth < 735) {
      this.pageSize = 10;
    } else {
      this.pageSize = 12;
    }
  },

  computed: {
    ...mapGetters({
      searchRequest: "searchStore/searchRequest",
      activePage: "searchStore/activePage",
    }),
  },

  methods: {
    ...mapActions({
      setSearchRequest: "searchStore/setSearchRequest",
      addSearchResult: "searchStore/addSearchResult",
      setActivePage: "searchStore/setActivePage",
      resetFiltersTitles: "searchStore/resetFiltersTitles",
    }),

    handlerClickSearch() {
      this.$router.push({ name: "search-result" });

      this.setActivePage(1);
      this.setSearchRequest(this.searchInput);

      this.addSearchResult({
        ordering: "",
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchInput,
      });

      this.resetFiltersTitles();
    },

    historyPushState() {
      window.history.pushState(
        window.history.state,
        document.title,
        `/search-result?page=1&page_size=${this.pageSize}&search=${this.searchInput}`
      );
    },
  },

  watch: {
    searchInput() {
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

.search-bar__desc {
  color: rgba(13, 13, 13, 0.61);
}
</style>
