<template>
	<div>
		<h1>Hello World!</h1>
		{{ username }}<br>
		{{ password }}<br>
		<router-link to="/login">退出登录</router-link>
	</div>
</template>

<script>
export default {
	data(){
		return{
			username:'',
			password:''
		}
	},
	mounted:function(){
		this.$router.push('/helloworld');
		this.username = this.$route.query.username;
		this.password = this.$route.query.password;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	div{
		text-align: center;
	}
</style>
