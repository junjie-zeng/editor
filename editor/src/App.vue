<!-- <template>
  <RouterView />
</template> -->


<template>
  <m-editor
    v-model="value"
    :runtime-url="runtimeUrl"
    :component-group-list="componentGroupList"
  />
</template>

<script lang="ts" setup>
import {
  ref,
} from 'vue';

const value = ref({
  type: 'app',
  id: 1,
  items: [],
});

const componentGroupList = ref([
  {
    title: '组件列表',
    items: [
      {
        icon: 'https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png',
        text: 'HelloWorld',
        type: 'hello-world',
      },
    ],
  },
]);

const runtimeUrl = 'http://localhost:8087/';
</script>

<style>
html,
body,
#app,
.m-editor {
  height: 100vh;
}

body {
  margin: 0;
}
</style>