<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <img :src="slide" width="350" height="630" />
    </div>
  </transition>
</template>

<script>
export default {
  emits: ['mouseenter', 'mouseout'],
  props: ['slide', 'currentSlide', 'index', 'direction'],
  computed: {
    transitionEffect() {
      return this.direction === 'right' ? 'slide-out' : 'slide-in'
    }
  }
}
</script>

<style scoped>
.carousel-item {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 350px;
  max-height: 630px;
}
</style>
