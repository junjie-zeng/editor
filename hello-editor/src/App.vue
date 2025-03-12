<template>
  <m-editor
    v-model="value"
    :runtime-url="runtimeUrl"
    :component-group-list="componentGroupList"
  ></m-editor>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, computed, nextTick } from "vue";
import { editorService } from "@tmagic/editor";

const value = ref({
  type: "app",
  // 必须加上ID，这个id可能是数据库生成的key，也可以是生成的uuid
  id: 1,
  items: [{ id: 2 }],
});
const page = computed(() => editorService.get<MPage>("page"));

const componentGroupList = ref([
  {
    title: "组件列表",
    items: [
      {
        icon: "https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png",
        text: "HelloWorld",
        type: "hello-world",
      },
    ],
  },
]);
const runtimeUrl = "http://localhost:8087";

// const render = () => window.document.createElement('div');

onMounted(() => {
  window.addEventListener("message", ({ data }) => {
    if (!data.tmagicRuntimeReady) {
      return;
    }

    window.magic?.onRuntimeReady({
      /** 当编辑器的dsl对象变化时会调用 */
      updateRootConfig(config: MApp) {
        root.value = config;
      },

      /** 当编辑器的切换页面时会调用 */
      updatePageId(id: Id) {
        page.value = root.value?.items?.find((item) => item.id === id);
      },

      /** 新增组件时调用 */
      add({ config }: UpdateData) {
        const parent = config.type === "page" ? root.value : page.value;
        parent.items?.push(config);
      },

      /** 更新组件时调用 */
      update({ config }: UpdateData) {
        const index = page.value.items?.findIndex(
          (child: MNode) => child.id === config.id
        );
        page.value.items.splice(index, 1, reactive(config));
      },

      /** 删除组件时调用 */
      remove({ id }: RemoveData) {
        const index = page.value.items?.findIndex(
          (child: MNode) => child.id === id
        );
        page.value.items.splice(index, 1);
      },
    });
  });
});

watch(page, async () => {
  // page配置变化后，需要等dom更新
  await nextTick();
  window?.magic?.onPageElUpdate(pageComp.value?.$el);
});
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
