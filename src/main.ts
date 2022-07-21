import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("./App.vue"),
    },
  ],
});

new Vue({
  router,
  render: (h) => h("router-view"),
}).$mount('#app')
