// import Vue from "vue";
export default {
  //修改登录状态
  UpdateLoginToken(state, Payload) {
    state.token = Payload;
  },
  //清空登录信息
  clearUserInfo(state){
    state.user={};
  },
  //添加登录信息
  insertUserInfo(state, Payload) {
    state.user = Payload;
  },
  //将全部商品存入shopList
  getShopList(state, Payload) {
    state.shopList = Payload;
  },
   //更新搜索框信息
   insertShopName(state,Payload){
    state.shopName=Payload;
  },
  //清楚搜索框信息
  clearShopName(state){
    state.shopName="";
  },
  //清空订单数据,
  clearOrderShop(state) {
    // Vue.delete(state.orderShop,'shop1');
    // state.orderShop.length=0;
    state.orderShop = [];
  },
  //添加订单数据
  InsertOrderShop(state, Payload) {
    // Vue.set(state.orderShop,0 ,Payload);
    state.orderShop.push(Payload);
    // state.orderShop = Payload;
  },
  //更新当前地址信息
  InsertAddress(state,Payload){
    state.address=Payload;
  },
  //添加订单信息
  InsertOrderInfo(state,Payload){
    state.orderInfo = Payload;
  }
  //用户确认收货
};
