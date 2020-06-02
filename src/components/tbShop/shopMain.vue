<template>
  <div id="shopMain">
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
    <shop-main-item>
      <shop-categories slot="shopCategories" />
      <shop slot="shop" />
    </shop-main-item>

  </div>
</template>

<script>
import shopMainItem from "./shopMainItem";
import tbNavBar from "../tbMain/tbNavBar";
import tbNavBarItem from "../tbMain/tbNavBarItem";
import NavLeft from "@/views/tbMain/NavLeft";
import NavRight from "@/views/tbMain/NavRight";
import tbSerchBar from "../tbMain/tbSerchBar";
import tbSerchItem from "../tbMain/tbSerchItem";
import SerchLeft from "@/views/tbMain/SerchLeft";
import SerchMiddle from "@/views/tbMain/SerchMiddle";
import shopCategories from "@/views/tbShop/shopCategories";
import shop from "@/views/tbShop/shop";

export default {
  name: "shopMain",
  components: {
    shopMainItem,
    tbNavBar,
    tbNavBarItem,
    NavLeft,
    NavRight,
    tbSerchBar,
    tbSerchItem,
    SerchLeft,
    SerchMiddle,
    shopCategories,
    shop
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#shopMain {
  background-color: #f5f5f5;
  width: 100%;
  height: 680px;
}
</style>