<template>
  <v-app>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
      </template>

      <v-app-bar-title>
        <JinRiShiCi/>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover rail>
      <v-list active-color="primary" nav>
        <v-list-item link title="终端" to="/Terminal" prepend-icon="mdi-console"></v-list-item>
        <v-list-item link title="目录（home）" to="/Filebrowser" prepend-icon="mdi-folder-multiple"></v-list-item>
        <v-list-item link title="网络唤醒" to="/Wol" prepend-icon="mdi-power"></v-list-item>
        <v-list-item link title="DifyAi" to="/DifyAi" prepend-icon="mdi-chat"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-navigation-drawer location="right" width="500">
      <Links />
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts" setup>

import JinRiShiCi from "@/components/JinRiShiCi.vue";
</script>
