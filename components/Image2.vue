<template>
  <div class="flex justify-center my-12 flex-col items-center gap-4">
    <img v-if="props.isBad" class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui" />
    <img v-else class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui" />
    <img :src="`/images/refactoring-ui/${props.name}`" alt="ui" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  name: string;
  isBad: false
}
const props = withDefaults(defineProps<Props>(), {});
</script>
