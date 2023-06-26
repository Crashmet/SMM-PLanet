<template>
  <div class="container">
    <div class="not-found">
      <div class="error-text">
        <span>404</span>
        <p>PAGE NOT FOUND</p>
        <p class="hmpg">
          <nuxt-link to="/" class="back">Back To Home</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.not-found {
  text-align: center;
  margin-bottom: 2.7778rem;
  font-weight: 400;
  font-size: 1.1111rem;
  position: fixed;
  width: 100%;
  height: 100%;
  line-height: 1.5em;
  z-index: 9999;
  left: 0px;
}

.error-text {
  top: 30%;
  position: relative;
  font-size: 40px;
  color: #eee;
}

.error-text a {
  color: #eee;
}

.error-text a:hover {
  color: #fff;
}

.error-text p {
  margin: 5rem 0 0 0;
  font-size: 1.1111rem;
  font-weight: 500;
}

.error-text i {
  margin-left: 10.0008px;
}

.error-text p.hmpg {
  margin: 40px 0 0 0;
}

.error-text span {
  position: relative;
  background: #4c4c4ce7;
  color: #fff;
  font-size: 300%;
  padding: 0 20px;
  border-radius: 20px;
  font-weight: bolder;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  /* cursor: pointer; */
  margin: 0 0 40px 0;
}

.error-text span:hover {
  background: #4c4c4c;
  color: #fff;
  -webkit-animation: jelly 0.5s;
  animation: jelly 0.5s;
}

.error-text span:after {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(136, 183, 213, 0);
  border-top-color: #4c4c4ce7;
  border-width: 7px;
  margin-left: -7px;
}

.back:active {
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
  background: #f53b3b;
  color: #fff;
}

.back:hover {
  background: #4c4c4c;
  color: #fff;
}

.back {
  text-decoration: none;
  background: rgba(255, 54, 0, 0.8);
  color: #fff;
  padding: 10px 20px;
  font-size: 0.8889rem;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 20px;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

/* CSS Error Page Responsive */

@media (max-width: 640px) {
  .not-found span {
    font-size: 200%;
  }
  .error-text a:hover {
    color: #fff;
  }
}
</style>
