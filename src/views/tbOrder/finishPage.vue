<template>
  <div id="finishPage">
    <div class="mainBox">
      <div class="mainBox-Main">
        <span class="info"><img
            src="../../assets/image/true.png"
            alt=""
            id="true"
          ><span id="success">订单提交成功！我们会尽快安排发货！亲请稍等哦~</span></span>
        <span class="lamp"><img src="../../assets/image/lamp.jpg"><span id="info1">订单正在处理中，亲可以在已买宝贝处查询订单信息，如有必要，你可以和商家联系！</span></span>
        <div class="loading">
          <span id="return">正在跳转至淘宝首页<span id="runTime">{{time}}</span></span>
          <img
            src="../../assets/image/loading.gif"
            alt=""
            id="load"
          >
          <a href="http://localhost:8080/taobao">点击跳转淘宝首页</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "finishPage",
  created() {
    this.timer = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.timer);
        this.$router.push("/taobao");
      }
    }, 1000);
  },
  data() {
    return {
      time: 5,
      timer: 0
    };
  }
};
</script>

<style scoped>
#finishPage {
  height: auto;
}

#finishPage .mainBox {
  width: 100%;
  height: 430px;
  margin: 0 auto;
  background: white;
  position: relative;
}

#finishPage .mainBox .mainBox-Main {
  width: 630px;
  height: 300px;
  border: 3px dashed rgb(64, 238, 157);
  position: absolute;
  top: 30px;
  left: 300px;
  text-align: center;
}

#finishPage .mainBox .mainBox-Main .info #true {
  display: inline-block;
  width: 45px;
  height: 45px;
}

#finishPage .mainBox .mainBox-Main .info {
  display: inline-block;
  width: 560px;
  position: relative;
  text-align: left;
}

#finishPage .mainBox .mainBox-Main .info #success {
  display: inline-block;
  margin-left: 10px;
  position: absolute;
  top: 11px;
  font-size: 22px;
}

#finishPage .mainBox .mainBox-Main .lamp {
  display: inline-block;
  width: 535px;
  position: relative;
  margin-top: 17px;
  text-align: left;
  margin-left: 20px;
}
#info1 {
  display: inline-block;

  background: linear-gradient(to left, rgb(236, 248, 182), rgb(246, 250, 184));
}

#finishPage .mainBox .mainBox-Main .lamp img {
  width: 40px;
  height: 30px;
}
#finishPage .mainBox .mainBox-Main .lamp #info1 {
  position: absolute;
  top: 8px;
  font-size: 13px;
}
#finishPage .mainBox .mainBox-Main .loading {
  width: 500px;
  height: 150px;
  margin: 20px auto;
}
#finishPage .mainBox .mainBox-Main .loading #return {
  display: block;
  font-size: 22px;
  letter-spacing: 2px;
}
#finishPage .mainBox .mainBox-Main .loading #runTime {
  color: rgb(250, 54, 54);
  padding-left: 10px;
}
#finishPage .mainBox .mainBox-Main .loading #load {
  display: block;
  width: 200px;
  height: 100px;
  margin: 0 auto;
}
#finishPage .mainBox .mainBox-Main .loading a {
  color: red;
  float: right;
  font-size: 13px;
}
#finishPage .mainBox .mainBox-Main .loading a:hover {
  text-decoration: underline;
}
</style>