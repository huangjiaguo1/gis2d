<template>
    <div style="width: 2606px;top: 121px;float:right;right:256px;z-index: 99">
        <div style="width: 2606.5px;height:1585.5px;left:5420px;top: 121px;position: absolute;z-index: 99" class="rightClass">
            <!--子菜单页面-->
            <div z-index="2"  style="padding-left:10px;top: 100px;position: relative;">
                <component :is="menuComponent" ref="menuComponent"></component>
            </div>

            <div z-index="3" style="cursor: pointer;width:2600px;padding-left:37.5px;top: 5px;position: absolute;z-index: 99">
                <div  z-index="2" v-for="(menu,index) in menuTree" @click="toggleShow(index)" class="menuTreeClass" :key="menu.id"
                      :style="{width:2527/menuTree.length+'px',height:153*2527/menuTree.length/729+'px'}">
          <span style=" width:202px;padding-left: 25%;height:43px;font-size:45px;font-family:FZLanTingHei-R-GBK;font-weight:bold;color:rgba(255,255,255,1);line-height:70px;">
          {{menu.name}}
        </span>

                    <div  z-index="1" v-show="menu.show && menu.children != null"  class="childMenuClass" :style="{width:2527/menuTree.length+'px',height:356*2527/menuTree.length/361+'px'}">
                        <!--100px高度为变量-->
                        <div style="margin-top: 10px" >
                            <div  v-for="item in menu.children" class="menuClass" @click="children(item)" :key="item in menu.id"
                                  :style="{width:2527/menuTree.length+'px',height:51*2527/menuTree.length/429+'px'}">
          <span style=" width:202px;padding-left: 25%;height:43px;font-size:45px;font-family:FZLanTingHei-R-GBK;font-weight:bold;color:rgba(255,255,255,1);line-height:35px;">
          {{item.name}}
        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../../api/login/login.js'
    import green from '../screen/green.vue'
    import patrol from '../screen/patrol.vue'
    export default {
        name: "right-screen",
        data(){
            return {
                menuComponent:null,
                menuTree:[],
                menuInfos: [],
                focusIndex:null
            }
        },
        methods: {
            /**
             * 子菜单点击事件
             * **/
            children(menu){
                if(menu.name == '用户管理'){
                    this.menuComponent = 'PATROL';
                }else if(menu.name == '角色管理'){
                    this.menuComponent = 'GREEN';
                }
                console.log(menu)
            },

            /**
             * 动态弹窗 子菜单
             * **/
            toggleShow (index) {
                if(index == this.focusIndex){ //重复点击隐藏弹窗
                    this.focusIndex = null;
                    this.menuTree = [];
                    this.menuTree = this.getTreeData(this.menuInfos,"0",null);
                }else{
                    this.focusIndex = index;
                    this.menuTree = [];
                    this.menuTree = this.getTreeData(this.menuInfos,"0",index);
                }
            },

            getTreeData(data,pid,showIndex){
                let result = [] , temp;
                for(var i in data){
                    if(data[i].parentId == pid ){
                        if( showIndex == result.length){  //点击索引匹配，显示该子菜单
                            data[i].show = true;
                        }else{
                            data[i].show = false;
                        }
                        result.push(data[i]);
                        temp = this.getTreeData(data,data[i].id);
                        if (temp !=null && temp.length > 0) {
                            data[i].children = temp;
                        }
                    }
                }
                return result;
            },

            login() {
                let param={
                    userAccounts:"zengbaihua",
                    userPassword:123456
                }

                login(param).then((res)=>{
                    let data = res.data.data;
                    this.$store.commit('setToken',data.token)
                    this.menuInfos = data.menus;
                    this.getMenuTree();
                },(res)=>{
                });
            },
            getMenuTree(){
                let data = this.getTreeData(this.menuInfos,"0",null);
                this.menuTree = data;
            },

            layoutAdjust(){
//        $(".menuTreeClass").hover(function () {
//          $(".menuTreeClass").css({
//            'background-size': 'auto 100%',
//            'background':menu2,
//            'background-repeat': 'no-repeat',
//          });
//          $(".childMenuClass").css({
//            'position': 'absolute',
//            'background-size': 'auto 100%',
//            'background-repeat': 'no-repeat',
//          });
//          $(".menuClass").css({
//            'background-size': 'auto 100%',
//            'background-repeat': 'no-repeat',
//          });
//          $(".menuClass").css.hover({
//            'background-size': 'auto 100%',
//            'background-repeat': 'no-repeat',
//          });
//        });
            }

        },
        components: {
            'GREEN':green,
            'PATROL':patrol,
        },
        mounted(){
            this.login();
//      this.layoutAdjust();
        }

    }
</script>

<style scoped>
    input::-webkit-input-placeholder{
        width:126px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:46px;
        color:rgba(157,157,157,1);
        opacity:1;
    }
    .menuTreeClass {
        float: left;
        background: url(../../assets/image/menu.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
    }

    .menuTreeClass:hover {
        background: url(../../assets/image/menu2.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
    }

    .childMenuClass {
        background: url(../../assets/image/childMenubg.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
    }

    .menuClass {
        background: url(../../assets/image/childMenu.png);
        background-size: 100% auto;
        background-repeat: no-repeat;

    }

    .menuClass:hover {
        background: url(../../assets/image/childMenu2.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
    .rightClass {
        background: url(../../assets/image/bgright.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
</style>