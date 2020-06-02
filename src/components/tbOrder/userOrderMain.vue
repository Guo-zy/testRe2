<template>
  <div id="userOrderMain">
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
          <span>已购宝贝</span>
        </div>
      </tb-serch-item>
    </tb-serch-bar>
    <user-order-page></user-order-page>
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
import userOrderPage from "@/views/tbOrder/userOrderPage";
import LoginBottom from "@/views/tbLogin/LoginBottom";
export default {
  name: "userOrderMain",
  components: {
    NavLeft,
    NavRight,
    SerchLeft,
    SerchMiddle,
    tbNavBar,
    tbSerchBar,
    tbNavBarItem,
    tbSerchItem,
    userOrderPage,
    LoginBottom
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#userOrderMain {
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