<template>
	<view>
		<login v-on:loged = "login" v-if="!loged" class="login-com"></login>
		<checkInfo v-if="PageCur=='checkInfo'"></checkInfo>
		<checkContent v-if="PageCur=='checkContent'"></checkContent>
		<lawLab v-if="PageCur=='lawLab'"></lawLab>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="checkInfo">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/1' + [PageCur=='checkInfo'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='checkInfo'?'text-blue':'text-gray'">检察信息</view>
			</view>
			<view class="action" @click="NavChange" data-cur="checkContent">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/2' + [PageCur == 'checkContent'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='checkContent'?'text-blue':'text-gray'">检察内容</view>
			</view>
			<view class="action" @click="NavChange" data-cur="lawLab">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/3' + [PageCur == 'lawLab'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='lawLab'?'text-blue':'text-gray'">法律法规库</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'checkInfo',
				loged: false
			}
		},
		methods: {
			login(data) {
				console.log(data)
				this.loged = data
			},
			NavChange: function(e) {
				// console.log(JSON.stringify(e))
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style lang="scss">
.login-com{
	position:fixed;
	left:0;
	top:0;
	width:100%;
	height:100vh;
	z-index:9999999;
}
</style>
