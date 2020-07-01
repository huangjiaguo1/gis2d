<template>
    <div style="width: 2858px;left:256px;top: 123px;right:50px;position: absolute;z-index: 99">
        <div style="float: left">
            <img src="../../assets/image/bgleft.png">
            <span class="leftModuleClass" style="width:240px;top:18.5px;left: 548px;position: absolute;z-index: 99;color: white">水 库 概 况</span>
        </div>
        <div style="float: left">
            <img src="../../assets/image/bgleft.png">
            <span class="leftModuleClass" style="width:240px;top:18.5px;left: 1849px;position: absolute;z-index: 99;color: white">实 时 监 控</span>
        </div>
        <div style="float: left">
            <img src="../../assets/image/bgleft.png">
            <span class="leftModuleClass" style="width:500px;top:808px;left: 480px;position: absolute;z-index: 99;color: white">水 位 - 库 容 曲 线</span>
            <div style="position: absolute;left: 16px;top: 900px;width: 1300px;height: 600px;">
                <div id="contrastChartId" style="width: 1300px;height: 600px;"></div>
            </div>
        </div>
        <div style="float: left">
            <img src="../../assets/image/bgleft.png">
            <span class="leftModuleClass" style="width:480px;top:808px;left: 1800px;position: absolute;z-index: 99;color: white">大 坝 安 全 监 测</span>
        </div>

    </div>

</template>

<script>
    export default {
        name: "left-screen",
        data(){
            return{

            }
        },
        methods:{
            addContrastChart() {
                let arrayCalcSeries = [1,2,5];
                let arrayRealSeries = [4,20,100];
                this.contrastOptions={
                    color:['#40A9FF','#73D13D'],
                    title:{
                        text:'',
                        textStyle:{
                            color:'#333',
                            fontSize:14,
                        }
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    legend:{
                        show:true,
                        y: 15, // 'center' | 'bottom' | {number}
                        data:['实测值',"模拟值"],
                        textStyle: {
                            left:30,
                            color: '#fff'          //legend字体颜色
                        }
                    },
                    xAxis :{
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed'],
                        splitNumber:12,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(233,233,233,1)'
                            }
                        },
                        axisLabel: {
                            interval: 60,

                            textStyle: {
                                color:'rgba(255,255,255,1)'
                            }
                        },
                        splitLine:{
                            show:false
                        }
                    },
                    grid:{
                        left:16,
                        bottom:19,
                        containLabel:true,
                    },
                    yAxis: {
                        name: "m",// 单位
                        nameTextStyle:{
                            color:"white",
                        },
                        type:'value',
                        // y轴的字体样式
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                    },
                    series : [{
                        name:'实测值',
                        type: 'line',
                        showSymbol: false,
                        data:arrayRealSeries
                    },
                        {
                            name:'模拟值',
                            type: 'line',
                            showSymbol: false,
                            data:arrayCalcSeries
                        }
                    ],
                };
                this.contrastChart = this.$echarts.init(document.getElementById('contrastChartId'))
                this.contrastChart.setOption(this.contrastOptions)
            }
        },
        mounted(){
            this.addContrastChart();
        }
    }
</script>

<style scoped>

</style>