import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

import "popper.js";
import "bootstrap";
import "./assets/app.scss";
import LoadScript from "vue-plugin-load-script";

Vue.use(LoadScript);

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("StreamWindow", require("./components/StreamWindow.vue").default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
