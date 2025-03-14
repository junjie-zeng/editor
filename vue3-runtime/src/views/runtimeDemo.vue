<template>
  <div>
    <p v-for="(item, index) in page" :key="index">{{ item.name }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const page = ref([{ name: Date.now() }]);

onMounted(() => {
  window.magic?.onRuntimeReady({
    /** 新增组件时调用 */
    add(item) {
      page.value.push(item);
    },
    /** 删除组件时调用 */
    remove(index) {
      page.value.splice(index, 1);
    },
  });
});

console.log("window.magic", window);
</script>
