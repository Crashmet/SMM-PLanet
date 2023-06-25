<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <!-- /.col-lg-4 -->
        <div class="col-lg-4 col-left">
          <div class="widget">
            <ul class="list-unstyled float-start links">
              <li>
                <nuxt-link class="footer-logo" to="/">
                  <h2 class="footer-logo__title">SMM Planeta</h2>
                  <p class="footer-logo__desc">более 50000 блогеров</p>
                </nuxt-link>
              </li>
              <li><a href="">Информация</a></li>
              <li><a href="">Данные организации</a></li>
              <li><a href="">Данные об оплате</a></li>
              <li><a href="">Условия использования</a></li>
              <li><a href="">Политика обработки персональных данных</a></li>
              <li><a href="">Оферта о заключении оказания услуг</a></li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <div class="widget">
            <h3>Contacts</h3>
            <address>
              <a
                target="_blank"
                href="https://yandex.ru/maps/213/moscow/house/aviamotornaya_ulitsa_59/Z04YcQVhQUAPQFtvfXt1cH5lYw==/?ll=37.721857%2C55.741267&z=16"
              >
                Адрес: ул. Авиамоторная, д.59, помещение 21.2, Москва, Россия
              </a>
            </address>
            <ul class="list-unstyled links">
              <li>
                <a href="tel:+74956468335">Телефон: +7 495 646 83 35</a>
              </li>

              <li>
                <a href="mailto:info@smmplaneta.ru"
                  >Email: info@smmplaneta.ru</a
                >
              </li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <div class="widget">
            <h3>Links</h3>
            <ul class="list-unstyled links">
              <li><a href="">Our Vision</a></li>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
            </ul>

            <ul class="list-unstyled social">
              <li>
                <a href=""><span class="icon-instagram"></span></a>
              </li>
              <li>
                <a href=""><span class="icon-twitter"></span></a>
              </li>
              <li>
                <a href=""><span class="icon-facebook"></span></a>
              </li>
              <li>
                <a href=""><span class="icon-linkedin"></span></a>
              </li>
              <li>
                <a href=""><span class="icon-pinterest"></span></a>
              </li>
            </ul>

            <!-- <div class="list-unstyled">
              <p class="footer-subscribe__label">
                Получайте специальные предложения и новости сервиса
              </p>

              <form action="#" autocomplete="" class="footer-subscribe__form">
                <input
                  type="email"
                  name="email"
                  placeholder="mail@example.com"
                  class="footer-subscribe__input"
                />
                <button class="footer-subscribe__btn">
                  <span class="footer-subscribe__btn-arrow"></span>
                </button>
              </form>
            </div> -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <div class="row mt-5">
        <div class="col-12 text-center">
          <!-- 
              **==========
              NOTE: 
              Please don't remove this copyright link unless you buy the license here https://untree.co/license/  
              **==========
            -->

          <p>
            Copyright &copy;
            <script>
              document.write(new Date().getFullYear());
            </script>
            . All Rights Reserved. &mdash; Designed with love by
            <a href="https://untree.co">Untree.co</a>
            <!-- License information: https://untree.co/license/ -->
          </p>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.col-left {
  margin-bottom: 30px;
}
.footer-logo {
  text-decoration: none;
  margin-bottom: 15px;
}

.footer-logo__title {
  margin-bottom: 0;
  font-size: 1.4em;
  line-height: 1.4rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
  -webkit-transition: text-shadow 0.3s ease-in;
  -o-transition: text-shadow 0.3s ease-in;
  transition: text-shadow 0.3s ease-in;
}

.footer-logo:hover > .footer-logo__title,
.footer-info__logo:active > .footer-logo__title {
  text-shadow: 4px 1px 6px #ff5900;
  -webkit-transition: text-shadow 0.2s ease-in;
  -o-transition: text-shadow 0.2s ease-in;
  transition: text-shadow 0.2s ease-in;
}

.footer-logo__desc {
  font-weight: 500;
  font-size: 0.8rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.footer-subscribe__label {
  font-size: 0.8889rem;
  color: #0d0d0d;
  margin-bottom: 1.7778rem;
}

.footer-subscribe__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  border-radius: 16px;
  background: #ffffff;
  -webkit-filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}
.footer-subscribe__input {
  padding-left: 0.6667rem;
  width: 100%;
  height: 2.2rem;
  border: none;
  border-radius: 16.0002px;
  background: #ffffff;
  font-size: 0.8889rem;
  line-height: 1.1667rem;
}

.footer-subscribe__btn {
  right: 0;
  bottom: 0;
  padding: 0.5556rem 1.6667rem;
  background: rgba(255, 54, 0, 0.8);
  border-radius: 16.0002px;
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.footer-subscribe__btn:hover,
.footer-subscribe__btn:active {
  background: rgba(255, 54, 0, 0.91);
}

.footer-subscribe__btn-arrow {
  display: inline-block;
  width: 0.6667rem;
  height: 0.6667rem;
  border-top: 0.2222rem solid #ffffff;
  border-right: 0.2222rem solid #ffffff;
  transform: rotate(45deg);
}
</style>
