<script setup lang="ts">
import {onMounted, ref} from "vue";

const pcList = ref<any[]>([])
onMounted(async () => {
  pcList.value = await (await fetch('/api/wol')).json()
  console.log(pcList)
})
</script>

<template>
<div>
  <v-list lines="two">
    <v-list-item
      v-for="pc in pcList"
      :key="pc.id"
      :title="pc.name"
      :subtitle="pc.ipv4"
      prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"
    ></v-list-item>
  </v-list>
</div>
</template>

<style scoped>

</style>
