<template>
  <div id="tbShowItem">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "tbShowItem"
};
</script>

<style scoped>
#tbShowItem{
    width: 1100px;
    margin: 0 auto;
}

</style>