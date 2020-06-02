<template>
  <div id="taobao">
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
    <tb-menu-bar>
      <tb-menu-item>
        <menu-left slot="left"></menu-left>
        <menu-right slot="right"></menu-right>
      </tb-menu-item>
    </tb-menu-bar>
    <tb-show>
      <tb-show-item>
        <show-left slot="left"></show-left>
        <show-middle slot="middle"></show-middle>
        <show-right slot="right"></show-right>
      </tb-show-item>
    </tb-show>
  </div>
</template>

<script>

import tbNavBar from "@/components/tbMain/tbNavBar";
import tbSerchBar from "@/components/tbMain/tbSerchBar";
import tbMenuBar from "@/components/tbMain/tbMenuBar";
import tbShow from "@/components/tbMain/tbShow";
import tbNavBarItem from "@/components/tbMain/tbNavBarItem";
import tbSerchItem from "@/components/tbMain/tbSerchItem";
import tbMenuItem from "@/components/tbMain/tbMenuItem";
import tbShowItem from "@/components/tbMain/tbShowItem";
import NavLeft from "@/views/tbMain/NavLeft";
import NavRight from "@/views/tbMain/NavRight";
import SerchLeft from "@/views/tbMain/SerchLeft";
import SerchMiddle from "@/views/tbMain/SerchMiddle";
import MenuLeft from "@/views/tbMain/MenuLeft";
import MenuRight from "@/views/tbMain/MenuRight";
import ShowLeft from "@/views/tbMain/ShowLeft";
import ShowMiddle from "@/views/tbMain/ShowMiddle";
import ShowRight from "@/views/tbMain/ShowRight";
// import SerchRight from "./view/tbMain/SerchRight";

export default {
  name: "taobao",
  components: {
    tbNavBar,
    tbNavBarItem,
    NavLeft,
    NavRight,
    tbSerchBar,
    tbSerchItem,
    SerchLeft,
    SerchMiddle,
    tbMenuBar,
    tbMenuItem,
    MenuLeft,
    MenuRight,
    tbShow,
    tbShowItem,
    ShowLeft,
    ShowMiddle,
    ShowRight
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#taobao {
  background-color: #f5f5f5;
  width: 100%;
  height: 680px;
}
</style>
