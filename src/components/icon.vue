<template>
  <span :class="spanClasses">
    <i :class="iClasses"></i>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

type colorType = "info" | "success" | "warning" | "danger";
type positionType = "left" | "right";

export default defineComponent({
  name: "BulmaIcon",
  props: {
    className: String,
    color: {
      type: Object as () => colorType,
    },
    icon: String,
    position: { type: Object as () => positionType },
  },
  setup(props) {
    const iClasses = computed(() => `fas fa-${props.icon}`);
    const spanClasses = computed(
      () =>
        `icon ${props.className || ""} ${
          props.color ? `has-text-${props.color}` : ""
        } ${props.position ? `is-${props.position}` : ""}`,
    );
    return {
      iClasses,
      spanClasses,
    };
  },
});
</script>
