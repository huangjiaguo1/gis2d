<template>
    <div id="trees">
        <div class="trre2">
            <span>图层选项</span>
        </div>
        <div class="tree1">
            <el-tree :data="data" show-checkbox :props="defaultProps" @node-click="handleNodeClick" @check-change="handleCheckChange"></el-tree>
        </div>

    </div>
</template>

<script>
    import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
    import {OSM,Vector as VectorSource} from 'ol/source';
    import GeoJSON from 'ol/format/GeoJSON.js';
    import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
    export default {
        name: "tree-click",
        data(){
            return{
                data:[{
                    id:1,
                    label:'水库',
                    children:[{
                        id:3,
                        label:'翠岭水库',
                    },{
                        id:4,
                        label:'红花沥水库'
                    }]
                },{
                    id:2,
                    label:'切换地图',
                    children:[{
                        id:5,
                        label:'ESRI影像',
                    },{
                        id:6,
                        label:'高德地图'
                    }]
                }],
                defaultProps:{
                    children:'children',
                    label:'label'
                }
            }
        },
        methods:{
            handleNodeClick(data){
                if(data.text == '翠岭水库'){
                    var vectorSourceppp = new VectorSource({
                        format: new GeoJSON(),
                        url: function(extent) {
                            return 'http://localhost:8080/geoserver/water_map/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=water_map:cuiling_1&outputFormat=application/json&srsname=EPSG:4326';
                        },
                    });
                    var vectorppp = new VectorLayer({
                        source: vectorSourceppp,
                        style: new Style({
                            fill:new Fill({
                                color:'rgba(255, 0, 255, 0.8)'
                            }),
                            stroke: new Stroke({
                                color: 'rgba(0, 0, 255, 1.0)',
                                width: 2
                            }),
                            image: new CircleStyle({
                                radius: 7,
                                snapToPixel: false,
                                fill: new Fill({color: 'black'}),
                                stroke: new Stroke({
                                    color: 'white', width: 2
                                })
                            })
                        })
                    });
                    console.log('放到地球上');
                    this.map.addLayer(vectorppp);


                    console.log('加载成功');
                }else if(data.text == '红花沥水库'){
                    var vectorSourcepppp = new VectorSource({
                        format: new GeoJSON(),
                        url: function(extent) {
                            return 'http://localhost:8080/geoserver/water_map/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=water_map:honghualing&outputFormat=application/json&srsname=EPSG:4326';
                        },
                    });
                    var vectorpppp = new VectorLayer({
                        source: vectorSourcepppp,
                        style: new Style({
                            fill:new Fill({
                                color:'rgba(255, 0, 255, 0.8)'
                            }),
                            stroke: new Stroke({
                                color: 'rgba(0, 0, 255, 1.0)',
                                width: 2
                            }),
                            image: new CircleStyle({
                                radius: 7,
                                snapToPixel: false,
                                fill: new Fill({color: 'black'}),
                                stroke: new Stroke({
                                    color: 'white', width: 2
                                })
                            })
                        })
                    });
                    console.log('放到地球上');
                    this.map.addLayer(vectorpppp);
                    console.log('加载成功');
                }
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            }
        }
    }
</script>

<style scoped>
    #trees{
        width: 561px;
        height: 363px;
        position: absolute;
        z-index: 99;
        float: right;
        right: 50px;
        top: 200px;
    }
    .tree2{
        width: 21px;
        height: 363px;
        position: absolute;
        z-index: 99;
        float: left;
        left: 0;
        /*border-radius: 25%;*/
        /*background-color: #00CCFF;*/
    }
    .tree1{
        width: 470px;
        height: 363px;
        position: absolute;
        z-index: 99;
        /*border-radius: 25%;*/
        float: right;
        right: 0;
        /*background-color: rgba(0,204,255,0.9);*/
    }
</style>
