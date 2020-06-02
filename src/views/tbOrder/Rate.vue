<template>
  <div
    id="Rate"
    v-if="isOpen"
  >
    <div class="top">
      <span
        class="text"
        style='color:#606266;letter-spacing:2px;'
      >发表评论</span>
      <i
        @click="close"
        class="el-icon-circle-close "
        style="position:absolute;right:5px;top:8px;cursor:pointer;"
      ></i>
    </div>

    <div
      class="nav"
      style="padding:5px 20px;"
    >
      <span
        class='nav-text'
        style='color:black;letter-spacing:2px;font-weight:bold;'
      >说说宝贝的使用体验</span>
    </div>

    <div class="rateContext">
      <div class="shopImage">
        <img
          style="width:80px;height:60px;float:left;"
          :src="require('../../assets/image/'+this.$store.state.orderInfo.shopimage)"
        />
        <p class="title">{{$store.state.orderInfo.shoptitle}}</p>
        <span style="font-size:14px;color:#C0C4CC;">美颜套餐:全家桶 美颜效果:最高级</span>
      </div>
      <br>

      <div class="rateScore">
        <span class="demonstration">描述相符</span>
        <el-rate
          id="rateShow"
          v-model="value"
          :colors="colors"
        >
        </el-rate>
        <span style="margin-left:10px;display:inline-block;float:left;color:#f40;font-weight:bold;font-size:14px;">{{textShow}}</span>
      </div>

      <div class="rateText">
        <textarea
          v-model="text"
          class="comment"
          placeholder="发表你的评论吧~"
        ></textarea>
      </div>

    </div>

    <div
      class="bottom"
      style="width:100%;text-align:center;margin-top:10px;"
    >
      <el-button
        type="info"
        style="font-size:18px;"
        @click="submit"
      >提交</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as date from "@/uti/DateTime";
export default {
  name: "Rate",
  computed: {
    textShow() {
      if (this.value <= 2 && this.value > 0) {
        return "糟糕";
      } else if (this.value <= 4) {
        return "一般";
      } else {
        return "非常棒";
      }
    }
  },
  data() {
    return {
      text: "",
      isOpen: false,
      value: 5,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    submit() {
      let rateInfo = {};
      rateInfo.userid = this.$store.state.user.id;
      rateInfo.name = this.$store.state.user.name;
      rateInfo.shopid = this.$store.state.orderInfo.shopid;
      rateInfo.ratetext = this.text;
      rateInfo.ratescore = this.value;
      rateInfo.raterank = this.textShow;
      rateInfo.createddate = date.getFullDate();
      rateInfo.createdtime = date.getTime();
      rateInfo.createdweek = date.getWeek();
      axios.post("http://localhost:8181/rate/saveRate", rateInfo).then(() => {
        alert("发表评论成功");
        this.isOpen = false;
      });
    }
  }
};
</script>

<style scoped>
#Rate {
  background: #e4e7ed;
  width: 350px;
}
.top {
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: relative;
}
.rateContext {
  background: white;
  border-radius: 15px;
  margin-top: 15px;
  padding: 5px 10px;
  width: 300px;
  margin: 0 auto;
  /* border:1px solid white */
}
.rateContext ::after {
  content: "";
  display: block;
  clear: both;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.demonstration {
  display: block;
  float: left;
  letter-spacing: 2px;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  margin: 0 5px 0px 10px;
}
#rateShow {
  font-size: 18px;
  float: left;
}
.comment {
  margin-top: 5px;
  outline: 0;
  width: 280px;
  height: 80px;
  padding: 5px 8px;
}
</style>