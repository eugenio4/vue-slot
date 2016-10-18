// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// (also, loading Vue standalone this way breaks vueify, so don't do it)
// This is done with the transform "aliasify". For the config, see package.json

//import App from './App.vue'
import Vue from 'vue/dist/vue'

import Hello from './components/Hello.vue'

Vue.component('Hello',Hello)

new Vue({ // eslint-disable-line no-new
  el: '#app'  
})
