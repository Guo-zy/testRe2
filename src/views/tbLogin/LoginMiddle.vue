<template>
  <div id="LoginMiddle">
    <div class="middle">
      <div class="middle-right">
        <div class="pwdBox">
          <span>密码登录</span>
        </div>
        <div class="loginBox">
          <div class="loginBox-userName">
            <label class="userName">
              <input
                type="text"
                name="username"
                id="userName"
                placeholder="会员名/邮箱/手机号"
                v-model="loginName"
                ref="loginInput"
              >
            </label>
          </div>
          <div class="loginBox-userPwd">
            <label class="userPwd">
              <input
                type="password"
                name="password"
                id="userPwd"
                v-model="password"
              >
            </label>
          </div>
          <div class="loginBox-check">
           
            <span class="checkFont">验证码:</span>
            <input
              id="code"
              type="text"
              autocomplete="off"
              v-model="code"
              maxlength="4"
              ref="codeInput"
              @change='JudgeRight'
            >
             <i v-if="isRight" class="el-icon-success" style="position:absolute;left:42%;top:10px;font-size:16px"></i>
             <i v-else class="el-icon-error" style="position:absolute;left:42%;top:10px;font-size:16px"></i>
            <canvas
              id="myCanvas"
              class="MyCheckCode"
              width="100"
              height="25"
              @click="changeCode"
            ></canvas>
          </div>
          <div class="errorcode">
            <span id="codeError"></span>
          </div>
          <div class="loginBox-loginBt"><input
              type="submit"
              value="登录"
              id="submit"
              @click.prevent="goTB"
            ></div>
        </div>
        <div class="loginChooseBox">

          <a
            href="#"
            class="weibo"
          ><span class="weiboP"></span>微博登录</a>
          <a
            href="#"
            class="zfb"
          ><span class="zfbP"></span>支付宝登录</a>

        </div>
        <div class="loginLink">
          <a href="#">忘记密码</a>
          <a href="#">免费注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestLogin } from "@/network/request";
export default {
  name: "LoginMiddle",
  data() {
    return {
      currentCode: "",
      loginName: "",
      password: "",
      code: "",
      isRight:false
    };
  },
  mounted() {
    this.createCanvas();
  },
  methods: {
    createCanvas() {
      const code = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      let len = code.length;
      let CheckCode = "";
      let codeCopy = "";
      this.currentCode = "";
      for (var i = 0; i < 4; i++) {
        codeCopy = code[Math.floor(Math.random() * len)];
        CheckCode += codeCopy + " ";
        this.currentCode += codeCopy;
      }
      let myCanvas = document.getElementById("myCanvas");
      let ctx = myCanvas.getContext("2d");
      ctx.beginPath();
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      ctx.lineWidth = 13;
      ctx.strokeStyle = "#ccc";
      ctx.moveTo(
        Math.floor(Math.random() * 15),
        Math.floor(Math.random() * 20)
      );
      ctx.lineTo(
        80 + Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20)
      );
      ctx.stroke();
      ctx.globalCompositeOperation = "lighter";
      ctx.closePath();
      ctx.save();
      ctx.beginPath();
      var x = myCanvas.width / 2;
      ctx.textAlign = "center";
      ctx.fillStyle = "#ddd";
      ctx.font = "23px Roboto Slab";
      ctx.setTransform(1, -0.12, 0.2, 1, 0, 12);
      ctx.fillText(CheckCode, x + 1, 10);
      ctx.restore();
    },
    changeCode() {
      this.createCanvas();
    },
    JudgeLogin() {
      const Login_name = this.loginName;
      const password = this.password;
      requestLogin({
        url: "/Login/JudgeLogin",
        params: {
          Login_name,
          password
        }
      }).then(data => {
        if (data.data.length === 0) {
          alert("账号或密码错误");
          this.$refs.loginInput.focus();
        } else {
          this.$store.commit("UpdateLoginToken",true);
          this.$store.commit("insertUserInfo",data.data[0]);
          this.$router.push("/taobao");
        }
      });
    },
    JugdeCode() {
      this.code = this.code.toLowerCase();
      this.currentCode = this.currentCode.toLowerCase();
      if (this.code !== this.currentCode) {
        alert("验证码输入错误");
        this.$refs.codeInput.focus(); //光标落在验证码框上
        return false;
      } else {
        return true;
      }
    },
    goTB() {
      if (this.JugdeCode()) {
        this.JudgeLogin();
      }
    },
    JudgeRight(){
      if(this.code.toLowerCase()==this.currentCode.toLowerCase()){
        this.isRight=true;
      }
      else{
        this.isRight=false;
      }
    }
  }
};
</script>

<style scoped>
#LoginMiddle .middle .middle-right {
  width: 380px;
  height: 380px;
  position: absolute;
  right: 65px;
  top: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  /* background: white; */
}

#LoginMiddle .middle .middle-right .pwdBox {
  background: none;
  position: absolute;
  top: 20px;
  left: 28px;
  width: 100px;
}

