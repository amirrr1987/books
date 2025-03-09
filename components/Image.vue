<template>
  <a :href="`/images/refactoring-ui/${props.name}`">
    <div class="flex flex-col items-center gap-4 my-12">
      <div
        v-if="double"
        class="flex"
        :style="{ columnGap: `${props.double.gap}rem` }"
      >
        <img
          class="w-8 h-8"
          :src="`/images/refactoring-ui/${props.double.sort[0]}.png`"
          alt="label"
        />

        <img
          class="w-8 h-8"
          :src="`/images/refactoring-ui/${props.double.sort[0]}.png`"
          alt="label"
        />
      </div>

      <div v-if="single" class="flex">
        <img
          class="w-8 h-8"
          :src="`/images/refactoring-ui/${props.single}.png`"
          alt="label"
        />
      </div>

      <img :src="`/images/refactoring-ui/${props.name}`" alt="main" />
    </div>
  </a>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  single: "bad" | "good" | "question";
  double: {
    sort: ["bad", "good"] | ["good", "bad"];
    gap: number;
  };
}

const props = defineProps<Props>();
</script>
