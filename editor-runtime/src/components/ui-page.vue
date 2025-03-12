<template>
  <div v-if="config" :data-tmagic-id="config.id" :style="style">
    <div v-for="node in config.items" :key="node.id" :data-tmagic-id="node.id">
      hello world
    </div>
  </div>
  test
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  config: any;
}>();

const style = computed(() => {
  const { width = 375, height = 1700 } = props.config.style || {};
  return {
    width: `${width}px`,
    height: `${height}px`
  };
});

console.log('props',props.config);




</script>
