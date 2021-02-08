<template>
  <span v-if="props.text" class="icon-text">
    <span :class="spanClass">
      <i :class="iClass"></i>
    </span>
    <span>{props.text}</span>
  </span>
  <span v-else :class="spanClass">
    <i :class="iClass"></i>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Colors, Sizes, Positions } from "@/models/enums";

export default defineComponent({
  name: "BIcon",
  props: {
    className: String,
    color: {
      type: String,
      validator: (value: Colors) =>
        [Colors.INFO, Colors.SUCCESS, Colors.WARNING, Colors.DANGER].includes(
          value,
        ),
    },
    icon: String,
    position: {
      type: String,
      default: Positions.LEFT,
      validator: (value: Positions) =>
        [Positions.LEFT, Positions.RIGHT].includes(value),
    },
    size: {
      type: String,
      validator: (value: Sizes) =>
        [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE].includes(value),
    },
    text: String,
  },
  setup(props) {
    const iClass = computed(() => {
      const { icon } = props;
      return { fas: true, [`fa-${icon}`]: icon };
    });
    const spanClass = computed(() => {
      const { className, color, position, size } = props;
      return {
        icon: true,
        [`${className}`]: className,
        [`has-text-${color}`]: color,
        [`is-${position}`]: position,
        [`is-${size}`]: size,
      };
    });
    return {
      props,
      iClass,
      spanClass,
    };
  },
});
</script>
