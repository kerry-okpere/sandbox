<template>
  <Component :is="$route.meta.layout || 'main'">
    <router-view></router-view>
  </Component>
</template>
