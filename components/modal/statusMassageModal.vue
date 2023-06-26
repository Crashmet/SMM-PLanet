<template>
  <div class="modal" :class="style">
    <h3 class="modal__title">{{ title }}</h3>
    <button class="modal__btn-close" @click="changeMessageModalStatus(false)">
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

    <p class="modal-message">{{ description }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "StatusMassageModal",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      isOpenModal: "statusMassageModalStore/isOpenModal",
      status: "statusMassageModalStore/status",
    }),

    title() {
      if (this.status[this.status.length - 1] === "error") {
        return "Ошибка!";
      } else if (this.status[this.status.length - 1] === "success") {
        return "Успех!";
      }
    },

    description() {
      if (this.status[this.status.length - 1] === "error") {
        return "Введенные данные не верны!";
      } else if (this.status[this.status.length - 1] === "success") {
        return "Изменения сохранены!";
      }
    },

    style() {
      if (this.status[this.status.length - 1] === "error") {
        return "error";
      } else if (this.status[this.status.length - 1] === "success") {
        return "success";
      }
    },
  },

  methods: {
    ...mapActions({
      changeMessageModalStatus:
        "statusMassageModalStore/changeMessageModalStatus",
      addStatus: "statusMassageModalStore/addStatus",
    }),
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 4%;
  right: 2%;
  padding: 0.5556rem 2.2222rem;
  max-width: 20rem;
  width: 100%;
  background-color: transparent;
  border-radius: 20px;
}

.modal__title {
  font-size: 1.1111rem;
  margin-bottom: 0.5556rem;
  font-weight: 700;
}

.modal__btn-close {
  position: absolute;
  right: 6%;
  top: 15%;
  background-color: transparent;
}

.btn-close__svg {
  width: 0.7778rem;
  height: 0.7778rem;
}

.success {
  border: 2px solid var(--bs-success);
}

.error {
  border: 2px solid var(--bs-danger);
}
</style>
