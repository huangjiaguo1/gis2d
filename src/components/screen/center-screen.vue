<template>
    <div style="left:3050px;top: 84px;position: absolute;" >
        <div   style="float: left">
            <img src="../../assets/image/centertop.png">
            <span style="position: absolute;z-index: 99;color: white;text-align: center;"><font style="font-size: 24px">盐田区水库智慧化管理平台</font></span>
        </div>
        <map-gis ></map-gis>
    </div>
</template>

<script>
    import MapGis from '../map-gis/map-gis.vue'
    export default {
        name: "center-screen",
        components:{
            MapGis:MapGis
        }
    }
</script>

<style scoped>

</style>