<script lang="ts">
export default {
  emits: ['prev', 'next']
}
</script>

<template>
  <button @click="$emit('prev')">
    <img class="left" src="https://img.icons8.com/ios/100/null/circled-chevron-left.png" />
  </button>
  <button @click="$emit('next')">
    <img class="right" src="https://img.icons8.com/ios/100/null/circled-chevron-right--v1.png" />
  </button>
</template>

<style scoped>
.left {
  left: 5px;
}
.right {
  right: 5px;
}
img {
  display: inline-block;
  position: absolute;
  cursor: pointer;
  top: calc(50%);
  height: 40px;
  background-color: #dcdee18f;
  cursor: pointer;
  border-radius: 50%;
  border: none;
}
</style>
