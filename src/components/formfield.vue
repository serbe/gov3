<template>
  <div className="field">
    <label v-if="props.label" class="label">{{ props.label }} </label>
    <BInput
      v-model="message"
      :autocomplete="props.autocomplete"
      :color="props.color"
      :size="props.size"
      :rounded="props.rounded"
      :hovered="props.hovered"
      :focused="props.focused"
      :loading="props.loading"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :icon="props.icon"
      :iconRight="props.iconRight"
      :className="props.className"
      :classNameDiv="props.classNameDiv"
      :name="props.name"
      :onBlur="props.onBlur"
      :onChange="props.onChange"
      :onClick="props.onClick"
      :onKeyPress="props.onKeyPress"
      :placeholder="props.placeholder"
      :type="props.type"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Colors, Types, Sizes } from "@/models/enums";
import BInput from "./input.vue";

export default defineComponent({
  name: "BFormField",
  components: { BInput },
  props: {
    label: String,
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
    const message = computed({
      get: () => props.modelValue,
      set: value => emit("update:modelValue", value),
    });

    return { message, props };
  },
});
</script>
