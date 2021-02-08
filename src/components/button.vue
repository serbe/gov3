<template>
  <a
    v-if="props.href"
    :href="props.href"
    @click="props.onClick"
    :class="buttonClass"
  ></a>
  <button
    v-else
    type="button"
    :disabled="props.disabled"
    @click="props.onClick"
    :class="buttonClass"
  ></button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Sizes } from "@/models/sizes";
import { Colors } from "@/models/colors";

export default defineComponent({
  name: "BButton",
  props: {
    className: String,
    color: {
      type: String,
      validator: (value: Colors) =>
        [
          Colors.WHITE,
          Colors.LIGHT,
          Colors.DARK,
          Colors.BLACK,
          Colors.TEXT,
          Colors.GHOST,
          Colors.PRIMARY,
          Colors.LINK,
          Colors.INFO,
          Colors.SUCCESS,
          Colors.WARNING,
          Colors.DANGER,
        ].includes(value),
    },
    size: {
      type: String,
      validator: (value: Sizes) =>
        [Sizes.SMALL, Sizes.NORMAL, Sizes.MEDIUM, Sizes.LARGE].includes(value),
    },
    disabled: Boolean,
    fullwidth: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    rounded: Boolean,
    hovered: Boolean,
    focused: Boolean,
    active: Boolean,
    loading: Boolean,
    href: String,
    onClick: Function,
  },
  setup(props) {
    const buttonClass = computed(() => {
      const {
        className,
        color,
        fullwidth,
        outlined,
        size,
        inverted,
        rounded,
        hovered,
        focused,
        active,
        loading,
      } = props;
      return {
        button: true,
        [`${className}`]: className,
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        [`is-${fullwidth}`]: fullwidth,
        [`is-${outlined}`]: outlined,
        [`is-${inverted}`]: inverted,
        [`is-${rounded}`]: rounded,
        [`is-${hovered}`]: hovered,
        [`is-${focused}`]: focused,
        [`is-${active}`]: active,
        [`is-${loading}`]: loading,
      };
    });

    return { props, buttonClass };
  },
});
</script>
