<template>
	<div id="login">
		<div>
			<span>用户名：</span><br>
			<input type="text" maxlength="12" v-model="username">
		</div>
		<div>
			<span>密码：</span><br>
			<input type="password" maxlength="12" v-model="password">
		</div>
		<div>
			<button @click="alert()">登录</button>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'UserLogin',
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			alert:function(){
				/*this.$axios({
					url: "http://localhost:8080/SpendRecord/UserLogin",
					method: "post",
					params: {
						username:username,
						password:password
					}
				}).then(function(reponse){
					console.log(reponse.data);
				})
				.catch(function(e){
					console.log(e);
				})*/
				var self = this;
				this.$router.push({
					path:'/helloworld',
					query:{
						username:self.username,
						password:self.password
					}
				})
			}
		}
	}
</script>

<style>
	#login {
		width:164.8px;
		margin:auto;
		margin-top:200px;
	}
	
	input{
		margin:auto;
	}
	
	span{
		font-size:10px;
		font-weight:bold;
	}
	
	button{
		width:100%;
		margin-top:10px;
		
	}
</style>
