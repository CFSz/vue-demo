<template>
  <li v-link="item.link">
    <a>
      <i class="fa fa-{{item.icon}}">
        <span v-if="item.bg" class="icon-bg bg-{{item.bg}}"></span>
      </i>
      <span>{{item.title}}</span>
    </a>
    <template v-if="item.children.length">
      <ul>
        <nav_li :item="item" v-for="item in item.children"></nav_li>
      </ul>
      <i class="fa fa-caret-right icon-has-ul"></i>
    </template>
  </li>
</template>

<script>
    import nav_li from './nav_li.vue'
    export default{
      name:'nav_li'
      , props:['item']
    }
</script>

<style lang="less">
    //@import "style"
</style>