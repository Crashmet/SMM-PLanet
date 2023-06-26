<template>
  <div class="advertiser-finance">
    <div class="advertiser-finance__body body">
      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Период</span>
        </li>

        <li class="body__cell">
          <input
            type="text"
            class="body__input"
            disabled
            value="с начала года"
          />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Приход</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" disabled value="6 600 руб." />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Расход</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" disabled value="5 450 руб." />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Баланс</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" disabled value="1 150 руб." />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Оплатить</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvertiserFinance",
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.body__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.body__row:not(:last-child) {
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
  padding-left: 0.6111rem;
  max-width: 9.8333rem;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: var(--bs-gray-600);
  border: 1px solid var(--bs-secondary);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.body__input:hover,
.body__input:active {
  border: 1.5px solid var(--bs-success);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

@media (max-width: 1175px) {
  .body__row:not(:last-child) {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .advertiser-finance__link {
    margin-bottom: 9px;
  }

  .body__row:not(:last-child) {
    margin-bottom: 13px;
  }

  .body__input {
    max-width: 88px;
    width: 100%;
    border-radius: 5px;
  }
}
</style>
