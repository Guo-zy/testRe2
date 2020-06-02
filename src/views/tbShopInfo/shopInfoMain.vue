<template>
  <div id="shopInfoMain">
    <div class="info-nav">
      <span>商品信息</span>
    </div>
    <div class="shopInfo-wrap">
      <div class="shopInfo-main">
        <div class="shopInfo-left">
          <img :src="require('../../assets/image/' + shop.image)" />
        </div>
        <div class="shopInfo-right">
          <div class="title">
            <h3>{{shop.title}}</h3>
          </div>
          <div class="price">
            <div class="price1">
              <span class="price-w">价格</span>
              <span id="money1">￥{{shop.price*1.5}}</span>
            </div>
            <div class="price2">
              <span class="price-w">促销价</span>
              <span id="money2">￥{{shop.price}}</span>
            </div>
          </div>
          <div class="yunfei">
            <p><span class="yunfei1">运费</span>
              <span class="yunfei2">快递包邮</span>
            </p>
          </div>
          <div class="xiaoliang">
            <ul>
              <li><span class="slog">月销量</span><span id="xlcount">{{shop.disabled}}</span></li>
              <li id="tag">|</li>
              <li><span class="slog">累计评价</span><span id="pjcount">0</span></li>
              <li id="tag">|</li>
              <li><span class="slog">送购物积分</span><span id="jf">12</span></li>
            </ul>
          </div>
          <div class="shopCount">
            <div class="countTag"><span>数量</span></div>
            <div class="countBox">
              <span
                class="min"
                @click="subCount"
              >-</span>
              <input
                id="shopCount"
                type="number"
                name="shopNum"
                value="1"
                v-model.number="count"
                @blur="isLegal"
                autocomplete="off"
              ><span
                class="add"
                @click="addCount"
              >+</span>
              <span class="jian">件</span><span class="cangku">库存<span id="totalNum">{{shop.storage}}</span>件</span>
              <div class="sub-btn">
                <input
                  id="Buysubmit"
                  type="submit"
                  value="立即购买"
                  @click="buyImmediately"
                >
                <input
                  id="addCar"
                  type="button"
                  value="加入购物车"
                  @click="addCar"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestShop } from "@/network/request";
import axios from "axios";
// import { addCar } from "@/network/request";

export default {
  name: "shopInfoMain",
  created() {
    const id = Number(this.$route.params.id);
    requestShop({
      url: "/shop/findById",
      params: {
        id
      }
    }).then(shop => {
      this.shop = shop.data;
    });
  },
  data() {
    return {
      shop: {},
      count: 1,
      oldCount: 1
    };
  },
  watch: {
    count(newCount, oldCount) {
      this.oldCount = oldCount;
    }
  },
  methods: {
    addCount() {
      if (this.count >= 1 && this.count < this.shop.storage) {
        this.count++;
      }
    },
    subCount() {
      if (this.count > 1 && this.count <= this.shop.storage) {
        this.count--;
      }
    },
    isLegal() {
      this.count = this.count.toFixed(0);
      if (this.count > this.shop.storage) {
        alert("商品数量大于库存量");
        this.count = this.oldCount;
      }
      if (this.count <= 0) {
        alert("商品数量必须大于1");
        this.count = 1;
      }
    },
    buyImmediately() {
      this.$store.commit("clearOrderShop");
      let orderShop = {};
      orderShop.userid = this.$store.state.user.id;
      orderShop.shopid = this.shop.id;
      orderShop.shopcount = Number(this.count);
      orderShop.shopprice = this.shop.price;
      orderShop.shoptitle = this.shop.title;
      orderShop.shopstorage = this.shop.storage;
      orderShop.shopimage = this.shop.image;
      orderShop.shoptotalprice = this.shop.price * this.count;
      this.$store.commit("InsertOrderShop", orderShop);
      this.$router.push("/orderMain");
    },
    addCar() {
      let shop = {};
      shop.userid = this.$store.state.user.id;
      shop.shopid = this.shop.id;
      shop.shopcount = this.count;
      shop.shopprice = this.shop.price;
      shop.shoptitle = this.shop.title;
      shop.shopstorage = this.shop.storage;
      shop.shopimage = this.shop.image;
      shop.shoptotalprice = this.count * this.shop.price;
      axios.post("http://localhost:8181/car/InsertShop", shop).then(() => {
        this.$router.push("/tbCar");
      });
      // addCar({
      //   url: "/car/InsertShop",
      //  data:{
      //    shop
      //  }
      // }).then(() => {
      //   console.log("addCar成功");
      // });
    }
  }
};
</script>

