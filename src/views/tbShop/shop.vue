<template>
  <div class="shopMain">
    <div class="shoppingType">
      <ul>
        <li
          @click="idSort"
          :class="{'activeSelect':idActive}"
        ><span>综合排序</span></li>
        <li
          @click="salesSort"
          :class="{'activeSelect':saleActive}"
        ><span>销量</span></li>
        <li :class="{'activeSelect':priceActive}"><span>价格∨</span></li>
        <ul class="priceTag">
          <li><a href="#"><span>价格从高到低</span></a></li>
          <li><a><span>价格从低到高</span></a></li>
        </ul>
      </ul>
    </div>
    <div
      class="firstShop"
      v-for="(shop) in dataList"
      :key="shop.id"
    >
      <div class="first">
        <a
          style="cursor:pointer"
          @click="goshopItem(shop.id)"
        > <img :src="require('../../assets/image/'+shop.image)" /></a>
      </div>
      <div class="second">
        <span id="price">￥{{shop.price}}</span>
        <span id="free">包邮</span>
        <span id="afford">{{shop.disabled}}人付款</span>
      </div>
      <div class="third">
        <a
          style="cursor:pointer"
          @click="goshopItem(shop.id)"
        ><span v-html="shop.title"></span>
        </a>
      </div>
      <div class="forth">
        <span id="address">吉林大学珠海学院</span>
        <span id="province">广东 珠海</span>
      </div>
    </div>
  </div>

</template>

<script>
import { requestShop } from "@/network/request";
import { itemAscendingSort, itemDescendingSort } from "@/uti/itemSort";
export default {
  name: "shop",
  created() {
    let shopName = this.$route.params.shopName;
    requestShop({
      url: "/shop/findByName",
      params: {
        shopName
      }
    }).then(dataList => {
      this.dataList = dataList.data.map(shop => {
        shop.title = shop.title.replace(
          shopName,
          '<span style="color:red;">' + shopName + "</span>"
        );
        return shop;
      });
    });
  },
  data() {
    return {
      dataList: [],
      idActive: true,
      saleActive: false,
      priceActive: false
    };
  },
  methods: {
    salesSort() {
      this.idActive = false;
      this.priceActive = false;
      this.saleActive = true;
      this.dataList = this.dataList.sort(itemDescendingSort("disabled"));
    },
    idSort() {
      this.idActive = true;
      this.priceActive = false;
      this.saleActive = false;
      this.dataList = this.dataList.sort(itemAscendingSort("id"));
    },
    goshopItem(index) {
      this.$router.push("/shopInfo/" + index);
      // window.open("/shopInfo/" + index);
    }
  }
};
</script>

<style scoped>
.shoppingType {
  position: relative;
  width: 1100px;
  margin: 15px auto;
}
.shoppingType ul {
  border: 1px solid #ccc;
}

.shoppingType ul::after {
  display: block;
  content: "";
  clear: both;
}
.shoppingType ul li {
  float: left;
  width: 55px;
  height: 25px;
  padding: 5px;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  cursor: pointer;
}
.shoppingType ul li:nth-child(1) {
  width: 80px;
}
.shoppingType ul .activeSelect span {
  color: #f40;
}
.shoppingType ul li:hover span {
  color: #f40;
}
.shoppingType ul #activeSelect,
li:hover {
  background: #fff;
  border-right: 1px solid #ccc;
}

.shoppingType ul .priceTag {
  position: absolute;
  display: none;
  left: 157px;
  background: #fff;
  border: 1px solid #ccc;
}
.shoppingType ul .priceTag li {
  float: none;
  width: 110px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: none;
}

.shopMain {
  width: 1150px;
  margin: 5px auto;
}
.shopMain::after {
  display: block;
  content: "";
  clear: both;
}
.shopMain .firstShop {
  width: 255px;
  float: left;
  margin-left: 26px;
  margin-top: 15px;
}
.shopMain .firstShop:hover {
  border: 2px solid #f40;
  box-sizing: border-box;
}
.shopMain .firstShop div {
  width: 100%;
}
.shopMain .firstShop .first a {
  display: inline-block;
  width: 100%;
}
.shopMain .firstShop .first a img {
  width: 100%;
  height: 100%;
}
.shopMain .firstShop .second {
  margin: 5px;
}
.shopMain .firstShop .second #price {
  color: #f40;
  font-weight: bold;
  font-size: 18px;
}
.shopMain .firstShop .second #free {
  background: #f40;
  color: white;
  font-size: 13px;
}
.shopMain .firstShop .second #afford {
  float: right;
  margin-right: 8px;
  columns: #c6c6c6;
  font-size: 13px;
  margin-top: 4px;
}

.shopMain .firstShop .third {
  width: 245px;
  height: 40px;
  overflow: hidden;
  font-size: 15px;
  margin: 5px;
}
.shopMain .firstShop .third a:hover span {
  color: #f40;
  text-decoration: underline;
}
.shopMain .firstShop .forth {
  margin: 5px;
}
.shopMain .firstShop .forth #address {
  font-size: 13px;
  color: rgb(104, 100, 100);
  text-decoration: underline;
  cursor: pointer;
}
.shopMain .firstShop .forth #address:hover {
  color: #f40;
}
.shopMain .firstShop .forth #province {
  float: right;
  font-size: 13px;
  color: rgb(104, 100, 100);
  margin: 4px 10px 0px 0px;
}
</style>