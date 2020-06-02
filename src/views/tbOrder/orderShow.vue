<template>
  <div id="orderShow">
    <div class="confirmOrder">
      <span id="confirmTitle">确认订单信息</span>
    </div>
    <div class="confirmOrder-Title">
      <div class="shopBaby"><span id="shopBaby">店铺宝贝</span></div>
      <div class="shopAttribute"><span id="shopAttribute">商品属性</span></div>
      <div class="shopPrice"><span id="shopPrice">单价</span></div>
      <div class="shopQuantity"><span id="shopQuantity">数量</span></div>
      <div class="shopTotal"><span id="shopTotal">小计</span></div>
    </div>
    <div class="shopName">
      <span>🏠店铺：<a href="#">吉林大学珠海学院</a></span>
    </div>

    <div
      class="shopDetails"
      v-for="(shop,index) in shopList"
      :key="shop.shopid"
    >
      <div class="shopBaby1">
        <img :src="require('../../assets/image/'+shop.shopimage)">
        <span id="shopName1">{{shop.shoptitle}}</span>

      </div>
      <div class="shopAttribute1">
        <p>套餐类型：<span>美颜全家桶</span></p>
        <p>精品特性：<span>美肤美白，香味十足</span></p>
      </div>
      <div class="shopPrice1">
        <span>{{shop.shopprice}}</span>
      </div>
      <div class="shopQuantity1">
        <button @click='sub(index)'>-</button><input
          type="text"
          value="1"
          v-model="shop.shopcount"
          @blur="reComputedPrice(index)"
        ><button @click='add(index)'>+</button>
      </div>
      <div class="shopTotal1">
        <span>{{shop.shoptotalprice}}</span>
      </div>
    </div>

    <div class="shopTotalprice">

      <div class="shopTotalprice1-price">
        <span id="realityPrice">实付款：<span id="sign">￥</span><span id="money">{{totalPrice}}</span></span>
      </div>

      <div class="confirmAdd">
        <span id="send">寄送至：</span>
        <span
          id="location"
          style="font-size:13px;"
        >{{$store.state.address.province}}
          {{$store.state.address.city}}
          {{$store.state.address.erae}}
          {{$store.state.address.address}}</span>
      </div>

      <div class="confirmUser">
        <span id="userName">收货人：</span>
        <span id="user">{{$store.state.address.name}}</span>
        <div id="telName">手机号码:<span id="tel">{{$store.state.address.phone}}</span></div>

      </div>

      <el-button
        class="okBtn"
        type="primary"
        @click="okOrderBtn"
      >提交订单</el-button>

    </div>

  </div>
</template>

<script>
import axios from "axios";
import * as date from "@/uti/DateTime";
export default {
  name: "orderShow",
  created() {
    this.shopList = this.$store.state.orderShop;
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (const shop of this.shopList) {
        total += shop.shoptotalprice;
      }
      return total;
    }
  },
  data() {
    return {
      shopList: []
    };
  },
  methods: {
    okOrderBtn() {
      const shopList = this.shopList;
      const address = this.$store.state.address;
      for (const shop of shopList) {
        shop.shopcomplete = 0;
        shop.shopoperate = 0;
        shop.shopcreateddate = date.getFullDate();
        shop.shopcreatedweek = date.getWeek();
        shop.shopcreatedtime = date.getTime();
        shop.name = address.name;
        shop.phone = address.phone;
        shop.province = address.province;
        shop.city = address.city;
        shop.erae = address.erae;
        shop.address = address.address;
      }
      axios
        .post("http://localhost:8181/order/saveOrderInfo", shopList)
        .then(() => {
          this.$router.push("/finishMain");
        });
    },
    add(index) {
      if (this.shopList[index].shopcount < this.shopList[index].shopstorage) {
        this.shopList[index].shopcount++;
        this.shopList[index].shoptotalprice =
          this.shopList[index].shopcount * this.shopList[index].shopprice;
      }
    },
    sub(index) {
      if (this.shopList[index].shopcount > 1) {
        this.shopList[index].shopcount--;
        this.shopList[index].shoptotalprice =
          this.shopList[index].shopcount * this.shopList[index].shopprice;
      }
    },
    reComputedPrice(index) {
      this.shopList[index].shoptotalprice =
        this.shopList[index].shopcount * this.shopList[index].shopprice;
    }
  }
};
</script>

<style scoped>
.okBtn {
  margin-left: 15px;
  margin-top: 10px;
}
.shopDetails {
  width: 1100px;
  margin: 0 auto;
  border-bottom: 1px dotted #80b2ff;
}

.shopDetails::after {
  content: "";
  display: block;
  clear: both;
}

.shopDetails div {
  float: left;
}

.shopDetails .shopBaby1 {
  width: 255px;
  height: 90px;
}

