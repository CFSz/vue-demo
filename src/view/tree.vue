<template>
  <ul id="demo">
    <item
        class="item"
        :model="treeData">
    </item>
  </ul>
</template>

<script>
  import item from './item.vue';
  export default{
    data(){return  {
      treeData: {
        name: 'My Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      }
    }}


    ,components:{
      item
    }
  }
</script>

<style lang="less">
</style>