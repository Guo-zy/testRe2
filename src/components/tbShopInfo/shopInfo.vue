<template>
  <div id="shopInfo">
    <tb-nav-bar>
      <tb-nav-bar-item>
        <nav-left slot="navLeft" />
        <nav-right slot="navRight" />
      </tb-nav-bar-item>
    </tb-nav-bar>
    <tb-serch-bar>
      <tb-serch-item>
        <serch-left slot="left" />
        <serch-middle slot="middle" />
      </tb-serch-item>
    </tb-serch-bar>
    <shop-info-main ></shop-info-main>
    <rate-main :shopid="id"></rate-main>
    <login-bottom ></login-bottom>
  </div>
</template>

<script>
import tbNavBar from "../tbMain/tbNavBar";
import tbNavBarItem from "../tbMain/tbNavBarItem";
import NavLeft from "@/views/tbMain/NavLeft";
import NavRight from "@/views/tbMain/NavRight";
import tbSerchBar from "../tbMain/tbSerchBar";
import tbSerchItem from "../tbMain/tbSerchItem";
import SerchLeft from "@/views/tbMain/SerchLeft";
import SerchMiddle from "@/views/tbMain/SerchMiddle";
import shopInfoMain from "@/views/tbShopInfo/shopInfoMain"
import rateMain from "@/views/tbShopInfo/rateMain"
import LoginBottom from "@/views/tbLogin/LoginBottom";
export default {
  name: "shopInfo",
  created(){
    this.id=Number(this.$route.params.id);
  },
  date(){
    return {
        id:''
    }
  },
  components: {
    tbNavBar,
    tbNavBarItem,
    NavLeft,
    NavRight,
    tbSerchBar,
    tbSerchItem,
    SerchLeft,
    SerchMiddle,
    shopInfoMain,
    rateMain,
    LoginBottom
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#shopInfo {
  background-color: #f5f5f5;
  width: 100%;
  /* height: 680px; */
}
</style>