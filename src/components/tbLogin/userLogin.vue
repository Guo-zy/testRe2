<template>
  <div id="userLogin">
    <tb-login>
      <tb-login-item>
        <login-top slot="top"></login-top>
        <login-middle slot="middle"></login-middle>
        <login-bottom slot="bottom"></login-bottom>
      </tb-login-item>
    </tb-login>
  </div>
</template>

<script>
import tbLogin from "./tbLogin";
import tbLoginItem from "./tbLoginItem";
import LoginTop from "@/views/tbLogin/LoginTop";
import LoginMiddle from "@/views/tbLogin/LoginMiddle";
import LoginBottom from "@/views/tbLogin/LoginBottom";

export default {
  name: "userLogin",
  components: {
    tbLogin,
    tbLoginItem,
    LoginTop,
    LoginMiddle,
    LoginBottom
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
</style>
