<template>
  <div id="orderInfo">
    <div v-if="isOpen">
      <div class="top">
        <div class="top-nav">
          <span
            class="top-info"
            style=" display:inline-block;height:40px;line-height:40px;color:#C0C4CC;font-size:15px;letter-spacing:2px;"
          >订单详情</span>
          <i
            class="el-icon-circle-close close-icon"
            @click="close"
          ></i>
        </div>
        <div class='state'>
          <p class="shop-state">待确认收货</p>
        </div>

      </div>

      <div class="middle">
        <div class='address'>
          <i class="el-icon-s-promotion obj-icon"></i>
          <span class="name">{{$store.state.orderInfo.name}}<span class="phone">{{$store.state.orderInfo.phone}}</span></span><br>
          <span class="detailAddress">{{$store.state.orderInfo.province}}
            {{$store.state.orderInfo.city}}
            {{$store.state.orderInfo.erae}}
            {{$store.state.orderInfo.address}}</span>
        </div>

        <div
          class="shop"
          style="margin-top:10px;"
        >

          <div class="storeName">
            <i
              class="el-icon-s-shop"
              style="margin-left:10px;"
            ></i>
            <span style="margin-left:10px;letter-spacing:2px;font-size:16px;color:#606266">吉林大学珠海学院</span>
            <i
              class="el-icon-arrow-right"
              style="margin-left:15px;"
            ></i>
          </div>

          <div
            class="shopInfo"
            style="margin-top:10px;"
          >
            <img
              style="float:left;width:100px;height:100px"
              :src="require('../../assets/image/'+this.$store.state.orderInfo.shopimage)"
            />
            <span class='img-name'>{{$store.state.orderInfo.shoptitle}}</span>
            <br> <span class="img-propert1">美颜套餐:全家桶 美颜效果:最高级</span>

          </div>

          <div
            class='priceinfo'
            style="margin-top:15px;"
          >
            <div class="shopprice">商品单价<span>￥{{$store.state.orderInfo.shopprice}}</span></div>
            <div class="shopcount">已购数量<span>×{{$store.state.orderInfo.shopcount}}</span></div>
            <div class="postPrice">运费快递<span>￥0</span></div>
            <div class="orderPrice">订单总价<span class='allPrice'>￥{{$store.state.orderInfo.shoptotalprice}}</span></div>

          </div>

        </div>

        <div
          class="opreate"
          style="margin-top:15px;margin-bottom:5px;"
        >
          <div
            class="allBtn"
            style='text-align:right;'
          >
            <el-button
              class='opreate-btn'
              type="info"
              plain
              @click="rateOpen"
            ><span>评价</span></el-button>
            <el-button
              class='opreate-btn'
              type="info"
              plain
            ><span>退货</span></el-button>
            <el-button
              class='opreate-btn'
              type="info"
              plain
            ><span @click="submitShop">确认收货</span></el-button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Rate ref="rate" />
    </div>
  </div>
</template>

<script>
import Rate from "./Rate";
export default {
  name: "orderInfo",
  components: {
    Rate
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    rateOpen() {
      this.$refs.rate.isOpen = true;
      this.isOpen = false;
    },
    submitShop() {}
  }
};
</script>

<style scoped>
#orderInfo {
  border: 3px solid #ccc;
  background: white;
  /* width: 400px; */
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -227px;
}

#orderInfo::after {
  content: "";
  display: block;
  clear: both;
}
.top {
  /* border:1px solid red; */
  position: relative;
  width: 400px;
  height: 100px;
  text-align: center;
  background: url(https://img.alicdn.com/tfs/TB138JkwQL0gK0jSZFxXXXWHVXa-1920-100.png)
    top center no-repeat;
}
.close-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
}
.state {
  width: 100px;
  margin: 0 0 0 20px;
}
.shop-state {
  text-align: left;
  font-size: 18px;
  letter-spacing: 2px;
  color: #e4e7ed;
}
.address {
  position: relative;
  margin-top: 10px;
  margin-left: 5px;
  letter-spacing: 2px;
}
.obj-icon {
  position: absolute;
  font-size: 25px;
  top: 8px;
}
.name {
  display: inline-block;
  width: 180px;
  margin-left: 30px;
}
.detailAddress {
  display: inline-block;
  margin-left: 30px;
}

.img-name {
  display: inline-block;
  /* vertical-align: top; */
  /* border:1px solid red; */
  height: 60px;
  width: 250px;
  font-size: 14px;
  overflow: hidden;
  /* letter-spacing: 2px; */
}
.img-propert1 {
  display: inline-block;
  width: 110px;
  font-size: 12px;
  margin-top: -5px;
  letter-spacing: 2px;
  color: #c0c4cc;
}
.priceinfo div {
  margin-left: 15px;
  padding: 2px 2px;
  font-size: 14px;
  color: #c0c4cc;
  /* border:1px solid red; */
}
.priceinfo div span {
  display: inline-block;
  width: 320px;
  text-align: right;
}
.allPrice {
  font-size: 16px;
  color: black;
}

.opreate-btn {
  border-radius: 30px;
  border-color: #909399;
}
.opreate-btn:hover {
  font-size: 18px;
  background: #fff;
  border-color: #f40;
}
.opreate-btn:hover span {
  color: #f40;
}
</style>