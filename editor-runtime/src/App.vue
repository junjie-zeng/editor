<template>
  <uiPage :config="page"></uiPage>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import uiPage from "./components/ui-page.vue";

const page = ref();
</script>
