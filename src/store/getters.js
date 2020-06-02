export default {
  getShopById(state) {
    return function(id) {
      return state.shopList.filter(shop => {
        return shop.id === id;
      });
    };
  }
};
