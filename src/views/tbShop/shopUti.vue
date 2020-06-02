<template>
    <div id="shopUti">
        <div class="shoppingType">
            <ul>
                <li id="activeSelect"><span>综合排序</span></li>
                <li><span>销量</span></li>
                <li id="priceSelect"><span>价格∨</span></li>
                <ul class="priceTag">
                    <li><a href="#"><span>价格从高到低</span></a></li>
                    <li><a><span>价格从低到高</span></a></li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
            name:'shopUti'
}
</script>

<style scoped>
    #shopUti{
    position: relative;
    width: 1100px;
    margin:15px auto;
}
.shoppingType ul{
    border: 1px solid #ccc; 
}

.shoppingType ul::after{
    display: block;
    content:"";
    clear:both;
}
.shoppingType ul li{
    float:left;
     width:55px;
     height:25px;
     padding:5px;
     text-align: center;
     line-height:25px;
     font-size:14px;
     cursor: pointer;

}   
.shoppingType ul li:nth-child(1){
    width:80px;
}
.shoppingType ul #activeSelect span{
    color:#f40;
}
.shoppingType ul  li:hover span{
    color:#f40;
}
.shoppingType ul #activeSelect,li:hover{
    background: #fff;
    border-right: 1px solid #ccc;
    
}

.shoppingType ul .priceTag{
    position: absolute;
    display: none;
    left:157px;
    background: #fff;
    border:1px solid #ccc;
}
.shoppingType ul .priceTag li{
    float:none;
    width:110px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border:none;
}
</style>