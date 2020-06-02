<template>
  <div id="search-bg">
    <!-- <div class="search-l">
      <a style="cursor:pointer" @click="goTaobao()"></a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "SerchLeft",
  methods:{
    goTaobao(){
      this.$router.push("/taobao");
    }
  }
};
</script>

<style scoped>
#search-bg {
  position: relative;
  width: 1100px;
  height: 120px;
  margin-left: 125px;
  float: left;
}
#search-bg .search-l {
  width: 200px;
  height: 100px;
  position: absolute;
  left: 35px;
  top: 20px;
}
#search-bg .search-l a {
  display: inline-block;
  width: 142px;
  height: 70px;
  background-image: url("https://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png");
  background-size: 100% 100%;
}
</style>