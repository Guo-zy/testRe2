<template>
  <div id="NavRight">
    <ul class="top-nav-right">
      <li class="top-f"> <a
          class="first"
          href="#"
        >我的淘宝<img
            class="xsj"
            src="@/assets/image/xsj.png"
          /></a>
        <ul class="top-nav-r1">
          <li   style="cursor:pointer;"><span><a
                class="clickEvent"
              @click="goUserOrderPage"
                target="_blank"
              >已买到的宝贝</a></span>
          </li>
          <li><span><a href="#">我的足迹</a></span>
          </li>
        </ul>
      </li>
      <li   style="cursor:pointer;"><a
          target="_blank"
          class="first clickEvent"
          @click="goCar" 
        
        ><img
            class="car"
            src="@/assets/image/car.png"
          />购物车</a><img
          class="xsj"
          src="@/assets/image/xsj.png"
        /> </li>
      <li> <a
          class="first"
          href="#"
        ><img
            class="scj"
            src="@/assets/image/scj.png"
          />收藏夹</a>
        <ul class="top-nav-r2">
          <li><span><a href="#">收藏的宝贝</a></span>
          </li>
          <li><span><a href="#">收藏的店铺</a></span>
          </li>
        </ul>
      </li>
      <li> <a
          class="first"
          href="#"
        >卖家中心<img src="@/assets/image/xsj.png" />
        </a>
        <ul class="top-nav-r3">
          <li><span><a
                target="_blank"
                href=""
              >我的店铺</a></span>
          </li>
          <li><span><a href="#">已卖出的宝贝</a></span>
          </li>
          <li><span><a href="#">出售中的宝贝</a></span>
          </li>
          <li><span><a href="#">卖家服务市场</a></span>
          </li>
          <li><span><a href="#">卖家培训中心</a></span>
          </li>
          <li><span><a href="#">体验中心</a></span>
          </li>
          <li><span><a href="#">问商友</a></span>
          </li>
        </ul>
      </li>
      <li>
        <a
          class="first"
          href="#"
        >联系客服</a>
        <ul class="top-nav-r4">
          <li><span><a href="#">买家客服</a></span>
          </li>
          <li><span><a href="#">卖家客服</a></span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavRigth",
  methods: {
    goUserOrderPage(){
      this.$router.push("/userOrderMain")
    },
    goCar(){
      this.$router.push("/tbCar")

    }
  },
};
</script>

<style scoped>
.top-nav-right {
  float: right;
  width: 450px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
}
.top-nav-right li {
  float: left;
  width: 85px;
  height: 30px;
}
.top-nav-right .top-nav-r1,
.top-nav-r2,
.top-nav-r3,
.top-nav-r4 {
  display: none;
  height: 65px;
  width: 90px;
  z-index: 999;
  background: white;
}
.top-nav-r3 {
  height: 210px;
}
.top-nav-r1 li,
.top-nav-r2 li,
.top-nav-r3 li,
.top-nav-r4 li {
  z-index: 999;
}

.top-nav-right li {
  position: relative;
  width: 88px;
  height: 30px;
  z-index: 999;
}
.xsj {
  width: 15px;
  height: 15px;
  margin-top: 5px;
  margin-left: 2px;
}
.car {
  width: 14px;
  height: 14px;
  margin-right: 3px;
  margin-top: 6px;
}
.scj {
  width: 15px;
  height: 15px;
  margin-right: 3px;
  margin-bottom: -1px;
}
.top-nav-right li:hover {
  background: f5f5f5;
}
.top-nav-right li:hover ul {
  display: block;
}
.top-nav-right li:hover ul li:hover {
  background: #f1f1f1;
}
.top-nav-right li:hover .first {
  color: #f40;
}
</style>