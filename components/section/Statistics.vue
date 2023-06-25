<template>
  <section class="statistics">
    <div class="statistics__container">
      <ul class="statistics__list">
        <li class="statistics__item">
          <p class="statistics-item__top">Охват</p>
          <p class="statistics-item__bottom">81 358 879</p>
        </li>
        <li class="statistics__item">
          <p class="statistics-item__top">Блогеров</p>
          <p class="statistics-item__bottom">542</p>
        </li>
        <li class="statistics__item">
          <p class="statistics-item__top">Постов</p>
          <p class="statistics-item__bottom">7 236</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Statistics",
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.statistics {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.7222rem;
}

.statistics__container {
  padding: 1rem 2rem;
  border: 1px solid rgba(240, 158, 86, 0.94);
  border-radius: 20px;
  filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}

.statistics__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.statistics__item {
  text-align: center;
  font-size: 1rem;
  line-height: 1.1667rem;
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
}

.statistics__item:not(:last-child) {
  margin-right: 3.8889rem;
}

.statistics-item__top {
  margin-bottom: 0.5rem;
}

@media (max-width: 640px) {
  .statistics__item:not(:last-child) {
    margin-right: 20px;
  }
}

@media (max-width: 320px) {
  .statistics__container {
    padding: 0;
  }
}
</style>
