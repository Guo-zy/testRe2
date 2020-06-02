<template>
  <div id="NavBar">
    <slot name="navLeft"></slot>
    <slot name="navRight"></slot>
  </div>
</template>

<script>

export default {
  name: "tbNavBarItem",

};
</script>

<style scoped>

#NavBar{
    width: 1100px;
    height: 30px;
    position: relative;
    margin :0 auto;
}


</style>