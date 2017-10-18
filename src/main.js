import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Settings from './Settings.vue'

Vue.use(VueRouter)

const Home = { template: `<div>Home</div>` }
const Foo = { template: `<div>Foo</div>` }
const Bar = { template: `<div>Bar</div>` }
const NotFound = { template: `<div>Not Found</div>` }

const Post = { 
  props: [ 'id' ],
  template: `<div>This is post with id: {{ id }}</div>` 
}


const Inbox = {
  template: 
  `<div>
    <div>
      <aside>This is the sidebar</aside>
      <router-view></router-view>
    </div>
  </div>`
}

const InboxMails = {
  template: 
  `<div>
      Djeezes, alot of mails
      <router-link :to="{ name: 'mail', params: { id: '123' } }">Mail 123</router-link>
      <router-link :to="{ name: 'mail', params: { id: '234' } }">Mail 234</router-link>
  </div>`
}
const InboxMail = {
  props: [ 'id' ],
  template: 
  `<div>
    Mail #{{ id }}#
  </div>`
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home},
    { name: 'posts', path: '/posts/:id', component: Post, props: true},
    { name: 'foo', path: '/foo', component: Foo},
    { name: 'bar', path: '/bar', component: Bar},
    { name: 'all', path: '*', component: NotFound},
    { path: '/inbox', 
      component: Inbox, 
      children: [
        { path: '', name: 'inbox', component: InboxMails},
        { name: 'mail', path: 'mail/:id', component: InboxMail, props: true},        
      ]},
    { name: 'settings', path: '/settings', component: Settings},

  ]
})

/* this.$router.push({
  name: 'posts',
  paramas: { id: 234 }
}); */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
