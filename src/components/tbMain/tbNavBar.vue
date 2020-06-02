<template>
  <div id="NavBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tbNavBar"
};
</script>

<style scoped>
.NavBar {
  width: 100%;
  height: 30px;
  background-color: #f5f5f5;
}
</style>