import Vue from './vue.js';
import App from './App.js';

import List from './List.js';
import Update from './Update.js';
import Del from './Del.js';
import Add from './Add.js';

Vue.component('list',List);
Vue.component('update',Update);
Vue.component('dell',Del);
Vue.component('add',Add);

new Vue({
    el:'#app',
    render:c=>c(App)
});