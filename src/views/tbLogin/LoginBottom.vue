<template>
    <div id="LoginBottom">
       <div class="bottom">
            <div class="bottom-Top">
                <a href="#">阿里巴巴集团</a><span>|</span>
                <a href="#">阿里巴巴国际站</a><span>|</span>
                <a href="#">阿里巴巴中国站</a><span>|</span>
                <a href="#">全球速卖通</a><span>|</span>
                <a href="#">淘宝网</a><span>|</span>
                <a href="#">天猫</a><span>|</span>
                <a href="#">聚划算</a><span>|</span>
                <a href="#">一淘</a><span>|</span>
                <a href="#">阿里妈妈</a><span>|</span>
                <a href="#">飞猪</a><span>|</span>
                <a href="#">虾米</a><span>|</span>
                <a href="#">阿里云计算</a><span>|</span>
                <a href="#">云OS</a><span>|</span>
                <a href="#">万网</a><span>|</span>
                <a href="#">支付宝</a><span>|</span>
                <a href="#">来往</a><span>|</span>
            </div>
            <div class="bottom-Middle">

                <a href="#">关于淘宝</a>
                <a href="#">合作伙伴</a>
                <a href="#">营销中心</a>
                <a href="#">廉政举报</a>
                <a href="#">联系客服</a>
                <a href="#">开放平台</a>
                <a href="#">诚征英才</a>
                <a href="#">联系我们</a>
                <a href="#">网站地图</a>
                <a href="#">法律声明</a>
                <a href="#">隐私权政策</a>
                <span>© 2019 Lee&Guo 版权所有 </span>
            </div>
            <div class="bottom-Bottom">
                <span> 网络文化经营许可证：浙网文[2016]0132-032号</span>
                <b>|</b>
                <span>增值电信业务经营许可证：浙B2-20080224-1</span>
                <b>|</b>
                <span>信息网络传播视听节目许可证：1109364号</span>
                <b>|</b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name:"LoginBottom"
}
</script>

<style scoped>
  
#LoginBottom .bottom .bottom-Top {
    margin: 1px auto;
    width: 1140px;
    height: 45px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}

#LoginBottom .bottom .bottom-Top a {
    text-decoration: none;
    font-size: 13px;
    text-align: right;
    margin: 0 3px;
    line-height: 45px;
    color: #6C6C6C;
}

#LoginBottom .bottom .bottom-Top a:hover {
    color: #f40;
}

#LoginBottom .bottom .bottom-Top span {
    color: #ddd;
    margin: 0 3px;
}

#LoginBottom .bottom .bottom-Middle, .bottom-Bottom {
    margin: 6px auto;
    width: 1140px;
    height: 20px;
}

#LoginBottom .bottom .bottom-Middle a, span {
    text-decoration: none;
    font-size: 13px;
    text-align: right;
    margin: 0 5px;
    color: #6C6C6C;
}

#LoginBottom .bottom .bottom-Middle a:hover {
    color: #f40;
}

#LoginBottom .bottom .bottom-Middle span {
    margin-left: 55px;
}

#LoginBottom .bottom .bottom-Bottom span {
    text-decoration: none;
    font-size: 13px;
    text-align: right;
    margin: 0 6px;
    color: #9c9c9c;
}

#LoginBottom .bottom .bottom-Bottom b {
    color: #9c9c9c;
}

#LoginBottom .middle .middle-right .loginBox .errorMessage{
	display:inline-block;
	position:relative;
	width:180px;
	height:30px;
	top:38px;
	color:red;
	/* border:1px solid black; */
	z-index:99999;
	text-align:center;
	line-height:30px;
	font-size:16px;
	
}  
</style>
