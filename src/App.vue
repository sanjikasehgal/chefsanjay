<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Logo" class="logo" src="/logo-3.png" width="120" height="120"
    /></RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/menu">Menu</RouterLink>
      <RouterLink to="/story">Our Story</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
header {
  display: flex;
  background-color: rgb(255 203 83);
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: large;
}
</style>
