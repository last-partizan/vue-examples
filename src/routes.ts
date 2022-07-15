import {RouteConfig} from "vue-router"

import App from "./App.vue";

const routes: RouteConfig[] = [
  {
    path: "/my/orders/",
    name: "OrdersTable",
    component: App,
  },
];

export default routes;
