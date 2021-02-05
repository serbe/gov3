<template>
  <a
    v-if="href"
    :href="props.href"
    @click="props.onClick"
    :class="props.classes"
  ></a>
  <button
    v-else
    type="button"
    :disabled="props.disabled"
    @click="props.onClick"
    :class="props.classes"
  ></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BButton",
  props: {
    className: String,
    disabled: Boolean,
    href: String,
    onClick: Object,
  },
  setup(props) {
    const classes = () =>
      props.className ? `button ${props.className}` : "button";

    return { classes, props };
  },
});
</script>
