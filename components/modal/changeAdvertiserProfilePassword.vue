<template>
  <div class="modal">
    <h3 class="modal__title">Изменить пароль</h3>
    <button class="modal__btn-close" @click="changePasswordModalStatus(false)">
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
          <span class="modal__label">Старый пароль</span>
        </li>

        <li class="modal__cell">
          <input type="password" class="modal__input" v-model="old_password" />
        </li>
      </ul>

      <template v-if="validatorOldPassword.length > 0">
        <p class="modal__validation">{{ validatorOldPassword }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Новый пароль</span>
        </li>

        <li class="modal__cell">
          <input type="password" class="modal__input" v-model="new_password" />
        </li>
      </ul>

      <template v-if="validatorPassword.length > 0">
        <p class="modal__validation">{{ validatorPassword }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Повторите новый пароль</span>
        </li>

        <li class="modal__cell">
          <input
            type="password"
            class="modal__input"
            v-model="new_password_confirm"
          />
        </li>
      </ul>

      <template
        v-if="validatorPassword2.length > 0 || nonFieldErrors.length > 0"
      >
        <p class="modal__validation">
          {{ validatorPassword2 }} {{ nonFieldErrors }}
        </p>
      </template>
    </div>

    <button class="cell-item__btn" @click.prevent="handlerSubmitSettings()">
      Изменить
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdvertiserProfileDataModal",

  data() {
    return {
      old_password: "",
      new_password: "",
      new_password_confirm: "",

      validatorOldPassword: "",
      validatorPassword: "",
      validatorPassword2: "",
      nonFieldErrors: "",
    };
  },

  computed: {
    ...mapGetters({
      validatorResponse: "advertiserProfileStore/validatorResponse",
    }),
  },

  methods: {
    ...mapActions({
      changePasswordModalStatus:
        "advertiserProfileStore/changePasswordModalStatus",
      changeAdvertiserPassword:
        "advertiserProfileStore/changeAdvertiserPassword",
    }),

    handlerSubmitSettings() {
      const passwordData = {
        old_password: this.old_password,
        new_password: this.new_password,
        new_password_confirm: this.new_password_confirm,
      };

      this.changeAdvertiserPassword(passwordData);
    },

    resetFormPassword() {
      this.old_password = "";
      this.new_password = "";
      this.new_password_confirm = "";
    },

    resetValidatorMassages() {
      this.validatorOldPassword = "";
      this.validatorPassword = "";
      this.validatorPassword2 = "";
      this.nonFieldErrors = "";
    },

    addValidatorMassages() {
      for (let el of Object.entries(this.validatorResponse)) {
        let massage = "";

        if (Array.isArray(el[1])) {
          massage = el[1].reduce((acc, el) => acc + " " + el);
        } else {
          massage = el[1];
        }

        if (el[0] === "old_password") {
          this.validatorOldPassword = massage;
        } else if (el[0] === "new_password") {
          this.validatorPassword = massage;
        } else if (el[0] === "new_password_confirm") {
          this.validatorPassword2 = massage;
        } else if (el[0] === "non_field_errors") {
          this.nonFieldErrors = massage;
        }
      }
    },
  },

  watch: {
    validatorResponse() {
      this.resetFormPassword();
      this.resetValidatorMassages();
      this.addValidatorMassages();
    },
  },
};
</script>

<style scoped>
.modal {
  position: relative;
  max-width: 33.3333rem;
  padding: 1.25rem 3.125rem;
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
  right: 4%;
  top: 7%;
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
  width: 90%;
}

.modal__label {
  font-size: 0.8889rem;
}

.modal__input {
  padding-left: 0.6111rem;
  max-width: 350px;
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

.modal__input:hover,
.modal__input:active {
  border: 1.5px solid var(--bs-success);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

/* ****** BTN SUBMIT ******  */

.cell-item__btn {
  margin-top: 0.8333rem;
  padding: 5.9994px 7.9992px;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  color: #fff;
  background: #f09e56;
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
