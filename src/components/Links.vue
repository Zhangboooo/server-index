<template>
  <v-container >
    <v-row >
      <v-col
        v-for="link in links"
        :key="link.href"
        cols="12"
      >
          <v-card
            :prepend-icon="link.icon"
            append-icon="mdi-open-in-new"
            :title="link.name"
            :subtitle="link.href"
            :href="link.href"
            target="_blank"
          >
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const links = [
  {
    name: 'vscode tunnel | 远程开发',
    href: 'https://vscode.dev/tunnel/zhangbo-server-ubunt',
    icon: 'custom:vscode',
    text: ''
  },
  {
    name: 'vscode remote-SSH | 远程开发',
    href: 'http://192.168.120.65/server-docs/dev-remote/vscode.html',
    icon: 'custom:vscode',
    text: ''
  },
  {
    name: 'JetBrains Gateway | 远程开发',
    href: 'http://192.168.120.65/server-docs/dev-remote/jetbrains.html',
    icon: 'custom:jetbrains',
    text: ''
  },
  {
    name: 'nginxConfig | nginx配置可视化',
    href: 'http://192.168.120.65:8080/',
    icon: 'custom:nginx',
    text: ''
  },
  {
    name: 'portainer.io | docker管理',
    href: 'https://192.168.120.65:9443/',
    icon: 'custom:portainer',
    text: ''
  },
  {
    name: 'v2rayA | 科学上网',
    href: 'http://192.168.120.65:2017/',
    icon: 'custom:v2rayA',
    text: ''
  },
  {
    name: 'Jenkins | 自动化',
    href: 'http://192.168.120.65:49999/',
    icon: 'custom:jenkins',
    text: ''
  },
  {
    name: 'AList | 对象存储',
    href: 'http://192.168.120.65:5244/',
    icon: 'custom:alist',
    text: ''
  },
  {
    name: 'WOL唤醒工具',
    href: 'http://192.168.120.65:65530/',
    icon: 'custom:power',
    text: ''
  },
  {
    name: '文档',
    href: 'http://192.168.120.65/server-docs/',
    icon: 'custom:docs',
    text: ''
  },
]

</script>
