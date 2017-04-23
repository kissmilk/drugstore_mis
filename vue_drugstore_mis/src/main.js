// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable no-new */

import 'es6-promise/auto'
import $ from 'jquery'
global.$ = global.jQuery = $
import 'bootstrap/js/bootstrap.min.js'
import 'bootstrap/css/bootstrap.min.css'
import {app, router} from './app'
import Vue from 'vue'

app.$mount('#app')
