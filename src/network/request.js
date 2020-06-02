import axios from "axios";

//请求所有商品
export function requestShop(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  // instance.interceptors.request.use(config => {
  //   if (JSON.stringfy(this.$store.state.user) == "{}") {
  //     console.log("user为空对象" + config);
  //   } else return config;
  // });
  return instance(config);
}

//请求登录信息
export function requestLogin(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//请求用户所有已添加地址
export function requestAddress(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//添加地址
export function addAddress(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//请求购物车所有商品
export function requestCar(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//购物车删除商品
export function deleteShop(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//提交订单
export function requestOrderShop(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//请求默认地址
export function requestDefaultAddress(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//请求除默认地址外的其他地址
export function requestOtherAddress(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//修改默认地址
export function updateDefaultAddress(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//删除地址
export function deleteAddress(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}

//请求所有评论信息
export function getRate(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8181",
    timeout: 5000
  });
  return instance(config);
}