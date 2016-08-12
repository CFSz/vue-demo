<template>
  <div class="dropdown-menu with-arrow panel panel-default">
    <div class="panel-heading">
      {{info.title}}
    </div>
    <ul class="list-group">
      <li v-for="content in info.contents" class="list-group-item">
        <a href="javascript:;" class="media">
            <span class="media-left media-icon">
                <span class="round-icon sm bg-{{content.type}}"><i class="fa fa-comment-o"></i></span>
            </span>
          <div class="media-body">
            <span class="block">{{content.message}}</span>
            <span class="text-muted">{{content.time}}</span>
          </div>
        </a>
      </li>
    </ul>
    <div class="panel-footer">
      <a href="javascript:;">显示所有信息</a>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        data: {}
      }
    }
    , components: {
    }
    ,methods:{
    }
    ,props:['info']
  }
</script>

<style lang="less">
</style>