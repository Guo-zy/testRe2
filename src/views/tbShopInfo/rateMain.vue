<template>
  <div id="rateMain">
    <div class="top">
      <span
        class="top-text"
        @click="openRate"
        :class="{'actived':open}"
      >评价详情</span>
      <span style="margin-left:5px;">{{rateList.length}}</span>
    </div>
    <div
      class="rateContext"
      style="background:#fff"
      v-if="open"
    >
      <div class="rateCategories">
        <el-radio-group
          v-model="radio"
          @change="show"
        >
          <el-radio label="全部">全部（{{rateList.length}}）</el-radio>
          <el-radio label="糟糕">糟糕（{{rateList.filter(rate=>rate.raterank=="糟糕").length}}）</el-radio>
          <el-radio label="一般">一般（{{rateList.filter(rate=>rate.raterank=="一般").length}}）</el-radio>
          <el-radio label="非常棒">非常棒（{{rateList.filter(rate=>rate.raterank=="非常棒").length}}）</el-radio>
        </el-radio-group>
      </div>
      <ul>
        <li
          class="rateText"
          v-for="(rate,index) in filterRateList"
          :key="index"
        >
          <el-rate
            v-model="rate.ratescore"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="rate.raterank"
          >
          </el-rate>
          <div class="text">
            {{rate.ratetext}}
      </div>
      <p style="font-size:12px;padding:5px 0px;">{{rate.name}}
        {{rate.createddate}}
        {{rate.createdtime}}
        {{rate.createdweek}}</p>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRate } from "@/network/request";
export default {
  name: "rateMain",
  props: {
    shopid: {
      type: Number
    }
  },
  created() {
    const shopId = this.shopid;
    getRate({
      url: "/rate/findAllByShopId",
      params: {
        shopId
      }
    }).then(rateList => {
      this.rateList = rateList.data;
    });
  },
  computed: {
    filterRateList() {
      if (this.val == "全部") {
        return this.rateList;
      } else if (this.val == "糟糕") {
        return this.rateList.filter(rate => rate.raterank == this.val);
      } else if (this.val == "一般") {
        return this.rateList.filter(rate => rate.raterank == this.val);
      } else return this.rateList.filter(rate => rate.raterank == this.val);
    }
  },
  data() {
    return {
      rateList: [],
      radio: "全部",
      open: false,
      val: "全部"
    };
  },
  methods: {
    openRate() {
      const shopId = this.shopid;
      getRate({
        url: "/rate/findAllByShopId",
        params: {
          shopId
        }
      }).then(rateList => {
        this.rateList = rateList.data;
        this.allRateList = rateList.data;
      });
      this.open = !this.open;
    },
    show(val) {
      this.val = val;
    }
  }
};
</script>

<style scoped>
#rateMain {
  width: 1100px;
  margin: 0 auto;
}
.top {
  width: 100%;
  border-bottom: 2px solid #ccc;
}
.actived {
  color: #f40 !important;
}
.top .top-text {
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  color: #ccc;
  cursor: pointer;
}
.top .top-text:hover {
  color: #f40;
}
.rateCategories {
  padding: 10px 10px;
  background: #ccc;
}
.rateText {
  padding: 15px 10px;
}
.rateText .text {
  height: 70px;
  font-size: 14px;
  margin: 5px 0px 0px 3px;
}
.rateText {
  border-bottom: 1px solid #ccc;
}
</style>