<template>
  <section class="login">
    <div class="login__container container">
      <div class="login__body">
        <h2 class="login__title">Вход</h2>

        <form class="login__form">
          <div class="login-form__item">
            <input
              v-model="username"
              type="text"
              class="login__input"
              placeholder="Логин"
            />

            <template v-if="validatorUsername.length">
              <p class="login__validation">{{ validatorUsername }}</p>
            </template>
          </div>

          <div class="login-form__item">
            <input
              v-model="password"
              type="password"
              class="login__input login__input_pass-1"
              placeholder="Пароль"
            />

            <template v-if="validatorPassword.length || nonFieldErrors.length">
              <p class="login__validation">
                {{ validatorPassword }} {{ nonFieldErrors }}
              </p>
            </template>
          </div>

          <button
            @click.prevent="handlerSubmit()"
            type="submit"
            class="login__submit-btn"
          >
            <span class="submit-btn__text">Войти</span>
          </button>
        </form>

        <div class="login__aside">
          <a href="#" class="login__forgot-pass">Забыли пароль?</a>
          <a href="#" class="login__restore-pass">Восстановить</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      username: "Cat12",
      password: "shamil123",

      validatorUsername: "",
      validatorPassword: "",
      nonFieldErrors: "",
    };
  },

  computed: {
    ...mapGetters({
      validatorResponse: "authStore/validatorResponse",
    }),
  },

  methods: {
    ...mapActions({
      onLogin: "authStore/onLogin",
    }),

    handlerSubmit() {
      const loginData = {
        username: this.username,
        password: this.password,
      };

      this.onLogin(loginData);

      this.resetFormPassword();
    },

    resetFormPassword() {
      this.password = "";
    },

    resetValidatorMassages() {
      this.validatorUsername = "";
      this.validatorPassword = "";
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

        if (el[0] === "username") {
          this.validatorUsername = massage;
        } else if (el[0] === "password") {
          this.validatorPassword = massage;
        } else if (el[0] === "non_field_errors") {
          this.nonFieldErrors = massage;
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
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.login {
  margin-top: 4.2778rem;
  margin-bottom: 5.3333rem;
}

.login__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.login__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 20rem;
  width: 100%;
}

.login__title {
  margin-bottom: 2.1667rem;
  font-weight: 700;
  font-size: 1.7778rem;
  line-height: 2.1111rem;
  color: var(--bs-secondary);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.login__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  margin-bottom: 1.6111rem;
  width: 100%;
}

.login-form__item {
  margin-bottom: 1.3rem;
  width: 100%;
}

.login__input {
  padding: 6px 30px;
  width: 100%;
  height: 33px;
  background: transparent;
  border: 1px solid var(--bs-secondary);
  -webkit-box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.login__validation {
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: var(--bs-orange);
}

.login__submit-btn {
  padding: 7px 54px;
  background: var(--bs-secondary);
  border-radius: 20px;
}

.login__submit-btn:hover,
.login__submit-btn:active {
  background: var(--bs-success);
}

.submit-btn__text {
  font-weight: 700;
  text-align: center;
  color: #ffffff;
}

.login__aside {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.login__restore-pass {
  text-decoration: underline;
  -webkit-text-decoration-color: #0d0d0d;
  text-decoration-color: #0d0d0d;
}

@media (max-width: 440px) {
  .login {
    margin-top: 55px;
    margin-bottom: 50px;
  }

  .login__body {
    max-width: 221px;
  }

  .login__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 25px;
  }

  .login__form {
    margin-bottom: 25px;
  }

  .login-form__item {
    margin-bottom: 8px;
  }

  .login__input {
    padding: 6px 30px;
    height: 30px;
  }

  .login__submit-btn {
    margin-top: 4px;
    padding: 9px 22px;
  }

  .submit-btn__text {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
