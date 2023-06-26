<template>
  <div class="orders-home home">
    <div :class="isOpenModalAddOrder ? 'blur' : ''">
      <nav class="orders__nav">
        <div class="nav_left">
          <button
            class="nav-change__btn"
            @click="changeAddOrderModalStatus(true)"
          >
            <span class="nav-change__text">Разместить новый заказ</span>
          </button>
        </div>

        <div class="nav_right">
          <div v-if="countPages > 1" class="nav-pagination">
            <button
              v-if="activePage > 1"
              @click="handlerClickPrevPage()"
              class="nav-pagination__btn left-btn"
            >
              <div class="nav-pagination__btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="nav-pagination__icon left-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </button>

            <button
              v-if="activePage > 3"
              @click="handlerClickActivePage"
              class="page-numbers__btn"
            >
              1
            </button>

            <span
              v-if="activePage > 3 && countPages > 5"
              class="page-numbers__dots"
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

            <button
              v-if="countPages > activePage + 2"
              @click="handlerClickActivePage"
              class="page-numbers__btn"
            >
              {{ activePage + 2 }}
            </button>

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

            <button
              v-if="countPages !== activePage"
              @click="handlerClickNextPage()"
              class="nav-pagination__btn right-btn"
            >
              <div class="nav-pagination__btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="nav-pagination__icon right-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </button>
          </div>

          <form action="#" class="nav-search__form">
            <input
              type="text"
              placeholder="Поиск"
              class="nav-search__input"
              v-model="filterInput"
            />
            <button
              class="nav-search__btn"
              @click.prevent="handlerClickSearch()"
            >
              <p class="nav-search__btn-arrow"></p>
            </button>
          </form>
        </div>
      </nav>

      <div class="orders__table">
        <table v-if="count">
          <thead>
            <tr>
              <th
                v-for="item in filtersTitles"
                :key="item.title"
                scope="col"
                @click="handlerClickFiltersTitles(item)"
              >
                <h4
                  class="table__title"
                  :class="[
                    item.isWorks ? 'table-title__sort_arrow' : '',
                    item.isSortUp ? 'table-title__sort_arrow_up' : '',
                  ]"
                >
                  {{ item.title }}
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in advertiserOrdersList"
              :key="item.id"
              @click.prevent="handlerClickOrderMenu(item)"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.budget_per_subscriber }}</td>
              <td>{{ item.end_date }}</td>
              <td>{{ item.social[0].name }}</td>
              <td>-</td>
            </tr>

            <tr @click.prevent="handlerClickOrderMenu((item = { id: 2 }))">
              <td>2222</td>
              <td>33333</td>
              <td>444</td>
              <td>5555</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3 v-else class="table__not-found">"Нет активных заказов"</h3>
      </div>
    </div>

    <add-advertiser-new-order-modal v-show="isOpenModalAddOrder" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import addAdvertiserNewOrderModal from "~/components/modal/addAdvertiserNewOrderModal.vue";

