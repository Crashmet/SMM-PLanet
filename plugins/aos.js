// import { defineNuxtPlugin } from "#app";
import AOS from "aos";
import "aos/dist/aos.css";

export default (nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
    });
  }
};
