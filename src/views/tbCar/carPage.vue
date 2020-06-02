<template>
  <div id='carPage'>
    <div class="Car">
      <div class="Car-top">
        <ul class="left">
          <li><span class="AllShop">所有商品</span>
            <span id="AllCount">{{allShopLength}}</span>
          </li>
        </ul>
        <ul class="right">
          <li><span class="tag">已选商品 (不含运费)</span></li>
          <li><span class="AllPrice">{{allPrice}}</span></li>
          <li><span
              class="submitBtn"
              @click="goOrder"
            >结 算</span></li>
        </ul>
      </div>

      <div class="Car-main">
        <div class="Car-property">
          <input
            type="checkbox"
            name="selectAll"
            id="selectAll"
            value="selectAll"
            v-model='isAllSelected'
            @change='selectAll'
          ><label
            class="tag-selectAll"
            for="selectAll"
          >全选</label>
          <span class='tag-info'>商品信息</span>
          <span class="tag-price">单价</span>
          <span class="tag-count">数量</span>
          <span class="tag-money">金额</span>
          <span class="tag-operator">操作</span>
        </div>

        <div
          class="Car-info"
          v-for="(shop,index) in carList"
          :key="index"
        >

          <div class="checkboxBtn">
            <input
              type="checkbox"
              name="selectShop"
              id="selectShop"
              :value="shop.shopid"
              v-model="checkCode"
              @change="shopCheckBox"
            >
          </div>

          <div class="shop-image">
            <img :src="require('../../assets/image/'+shop.shopimage)">
          </div>

          <div class="shop-info">
            <span class="info">
              {{shop.shoptitle}}
            </span>
          </div>

          <div class="shop-price">
            <span>￥</span>
            <span id="price">{{shop.shopprice}}</span>
          </div>

          <div class="shop-count">
            <span
              class="minus"
              @click="sub(index)"
            >-</span>
            <input
              type="number"
              class="count"
              value="1"
              v-model.number="shop.shopcount"
              @blur="reComputedPrice(index)"
            >
            <span
              class="add"
              @click="add(index)"
            >+</span>
          </div>

          <div class="shop-money">
            <span>￥</span>
            <span id="price">{{shop.shoptotalprice}}</span>
          </div>

          <div class="shop-operator">
            <span
              style="font-size:16px;"
              @click="deleteShop(index,shop.shopid)"
            >删除</span>
          </div>
        </div>

      </div>

      <div class="Car-bottom">
        <div class="Car-last">
          <ul class="left">
            <li>
              <input
                type="checkbox"
                name="l-selectAll"
                id="l-selectAll"
                value="selectAll"
                v-model='isAllSelected'
                @change='selectAll'
              >
              <label
                class="l-selectAll"
                for="l-selectAll"
              >全选</label>
              <span class="del">删除</span>
            </li>
          </ul>
          <ul class="right">
            <li><span class="tag">已选商品<em id="selectShop">{{checkCode.length}}</em>件</span>
              <span>合计(不含运费):</span></li>
            <li><span class="AllPrice">{{allPrice}}</span></li>
            <li><span
                class="submitBtn"
                @click="goOrder"
              >结 算</span></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { requestCar } from "@/network/request";
