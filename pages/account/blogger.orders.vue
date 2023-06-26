<template>
  <div class="orders_container">
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Заказчик</th>
            <th scope="col">Задание</th>
            <th scope="col">Соцсеть</th>
            <th scope="col">Регион</th>
            <th scope="col">Сумма</th>
            <th scope="col">Срок</th>
            <th scope="col">Статус</th>
            <th scope="col">Чат</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Компания 1</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 2</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 3</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 4</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 5</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 6</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 7</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 8</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 9</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 10</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BloggerOrders",

  computed: {},

  methods: {},
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/
.orders_container {
  margin-top: 2.5rem;
  position: relative;
}

/* **** table **** */

table {
  margin-top: 1.8rem;
  width: 56.9444rem;
  table-layout: fixed;
  border-collapse: collapse;
}

thead tr th {
  text-align: left;
  border: none;
}

thead th {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1667rem;
  color: var(--bs-gray-600);
}

thead th:nth-child(1) {
  width: 13%;
}

thead th:nth-child(2) {
  width: 23%;
}

thead th:nth-child(3) {
  width: 10%;
}

thead th:nth-child(4) {
  width: 8%;
}

thead th:nth-child(5) {
  width: 7.5%;
}

thead th:nth-child(6) {
  width: 10%;
}

thead th:nth-child(7) {
  width: 15%;
}

th,
td:nth-child(5) {
  text-align: center;
}

tbody tr {
  color: var(--bs-gray-600);
  border-bottom: 1px solid var(--bs-secondary);
}

tbody tr:hover {
  background: #f09e567c;
}

th,
td {
  padding: 0.7778rem 0.8333rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  border: none;
}

@media (max-width: 480px) {
  table {
    width: 850px;
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
}
</style>
