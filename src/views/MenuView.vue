<script lang="ts">
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
  <h2>Menu</h2>
  <div class="menu">
    <img class="item" alt="menu" src="@/assets/menu.png" width="490" />
    <carousel class="item" :slides="slides" :interval="5000" controls indicators> </carousel>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
}
h2 {
  font-style: italic;
  width: 300px;
  text-align: center;
  align-self: center;
}

.item {
  padding: 0 30px 0 30px;
}

@media only screen and (max-width: 700px) {
  .item {
    width: 340px;
    padding: 10px;
  }
}
</style>
