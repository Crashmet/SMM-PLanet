<template>
  <section class="statistics">
    <div class="section-counter">
      <div class="counter-list" data-aos="fade-up" data-aos-delay="300">
        <div class="counter-wrap mb-lg-0">
          <span class="number"
            ><span class="countup text-primary">81358879</span></span
          >
          <span class="caption text-black-50"># Охват</span>
        </div>
      </div>
      <div class="counter-list" data-aos="fade-up" data-aos-delay="400">
        <div class="counter-wrap mb-lg-0">
          <span class="number"
            ><span class="countup text-primary">542</span></span
          >
          <span class="caption text-black-50"># Блогеров</span>
        </div>
      </div>
      <div class="counter-list" data-aos="fade-up" data-aos-delay="200">
        <div class="counter-wrap mb-lg-0">
          <span class="number"
            ><span class="countup text-primary">7236</span></span
          >
          <span class="caption text-black-50"># Постов</span>
        </div>
      </div>
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
  margin: 140px 0 80px;
  padding: 15px;
}

.section-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
}

.counter-list:not(:last-child) {
  margin-right: 60px;
}

@media (max-width: 1000px) {
  .statistics {
    margin: 110px 0 30px;
    padding: 15px;
  }
}

@media (max-width: 540px) {
  .statistics {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 80px 0 60px;
    padding: 15px;
  }

  .countup {
    font-size: 25px;
  }
}

@media (max-width: 440px) {
  .countup {
    font-size: 20px;
  }

  .counter-list:not(:last-child) {
    margin-right: 20px;
  }
}
</style>
