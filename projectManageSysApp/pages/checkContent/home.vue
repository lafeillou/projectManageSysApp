<template name="checkContent">
	<view>
		<scroll-view scroll-y class="page">
			检察内容
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		// name: "CheckContent",
		data() {
			return {}
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
