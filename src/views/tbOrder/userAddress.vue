<template>
  <div
    id="userAddress"
    v-if="open"
  >
    <div class="top">
      <span class="other">其他地址</span>
    </div>
    <ul style="list-style:none;margin:0px;padding:0px;">
      <li
        v-for='(address,index) in addressList'
        :key="index"
        :class="{actived:index===isActived}"
        @click="addClass(index)"
        @dblclick='okBtn(index)'
      >
        <div>
          <span id="Province">{{address.province}}
            <span id="City">{{address.city}}</span>
            <span id="Name">({{address.name}} 收)</span>
          </span>
        </div>
        <div
          class="addressDetail"
          style="position:relative"
        >
          <p style="width:280px">{{address.erae}}{{address.address}}</p>
          <p id="Tel">{{address.phone}}</p>
        </div>
        <i
          class="el-icon-circle-close icon-del"
          style="z-index:999"
          @click.stop="deleteAddress(index,address.id)"
        ></i>
      </li>

    </ul>

    <div
      class="clickBtn"
      style="margin-top:10px;"
    >
      <el-button
        class="okBtn"
        type="primary"
        @click='okBtn'
      >确定</el-button>
      <el-button
        class="exitBtn"
        type="danger"
        @click="cancel"
      >取消</el-button>
    </div>

  </div>
</template>


<script>
import { requestOtherAddress } from "@/network/request";
import { updateDefaultAddress } from "@/network/request";
import { deleteAddress } from "@/network/request";

export default {
  name: "userAddress",
  inject: ["reload"],
  created() {
    let userid = this.$store.state.user.id;
    requestOtherAddress({
      url: "/address/selectAddressExpectDefault",
      params: {
        userid
      }
    }).then(addressList => {
      this.addressList = addressList.data;
    });
  },
  data() {
    return {
      addressList: [],
      open: false,
      isActived: "",
      currentIndex: ""
    };
  },
  methods: {
    cancel() {
      this.open = false;
      this.isActived = "";
      this.currentIndex = "";
    },
    addClass(index) {
      this.isActived = Number(index);
      this.currentIndex = Number(index);
    },
    okBtn() {
      let userId = this.$store.state.user.id;
      let addressId = this.addressList[this.currentIndex].id;
      updateDefaultAddress({
        url: "/address/UpdateDefauleAddress",
        params: {
          userId,
          addressId
        }
      }).then(() => {
        this.$store.commit(
          "InsertAddress",
          this.addressList[this.currentIndex]
        );
        this.reload();
      });
    },
    deleteAddress(index, addressId) {
      deleteAddress({
        url: "/address/deleteAddressById",
        params: {
          addressId
        }
      }).then(() => {
        this.addressList.splice(index, 1);
      });
    }
  }
};
</script>

<style scoped>
#userAddress {
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 10px 10px;
  margin-left: -160px;
  margin-top: -200px;
  border: 3px solid #ccc;
  width: 320px;
  background: white;
  overflow-y: auto;
  z-index: 999;
  max-height: 400px;
}
#userAddress .other {
  display: inline-block;
  font-size: 18px;
  letter-spacing: 2px;
  padding: 5px 1px;
}
ul li {
  border: 1px solid #ccc;
  padding: 10px 10px;
  position: relative;
}
ul li:hover {
  border: 3px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
}
ul .actived {
  border: 2px solid black !important;
}
ul .icon-del {
  position: absolute;
  right: 10px;
  top: 40%;
}
</style>