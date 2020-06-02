<template>
  <div id="finishMain">
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
      </tb-serch-item>
    </tb-serch-bar>
    <finish-page></finish-page>
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
import finishPage from "@/views/tbOrder/finishPage";

export default {
  name: "finishMain",
  components: {
    NavLeft,
    NavRight,
    SerchLeft,
    SerchMiddle,
    tbNavBar,
    tbSerchBar,
    tbNavBarItem,
    tbSerchItem,
    finishPage
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#finishMain {
  background-color: #f5f5f5;
  width: 100%;
}
</style>