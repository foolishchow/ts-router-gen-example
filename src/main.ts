import Vue from 'vue'
import { AppKeel } from "./views/keel"
import "./main.css"
import { AppRoutes } from './router'
import VueRouter from "vue-router"

Vue.config.productionTip = false

const router = new VueRouter({
  routes: AppRoutes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(AppKeel)
}).$mount('#app')
