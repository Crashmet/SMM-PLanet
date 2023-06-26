<template>
  <section class="about">
    <div class="about__container container">
      <div class="about__logo">
        <div class="about-logo__title">
          <h1 class="about-logo__title_left">SMM</h1>
          <h1 class="about-logo__title_right">Planeta</h1>
        </div>
        <h3 class="about-logo__desc">решения и возможности</h3>
      </div>

      <ul class="about-check__list">
        <li class="about-check__item">Поиск автора</li>
        <li class="about-check__item">Открытие сообщества</li>
        <li class="about-check__item">Захват контента</li>
        <li class="about-check__item">Адаптация и подбор персонала</li>
        <li class="about-check__item">Управляй этим</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.about {
  margin-top: 4rem;
}

.about__container {
  position: relative;
  padding: 0 84px;
}

.about__container::before {
  content: "";
  position: absolute;
  z-index: -10;
  width: 785px;
  height: 765px;
  top: -152px;
  right: 0%;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 118, 0, 0.7) 5.73%,
    rgba(255, 54, 0, 0.4) 69.27%
  );
  -webkit-filter: blur(50px);
  filter: blur(50px);
}

.about__container::after {
  content: "";
  position: absolute;
  z-index: -9;
  width: 522px;
  height: 612px;
  top: 0px;
  right: 7%;
  background-image: url("@/static/img/hero-img.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
  filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
}

.about__logo {
  margin-bottom: 3rem;
  cursor: default;
}

.about-logo__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.about-logo__title_left {
  font-weight: 400;
  font-size: 2.2222rem;
  line-height: 2.6111rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
}

.about-logo__title_right {
  font-weight: 400;
  font-size: 2.2222rem;
  line-height: 2.6111rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
  -webkit-transition: text-shadow 0.4s ease-in;
  -o-transition: text-shadow 0.4s ease-in;
  transition: text-shadow 0.4s ease-in;
}

.about-logo__title:hover > .about-logo__title_right,
.about-logo__title:active > .about-logo__title_right {
  text-shadow: 4px 1px 6px #d3792b;
  -webkit-transition: text-shadow 0.2s ease-in;
  -o-transition: text-shadow 0.2s ease-in;
  transition: text-shadow 0.2s ease-in;
}

.about-logo__desc {
  font-weight: 400;
  font-size: 1.3333rem;
  line-height: 1.5556rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.about-check__list {
  margin-bottom: 4.7778rem;
}

.about-check__item {
  position: relative;
  padding-left: 3.2422222rem;
  min-height: 1.6667rem;
  font-size: 1rem;
  line-height: 1.6667rem;
  color: #0d0d0d;
}

.about-check__item:not(:last-child) {
  margin-bottom: 1.1111rem;
}

.about-check__item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.6667rem;
  height: 1.6667rem;
  background: url("@/static/img/checkmark.svg") 0 0 / contain no-repeat;
}

@media (max-width: 1200px) {
  .about__container {
    padding: 0 3rem;
  }

  .about__container::after {
    width: 500px;
  }
}

@media (max-width: 960px) {
  .about__container::before {
    width: 710px;
    height: 710px;
  }

  .about__container::after {
    top: 22%;
    width: 400px;
    height: 500px;
  }
}

@media (max-width: 780px) {
  .about {
    margin-top: 2.8571rem;
  }

  .about__container::before {
    display: none;
    top: -20%;
    width: 550px;
    height: 550px;

    /* top: -05px; */
    /* right: -120px; */
  }

  .about__container::after {
    display: none;
    top: 30%;
    width: 300px;
    height: 400px;
    /* top: 50px; */
    /* right: -30px; */
  }
}

@media (max-width: 600px) {
  /* .about__container::before {
    width: 450px;
    height: 450px;
    top: -05px;
    right: -120px;
  }

  .about__container::after {
    width: 250px;
    height: 350px;
    top: 50px;
    right: -30px;
  } */

  .about-check__item {
    padding-left: 24px;
    line-height: 15px;
  }

  .about-check__item:not(:last-child) {
    margin-bottom: 10px;
  }

  .about-check__item::before {
    width: 15px;
    height: 15px;
  }
}

@media (max-width: 440px) {
  .about__container {
    padding: 0 20px;
  }

  /* .about__container::before {
    width: 217px;
    height: 305px;
    right: -55px;
    top: -15px;
  }

  .about__container::after {
    width: 205px;
    height: 230px;
    right: -52px;
    top: 3px;
  } */
}
</style>
