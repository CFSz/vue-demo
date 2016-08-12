'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import vueForm from './assets/vue-form.js'


import App from './App'
import button from './view/ButtonView'
import chart from './view/chart'
import dashboard from './view/dashboard'
import form from './view/form'
import tree from './view/tree'
import old from './view/old/old'

// install router
Vue.use(Router)
// register filters globally

Vue.use(vueForm);

// routing
var router = new Router()

router.map({
  '/old/*any':{
    name: 'dashboard'
    ,component: old

  }
  ,'/chart':{
    name: 'chart'
    ,component:chart
  }
  ,'/dashboard':{
    name: 'newDashboard'
    ,component:dashboard
  }
  ,'/form':{
    name: 'form'
    ,component:form
  }
  ,'/tree':{
    name: 'tree'
    ,component:tree
  }
})

router.redirect({
  '*': '/dashboard'
})
router.beforeEach(function (transition) {
  //console.log(arguments)
  if (transition.to.path === '/forbidden') {
    transition.abort()
  }
  else {
    transition.next()
  }
})
router.start(App, '#app')

// function aa(){console.log('hahah')}
