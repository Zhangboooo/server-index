import { h } from 'vue'
import type { IconSet, IconProps } from 'vuetify'
import CustomIcon from "@/plugins/customIcons/CustomIcon.vue";

const custom: IconSet = {
  component: (props: IconProps) => h(CustomIcon, props),
}

export { custom }
