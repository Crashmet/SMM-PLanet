<template>
  <ul class="select-menu__row">
    <li class="select-menu__cell">
      <nuxt-link to="inspection">
        <span class="select-menu__text">Компания №1</span>
      </nuxt-link>
    </li>
    <li class="select-menu__cell">
      <span class="select-menu__text">Название компании</span>
    </li>
    <li class="select-menu__cell">
      <span class="select-menu__text">Дата</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AdvertiserOrdersMenu",
};
</script>

<style scoped>
.select-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 1.8889rem;
  margin-bottom: 1.1111rem;
  cursor: pointer;
}

.select-menu__cell:first-child {
  max-width: 9rem;
  width: 100%;
}

.select-menu__cell:nth-child(2) {
  max-width: 12rem;
  width: 100%;
}

.select-menu__cell:hover > .select-menu__text,
.select-menu__cell:active > .select-menu__text {
  display: inline-block;
  width: 100%;
  color: var(--bs-orange);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

@media (max-width: 480px) {
  .select-menu__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 14px;
    margin-bottom: 9px;
  }
}
</style>
