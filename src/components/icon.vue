<template>
  <span :class="spanClasses">
    <i :class="iClasses"></i>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "BulmaIcon",
  props: {
    className: String,
    color: {
      type: String,
      validator: function(value) {
        return (
          ["info" | "success" | "warning" | "danger"].indexOf(value) !== -1
        );
      },
    },
    // icon: String,
    // position?: 'left' | 'right';
  },
  setup(props) {
    const iClasses = computed(() => `fas fa-${icon}`);
    const spanClasses = computed(
      `icon ${props.className || ""} ${
        props.color ? `has-text-${props.color}` : ""
      } ${props.position ? `is-${props.position}` : ""}`,
    );
    return {
      iClasses,
    };
  },
});
</script>
