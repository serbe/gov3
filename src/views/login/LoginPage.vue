<template>
  <div class="container w300">
    <form @submit.prevent="">
      <div class="box mt-4">
        <h3 class="title is-3">Авторизация</h3>
        <BFormField
          name="name"
          type="text"
          icon="user"
          label="Имя пользователя"
          autocomplete="udds-password"
          v-model="name"
        />
        <BFormField
          name="password"
          type="password"
          icon="key"
          label="Пароль"
          v-model="pass"
        />
        <div class="field">
          <div class="control">
            <button type="button" class="button" :onClick="submit">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { login } from "@/services/auth";
import BFormField from "@/components/formfield.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  components: { BFormField },
  setup() {
    const name = ref("");
    const pass = ref("");
    const router = useRouter();

    const submit = () =>
      login(name.value, pass.value).then(result => {
        if (result) router.back();
      });

    return {
      name,
      pass,
      submit,
    };
  },
});
</script>
