<template>
  <div id="tbMenuBarItem">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "tbMenuBarItem"
};
</script>

<style scoped>
#tbMenuBarItem {
    width:1100px;
    height:30px;
    margin: 0 auto;
    position: relative;
}
</style>