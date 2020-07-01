<template>
    <div id="map" ref="rootmap">
        <tree-click></tree-click>
    </div>
</template>

<script>
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    import TreeClick from "./tree-click.vue"
    export default {
        name:'map-gis',
        data() {
            return {
                map: null
            };
        },
        components:{
            TreeClick:TreeClick
        },
        methods: {
            // 初始化地图
            initMap() {
                this.map = new Map({
                    target: "map",
                    layers: [
                        new TileLayer({
                            source: new OSM()
                        })
                    ],
                    view: new View({
                        projection: "EPSG:4326",    //使用这个坐标系
                        center: [114.266768,22.611686],
                        zoom: 20
                    })
                });
            }
        },
        mounted() {
            var mapcontainer = this.$refs.rootmap;

            this.initMap();
            console.log('------');
        }
    };
</script>

<style scoped>
    #map{
        width: 2200px;
        height: 1500px;
        position: relative;
        z-index: 99;
        margin: 0;
        padding: 0;
    }
</style>