<template>
  <div id="tbCar">
    <tb-nav-bar>
      <tb-nav-bar-item>
        <nav-left slot="navLeft"></nav-left>
        <nav-right slot="navRight"></nav-right>
      </tb-nav-bar-item>
    </tb-nav-bar>
    <tb-serch-bar>
      <tb-serch-item>
        <serch-left slot="left"></serch-left>
        <serch-middle slot="middle"></serch-middle>
        <div
          class="carName"
          slot="right"
        >
          <span>我的购物车</span>
        </div>
      </tb-serch-item>
    </tb-serch-bar>
    <car-page></car-page>

    <div class="bottom">
        <login-bottom ></login-bottom>
    </div>
  </div>
</template>

<script>
import NavLeft from "@/views/tbMain/NavLeft";
import NavRight from "@/views/tbMain/NavRight";
import SerchLeft from "@/views/tbMain/SerchLeft";
import SerchMiddle from "@/views/tbMain/SerchMiddle";
import tbNavBar from "@/components/tbMain/tbNavBar";
import tbSerchBar from "@/components/tbMain/tbSerchBar";
import tbNavBarItem from "@/components/tbMain/tbNavBarItem";
import tbSerchItem from "@/components/tbMain/tbSerchItem";
import carPage from "@/views/tbCar/carPage";
import LoginBottom from "@/views/tbLogin/LoginBottom";
export default {
  name: "tbCar",
  components: {
    NavLeft,
    NavRight,
    SerchLeft,
    SerchMiddle,
    tbNavBar,
    tbSerchBar,
    tbNavBarItem,
    tbSerchItem,
    carPage,
    LoginBottom
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#tbCar {
  background-color: #f5f5f5;
  width: 100%;
}
.carName {
  position: absolute;
  right: 150px;
  top: 40px;
}
.carName span {
  display: inline-block;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 30px;
}
.bottom{
    width:1050px;
    margin:0 auto;
}
</style>