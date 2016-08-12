<template>
  <li class="dropdown" :class="{'open':state.isOpen}" uib-dropdown="" is-open="isopenComment">
    <dropdown_toggle :info="info"></dropdown_toggle>
    <dropdown_menu :info="info"></dropdown_menu>
  </li>
</template>

<script>
  import dropdown_toggle from './dropdown_toggle.vue'
  import dropdown_menu from './dropdown_menu.vue'
  export default{
  }
  export default{
    data(){
      return {
        state:{
          isOpen:false
        }
      }
    }
    ,components:{
      dropdown_toggle
      ,dropdown_menu
    }
    ,methods:{
    }
    ,events: {
    }
    ,props:['info']
  }
</script>

<style lang="less">
</style>