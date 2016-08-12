<template>
  <flatify_frame></flatify_frame>


</template>

<script>
  import flatify_frame from './view/layout/flatify_frame.vue'

  export default {
    data(){
      return{
        data:{}
      }
    }
    ,components: {
      flatify_frame
    }
  }
</script>

<style lang="less">
  @import "./assets/flatify/main.less";
</style>