export default {
  name: "AdvertiserOrdersHome",

  data() {
    return {
      ordering: "",

      filterInput: "",
    };
  },

  components: { addAdvertiserNewOrderModal },

  mounted() {
    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );

    if (windowData.page) {
      this.setActivePage(Number(windowData.page));
    }

    if (windowData.search) {
      this.filterInput = windowData.search;
    }

    this.getAdvertiserOrdersList({
      ordering: this.ordering,
      activePage: this.activePage,
      searchInput: this.filterInput,
    });

    this.historyPushState();
  },

  computed: {
    ...mapGetters({
      count: "advertiserOrdersStore/count",
      pageSize: "advertiserOrdersStore/pageSize",
      activePage: "advertiserOrdersStore/activePage",
      filtersTitles: "advertiserOrdersStore/filtersTitles",

      isOpenModalAddOrder: "advertiserOrdersStore/isOpenModalAddOrder",
      advertiserOrdersList: "advertiserOrdersStore/advertiserOrdersList",
    }),

    countPages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },

  methods: {
    ...mapActions({
      changeAddOrderModalStatus:
        "advertiserOrdersStore/changeAddOrderModalStatus",
      getAdvertiserOrdersList: "advertiserOrdersStore/getAdvertiserOrdersList",

      refreshFiltersTitles: "advertiserOrdersStore/refreshFiltersTitles",
      resetFiltersTitles: "advertiserOrdersStore/resetFiltersTitles",

      setActivePage: "advertiserOrdersStore/setActivePage",

      setOrderId: "advertiserSettingsOrderStore/setOrderId",
    }),

    handlerClickOrderMenu(data) {
      this.setOrderId(data.id);

      this.$router.push({ path: `/account/advertiser.orders/${data.id}` });
    },

    handlerClickSearch() {
      this.getAdvertiserOrdersList({
        activePage: 1,
        searchInput: this.filterInput,
      });

      this.resetFiltersTitles();

      this.historyPushState();
    },

    handlerClickFiltersTitles(item) {
      let { title, isSortUp, isWorks, APIRequestUp, APIRequestDown } = item;

      if (!isWorks) {
        return;
      }

      const filterTitle = {
        title,
        isActive: true,
        isSortUp: !isSortUp,
      };

      this.refreshFiltersTitles(filterTitle);

      this.ordering = isSortUp ? APIRequestUp : APIRequestDown;

      this.getAdvertiserOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        searchInput: this.filterInput,
      });
    },

    historyPushState() {
      window.history.pushState(
        window.history.state,
        document.title,
        `/account/advertiser.orders?page=${this.activePage}&page_size=${this.pageSize}&search=${this.filterInput}`
      );
    },

    handlerClickNextPage() {
      this.setActivePage(this.activePage + 1);

      this.getAdvertiserOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        searchInput: this.filterInput,
      });
    },

    handlerClickPrevPage() {
      this.setActivePage(this.activePage - 1);

      this.getAdvertiserOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        searchInput: this.filterInput,
      });
    },

    handlerClickActivePage(e) {
      this.setActivePage(+e.target.textContent);

      this.getAdvertiserOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        searchInput: this.filterInput,
      });
    },
  },

  watch: {
    filterInput() {
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
.home {
  margin-top: 2.5rem;
  position: relative;
}

.orders__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.1111rem;
  padding: 0 1rem;
}

.nav_right {
  display: flex;
  justify-content: space-between;
}

/* **** CHANGE BTTN ****  */

.nav-change__btn {
  padding: 6px 10.0008px;
  background: transparent;
  border: 1.5px solid var(--bs-secondary);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.nav-change__btn:hover,
.nav-change__btn:active {
  border: 1.5px solid var(--bs-success);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.nav-change__text {
  font-size: 1rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.9);
}

.nav-change__btn:hover > .nav-change__text,
.nav-change__btn:active > .nav-change__text {
  color: var(--bs-red);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

/* **** NAV SEARCH  ****  */

.nav-search__form {
  display: flex;
  align-items: center;
  width: 10rem;
  border: 1.5px solid var(--bs-secondary);
  background: transparent;
}

.nav-search__form,
.nav-search__input,
.nav-search__btn {
  border-radius: 16px;
}

.nav-search__input {
  padding: 0 0.6667rem;
  height: 2rem;
  width: 7rem;
  color: var(--bs-gray-600);
  background: transparent;
  font-size: 0.8889rem;
  line-height: 1.1667rem;
}

.nav-search__btn {
  padding: 0.7222rem 1.3rem;
  background: var(--bs-secondary);
  transition: background 0.2s ease-in;
}

.nav-search__btn:hover {
  background: var(--bs-success);
}

.nav-search__btn-arrow {
  width: 0.5556rem;
  height: 0.5556rem;
  border-top: 0.1667rem solid #ffffff;
  border-right: 0.1667rem solid #ffffff;
  transform: rotate(45deg);
}

/* **** PAGINATION ****  */

.nav-pagination {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 0.5556rem;
  margin-right: 1.1111rem;
}

.nav-pagination::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 3.5px;
  height: 2px;
  width: 100%;
  background: rgba(13, 13, 13, 0.1);
}

.page-numbers__btn {
  font-size: 0.8889rem;
}

.nav-pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.1111rem;
}

.page-numbers__btn,
.nav-pagination__btn {
  width: 1.6667rem;
  height: 1.6667rem;
  background-color: transparent;
  border-bottom: 3px solid rgba(255, 255, 255, 0);
  cursor: pointer;
}

.nav-pagination__btn-icon {
  width: 0.9444rem;
  height: 0.9444rem;
}

.page-numbers__btn_selected {
  border-bottom: 3px solid var(--bs-secondary);
}

/* **** TABLE **** */

table {
  table-layout: fixed;
  width: 888px;
  border-collapse: collapse;
}

thead tr th {
  text-align: left;
  border: none;
}

.table__title {
  position: relative;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1667rem;
  cursor: pointer;
}

.table-title__sort_arrow::after {
  content: "";
  position: absolute;
  top: 10%;
  right: 20%;
  width: 14px;
  height: 14px;
  background-image: url("@/assets/image/arrow.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.table-title__sort_arrow_up::after {
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
  -webkit-transition: -webkit-transform 0.3s easy;
  transition: -webkit-transform 0.3s easy;
  -o-transition: transform 0.3s easy;
  transition: transform 0.3s easy;
  transition: transform 0.3s easy, -webkit-transform 0.3s easy;
}

thead th:nth-child(1) {
  width: 26%;
}

thead th:nth-child(2) {
  width: 18%;
}

thead th:nth-child(3) {
  width: 19%;
}

thead th:nth-child(4) {
  width: 23%;
}

thead th:nth-child(5),
td:nth-child(5) {
  text-align: center;
}

tbody tr {
  color: var(--bs-gray-700);
  border-bottom: 1px solid var(--bs-secondary);
}

tbody tr:hover {
  cursor: pointer;
  background: #f96e596b;
}

th,
td {
  padding: 0.7778rem 0.8333rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  border: none;
}

/* **** NOT FOUND ****  */

.table__not-found {
  text-align: center;
  margin: 3rem 0;
  font-size: 1.2222rem;
}

@media (min-width: 980px) {
  .nav-pagination__btn:hover,
  .page-numbers__btn:hover {
    border-bottom: 3px solid var(--bs-secondary);
    background-color: transparent;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
}

@media (max-width: 480px) {
  .orders__nav,
  table {
    width: 550px;
  }

  .nav_right {
    flex-direction: column-reverse;
    align-items: end;
  }

  .nav-search__form {
    margin-bottom: 10px;
  }

  .nav-pagination {
    margin-right: 0;
  }

  .nav-pagination::after {
    bottom: 0;
  }

  thead th {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  th,
  td {
    font-size: 12px;
    line-height: 14px;
  }
}

.blur {
  filter: blur(15px);
  min-height: 42.3rem;
}
</style>
