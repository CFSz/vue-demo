<template>
  <layout_top></layout_top>
  <layout_side></layout_side>
  <layout_content></layout_content>
</template>

<script>
  import layout_top from './layout_top.vue'
  import layout_side from './layout_side.vue'
  import layout_content from './layout_content.vue'
  export default{
    components:{
      layout_top
      ,layout_side
      ,layout_content
    }
  }
</script>

<style>

</style>