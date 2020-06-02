<template>
  <div id="NavLeft">
    <ul class="top-nav-left">
      <li v-if="$store.state.token"     style='cursor:pointer'>
        <a
          target="_blank"
  
        ><span @click="exitLogin">退出登录</span></a>
      </li>
      
      <!-- <li><a  href="" target="_blank" @click="gotoLogin"><span id="active">亲，请登录</span>
        </a>
      </li> -->
      <li v-if="!$store.state.token">
        <router-link to="/userLogin"><span id="active">亲，请登录</span></router-link>
      </li>
      <li v-else><span style="margin-left:5px;color:#f40">{{$store.state.user.name}}</span></li>
      <li><a href=""><span>免费注册</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavLeft",
  data() {
    return {};
  },
    methods:{
   exitLogin(){
      this.$store.commit("clearUserInfo");
      this.$store.commit("UpdateLoginToken",false)
   }
  }
};
</script>

<style scoped>
.top-nav-left {
  float: left;
  width: 300px;
  height: 30px;
}
.top-nav-left li {
  float: left;
  margin: 0px 8px;
  padding: 0 3px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
}
.top-nav-left li:hover span {
  color: #f40;
}

#active {
  cursor: pointer;
}
</style>