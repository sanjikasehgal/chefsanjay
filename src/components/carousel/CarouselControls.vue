<template>
  <!-- todo change buttons to nice icons -->
  <button class="carousel-control left" @click="$emit('prev')">
    <img src="https://img.icons8.com/ios/100/null/circled-chevron-left.png" />
  </button>
  <button class="carousel-control right" @click="$emit('next')">
    <img src="https://img.icons8.com/ios/100/null/circled-chevron-right--v1.png" />
  </button>
</template>

<script>
export default {
  emits: ['prev', 'next']
}
</script>
<style scoped>
.carousel-control {
  display: inline-block;
  position: absolute;
  background-color: #dcdee18f;
  top: calc(50%);
  cursor: pointer;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.left {
  left: 5px;
}
.right {
  right: 5px;
}
img {
  height: 40px;
  width: 40px;
  margin-left: -6px;
  margin-top: -1px;
}
</style>
