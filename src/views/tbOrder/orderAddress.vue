<template>
  <div id="orderAddress">
    <div class="carMain-first">
      <div>
        <el-button
          type="primary"
          style="margin-left:35px"
          @click="showPage"
        >新增地址</el-button>
      </div>

      <div
        @click="showAddress"
        class="existAddress"
      >
        <div class="addressName">
          <span id="Province">{{address.province}}
            <span id="City">{{address.city}}</span>
            <span id="Name">({{address.name}} 收)</span>
          </span>
        </div>
        <div
          class="addressDetail"
          style="position:relative"
        >
          <p style="width:280px;padding:5px 10px;letter-spacing:2px;">{{address.erae}}{{address.address}}</p>
          <p
            id="Tel"
            style="padding:0px 7px;"
          >{{address.phone}}</p>
          <i class="el-icon-caret-right iconR"></i>
        </div>

      </div>

    </div>

    <div class="AddressPage">
      <addAddress ref="page" />
      <userAddress ref="address" />
    </div>

  </div>
</template>

<script>
import addAddress from "./addAddress";
import userAddress from "./userAddress";
import { requestDefaultAddress } from "@/network/request";
export default {
  name: "orderAddress",
  created() {
    let id = this.$store.state.user.id;
    requestDefaultAddress({
      url: "/address/findAddressById",
      params: {
        id
      }
    }).then(address => {
      this.address = address.data;
      this.$store.commit("InsertAddress",address.data)
    });
  },
  data() {
    return {
      address: {}
    };
  },
  methods: {
    showPage() {
      this.$refs.page.addAddress = true;
    },
    showAddress() {
      this.$refs.address.open = true;
    },

  },
  components: {
    addAddress,
    userAddress
  }
};
</script>

<style scoped>
#orderAddress {
  /* background: white; */
  width: 100%;
  position: relative;
}

#orderAddress .carMain-first {
  width: 1100px;
  margin: 20px auto;
  border-bottom: 1px solid rgb(196, 194, 194);
}

#orderAddress .carMain-first::after {
  content: "";
  display: block;
  clear: both;
}

#orderAddress .carMain-first .chooseAdd {
  width: 97%;
  margin: 0 auto 10px;
  /* margin-bottom: 10px; */
}

#orderAddress .carMain-first .selectAddress {
  width: 100%;
  margin: 10px auto;
}

#orderAddress .carMain-first .selectAddress button {
  border: 1px solid #c6c6c6;
  margin-left: 25px;
  display: inline-block;
  width: 90px;
  height: 30px;
  cursor: pointer;
  color: #333;
  line-height: 30px;
  font-weight: 500;
  font-size: 14px;
  background: linear-gradient(white, #c6c6c6);
  border-radius: 2px;
  letter-spacing: 2px;
}

#orderAddress .carMain-first .existAddress {
  width: 300px;
  height: 100px;
  border: 4px dashed #95dcf8;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 30px;
  float: left;
  cursor: pointer;
}

#orderAddress .carMain-first .existAddress:hover {
  border: 6px dashed #95dcf8;
}

.iconR {
  position: absolute;
  right: 0px;
  top: 50%;
  display: none;
}

#orderAddress .carMain-first .existAddress:hover .iconR {
  display: inline-block;
}
#orderAddress .carMain-first .existAddress .addressName {
  width: 90%;
  height: 30px;
  margin: 0 auto;
  border-bottom: 1px solid #c6c6c6;
}

#orderAddress .carMain-first .existAddress .addressName span {
  text-align: center;
  line-height: 30px;
}

#orderAddress .carMain-first .existAddress .addressName #Province {
  color: rgb(138, 136, 136);
  font-size: 14px;
}

.carMain .carMain-first .existAddress .addressName #City {
  color: rgb(110, 108, 108);
  font-size: 14px;
  font-weight: bolder;
  margin-right: 20px;
}

.carMain .carMain-first .existAddress .addressName #Name {
  color: rgb(138, 136, 136);
}

.carMain .carMain-first .addressDetail {
  width: 90%;
  height: 30px;
  margin: 13px auto 0px;
}

.carMain .carMain-first .addressDetail span {
  color: rgb(138, 136, 136);
  font-size: 14px;
}

.carMain .carMain-first .addressDetail span #Tel {
  color: rgb(110, 108, 108);
  font-size: 14px;
  font-weight: bolder;
}
</style>