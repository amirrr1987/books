<template>
  <div class="flex justify-center my-12 flex-col items-center gap-4">
    <img  class="w-8 h-8" src="/images/refactoring-ui/good.png" alt="ui" />
    <img  class="w-8 h-8" src="/images/refactoring-ui/bad.png" alt="ui" />
    <img class="w-8 h-8" src="/images/refactoring-ui/question.png" alt="ui" />
    <img :src="`/images/refactoring-ui/${props.name}`" alt="ui" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  name: string;
  mood: false
}
const props = withDefaults(defineProps<Props>(), {});
</script>
