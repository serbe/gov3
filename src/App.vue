<template>
  <div class="container px-4 py-4">
    <router-view></router-view>
  </div>
  <footer class="footer bot">
    <div class="container">
      <div class="content has-text-centered">© 2021 Сочи</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { useStore } from "vuex";
import { check } from "./services/auth";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      check()
        .then(() => {
          /* all good */
        })
        .catch(() => {
          router.push("/login");
        });
    });

    onBeforeRouteLeave((to, _, next) => {
      if (to.name !== "Login" && !store.getters.isAuth) {
        next({ name: "Login" });
      } else {
        next();
      }
    });

    return {};
  },
});
</script>

<style lang="scss">
@charset "utf-8";
@import "../node_modules/bulma/bulma.sass";

// $size-1: 2.5rem;
// $size-2: 2.08rem;
// $size-3: 1.66rem;
// $size-4: 1.25rem;
// $size-5: 1.04rem;
// $size-6: 0.83rem;
// $size-7: 0.62rem;

.centered-content {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}

.w250 {
  min-width: 250px !important;
  max-width: 80% !important;
}

.fixed {
  table-layout: fixed;
}

.w95 {
  width: 95px !important;
}

.full-width {
  width: 100%;
}

.link {
  cursor: pointer;
}

.nowrap {
  white-space: nowrap;
}

.w300 {
  width: 300px;
}

.mla {
  margin-left: auto;
}
</style>
