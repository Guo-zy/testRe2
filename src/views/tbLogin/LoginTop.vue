<template>
    <div id="LoginTop">
       <div class="top">
            <!-- <div class="top-left">
                <a ><span></span></a>
            </div> -->
            <div class="top-right">
                <span>为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！ </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name:"LoginTop"
}
</script>

<style scoped>
 #LoginTop .top .top-left {
    width: 200px;
    height: 100px;
    position: relative;
}

#LoginTop .top .top-left span {
    background-image: url("https://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png");
    background-size: 100% 100%;
    display: inline-block;
    width: 130px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -55px;
    margin-top: -30px;
}

#LoginTop .top .top-right {
    position: absolute;
    top: 30px;
    left: 300px;
    width: 800px;
    height: 25px;
    border: 1px solid #ffb4a8;
}

#LoginTop .top .top-right span {
    position: absolute;
    left: 0px;
    top: 0px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    color: #6C6C6C;
    background: #fef2f2;
    width: 800px;
    height: 25px;
}

</style>
