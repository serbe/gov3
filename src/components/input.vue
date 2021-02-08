<template>
  <div :class="divClasses">
    <input
      v-model="message"
      :autocomplete="props.autocomplete"
      :disabled="props.disabled"
      :class="inputClasses"
      :id="props.name"
      :key="props.name"
      :name="props.name"
      @blur="props.onBlur"
      @change="props.onChange"
      @click="props.onClick"
      @keypress="props.onKeyPress"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
      :type="props.type"
    />
    <BIcon v-if="props.icon" position="left" :icon="props.icon" />
    <BIcon v-if="props.iconRight" position="right" :icon="props.iconRight" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Colors, Types, Sizes } from "@/models/enums";
import BIcon from "./icon.vue";

export default defineComponent({
  name: "BInput",
  components: { BIcon },
  props: {
    autocomplete: String,
    color: {
      type: String,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.LIGHT,
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
    rounded: Boolean,
    hovered: Boolean,
    focused: Boolean,
    loading: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    icon: String,
    iconRight: String,
    className: String,
    classNameDiv: String,
    name: {
      type: String,
      required: true,
    },
    onBlur: Function,
    onChange: Function,
    onClick: Function,
    onKeyPress: Function,
    placeholder: String,
    type: {
      type: String,
      validator: (value: Types) =>
        [Types.TEXT, Types.PASSWORD, Types.EMAIL, Types.TEL].includes(value),
    },
    modelValue: {
      type: [Number, String],
    },
  },
  setup(props, { emit }) {
    const divClasses = computed(() => {
      const { classNameDiv, loading, size, icon, iconRight } = props;
      return {
        control: true,
        [`${classNameDiv}`]: classNameDiv,
        [`is-${loading}`]: loading,
        [`is-${size}`]: size,
        [`has-icons-left`]: icon,
        [`has-icons-right`]: iconRight,
      };
    });
    const inputClasses = computed(() => {
      const { className, color, size, rounded, hovered, focused } = props;
      return {
        input: true,
        [`${className}`]: className,
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        [`is-${rounded}`]: rounded,
        [`is-${hovered}`]: hovered,
        [`is-${focused}`]: focused,
      };
    });

    const message = computed({
      get: () => props.modelValue,
      set: value => emit("update:modelValue", value),
    });

    return { props, divClasses, inputClasses, message };
  },
});
</script>