import { deleteShop } from "@/network/request";
export default {
  name: "carPage",
  data() {
    return {
      carList: [],
      checkCode: [],
      isAllSelected: false
    };
  },
  computed: {
    allShopLength() {
      return this.carList.length;
    },
    allPrice() {
      let totalPrice = 0;
      for (const shop of this.checkCode) {
        this.carList.filter(car => {
          if (car.shopid == shop) {
            totalPrice += car.shoptotalprice;
          }
        });
      }
      return totalPrice;
    }
  },
  created() {
    const userid = this.$store.state.user.id;
    requestCar({
      url: "/car/findAllByUserId",
      params: {
        userid
      }
    }).then(carList => {
      this.carList = carList.data;
    });
  },
  methods: {
    sub(index) {
      if (this.carList[index].shopcount > 1) {
        this.carList[index].shopcount--;
        this.carList[index].shoptotalprice =
          this.carList[index].shopcount * this.carList[index].shopprice;
      }
    },
    add(index) {
      if (this.carList[index].shopcount < this.carList[index].shopstorage) {
        this.carList[index].shopcount++;
        this.carList[index].shoptotalprice =
          this.carList[index].shopcount * this.carList[index].shopprice;
      }
    },
    reComputedPrice(index) {
      this.carList[index].shoptotalprice =
        this.carList[index].shopcount * this.carList[index].shopprice;
    },
    deleteShop(index, shopid) {
      deleteShop({
        url: "/car/deleteShop",
        params: {
          shopid
        }
      }).then(() => {
        this.carList.splice(index, 1);
        for (const i in this.checkCode) {
          if (this.checkCode[i] == shopid) {
            this.checkCode.splice(i, 1);
          }
        }
        if (
          this.checkCode.length == this.carList.length &&
          this.carList.length != 0
        ) {
          this.isAllSelected = true;
        } else {
          this.isAllSelected = false;
        }
      });
    },
    shopCheckBox() {
      if (this.checkCode.length == this.carList.length) {
        this.isAllSelected = true;
      } else {
        this.isAllSelected = false;
      }
    },
    selectAll() {
      if (this.isAllSelected) {
        this.checkCode = [];
        for (const shop of this.carList) {
          this.checkCode.push(shop.shopid);
        }
      } else {
        this.checkCode = [];
      }
    },
    goOrder() {
      this.$store.commit("clearOrderShop");
      for (const shop of this.checkCode) {
        this.carList.filter(car => {
          if (car.shopid == shop) {
            this.$store.commit("InsertOrderShop", car);
          }
        });
      }
      this.$router.push("/orderMain");
    }
    // deleteSelectedShop() {
    //   for (let i = this.checkCode.length - 1; i >= 0; i--) {
    //     let shopid = this.carList[i].shopid;
    //     this.carList.splice(this.checkCode[i], 1);
    //     deleteShop({
    //       url: "/car/deleteShop",
    //       params: {
    //         shopid
    //       }
    //     }).then(() => {
    //       this.checkCode.pop();
    //       if (this.checkCode.length === 0) {
    //         this.isAllSelected = false;
    //       }
    //       this.computedPrice();
    //     });
    //   }
    // }
  }
};
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

.Car {
  width: 1050px;
  margin: 10px auto;
}

.Car .Car-top {
  border-bottom: 1px solid #ccc;
}

.Car .Car-top::after {
  display: block;
  content: "";
  clear: both;
}

.Car .Car-top .left {
  width: 200px;
}

.Car .Car-top .left li {
  float: left;
  margin-left: 5px;
  border-bottom: 2px solid #f40;
}

.Car .Car-top .left li .AllShop {
  display: inline-block;
  width: 65px;
  height: 25px;
}

.Car .Car-top .left li span {
  color: #f40;
  font-weight: bold;
  padding: 5px 0px;
}

.Car .Car-top .right {
  float: right;
}

.Car .Car-top .right li {
  float: left;
  margin: 5px 10px 0px 0px;
}

.Car .Car-top .right li .tag {
  display: inline-block;
  width: 150px;
  line-height: 25px;
  padding: 1px;
  height: 25px;
}

.Car .Car-top .right li .AllPrice {
  display: inline-block;
  color: #f40;
  height: 25px;
  line-height: 25px;
  padding: 1px;
}

.Car .Car-top .right li .submitBtn {
  display: inline-block;
  width: 55px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1px;
  background: #aaa;
  color: #fff;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
}

.Car .Car-main {
  width: 100%;
  position: relative;
}

.Car .Car-main .Car-property {
  margin: 15px 3px;
  height: 30px;
}

.Car .Car-main .Car-property .tag-selectAll {
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
  width: 150px;
}

.Car .Car-main .Car-property .tag-info {
  display: inline-block;
  width: 230px;
  text-align: left;
}

