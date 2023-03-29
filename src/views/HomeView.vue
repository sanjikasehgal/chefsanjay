<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="background">
    <div class="home">
      <img alt="icon" src="/center-logo-4.png" width="250" height="250" />
      <RouterLink to="/menu">
        <img alt="icon" src="/menu/check-menu-1.png" width="250" />
      </RouterLink>
    </div>
  </div>
</template>

<style>
.background {
  background-image: url('/background/background-4-bigger.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-color: #ff53dd33;
  position: relative;
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

img {
  display: flex;
}

@media only screen and (max-width: 700px) {
  .background {
    background-image: url('/background/background.jpg');
  }
}
</style>
