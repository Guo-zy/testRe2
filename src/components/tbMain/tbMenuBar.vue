<template>
  <div id="tbMenuBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tbMenuBar"
};
</script>

<style scoped>
#tbMenuBar {
  width: 100%;
  height: 30px;
}
</style>