<template>
  <div class="flex my-12 flex-col items-center gap-4">
    <div class="flex gap-x-48" :class="props.mode === 1 ? 'flex-row': 'flex-row-reverse' " >
      <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui" />
      <img  class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui" />
    </div>
    <img :src="`/images/refactoring-ui/${props.name}`" alt="ui" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  name: string;
  mode: 1 | 2;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
