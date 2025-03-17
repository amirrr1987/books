<template>
  <Image
    class="object-contain !w-full !h-full"
    :src="`/images/refactoring-ui/${props.name}`"
    alt="main"
  />
</template>

<script setup lang="ts">
import { Image } from "ant-design-vue/es";
interface Props {
  name: string;
}

const props = defineProps<Props>();
</script>
