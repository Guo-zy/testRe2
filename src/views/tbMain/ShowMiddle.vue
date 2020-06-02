 <script src="http://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<template>
  <div id="ShowMiddle">
    <div class='main-top'>
      <div class="picItem">
        <img :src="dataList[currentIndex]">
        <div
          class="page"
          v-if="this.dataList.length>1"
        >
          <ul>
            <li
              class="lt"
              @click="gotoPage(preIndex)"
            >&lt;</li>
            <div class="itemNum">
              <li
                class="number"
                v-for="(item,index) in dataList"
                :key="index"
                @click="gotoPage(index)"
                :class="{'current':currentIndex==index}"
              >{{index+1}}</li>
            </div>
            <li
              class="gt"
              @click="gotoPage(nextIndex)"
            >&gt;</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-center-mid">
      <span class="solgan"> <span class="cat-bg"></span>理想生活上天猫</span>
    </div>
    <div class="main-center-bottom">
      <div class="twoPic">
        <a href="#"><img
            src="https://aecpm.alicdn.com/simba/img/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg"
            alt=""
            class="pic1"
          ></a>
        <a href="#"><img
            src="https://aecpm.alicdn.com/simba/img/TB13xKuLVXXXXcHapXXSutbFXXX.jpg"
            alt=""
            class="pic2"
          ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowMiddle",
  data() {
    return {
      dataList: [
        "https://img.alicdn.com/tps/i4/TB1ZvEQQ3DqK1RjSZSySuuxEVXa.jpg_q90_.webp",
        "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
        "https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg",
        "https://img.alicdn.com/tps/i4/TB1mbU9Q3HqK1RjSZJnSuvNLpXa.jpg_q90_.webp"
      ],
      currentIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.gotoPage(this.nextIndex);
    }, 4000);
  },
  computed: {
    preIndex() {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1;
      } else return this.currentIndex - 1;
    },
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else return this.currentIndex + 1;
    }
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
 #ShowMiddle {
  margin-top: 5px;
  float:left;
  width:550px;
}
.picItem {
  position: relative;
  width:550px;
}

.current {
  font-size: 20px;
  color:white
}
.picItem:hover .lt,
.picItem:hover .gt,
.picItem:hover .itemNum {
  display: inline-block;
}
.lt {
  position: absolute;
  top: 115px;
  font-size: 45px;
  cursor: pointer;
  display: none;
}
.gt {
  position: absolute;
  right: 35px;
  top: 115px;
  font-size: 45px;
  cursor: pointer;
  display: none;
}
.number {
  float: left;
  margin-left:10px;
  cursor:pointer;
}
.itemNum {
  position: absolute;
  left: 215px;
  bottom: 0px;
  display: none;
}
#ShowMiddle .main-center-mid {
    height: 30px;
    border-bottom: 2px solid #ff1648;
    line-height: 43px;
    width:530px;
}

#ShowMiddle .main-center-mid .cat-bg {
    display: inline-block;
    width: 136px;
    height: 19px;
    background-image: url("data:image/png;base64,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");
    background-size: 100% 100%;
    margin-right: 15px;
    margin-top: 5px;
    margin-left:15px
}

#ShowMiddle .main-center-bottom {
    margin-top: 5px;
}

#ShowMiddle .main-center-bottom img {
    margin-left: 8px;
    margin-right: 5px;
    width: 255px;
}
</style>