.shopDetails .shopBaby1 img {
  width: 80px;
  height: 80px;
  margin-left: 10px;
  margin-top: 5px;
  float: left;
}

.shopDetails .shopBaby1 #shopName1 {
  display: block;
  margin-left: 94px;
  margin-top: 5px;
  width: 155px;
  height: 80px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 14px;
  color: rgb(138, 136, 136);
}

.shopDetails .shopAttribute1 p {
  margin-top: 5px;
  font-size: 14px;
  color: rgb(138, 136, 136);
  text-align: left;
}

.shopDetails .shopAttribute1,
.shopPrice1,
.shopQuantity1,
.shopTotal1 {
  width: 200px;
  height: 90px;
  text-align: center;
}

.shopPrice1 span {
  display: inline-block;
  line-height: 90px;
  margin-left: 15px;
  color: red;
  font-weight: bold;
}

.shopDetails .shopQuantity1 {
  width: 200px;
  height: 90px;
  text-align: center;
  line-height: 90px;
  margin-left: 15px;
}

.shopDetails .shopQuantity1 button {
  width: 15px;
  height: 23px;
}
.shopDetails .shopQuantity1 input {
  border: 1px solid #9dc1e4;
  width: 42px;
  height: 23px;
  text-align: center;
  border-left: none;
  border-right: none;
  line-height: 24px;
  outline: none;
}

.shopDetails .shopTotal1 {
  width: 200px;
  height: 90px;
  text-align: center;
  line-height: 90px;
}
.shopDetails .shopTotal1 span {
  display: inline-block;
  line-height: 90px;
  margin-left: 15px;
  color: red;
  font-weight: bold;
}

#confirmTitle {
  display: inline-block;
  letter-spacing: 2px;
  margin-left: 14px;
  width: 250px;
  text-align: right;
}

.confirmOrder-Title {
  width: 1100px;
  margin-top: 10px;
  margin-left: 125px;
}

.confirmOrder-Title::after {
  content: "";
  display: block;
  clear: both;
}

.confirmOrder-Title div {
  float: left;
}

.shopBaby {
  width: 255px;
  height: 30px;
  margin-top: 15px;
  margin-left: 15px;
  text-align: center;
  border-bottom: 3px solid #b2d1ff;
}
#shopBaby,
#shopAttribute,
#shopPrice,
#shopQuantity,
#shopTotal {
  line-height: 30px;
  color: rgb(138, 136, 136);
  font-size: 14px;
}
.shopPrice,
.shopQuantity,
.shopTotal,
.shopAttribute {
  width: 200px;
  height: 30px;
  margin-top: 15px;
  text-align: center;
  border-bottom: 3px solid #b2d1ff;
  margin-left: 2px;
}

.shopName {
  width: 1065px;
  height: 30px;
  margin-top: 25px;
  margin-left: 135px;
  border-bottom: 1px dotted #80b2ff;
}
.shopName span,
a {
  font-size: 14px;
  color: rgb(138, 136, 136);
}

.shopTotalprice {
  width: 350px;
  height: 130px;
  float: right;
  border: 5px dashed #f5aebe;
  margin-top: 30px;
}

.shopTotalprice .shopTotalprice1-price {
  float: right;
  width: 250px;
  height: 39px;
  margin-right: 8px;
}

.shopTotalprice .shopTotalprice1-price #realityPrice {
  float: right;
  font-weight: 700;
  color: #333;
  font-family: verdana, arial;
  font-size: 12px;
}

.shopTotalprice .shopTotalprice1-price #sign {
  font-size: 24px;
  margin-right: 8px;
  color: #999;
}

.shopTotalprice .shopTotalprice1-price #money {
  color: #ff0036;
  font: 700 26px tahoma;
}

.shopTotalprice .confirmAdd {
  width: 317px;
  height: 30px;

  margin-top: 4px;
  float: right;
  margin-right: 8px;
  line-height: 30px;
}

.shopTotalprice .confirmAdd #send {
  font-weight: 700;
  color: #333;
  font-size: 12px;
}

.shopTotalprice .confirmAdd #location {
  float: right;
}

.shopTotalprice .confirmUser {
  width: 150px;
  height: 30px;

  margin-top: 4px;
  float: right;
  margin-right: 8px;
  line-height: 30px;
}

.shopTotalprice .confirmUser #userName {
  font-weight: 700;
  color: #333;
  font-size: 12px;
}
.shopTotalprice .confirmUser #user {
  margin-left: 3px;
}
.shopTotalprice .confirmUser #telName {
  font-weight: 700;
  color: #333;
  font-size: 12px;
}
.shopTotalprice .confirmUser #telName #tel {
  font-size: 14px;
  color: #3c3c3c;
}
</style>