<style scoped>
#shopCount {
  width: 30px;
  text-align: center;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

#shopInfoMain {
  margin-bottom: 35px;
}
.info-nav {
  width: 1100px;
  margin: 0 auto;
  border-bottom: 2px solid #ccc;
  margin-top: 15px;
}

.info-nav span {
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  color: #ccc;
}

.shopInfo-wrap {
  width: 1100px;
  margin: 0 auto;
  background: #fff;
  margin-top: 15px;
}

.shopInfo-wrap::after {
  display: block;
  content: "";
  clear: both;
}

.shopInfo-wrap .shopInfo-main {
  width: 100%;
  position: relative;
}

.shopInfo-wrap .shopInfo-main .shopInfo-left {
  width: 325px;
  height: 355px;
  float: left;
}

.shopInfo-wrap .shopInfo-main .shopInfo-left img {
  width: 320px;
  height: 350px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right {
  width: 600px;
  height: 355px;
  float: left;
  margin-left: 20px;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  padding: 5px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right > div {
  margin: 5px 0px;
  padding: 5px 5px 5px 10px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .title {
  padding: 5px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .price {
  margin-top: 15px;
  background: #e9e9e9;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .price .price1 .price-w {
  display: inline-block;
  font-size: 15px;
  color: #999;
  font-weight: bold;
  width: 60px;
  text-align: left;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .price .price1 #money1 {
  text-decoration: line-through;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .price .price2 .price-w {
  display: inline-block;
  font-size: 15px;
  color: #999;
  font-weight: bold;
  width: 60px;
  text-align: left;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .price .price2 #money2 {
  color: #ff0036;
  font-size: 30px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .yunfei .yunfei1 {
  display: inline-block;
  width: 60px;
  font-size: 15px;
  color: #999;
  font-weight: bold;
  text-align: left;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .yunfei .yunfei2 {
  display: inline-block;
  font-size: 15px;
  color: black;
  font-weight: bold;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .xiaoliang {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right ul::after {
  display: block;
  content: "";
  clear: both;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right ul li {
  float: left;
  width: 150px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right ul li .slog,
#tag {
  font-size: 15px;
  color: #999;
  font-weight: bold;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right ul #tag {
  width: 10px;
}

#xlcount,
#pjcount,
#jf {
  margin-left: 5px;
  color: #ff0036;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount::after {
  display: block;
  content: "";
  clear: both;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount .countTag {
  float: left;
  width: 50px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount .countTag span {
  font-size: 15px;
  color: #999;
  font-weight: bold;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount .countBox {
  float: left;
}

.shopInfo-wrap
  .shopInfo-main
  .shopInfo-right
  .shopCount
  .countBox
  input[type="text"] {
  width: 20px;
  outline: none;
  padding: 3px 2px 0px 3px;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount .countBox .min,
.add {
  display: inline-block;
  border: 1px solid #ccc;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  cursor: pointer;
}
.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount .countBox .add {
  margin-left: 3px;
}
.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount .countBox .jian {
  display: inline-block;
  width: 15px;
  font-size: 15px;
  color: #999;
  font-weight: bold;
}
.cangku,
#totalNum {
  font-size: 15px;
  color: #999;
  font-weight: bold;
}

.shopInfo-wrap .shopInfo-main .shopInfo-right .shopCount .countBox .sub-btn {
  margin-top: 25px;
}
.shopInfo-wrap
  .shopInfo-main
  .shopInfo-right
  .shopCount
  .countBox
  .sub-btn
  input {
  width: 180px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  border: 1px solid #ff0036;
  background: #ffeded;
  color: #ff0036;
  cursor: pointer;
  margin-left: 15px;
}
#addCar {
  background: #ff0036;
  color: #fff;
}
</style>