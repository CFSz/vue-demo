<template>
  <layout></layout>


</template>

<script>
  import layout from './view/layout/layout.vue'

  export default {
    data(){
      return{
        data:{}
      }
    }
    ,components: {
      layout
    }
  }
</script>

<style lang="less">
  @import "./assets/flatify/main.less";
</style>
