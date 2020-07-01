<template>
    <div z-index="-2" style="margin-left:50px;height: 1470px;width: 2585px; top: 300px;">

      </div>


</template>

<script>

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



    },
    mounted(){

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
