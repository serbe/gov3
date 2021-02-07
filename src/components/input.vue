<template>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BulmaIcon from './icon.vue';

type inputType = 'text' | 'password' | 'email' | 'tel';

export default defineComponent({
  name: "BulmaInput",
  components: {BulmaIcon},
  props: {
    autocomplete: String,
    className: String,
    classNameDiv: String,
    disabled: Boolean,
    icon: String,
    iconRight: String,
    name: {
      type: String,
      required: true,
    },
    onBlur: Function,
  onChange: Function,
  onClick: Function,
  onKeyPress: Function,
  placeholder: String,
  readonly: Boolean,
  type: Object as () => inputType,
  // inputValue: {type: Number | String, },
  },
  setup (props) {

    }
});
</script>


  const divClasses = `control ${classNameDiv || ''} ${icon ? 'has-icons-left' : ''} ${
    iconRight ? 'has-icons-right' : ''
  }`;

  return (
    <div className={divClasses}>
      <input
        autoComplete={autocomplete}
        className={`${className || ''} input`}
        defaultValue={value}
        disabled={disabled}
        id={name}
        key={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        readOnly={readonly}
        type={type}
      />
      {icon && <Icon position="left" icon={icon} />}
      {iconRight && <Icon position="right" icon={iconRight} />}
    </div>
  );
};
