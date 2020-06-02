<template>
  <div id="search-m">
    <div class="search-m-t">
      <ul>
        <li id="active"><a href="#"><span>宝贝</span></a></li>
        <li><a href="#"><span class="other">天猫</span></a></li>
        <li><a href="#"><span class="other">店铺</span></a></li>
      </ul>
    </div>
    <div class="search-m-m">
      <input
        v-model.trim="shopName"
        type="text"
        name="shopName"
        style="outline:none;"
        autocomplete="off"
        @input="showName"
        @focus="showName()"
      />
      <ul>
        <li
          v-for="name in dataList"
          :key="name.id"
          @click="goshow(name.supplier)"
        >{{name.supplier}}</li>
      </ul>
      <input
        @click.prevent="go"
        class="clickEvent"
        type="submit"
        value="搜索"
      >
      <!-- <router-link to="/taobao" tag="submit"  class="clickEvent"  @click.prevent="submit">搜索</router-link> -->

    </div>
    <div class="search-m-b">
      <a id="active1"><span @click="goshow('洗面奶')">洗面奶</span></a>
      <a><span @click="goshow('洁面乳')">洁面乳</span></a>
      <a><span @click="goshow('欧莱雅')">欧莱雅</span></a>
      <a><span @click="goshow('香水')">香水</span></a>
      <a><span @click="goshow('洁面膏')">洁面膏</span></a>
      <a><span @click="goshow('洗面乳')">洗面乳</span></a>
      <a><span @click="goshow('丝塔芙')">丝塔芙</span></a>
      <a><span @click="goshow('护霜')">护霜</span></a>
      <a><span @click="goshow('伊丽莎白雅顿')">伊丽莎白雅顿</span></a>
    </div>

  </div>
</template>

<script>
import { requestShop } from "@/network/request";
export default {
  name: "SerchMiddle",
  inject: ["reload"],
  created() {
    if (this.$route.path == "/taobao") {
      this.$store.commit("clearShopName");
    }
    else
    this.shopName = this.$store.state.shopName;
    
  },
  data() {
    return {
      shopName: "",
      dataList: []
    };
  },
  methods: {
    go() {
      if (this.$route.path.includes("shoppingMain")) {
        this.reload();
      }
      this.$store.commit("insertShopName", this.shopName);
      this.$router.push("/shoppingMain/" + this.shopName);
    },
    goshow(data) {
      this.shopName = data;
      if (this.$route.path.includes("shoppingMain")) {
        this.reload();
      }
      this.$store.commit("insertShopName", this.shopName);
      this.$router.push("/shoppingMain/" + data);
    },
    showName() {
      if (this.$store.state.shopList.length == 0) {
        requestShop({
          url: "/shop/findAll"
        }).then(dataList => {
          this.$store.commit("getShopList", dataList.data);
        });
      }
      if (this.showName != "" && this.shopName != null) {
        const res = new Map();
        this.dataList = this.$store.state.shopList
          .filter(shop => {
            return shop.supplier.includes(this.shopName);
          })
          .filter(shop => !res.has(shop.supplier) && res.set(shop.supplier, 1));
        if (this.dataList.length > 10) {
          this.dataList.length = 10;
        }
      }
    }
  }
};
</script>

<style scoped>
.search-m-m ul {
  display: none;
}
.search-m-m:hover ul {
  cursor: text;
  display: block;
}
.search-m-m ul {
  position: absolute;
  z-index: 9999;
  top: 35px;
  width: 465px;
  border-left: 1px solid #808080;
  border-right: 1px solid #808080;
}

.search-m-m ul li {
  background-color: white;
  height: 25px;
  font-size: 16px;
}
.search-m-m ul li:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
#search-m {
  width: 600px;
  height: 110px;
  position: relative;
  left: 400px;
}
#search-m .search-m-t {
  width: 180px;
  height: 25px;
  position: absolute;
  left: 16px;
  top: 20px;
}
#search-m .search-m-t ul {
  width: 180px;
  height: 25px;
}
#search-m .search-m-t li {
  float: left;
  width: 45px;
  height: 25px;
  margin-left: 5px;
  text-align: center;
}
#search-m .search-m-t li span {
  position: absolute;
  width: 36px;
  height: 22px;
  font-size: 14px;
  line-height: 22px;
}
#search-m .search-m-t li .other:hover {
  background: #ffeee5;
  color: #f40;
}
#active span {
  color: #fff;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
}
#search-m .search-m-m {
  width: 480px;
  height: 35px;
  border: 2px solid #f40;
  position: absolute;
  top: 40px;
  left: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
#search-m .search-m-m [type="text"] {
  position: absolute;
  left: 4px;
  top: 7px;
  border: 0px;
  width: 455px;
  height: 22px;
  font-size: 14px;
  line-height: 22px;
}
#search-m .search-m-m [type="submit"] {
  width: 60px;
  height: 40px;
  border: 1px solid #f40;
  position: absolute;
  right: -45px;
  top: -2px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}

#search-m .search-m-b {
  position: absolute;
  width: 550px;
  height: 25px;
  bottom: 3px;
  left: 20px;
}

#search-m .search-m-b a {
  width: 50px;
  height: 25px;
  font-size: 13px;
  margin-left: 2px;
}
#search-m .search-m-b li span {
  position: absolute;
  width: 65px;
  height: 25px;
  line-height: 25px;
}
#search-m .search-m-b #active1 span {
  color: #f40;
}
#search-m .search-m-b span:hover {
  cursor: pointer;
  color: #f40;
}
</style>