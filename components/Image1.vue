<template>
  <div class="flex justify-center my-12 flex-col items-center gap-4">
    <img :src="`/images/refactoring-ui/${props.name}`" alt="ui" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  name: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
