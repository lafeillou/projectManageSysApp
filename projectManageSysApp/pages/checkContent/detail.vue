<template>
	<view class="page5">
		<cu-custom bgColor="bg-gradual-blue" isBack="true"><block slot="backText">返回</block><block slot="content">备注</block><block slot="right"><text style="margin-right:30upx;">保存</text></block></cu-custom>
		<scroll-view scroll-y>
			备注
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.page5{
		height:100vh;
	}
</style>
