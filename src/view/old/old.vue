<template>
  <div class="panel panel-default" style="padding: 0;">
    <div class="panel-heading">
      <strong>
        <span class="glyphicon glyphicon-th"></span> 课程管理{{src}}
      </strong>
    </div>
    <div class="panel-body">
      <iframe src="{{src}}" style="border: none;width: 100%;"></iframe>
    </div>
  </div>
</template>

<script>

//  window.srcHash={
//    '/OLD/DASHBOARD':"/list/homepage"//主页
//    ,'/OLD/WEIXIN/SETTING':"<?=$viewData->wechat_host?>/index.php?c=account&a=bind&do=post&acid=<?=$accounts[0]['acid']?>&uniacid=<?=$accounts[0]['uniacid']?>"//公众号设置
//    ,'/OLD/WEIXIN/MANAGEMENT':"<?=$viewData->wechat_host?>/index.php?c=platform&a=menu&"//菜单管理
//    ,'/OLD/REPLY/TEXT':"<?=$viewData->wechat_host?>/index.php?c=platform&a=reply&m=basic"//文字回复
//    ,'/OLD/REPLY/TEXTANDIMAGE':"<?=$viewData->wechat_host?>/index.php?c=platform&a=reply&m=news"//图文回复
//    ,'/OLD/REPLY/MUSIC':"<?=$viewData->wechat_host?>/web/index.php?c=platform&a=reply&m=music"//音乐回复
//    ,'/OLD/REPLY/PICTURE':"<?=$viewData->wechat_host?>/index.php?c=platform&a=reply&m=images"//图片回复
//    ,'/OLD/REPLY/VOICE':"<?=$viewData->wechat_host?>/index.php?c=platform&a=reply&m=voice"//语音回复
//    ,'/OLD/REPLY/VIDEO':"<?=$viewData->wechat_host?>/index.php?c=platform&a=reply&m=video"//视频回复
//    ,'/OLD/REPLY/SPECIAL':"<?=$viewData->wechat_host?>/index.php?c=platform&a=reply&m=special"//特殊回复
//    ,'/OLD/OPERATION/ACTICLE':"/article/web/setting/wechatBind"//文章助手
//    ,'/OLD/OPERATION/GROUPREDPACK':"/wechat/groupredpack?acid=<?=$accounts[0]['acid']?>"//裂变红包
//    ,'/OLD/OPERATION/FLOWREDPACK':"/wechat/flowredpack?ac_id=<?=$accounts[0]['acid']?>"//流量红包
//    ,'/OLD/STORE/INFO':"<?=$viewData->wechat_host?>/index.php?c=profile&a=module&do=setting&m=wdl_shopping"//微店信息
//    ,'/OLD/STORE/SETTING':"<?=$viewData->wechat_host?>/index.php?c=site&a=entry&op=display&do=adv&m=wdl_shopping"//微店设置
//    ,'/OLD/STORE/ACTIVITY':"<?=$viewData->wechat_host?>/index.php?c=site&a=entry&op=display&do=actives&m=wdl_shopping"//活动管理
//    ,'/OLD/STORE/PRODUCT':"<?=$viewData->wechat_host?>/index.php?c=site&a=entry&op=post&do=goods&m=wdl_shopping"//产品管理
//    ,'/OLD/STORE/ORDER':"/<?=$viewData->wechat_host?>/index.php?c=site&a=entry&op=display&do=order&m=wdl_shopping"//订单管理
//    ,'/OLD/SITE/TEMPLATE':"<?=$viewData->wechat_host?>/web/index.php?c=site&a=style&do=template&"//微官网模板
//    ,'/OLD/SITE/SETTING':"<?=$viewData->wechat_host?>/index.php?c=site&a=multi&do=display&"//微官网设置
//    ,'/OLD/SERVICE/COURSE':"/education/course"//课程管理
//    ,'/OLD/SERVICE/STUDENT':"/education/student"//学员管理
//    ,'/OLD/SERVICE/TEACHER':"/education/teacher"//教师管理
//    ,'/OLD/SERVICE/SUBJECT':"/education/subject"//科目管理
//  }
  export default{
    data(){
      console.log(window.location.href)
      return{
        src:'//www.baidu.com'
      }
    }
    ,route:{
      data:function(transition){
        var target=(window.srcHash&&window.srcHash[transition.to.path.toUpperCase()])||'//www.baidu.com';
//        alert(target);
        transition.next({'src':target});
      }
    }
  }
</script>

<style lang="less">
</style>