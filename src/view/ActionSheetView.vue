<template>
  <div class="page actionSheet" style="overflow: hidden">
    <div class="hd">
      <h1 class="page_title">ActionSheet</h1>
    </div>
    <div class="bd spacing">
      <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showActionSheet=true;">点击上拉ActionSheet</a>
    </div>
    <actionsheet :is-show.sync="showActionSheet"></actionsheet>
  </div>
</template>

<script>
  import Actionsheet from '../components/weui/ActionSheet.vue'
//  import weui from 'weui'
//  console.log(weui)
  export default {
    name: 'ActionSheetView',
    components: {
      Actionsheet
    },
    data(){
      return {
        showActionSheet: false
      };
    }
  }
</script>
