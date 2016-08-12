<template>
  <a @click="toggleMenu"
     href="javascript:;" class="dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false" aria-disabled="false">
    <i class="fa {{info.logo}}"></i>
    <span class="badge badge-{{info.badgeBg}}">{{info.num}}</span>
  </a>
</template>

<script>
  export default{
    data(){
      return {
        data: {}
      }
    }
    , components: {}
    , methods: {
      toggleMenu:function(){
        this.$parent.state.isOpen=!this.$parent.state.isOpen
      }
    }
    ,events: {
    }
    ,props:['info']
  }
</script>

<style lang="less">
</style>