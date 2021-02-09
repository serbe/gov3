import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { checkStorage } from "./services/auth";
import { store } from "./store";

const app = createApp(App);
checkStorage().then(() => {
  app.use(store);
  app.use(router);

  router.isReady().then(() => app.mount("#app"));
});
