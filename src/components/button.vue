<template>
  <a
    v-if="href"
    href="{props.href}"
    onClick="{props.onClick}"
    className="{props.classes}"
  ></a>
  <button
    v-else
    type="button"
    disabled="{props.disabled}"
    onClick="{props.onClick}"
    className="{props.classes}"
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
