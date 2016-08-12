<template>

  <header class="top-header clearfix ng-scope">
    <a href="#/" data-toggle-min-nav="" class="toggle-min"><i class="fa fa-bars"></i></a>

    <!-- Logo -->
    <div class="logo">
      <a href="#/">
        <span class="ng-binding">Vue初探</span>
      </a>
    </div>

    <!-- needs to be put after logo to make it working-->
    <div class="menu-button" toggle-off-canvas="">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>

    <div class="top-nav">
      <!--通知栏-->
      <ul class="nav-left list-unstyled">
        <dropdown v-for="info in infos" :info="info"></dropdown>
      </ul>

      <!--i18n-->
      <ul class="nav-right pull-right list-unstyled">
        <li class="dropdown langs text-normal ng-scope" uib-dropdown="" is-open="status.isopenLang" data-ng-controller="LangCtrl" style="">
          <a href="javascript:;" class="dropdown-toggle ng-binding" uib-dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false" aria-disabled="false">
            English
          </a>
          <ul class="dropdown-menu with-arrow pull-right list-langs" role="menu">
            <li data-ng-show="lang !== 'English' " aria-hidden="true" class="ng-hide">
              <a href="javascript:;" data-ng-click="setLang('English')"><div class="flag flags-american"></div> English</a></li>
            <li data-ng-show="lang !== 'Español' " aria-hidden="false" class="">
              <a href="javascript:;" data-ng-click="setLang('Español')"><div class="flag flags-spain"></div> Español</a></li>
            <li data-ng-show="lang !== 'Portugal' " aria-hidden="false" class="">
              <a href="javascript:;" data-ng-click="setLang('Portugal')"><div class="flag flags-portugal"></div> Portugal</a></li>
            <li data-ng-show="lang !== '中文' " aria-hidden="false" class="">
              <a href="javascript:;" data-ng-click="setLang('中文')"><div class="flag flags-china"></div> 中文</a></li>
            <li data-ng-show="lang !== '日本語' " aria-hidden="false" class="">
              <a href="javascript:;" data-ng-click="setLang('日本語')"><div class="flag flags-japan"></div> 日本語</a></li>
            <li data-ng-show="lang !== 'Русский язык' " aria-hidden="false" class="">
              <a href="javascript:;" data-ng-click="setLang('Русский язык')"><div class="flag flags-russia"></div> Русский язык</a></li>
          </ul>
        </li>
        <li class="dropdown text-normal nav-profile" uib-dropdown="" is-open="status.isopenProfile">
          <a href="javascript:;" class="dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false" aria-disabled="false">
            <img src="../../assets/images/g1.jpg" alt="" class="img-circle img30_30">
                    <span class="hidden-xs">
                        <span data-translate="LISA" class="ng-scope">Lisa</span>
                    </span>
          </a>
          <ul class="dropdown-menu with-arrow pull-right">
            <li>
              <a href="#/page/profile">
                <i class="fa fa-user"></i>
                <span data-translate="MY_PROFILE" class="ng-scope">My Profile</span>
              </a>
            </li>
            <li>
              <a href="#/page/lock-screen">
                <i class="fa fa-lock"></i>
                <span data-translate="LOCK" class="ng-scope">Lock</span>
              </a>
            </li>
            <li>
              <a href="#/page/signin">
                <i class="fa fa-sign-out"></i>
                <span data-translate="LOG_OUT" class="ng-scope">Logout</span>
              </a>
            </li>
          </ul>
        </li>

      </ul>
    </div>

  </header>



</template>

<script>
  import dropdown from '../../components/dropdown/dropdown.vue'

  export default{
    data(){
      return {
      infos: [
        {
          num: 2
          , logo: 'fa-comment-o'
          ,badgeBg:'success'
          , title: '你有两条未读通知'
          , contents: [
          {
            type: 'info'
            , message: '隔壁老王发来了一条消息'
            , time: '2分钟前'
          }
          , {
            type: 'success'
            , message: '同学小周发来了一条消息'
            , time: '7分钟前'
          }
        ]
        }
        , {
          num: 3
          ,badgeBg:'info'
          , logo: 'fa-envelope-o'
          , title: '你有三封未读邮件'
          , contents: [
            {
              type: 'info'
              , message: '隔壁老王发来了一封邮件'
              , time: '2分钟前'
            }
            , {
              type: 'success'
              , message: '隔壁老王发来了一封邮件'
              , time: '2分钟前'
            }
            , {
              type: 'warning'
              , message: '隔壁老王发来了一封邮件'
              , time: '2分钟前'
            }
          ]
        }
        , {
          num: 1
          ,badgeBg:'warning'
          , logo: 'fa-bell-o'
          , title: '你有一条新提醒'
          , contents: [
            {
              type: 'success'
              , message: '勇敢的少年啊快去创造奇迹'
              , time: '2分钟前'
            }
          ]
        }
      ]
    }
    }
    , components: {
      dropdown
    }
  }
</script>

<style lang="less">
</style>