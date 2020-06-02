<template>
    <div id="shopCategories">
        <div class="allShopping">
            <ul>
                <li id="activeSelect"><span>所有宝贝</span></li>
                <li><span>天猫</span></li>
                <li><span>二手</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
        name:'shopCategories'
}
</script>

<style scoped>
   #shopCategories{
    width: 1100px;
    margin:10px auto;
}

.allShopping ul {
    border-bottom:  2px  solid #f40;
}

.allShopping ul::after {
    display: block;
    content:"";
    clear:both;
}
.allShopping ul li:nth-child(1){
    float:left;
    width:85px;
    height:35px;
}
.allShopping ul li{
     float:left;
     width:50px;
     height:35px;
     padding:5px;   
}
.allShopping ul li:nth-child(1) span{
    display:inline-block;
    color:black;
    font-size:18px;
    width:85px;
    height:35px;
    text-align: center;
    line-height:35px;  

}
.allShopping ul li span{
    display:inline-block;
    color:black;
    font-size:18px;
    width:50px;
    height:35px;
    text-align: center;
    line-height:35px;   
    cursor: pointer;
}

.allShopping ul  #activeSelect{
        background: #f40;
}
.allShopping ul  #activeSelect span{
    color:#fff;
}

.allShopping ul  li:hover{
    background: #f40;
    transition: all .1s linear;
}
.allShopping ul  li:hover span{
    color:#fff; 
    transition: all .1s linear;
}

</style>