<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title>Steam Trade Desk</v-app-bar-title>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/profile">
        Profile
      </NuxtLink>
    </v-app-bar>
    <v-main>
      <slot/>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
