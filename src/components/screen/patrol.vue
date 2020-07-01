<template>
    <div z-index="-2" style="margin-left:50px;height: 1470px;width: 2585px; top: 300px;">
        <div v-for="menu in menuTree" style="width: 800px;height:450px;margin-left:22px;margin-top: 117px;position: relative;float: left" class="inspectionClass">

        </div>
      <div  style="width: 663px;height:62px;margin-left:1800px;margin-top: 117px;position: relative;float: left" class="pagingClass">
        <span class="pagingSpanClass" style="padding-left: 31px;margin-top: 21px">{{currentPage}}/{{totalPage}}页</span>
        <span class="pagingSpanClass" style="padding-left: 20px;margin-top: 21px"> {{totalDataLength}}条记录 </span>
        <span class="pagingSpanClass" style="padding-left: 20px;margin-top: 21px"> 首页 </span>
        <span class="pagingSpanClass" style="padding-left: 20px;margin-top: 21px"> 尾页 </span>
        <input style="margin-left: 20px;top: 69px;width:60px;height:40px;background:rgba(7,69,98,1);opacity:1;;font-family:Microsoft YaHei;padding-left: 10px;color:rgba(255,255,255,1);" v-model="jumpPage">
        <span class="pagingSpanClass" style="padding-left: 20px;margin-top: 21px"> 跳转 </span>
      </div>
    </div>


</template>

<script>
  import {patrol} from '../../api/patrol.js'
  export default {
    data: function () {
      return {
        jumpPage:1,
        menuTree:[1,2,3,4,5,6],
        currentPage:1,
        totalPage:13,
        totalDataLength:193,
      }
    },
    methods: {
      getPatrols(){
        let para = {
          params: {
            page: this.currentPage - 1,
            size: 6,
            reservoir: "aa"
          }
        };


        patrol(para).then((res)=>{
            let data = res.data.data;
            this.menuInfos = data.menus;
          },(res)=>{
          });
      },


    },
    mounted(){
      this.getPatrols();

    }

  }
</script>

<style scoped>


  .inspectionClass {
    background: url(../../assets/image/inspection.png);
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .pagingClass {
    background: url(../../assets/image/paging.png);
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .pagingSpanClass {
    width:604px;
    height:24px;
    font-size:24px;
    font-family:Adobe Heiti Std;
    font-weight:normal;
    color:rgba(255,255,255,1);
    line-height:63px;
  }

</style>
