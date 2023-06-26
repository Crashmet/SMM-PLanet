<template>
  <div class="modal">
    <h3 class="modal__title">Разместить новый заказ</h3>
    <button class="modal__btn-close" @click="changeAddOrderModalStatus(false)">
      <svg
        class="btn-close__svg"
        width="16"
        height="16"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.641389 2.92264C0.28716 2.56841 0.287159 1.99409 0.641388 1.63986C0.995617 1.28563 1.56993 1.28563 1.92416 1.63986L15.3584 15.0742C15.7127 15.4284 15.7127 16.0027 15.3584 16.3569C15.0042 16.7112 14.4299 16.7112 14.0757 16.3569L0.641389 2.92264Z"
          fill="#0d0d0d"
        ></path>
        <path
          d="M14.0774 1.64139C14.4316 1.28716 15.0059 1.28716 15.3601 1.64139C15.7144 1.99562 15.7144 2.56994 15.3601 2.92417L1.92586 16.3585C1.57163 16.7127 0.997315 16.7127 0.643086 16.3585C0.288857 16.0042 0.288857 15.4299 0.643086 15.0757L14.0774 1.64139Z"
          fill="#0d0d0d"
        ></path>
      </svg>
    </button>
    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Название заказа</span>
        </li>

        <li class="modal__cell">
          <input type="text" class="modal__input" v-model="name" />
        </li>
      </ul>

      <template v-if="validatorName.length > 0">
        <p class="modal__validation">{{ validatorName }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row modal__row_textarea">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Описание заказа</span>
        </li>

        <li class="modal__cell">
          <textarea
            name="massage"
            class="modal__input modal__input_textarea"
            v-model="description"
          >
          </textarea>
        </li>
      </ul>

      <template v-if="validatorDescription.length > 0">
        <p class="modal__validation">{{ validatorDescription }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Цена за одного подписчика</span>
        </li>

        <li class="modal__cell">
          <input
            type="number"
            class="modal__input"
            v-model="budget_per_subscriber"
          />
        </li>
      </ul>

      <template v-if="validatorBadget.length > 0">
        <p class="modal__validation">{{ validatorBadget }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Дата</span>
        </li>

        <li class="modal__cell">
          <input type="date" class="modal__input" v-model="end_date" />
        </li>
      </ul>

      <template v-if="validatorDate.length > 0">
        <p class="modal__validation">{{ validatorDate }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Соцсеть</span>
        </li>

        <li class="modal__cell">
          <select class="modal__input" v-model="social">
            <option
              v-for="item in socials"
              v-bind:value="[item.id]"
              :key="item.id"
            >
              {{ item.selectName }}
            </option>
          </select>
        </li>
      </ul>

      <template v-if="validatorSocial.length > 0">
        <p class="modal__validation">{{ validatorSocial }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Регион</span>
        </li>

        <li class="modal__cell">
          <select class="modal__input" v-model="region">
            <option
              v-for="item in regions"
              v-bind:value="item.id"
              :key="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </li>
      </ul>

      <template v-if="validatorRegion.length > 0">
        <p class="modal__validation">{{ validatorRegion }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Минимальное число подписчиков</span>
        </li>

        <li class="modal__cell">
          <input type="number" class="modal__input" v-model="min_subscribers" />
        </li>
      </ul>

      <template v-if="validatorMinSubscribers.length > 0">
        <p class="modal__validation">{{ validatorMinSubscribers }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Максимальное число подписчиков</span>
        </li>

        <li class="modal__cell">
          <input type="number" class="modal__input" v-model="max_subscribers" />
        </li>
      </ul>

      <template v-if="validatorMaxSubscribers.length > 0">
        <p class="modal__validation">{{ validatorMaxSubscribers }}</p>
      </template>
    </div>

    <button class="cell-item__btn" @click.prevent="handlerAddNewOrder()">
      Разместить заказ
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdvertiserNewOrderModal",

  data() {
    return {
      name: "",
      description: "",
      budget_per_subscriber: null,
      end_date: null,
      social: [],
      region: "",
      min_subscribers: null,
      max_subscribers: null,

      validatorName: "",
      validatorDescription: "",
      validatorBadget: "",
      validatorDate: "",
      validatorSocial: "",
      validatorRegion: "",
      validatorMinSubscribers: "",
      validatorMaxSubscribers: "",
    };
  },

  computed: {
    ...mapGetters({
      socials: "socials",
      regions: "regions",
      validatorResponse: "advertiserOrdersStore/validatorResponse",
    }),
  },

  methods: {
    ...mapActions({
      changeAddOrderModalStatus:
        "advertiserOrdersStore/changeAddOrderModalStatus",
      advertiserNewOrderCreate:
        "advertiserOrdersStore/advertiserNewOrderCreate",
    }),

    handlerAddNewOrder() {
      const order = {
        name: this.name,
        description: this.description,
        budget_per_subscriber: this.budget_per_subscriber,
        end_date: this.end_date,
        social: this.social,
        region: this.region,
        min_subscribers: this.min_subscribers,
        max_subscribers: this.max_subscribers,
      };

      this.advertiserNewOrderCreate(order);
    },

    resetValidatorMassages() {
      this.validatorName = "";
      this.validatorDescription = "";
      this.validatorBadget = "";
      this.validatorDate = "";
      this.validatorSocial = "";
      this.validatorRegion = "";
      this.validatorMinSubscribers = "";
      this.validatorMaxSubscribers = "";
    },

    addValidatorMassages() {
      for (let el of Object.entries(this.validatorResponse)) {
        let massage = "";

        if (Array.isArray(el[1])) {
          massage = el[1].reduce((acc, el) => acc + " " + el);
        } else {
          massage = el[1];
        }

        if (el[0] === "name") {
          this.validatorName = massage;
        } else if (el[0] === "description") {
          this.validatorDescription = massage;
        } else if (el[0] === "budget_per_subscriber") {
          this.validatorBadget = massage;
        } else if (el[0] === "end_date") {
          this.validatorDate = massage;
        } else if (el[0] === "social") {
          this.validatorSocial = massage;
        } else if (el[0] === "region") {
          this.validatorRegion = massage;
        } else if (el[0] === "min_subscribers") {
          this.validatorMinSubscribers = massage;
        } else if (el[0] === "max_subscribers") {
          this.validatorMaxSubscribers = massage;
        }
      }
    },
  },

  watch: {
    validatorResponse() {
      this.resetValidatorMassages();
      this.addValidatorMassages();
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 2%;
  padding: 1.25rem 3.125rem;
  max-width: 36.1111rem;
  width: 100%;
  background-color: transparent;
  border-radius: 20px;
}

.modal__title {
  font-size: 1.1111rem;
  margin-bottom: 1.1111rem;
  text-decoration-line: underline;
}

.modal__btn-close {
  position: absolute;
  right: 5%;
  top: 4%;
  background-color: transparent;
}

.btn-close__svg {
  width: 1rem;
  height: 1rem;
}

.modal__block {
  margin-bottom: 0.8889rem;
}

.modal__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.modal__cell {
  width: 100%;
}

.modal__cell-label {
  margin-right: 1.1111rem;
  width: 60%;
}

.modal__label {
  font-size: 0.7778rem;
}

.modal__input {
  padding-left: 0.6111rem;
  max-width: 380.0002px;
  width: 60%;
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

.modal__input:hover,
.modal__input:active {
  border: 1.5px solid var(--bs-success);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.modal__row_textarea {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
}

.modal__input_textarea {
  max-width: 16.6667rem;
  padding: 5px 10px;
  height: 8.0555rem;
}

/* ****** BTN SUBMIT ******  */

.cell-item__btn {
  margin-top: 1.2rem;
  padding: 5.9994px 7.9992px;
  width: 75%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  color: #fff;
  background: var(--bs-secondary);
  border: 1px solid var(--bs-secondary);
  border-radius: 10px;
}

/* *** VALIDATION *** */

.modal__validation {
  font-size: 0.8889rem;
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: var(--bs-orange);
}

@media (max-width: 480px) {
  .modal {
    padding: 25px 50px;
    border-radius: 20px;
  }
}
</style>
