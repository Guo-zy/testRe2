<template>
  <div id="ShowLeft">
    <ul>
      <li><a
          target="_blank"
          class="clickEvent"
          href="findClass?className=00010001"
        >护肤</a>
        <span> / </span>
        <a
          target="_blank"
          class="clickEvent"
          href="findClass?className=00010002"
        >彩妆</a>
        <span> / </span>
        <a
          target="_blank"
          class="clickEvent"
          href="findClass?className=00030002"
        >香氛</a>
      </li>
      <li><a href="#">女装</a>
        <span> / </span>
        <a href="#">男装</a>
        <span> / </span>
        <a href="#">内衣</a>
      </li>
      <li><a href="#">运动</a>
        <span> / </span>
        <a href="#">户外</a>
        <span> / </span>
        <a href="#">乐器</a>
      </li>
      <li><a href="#">珠宝</a>
        <span> / </span>
        <a href="#">眼镜</a>
        <span> / </span>
        <a href="#">手表</a>
      </li>
      <li><a href="#">美食</a>
        <span> / </span>
        <a href="#">生鲜</a>
        <span> / </span>
        <a href="#">零食</a>
      </li>
      <li><a href="#">工具</a>
        <span> / </span>
        <a href="#">装修</a>
        <span> / </span>
        <a href="#">建材</a>
      </li>
      <li><a href="#">家具</a>
        <span> / </span>
        <a href="#">家饰</a>
        <span> / </span>
        <a href="#">家纺</a>
      </li>
      <li><a href="#">汽车</a>
        <span> / </span>
        <a href="#">二手车</a>
        <span> / </span>
        <a href="#">用品</a>
      </li>
      <li><a href="#">办公</a>
        <span> / </span>
        <a href="#">DIY</a>
        <span> / </span>
        <a href="#">五金电子</a>
      </li>
      <li><a href="#">百货</a>
        <span> / </span>
        <a href="#">餐厨</a>
        <span> / </span>
        <a href="#">家庭保健</a>
      </li>
      <li><a href="#">鞋靴</a>
        <span> / </span>
        <a href="#">箱包</a>
        <span> / </span>
        <a href="#">配件</a>
      </li>
      <li><a href="#">家电</a>
        <span> / </span>
        <a href="#">数码</a>
        <span> / </span>
        <a href="#">手机</a>
      </li>
      <li><a href="#">美妆</a>
        <span> / </span>
        <a href="#">洗护</a>
        <span> / </span>
        <a href="#">保健品</a>
      </li>
      <li><a href="#">鲜花</a>
        <span> / </span>
        <a href="#">宠物</a>
        <span> / </span>
        <a href="#">农资</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowLeft"
};
</script>

<style scoped>
#ShowLeft {
  width: 220px;
  float: left;
  background: white;
}
#ShowLeft ul {
  width: 220px;
  margin-top: 5px;
}
#ShowLeft ul li {
  width: 100%;
  /*     height: 100%; */
  text-align: center;
  line-height: 33px;
  position: relative;
}
#ShowLeft ul li::after {
  position: absolute;
  right: 3px;
  content: ">";
  font-size: 12px;
  color: #666;
  display: inline-block;
  width: 18px;
  height: 20px;
  text-align: center;
}
#ShowLeft ul li:hover::after {
  color: #ff5000;
}
#ShowLeft ul li a {
  color: #666;
  font-size: 14px;
}
#ShowLeft ul li:hover {
  background: #ffe4dc;
  transition: 0.5s;
}
#ShowLeft ul li:hover a:hover {
  text-decoration: underline;
}
#ShowLeft ul li:hover a,
#ShowLeft ul li:hover span {
  color: #ff5000;
}

#ShowLeft ul li a {
  color: #666;
  font-size: 14px;
}

#ShowLeft ul li:hover {
  background: #ffe4dc;
  transition: 0.5s;
}

#ShowLeft ul li:hover a:hover {
  text-decoration: underline;
}

#ShowLeft ul li:hover a,
#ShowLeft ul li:hover span {
  color: #ff5000;
}
</style>