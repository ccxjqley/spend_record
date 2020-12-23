<template>
	<div id="app">
		<router-link to="/login">123</router-link>
		<router-view></router-view>
	</div>
</template>

<script>

// import UserLogin from './components/UserLogin.vue'

export default {
	// name: 'App',
	// components:{
	// 	"UserLogin":UserLogin
	// }
	mounted:function(){
		// this.$router.push('/login');
	}
}
</script>

<style>

</style>
