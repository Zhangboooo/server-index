<script setup lang="ts">
import * as jrsc from 'jinrishici'
import {ref} from "vue";

const toDayStudy = ref<JinRiShiCiRes>()
jrsc.load(result => {
  toDayStudy.value = result
  console.log(toDayStudy)
});


</script>

<template>
  <v-dialog max-width="600px">
    <template #activator="{ props: activatorProps }">
      <div class="wrap">
        <span>{{toDayStudy?.data.content}}</span>
        <v-btn v-bind="activatorProps" append-icon="mdi-open-in-new">学习一下</v-btn>
      </div>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card :title="toDayStudy?.data.origin.title" :subtitle="`${toDayStudy?.data.origin.dynasty}·${toDayStudy?.data.origin.author}`">
        <v-card-text>
          <v-list style="max-height: 500px" lines="one">
            <v-list-item
              v-for="line in toDayStudy?.data.origin.content"
              :key="line"
            >{{ line }}</v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text="学废了"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.wrap{
  display: inline-block;
  .v-btn {
    opacity: 0;
  }
  &:hover .v-btn{
    opacity: 1;
  }
}
</style>