#LoginMiddle .middle .middle-right .pwdBox span {
  background: none;
  color: #3c3c3c;
  font-weight: 700;
  font-size: 17px;
}

#LoginMiddle .middle .middle-right .loginBox {
  width: 325px;
  height: 243px;
  margin: 67px auto 0px;
  /*     overflow: hidden; */
  color: #6c6c6c;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-userName {
  width: 323px;
  height: 40px;
  border: 1px solid #ddd;
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 0.9);
  position: relative;
  /*     overflow-y: hidden; */
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-userName .userName {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1px;
  width: 40px;
  height: 40px;
  background: url(../../assets/image/username.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-userName input {
  position: absolute;
  left: 54px;
  top: 0;
  width: 269px;
  border: none;
  font-size: 16px;
  text-align: left;
  line-height: 40px;
  outline: none;
}

#LoginMiddle .middle .middle-right .loginBox .nameError {
  position: absolute;
  top: 112px;
  left: 64px;
}

#LoginMiddle .middle .middle-right .loginBox .pwdError {
  position: absolute;
  top: 179px;
  left: 64px;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-userPwd {
  width: 323px;
  height: 40px;
  border: 1px solid #ddd;
  margin-top: 26px;
  background-color: rgba(255, 255, 255, 0.9);
  position: relative;
  /*     overflow-y: hidden; */
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-userPwd .userPwd {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1px;
  width: 40px;
  height: 40px;
  background: url(../../assets/image/pwd.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-userPwd input {
  position: absolute;
  top: 0;
  left: 54px;
  width: 269px;
  border: none;
  font-size: 16px;
  text-align: left;
  line-height: 40px;
  outline: none;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-check {
  width: 376px;
  height: 28px;
  margin-top: 28px;
  position: relative;
  /*     overflow-y: hidden; */
  text-align: center;
  line-height: 28px;
  font-size: 18px;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-check .checkFont {
  position: absolute;
  left: 0px;
  top: 2px;
  font-size: 16px;
  color: #6c6c6c;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-check input {
  position: absolute;
  top: 4px;
  left: 72px;
  width: 104px;
  height: 26px;
  border: none;
  font-size: 16px;
  text-align: left;
  line-height: 26px;
  outline: none;
}
#LoginMiddle .middle .middle-right .loginBox .errorcode {
  position: absolute;
  top: 233px;
  left: 95px;
}

#LoginMiddle .middle .middle-right .loginBox .check {
  position: relative;
  height: 50px;
}

#LoginMiddle .middle .middle-right .loginBox .MyCheckCode {
  border: 1px solid #000;
  border-radius: 5px;
  background-image: url(../../assets/image/bg.jpg);
  position: absolute;
  margin: 4px 10px 0px 5px;
  cursor: pointer;
}
#LoginMiddle .middle .middle-right .loginBox .loginBox-loginBt {
  width: 323px;
  height: 40px;
  margin-top: 30px;
  margin-bottom: 5px;
}

#LoginMiddle .middle .middle-right .loginBox .loginBox-loginBt input {
  width: 323px;
  border: none;
  font-size: 16px;
  color: white;
  font-weight: 700;
  text-align: center;
  line-height: 40px;
  background: #f40;
  cursor: pointer;
}

#LoginMiddle .middle .middle-right .loginChooseBox {
  width: 323px;
  height: 25px;
  margin: 0 auto;
}

#LoginMiddle .middle .middle-right .loginChooseBox .weibo {
  display: line-block;
  width: 95px;
  height: 25px;
  margin-right: 12px;
  color: #6c6c6c;
  font-size: 13px;
}

#LoginMiddle .middle .middle-right .loginChooseBox a:hover {
  color: #f40;
}

#LoginMiddle .middle .middle-right .loginChooseBox .weibo .weiboP {
  display: inline-block;
  width: 28px;
  height: 36px;
  background: url(../../assets/image/weibo.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-top: 1px;
  margin-bottom: -13px;
  margin-right: 3px;
}

#LoginMiddle .middle .middle-right .loginChooseBox .zfb {
  width: 95px;
  height: 25px;
  display: inline-block;
  color: #6c6c6c;
  font-size: 13px;
}

#LoginMiddle .middle .middle-right .loginChooseBox .zfb .zfbP {
  display: inline-block;
  width: 21px;
  height: 21px;
  margin-right: 3px;
  margin-top: 1px;
  margin-bottom: -3px;
  background: url(../../assets/image/zfb.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#LoginMiddle .middle .middle-right .loginLink {
  width: 323px;
  text-align: right;
  margin: 18px auto 0;
}

#LoginMiddle .middle .middle-right .loginLink a {
  display: inline-block;
  text-decoration: none;
  color: #6c6c6c;
  font-size: 13px;
  margin-left: 15px;
}

#LoginMiddle .middle .middle-right .loginLink a:hover {
  color: #f40;
}
</style>
