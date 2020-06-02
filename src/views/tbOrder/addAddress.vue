<template>
  <div
    id="addAddress"
    v-if="addAddress"
  >
    <div class='add'>
      <span class="address">新增地址</span>
      <i
        class="el-icon-circle-close icon"
        @click="exit"
      ></i>
    </div>
    <div class="receiver">
      <span class="receiverTip">收货人:</span>
      <input
        type="text"
        v-model="receiver"
      />
    </div>
    <div class="phone">
      <span class="phoneTip">手机号码:</span>
      <input
        type="number"
        v-model="phone"
      />
    </div>
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
    >
      <el-form-item label="发往地区：">
        <el-cascader
          :options="CityInfo"
          v-model="form.selectedOptions"
          :checkStrictly="true"
          :clearable="true"
          :filterable="true"
          @change="handleChange"
        >
        </el-cascader>
        <!-- <span>详细地址：{{city}}{{erae}}{{minerae}}</span> -->
      </el-form-item>
    </el-form>
    <div class="detailAddress">
      <span class="detailAddressTip">详细地址:</span>
      <input
        type="text"
        v-model="detailAddress"
        placeholder="街道/门牌号"
      >
    </div>
    <div class="clickBtn">
      <el-button
        class="okBtn"
        type="primary"
        @click="submit"
      >确定</el-button>
      <el-button
        class="exitBtn"
        type="danger"
        @click="exit"
      >取消</el-button>
    </div>
  </div>
</template>

<script>
import { CityInfo } from "@/uti/city-data";
import axios from "axios";
export default {
  name: "addAddress",
  inject:['reload'],
  data() {
    return {
      receiver: "",
      phone: "",
      CityInfo: CityInfo,
      form: {
        city: "",
        erae: "",
        minerae: "",
        selectedOptions: [] //地区筛选数组
      },
      detailAddress: "",
      addAddress: false
    };
  },
  computed: {
    city() {
      for (const city of this.CityInfo) {
        if (this.form.city == city.value) {
          return city.label;
        }
      }
      return "";
    },
    erae() {
      for (const city of this.CityInfo) {
        for (const erae of city.children) {
          if (this.form.erae == erae.value) {
            return erae.label;
          }
        }
      }
      return "";
    },
    minerae() {
      for (const city of this.CityInfo) {
        for (const erae of city.children) {
          for (const minerae of erae.children) {
            if (this.form.minerae == minerae.value) {
              return minerae.label;
            }
          }
        }
      }
      return "";
    }
  },
  methods: {
    handleChange() {
      this.form.city = this.form.selectedOptions[0];
      this.form.erae = this.form.selectedOptions[1];
      this.form.minerae = this.form.selectedOptions[2];
    },
    submit() {
      let address = {};
      address.userid = Number(this.$store.state.user.id);
      address.name = this.receiver;
      address.phone = this.phone;
      address.province = this.city;
      address.city = this.erae;
      address.erae = this.minerae;
      address.address = this.detailAddress;
      address.isdefault = 1;
      axios
        .post("http://localhost:8181/address/insertAddress", address)
        .then(() => {
          this.$store.commit("InsertAddress",address)
        this.reload();
        });
    },
    exit() {
      this.receiver = "";
      this.phone = "";
      this.detailAddress = "";
      this.form.selectedOptions = [];
      this.addAddress = false;
    }
  }
};
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

.icon {
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
}

#addAddress {
  width: 420px;
  height: 420px;
  border: 2px solid #dcdfe6;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -205px;
}

.address {
  display: inline-block;
}

.add {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 20px;
  color: #606266;
  padding: 5px 5px;
  margin-bottom: -10px;
  line-height: 50px;
}

.receiver,
.phone,
.detailAddress {
  font-size: 14px;
  color: #606266;
}
.receiverTip,
.phoneTip,
.detailAddressTip {
  display: inline-block;
  width: 80px;
  height: 40px;
  text-align: right;
  padding: 0px 12px 0px 0px;
  line-height: 14px;
}

.receiver,
.phone {
  margin: 20px 0px;
}

.detailAddress {
  margin: 30px 0px;
}

.receiver input,
.phone input,
.detailAddress input {
  width: 216px;
  height: 40px;
  margin-left: 9px;
  font-size: 14px;
  padding: 2px 10px;
  color: #606266;
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;
}

.clickBtn {
  display: inline-block;
  text-align: center;
  width: 100%;
}

.okBtn {
  margin-right: 30px;
}

.okBtn,
.exitBtn {
  width: 100px;
}
</style>