<template>
    <div>
        <div id="all">
            <div id="reproduction">
                <left-screen  ref="leftScreen"></left-screen>
                <center-screen    ref="centerScreen"></center-screen>
                <right-screen   ref="rightScreen"></right-screen>

            </div>
        </div>
    </div>


</template>

<script>
    import LeftScreen from './left-screen.vue'
    import CenterScreen from './center-screen.vue'
    import RightScreen from './right-screen.vue'

    export default {
        data(){
            return {


            }
        },
        methods:{


        },
        components: {
            LeftScreen:LeftScreen,
            CenterScreen:CenterScreen,
            RightScreen:RightScreen

        },
        mounted(){

        }

    }
</script>

<style scoped>
    #all,body,html{
        /* 填充屏幕*/
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: absolute;
    }

    #reproduction{
        /* 填充屏幕*/
        width: 8280px;
        height: 100%;
        background-color: #020024;

    }

</style>