.Car .Car-main .Car-property .tag-price,
.tag-count,
.tag-money,
.tag-operator {
  display: inline-block;
  width: 151px;
  text-align: left;
}

.Car .Car-main .Car-property .tag-operator {
  display: inline-block;
  width: 50px;
}

.Car .Car-main div {
  margin-left: 10px;
}

.Car .Car-main div::after {
  display: block;
  content: "";
  clear: both;
}

.Car .Car-main .Car-info {
  border: 1px solid #ccc;
  border-left: none;
  margin: 5px 3px;
  padding: 10px 0px;
}

.Car .Car-main .Car-info .checkboxBtn {
  float: left;
}

.Car .Car-main .Car-info .shop-image {
  float: left;
}

.Car .Car-main .Car-info .shop-image img {
  width: 80px;
  height: 80px;
}

.Car .Car-main .Car-info .shop-info {
  float: left;
  width: 220px;
  height: 85px;
  overflow: hidden;
  cursor: pointer;
  padding: 2px 0px;
}

.Car .Car-main .Car-info .shop-info:hover span {
  text-decoration: underline;
  color: #f40;
}

.Car .Car-main .Car-info .shop-price {
  float: left;
  width: 150px;
  line-height: 85px;
  height: 85px;
  text-align: center;
}

.Car .Car-main .Car-info .shop-price span {
  font-weight: bold;
}

.Car .Car-main .Car-info .shop-count {
  float: left;
  width: 150px;
  text-align: center;
  line-height: 85px;
  height: 85px;
}

.Car .Car-main .Car-info .shop-count .add,
.Car .Car-main .Car-info .shop-count .minus {
  display: inline-block;
  background: #ccc;
  width: 20px;
  height: 20px;
  cursor: pointer;
  line-height: 20px;
  text-align: center;
}

.Car .Car-main .Car-info .shop-count input {
  width: 20px;
  text-align: center;
}

.Car .Car-main .Car-info .shop-money {
  float: left;
  width: 150px;
  text-align: center;
  line-height: 85px;
  height: 85px;
}

.Car .Car-main .Car-info .shop-money span {
  color: #f40;
  font-weight: bold;
}

.Car .Car-main .Car-info .shop-operator {
  float: left;
  width: 150px;
  text-align: center;
  line-height: 85px;
  height: 85px;
}

.Car .Car-main .Car-info .shop-operator span:hover {
  text-decoration: underline;
  color: #f40;
  cursor: pointer;
}

.Car .Car-bottom {
  line-height: 25px;
}

.Car .Car-bottom .Car-last {
  margin-top: 20px;
  background: #ccc;
  padding: 5px 5px;
}

.Car .Car-bottom .Car-last::after {
  display: block;
  content: "";
  clear: both;
}

.Car .Car-bottom .Car-last .left {
  float: left;
}

.Car .Car-bottom .Car-last .left .l-selectAll {
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  width: 40px;
}

.Car .Car-bottom .Car-last .left .del {
  display: inline-block;
  cursor: pointer;
}

.Car .Car-bottom .Car-last .left .del:hover {
  color: #f40;
  text-decoration: underline;
}

.Car .Car-bottom .Car-last .left li {
  float: left;
  margin-left: 5px;
}

.Car .Car-bottom .Car-last .right {
  float: right;
}

.Car .Car-bottom .Car-last .right li {
  float: left;
  margin-right: 10px;
}

.Car .Car-bottom .Car-last .right .tag {
  display: inline-block;
  width: 180px;
}

.Car .Car-bottom .Car-last .right #selectShop {
  display: inline-block;
  color: #f40;
  font-weight: bold;
  font-style: normal;
}

.Car .Car-bottom .Car-last .right .AllPrice {
  color: #f40;
  font-weight: bold;
}

.Car .Car-bottom .Car-last .right .submitBtn {
  display: inline-block;
  width: 55px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1px;
  background: #aaa;
  color: #fff;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
}
</style>