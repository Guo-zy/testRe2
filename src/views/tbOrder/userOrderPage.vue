<template>
  <div id="userOrderPage">
    <div class="Car">

      <div class="Car-top">
        <ul class="left">
          <li><span class="AllShop">所有商品</span>
            <span id="AllCount">{{orderList.length}}</span>
          </li>
        </ul>
      </div>

      <div class="Car-main">

        <div class="Car-property">
          <span class='tag-info'>商品信息</span>
          <span class="tag-price">订单时间</span>
          <span class="tag-count">数量</span>
          <span class="tag-money">金额</span>
          <span class="tag-operator">操作</span>
        </div>

        <div
          class="Car-info"
          v-for="(order,index) in orderList"
          :key="index"
        >
          <div class="shop-image">
            <img
              style="width:90px;height:90px;"
              :src="require('../../assets/image/'+order.shopimage)"
            >
          </div>

          <div class="shop-info">
            <span class="info">
              {{order.shoptitle}}
            </span>
          </div>

          <div class="shop-price">
            <div
              id="time"
              style="font-size: 18px;line-height:50px"
            >
              <p style="height:30px;">{{order.shopcreateddate}}</p>
              <p style="height:30px;">{{order.shopcreatedtime}}</p>
            </div>
          </div>

          <div class="shop-count">
            <span
              id="shopCount"
              style="font-size: 18px"
            >{{order.shopcount}}</span>
          </div>

          <div class="shop-money">

            <span
              id="price"
              style="font-size: 18px"
            >￥{{order.shoptotalprice}}</span>
          </div>

          <div
            class="shop-operator"
            style="text-align:center;"
          >
            <el-button
              @click="openInfoPage(index)"
              class="el-btn infoBtn"
              type="info"
              plain
            >查看详情</el-button>
          </div>
        </div>

      </div>
    </div>

    <div class="orderInfo">
      <orderInfo ref="infoPage" />
    </div>

  </div>
</template>

<script>
import { requestOrderShop } from "@/network/request";
import orderInfo from "./orderInfo";
export default {
  name: "userOrderPage",
  created() {
    let userid = this.$store.state.user.id;
    requestOrderShop({
      url: "/order/findAllByUserId",
      params: {
        userid
      }
    }).then(orderList => {
      this.orderList = orderList.data;
    });
  },
  data() {
    return {
      orderList: [],
      isOk: false
    };
  },
  methods: {
    openInfoPage(index) {
      this.$store.commit("InsertOrderInfo", this.orderList[index]);
      this.$refs.infoPage.isOpen = true;
    }
  },
  components: {
    orderInfo
  }
};
</script>

<style scoped>
.el-btn {
  border-radius: 20px;
  font-size: 15px;
}
.okBtn {
  margin: 5px 0px 10px 10px;
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

.Car .Car-main .Car-property {
  margin-left: 150px;
  width: 1050px;
  margin: 10px auto;
  /* height: 30px; */
  border-bottom: 1px solid #ccc;
}

.Car .Car-main .Car-property span {
  display: inline-block;
  /* border:1px solid black; */
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-left: 100px;
  font-size: 18px;
}

.Car .Car-main .Car-property .tag-count,
.Car .Car-main .Car-property .tag-money,
.Car .Car-main .Car-property .tag-operator,
.Car .Car-main .Car-property .tag-price {
  width: 80px;
}

.Car-info {
  width: 1050px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  /* height:120px; */
}

.Car-info::after {
  content: "";
  display: block;
  clear: both;
}

.Car-info .shop-image {
  float: left;
}

.Car-info .shop-info {
  float: left;
  width: 150px;
  margin-left: 30px;
}

.Car-info .shop-info .info {
  display: inline-block;
  font-size: 14px;
  color: rgb(138, 134, 134);
  padding: 2px 2px;
  height: 90px;
  overflow: hidden;
}

.Car-info .shop-info .info:hover {
  color: #f40;
  text-decoration: underline;
  cursor: pointer;
}
.Car-info .shop-price {
  float: left;
  width: 170px;
  margin-left: 20px;
}
.Car-info .shop-price #time {
  display: inline-block;
  width: 200px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
}

.Car-info .shop-count {
  float: left;
  width: 170px;
  margin-left: 20px;
}
.Car-info .shop-count #shopCount {
  display: inline-block;
  width: 180px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
}

.Car-info .shop-money {
  float: left;
  width: 170px;
  margin-left: 20px;
}

.Car-info .shop-money #price {
  display: inline-block;
  width: 160px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
}

.Car .Car-main .Car-info .shop-operator {
  float: left;
  width: 150px;
  margin-left: 20px;
  height: 80px;
  line-height: 80px;
}
</style>