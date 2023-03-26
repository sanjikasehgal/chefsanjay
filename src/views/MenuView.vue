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
    <h2>Our Delicious Flavours</h2>
    <carousel :slides="slides" :interval="5000" controls indicators></carousel>
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
h2 {
  font-style: italic;
}
</style>
