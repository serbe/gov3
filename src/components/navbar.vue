<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <template v-if="isLoggedIn">
          <router-link to="/" class="navbar-item" exact>ЕДДС</router-link>
          <router-link to="/contacts" class="navbar-item">Контакты</router-link>
          <router-link to="/companys" class="navbar-item"
            >Организации</router-link
          >
        </template>
        <router-link
          v-else
          key="NavbarNotLogged"
          to="/login"
          class="navbar-item"
          >Авторизация</router-link
        >
        <div
          class="navbar-burger burger"
          data-target="navMenu"
          :class="active"
          @click="toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu" :class="active">
        <div class="navbar-start">
          <template v-if="isLoggedIn">
            <router-link to="/sirens" class="navbar-item">Сирены</router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Справочники</a>
              <div class="navbar-dropdown">
                <router-link
                  to="/departments"
                  class="navbar-item"
                  @click="toggle"
                  >Отделы</router-link
                >
                <router-link
                  to="/educations"
                  class="navbar-item"
                  @click="toggle"
                  >Обучение</router-link
                >
                <router-link to="/kinds" class="navbar-item" @click="toggle"
                  >Типы</router-link
                >
                <router-link to="/posts" class="navbar-item" @click="toggle"
                  >Должности</router-link
                >
                <router-link to="/practices" class="navbar-item" @click="toggle"
                  >Учения</router-link
                >
                <router-link to="/ranks" class="navbar-item" @click="toggle"
                  >Чины</router-link
                >
                <router-link to="/scopes" class="navbar-item" @click="toggle"
                  >Сферы</router-link
                >
                <router-link
                  to="/certificates"
                  class="navbar-item"
                  @click="toggle"
                  >Удостоверения</router-link
                >
                <hr class="navbar-divider" />
                <router-link
                  to="/sirentypes"
                  class="navbar-item"
                  @click="toggle"
                  >Типы сирен</router-link
                >
              </div>
            </div>
          </template>
        </div>
        <div v-if="isLoggedIn" class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">{{ user }}</a>
            <div class="navbar-dropdown is-right">
              <div class="field navbar-item">
                <bulma-button
                  key="user"
                  text="Выход"
                  color="info"
                  @click="logout"
                ></bulma-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import mixItem from "@/mixins/mixItem";
import BulmaButton from "@/components/BulmaButton";

export default {
  name: "BulmaNavBar",
  components: {
    "bulma-button": BulmaButton,
  },
  mixins: [mixItem],
  data() {
    return {
      active: "",
      tabShow: false,
      tabSirenShow: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user() {
      return this.$store.getters.loggedUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    toggle() {
      this.active = this.active === "" ? "is-active" : "";
    },
    toggleTab() {
      this.tabShow = !this.tabShow;
      this.tabSirenShow = false;
    },
    toggleSirenTab() {
      this.tabSirenShow = !this.tabSirenShow;
      this.tabShow = false;
    },
  },
};
</script>

<style scoped>
.is-active {
  border-bottom: 3px solid #363636;
}
</style>
