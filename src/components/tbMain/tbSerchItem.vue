<template>
    <div id="tbSerchBar"> 
        <slot name="left"></slot>
        <slot name="middle"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name:'tbSerchItem'
}
</script>

<style scoped>
#tbSerchBar{
    position: relative;
}
    
</style>