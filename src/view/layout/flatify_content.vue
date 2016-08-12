<template>
  <div data-ng-view id="content" class="animate-fade-up">
    <div class="page">
        <router-view
            class="view"
            keep-alive
            transition
            transition-mode="out-in">
        </router-view>
    </div>
  </div>
</template>


<script>
  export default{
  }
</script>

<style lang="less">
</style>