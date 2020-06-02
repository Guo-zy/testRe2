<template>
  <div id="tbLoginItem">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "tbLoginItem"
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 100px;
  position: relative;
}
.middle {
  width: 100%;
  height: 540px;
  position: relative;
  background: url(../../assets/image/tbg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bottom {
  margin-top: 55px;
  height: 130px;
  width: 100%;
}
</style>
