<template>
	<view class="login-page">
		<view class="login-panel">
			<view class="logo-wrap">
				<image style="width:34upx;height:38upx;position:relative;top:8upx;" src="data:image/png;base64,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"></image>
				<text class="title">巡回检察系统</text>
			</view>
			
			<view class="login-form">
				<view class="input-wrap">
					<text class="cuIcon cuIcon-my"></text>
					<input class="custom-input" v-model="name" placeholder="账户"/>
				</view>
				<view class="input-wrap">
					<text class="cuIcon cuIcon-lock"></text>
					<input class="custom-input" password v-model="password" placeholder="密码"/>
				</view>
				<view class="input-wrap" @tap="login()" style="margin-top:40upx;">
					<button class="bg-blue" style="height:40upx;line-height:40upx;font-size:20upx;">登 录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				password: ''
			}
		},
		methods: {
			// 登录
			login() {
				if (this.name === '' ||  this.password === '') {
					uni.showToast({
					    title: '账号或密码不能为空！',
						icon: 'none',
						position: 'bottom',
					    duration: 3000
					});
					return;
				}
				if (this.name === 'admin' && this.password === '123456') {
					uni.showToast({
					    title: '登录成功！',
						icon: 'none',
						position: 'bottom',
					    duration: 3000
					});
					setTimeout(() => {
						this.$emit('loged',true)
					},3000)
				} else {
					uni.showToast({
					    title: '账号或密码错误！',
						icon: 'none',
						position: 'bottom',
					    duration: 3000
					});
				}
			
			}
		}
	}
</script>

<style lang="scss">
.login-page{
	height:100vh;
	background-color:#f2f2f2;
	display:flex;
	flex-direction: column;
	justify-content: center;
	.login-panel{
		flex:none;
		width:408upx;
		height:367upx;
		padding:20upx;
		box-sizing: border-box;
		// background-color:red;
		margin:0 auto;
		text-align:center;
		.logo-wrap{
			display:inline-block;
			.title{
				line-height:38upx;
				margin-left:11upx;
				font-weight: 700;
				font-style: normal;
				font-size: 28upx;
				color:#333;
			}
		}
		.login-form{
			display:block;
			margin-top:52upx;
			.input-wrap{
				margin-top:23upx;
				height:38upx;
				line-height:38upx;
				position:relative;
				.cuIcon{
					position:absolute;
					left:10upx;
					top:8upx;
					color: rgba(0, 0, 0, 0.247058823529412);
					font-size:20upx;
				}
			}
			.custom-input{
				text-align:left;
				border:1upx solid #d9d9d9;
				font-size:20upx;
				background-color:#fff;
				height:100% !important;
				padding-left:36upx;
				.input-placeholder{
					color:rgba(0, 0, 0, 0.247058823529412);
					font-size:20upx;
				}
			}
		}
	}
}
</style>
