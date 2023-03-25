<script>
import Carousel from '../components/carousel/Carousel.vue'
export default {
  name: 'App',
  components: { Carousel },
  data: () => ({
    slides: ['/menu/item1.jpg', '/menu/item3.jpg', '/menu/item5.jpg', '/menu/item6.jpg']
  })
}
</script>

<template>
  <div class="menu">
    <h1>This is a Menu Page</h1>
    <carousel :slides="slides" :interval="10000" controls indicators></carousel>
  </div>
</template>

<style>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  margin: 0.5rem;
}
</style>
