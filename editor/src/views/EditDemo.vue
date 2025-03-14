<template>
  <div class="container">
    <div class="left">
      <button @click="handleAdd">添加</button>
    </div>
    <div class="center">
      <iframe
        ref="iframeRef"
        src="http://localhost:8087/#/runtime-demo"
        frameborder="0"
        width="100%"
        height="100%"
        @load="onload"
      ></iframe>
    </div>
    <div class="right">3</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

let iframeApi = null;
const iframeRef = ref(null);

const handleAdd = () => {
  console.log(" iframeRef.value", iframeRef.value.contentWindow);
};

const onload = () => {
  iframeRef.value.contentWindow.magic = {
    onRuntimeReady: (api) => {
      console.log("sssss");

      iframeApi = api;
    },
  };
  console.log("onload ....", iframeRef.value.contentWindow);
};
</script>
<style>
.container {
  display: flex;
  height: 600px;
}
.left {
  width: 400px;
  padding: 50px;
  background: #e8e8e8;
}
.center {
  flex: 1;
}
.right {
  width: 400px;
  background: hwb(199 4% 14%);
}
</style>
