import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

import Login from '../components/UserLogin.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default new Router({
	routes:[
		{
			path:'*',
			redirect:'/login'
		},
		{
			path:'/login',
			component:Login,
		},
		{
			path:'/helloworld',
			component:HelloWorld
		}
		
	]
})