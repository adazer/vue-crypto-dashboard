import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/app.scss"

import clickOutside from "./directives/click-ouside"

import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});
Vue.config.productionTip = false;
Vue.directive("click-outside", clickOutside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
