<template>

  <header class="top-header clearfix ng-scope">
    <a href="#/" data-toggle-min-nav="" class="toggle-min"><i class="fa fa-bars"></i></a>

    <!-- Logo -->
    <div class="logo">
      <a href="#/">
        <span class="ng-binding">Flatify</span>
      </a>
    </div>

    <!-- needs to be put after logo to make it working-->
    <div class="menu-button" toggle-off-canvas="">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>

    <div class="top-nav">
      <ul class="nav-left list-unstyled">
        <li class="dropdown" uib-dropdown="" is-open="isopenComment" style="">
          <a href="javascript:;" class="dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false" aria-disabled="false">
            <i class="fa fa-comment-o"></i>
            <span class="badge badge-success">2</span>
          </a>
          <div class="dropdown-menu with-arrow panel panel-default">
            <div class="panel-heading">
              You have 2 messages.
            </div>
            <ul class="list-group">
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-info"><i class="fa fa-comment-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">Jane sent you a message</span>
                    <span class="text-muted">3 hours ago</span>
                  </div>
                </a>
              </li>
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-danger"><i class="fa fa-comment-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">Lynda sent you a mail</span>
                    <span class="text-muted">9 hours ago</span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="panel-footer">
              <a href="javascript:;">Show all messages.</a>
            </div>
          </div>
        </li>
        <li class="dropdown" uib-dropdown="" is-open="isopenEmail" style="">
          <a href="javascript:;" class="dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false" aria-disabled="false">
            <i class="fa fa-envelope-o"></i>
            <span class="badge badge-info">3</span>
          </a>
          <div class="dropdown-menu with-arrow panel panel-default">
            <div class="panel-heading">
              You have 3 mails.
            </div>
            <ul class="list-group">
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-warning"><i class="fa fa-envelope-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">Lisa sent you a mail</span>
                    <span class="text-muted block">2min ago</span>
                  </div>
                </a>
              </li>
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-info"><i class="fa fa-envelope-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">Jane sent you a mail</span>
                    <span class="text-muted">3 hours ago</span>
                  </div>
                </a>
              </li>
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-success"><i class="fa fa-envelope-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">Lynda sent you a mail</span>
                    <span class="text-muted">9 hours ago</span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="panel-footer">
              <a href="javascript:;">Show all mails.</a>
            </div>
          </div>
        </li>
        <li class="dropdown" uib-dropdown="" is-open="isopeBell" style="">
          <a href="javascript:;" class="dropdown-toggle" uib-dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false" aria-disabled="false">
            <i class="fa fa-bell-o nav-icon"></i>
            <span class="badge badge-warning">3</span>
          </a>
          <div class="dropdown-menu with-arrow panel panel-default">
            <div class="panel-heading">
              You have 3 notifications.
            </div>
            <ul class="list-group">
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-success"><i class="fa fa-bell-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">New tasks needs to be done</span>
                    <span class="text-muted block">2min ago</span>
                  </div>
                </a>
              </li>
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-info"><i class="fa fa-bell-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">Change your password</span>
                    <span class="text-muted">3 hours ago</span>
                  </div>
                </a>
              </li>
              <li class="list-group-item">
                <a href="javascript:;" class="media">
                                <span class="media-left media-icon">
                                    <span class="round-icon sm bg-danger"><i class="fa fa-bell-o"></i></span>
                                </span>
                  <div class="media-body">
                    <span class="block">New feature added</span>
                    <span class="text-muted">9 hours ago</span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="panel-footer">
              <a href="javascript:;">Show all notifications.</a>
            </div>
          </div>
        </li>
      </ul>

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
  export default{
    data(){
      return {
        data: {}
      }
    }
    , components: {
    }
  }
</script>

<style lang="less">
</style>