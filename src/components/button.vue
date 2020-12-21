<template>
  <a v-if="href" href="{href}" onClick="{onClick}" className="{classes}">
    {children}
  </a>
  <button
    v-else
    type="button"
    disabled="{disabled}"
    onClick="{onClick}"
    className="{classes}"
  >
    {children}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

// interface ButtonProperties {
//   children?: string;
//   className?: string;
//   disabled?: boolean;
//   href?: string;
//   //   onClick?: (
//   //     event: MouseEvent<
//   //       HTMLAnchorElement | HTMLButtonElement | HTMLInputElement,
//   //       globalThis.MouseEvent
//   //     >,
//   //   ) => void;
// }

export default defineComponent({
  name: "BButton",
  props: {
    children: String,
    className: String,
    disabled: Boolean,
    href: String,
    onClick: Object,
  },
  setup(props) {
    const count = ref(0);
    const increase = () => {
      count.value++;
    };

    // return {
    //   count,
    //   increase,
    // };
  },
  computed: {
    classes(): string {
      return `button ${this.className || ""}`;
    },
  },
});
</script>
