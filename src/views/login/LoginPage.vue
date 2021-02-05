<template>
  <div class="container w300">
    <!-- <form onSubmit={submitHandler}> -->
    <div class="box mt-4">
      <h3 class="title is-3">Авторизация</h3>
      <FormField
        name="name"
        type="text"
        icon="user"
        label="Имя пользователя"
        autocomplete="udds-password"
        v-model="name"
      />
      <FormField
        name="password"
        type="password"
        icon="key"
        label="Пароль"
        v-model="pass"
      />
      <div class="field">
        <div class="control">
          <button type="button" class="button">Отправить</button>
        </div>
      </div>
    </div>
    <!-- </form> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const name = ref("");
    const pass = ref("");

    //   const submit = (): void => login(name, pass, setAuth);

    //   const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //   };
    return {
      name,
      pass,
    };
  },
});
</script>
