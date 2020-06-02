<template>
  <div id="MenuRight">
                    <a class="nav-right-l" href="#"><span>天猫</span></a>
                    <a class="nav-right-l" href="#"><span>聚划算</span></a>
                    <a class="nav-right-l" href="#"><span>天猫超市</span></a>
                    <span>|</span>
                    <a href="#"><span>淘抢购</span></a>
                    <a href="#"><span>电器城</span></a>
                    <a href="#"><span>司法拍卖</span></a>
                    <a href="#"><span>淘宝心选</span></a>
                    <a href="#"><span>兴农扶贫</span></a>
                    <span>|</span>
                    <a href="#"><span>飞猪旅行</span></a>
                    <a href="#"><span>智能生活</span></a>
                    <a href="#"><span>苏宁易购</span></a>
  </div>
</template>

<script>
export default {
  name: "MenuRight"
};
</script>

<style scoped>
#MenuRight{
    width:880px;
    height:30px;
    position: absolute;
    top:0px;
    left:220px;
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
}

#MenuRight span{
    color:#fff;
    margin-left:13px;
    line-height: 30px;
    font-size:15px;
}
#MenuRight a span:hover{
    color:blue;
}
</style>