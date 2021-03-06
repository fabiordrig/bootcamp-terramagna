import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#265986",
    secondary: "#424242",
    accent: "#f0c424",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  options: {
    customProperties: true
  },
  iconfont: "mdi"
});
