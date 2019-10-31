<template name="checkInfo">
	<view>
		<scroll-view scroll-y class="page">
			<view class="checkInfo-page-wrapper">
				<view class="checkInfo-item">
					<text class="title">基本信息</text>
					<view class="line-item-wrap">
						<text class="line-item">检察机关：</text>
						<text class="line-item">XXX检察院</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">被检察单位：</text>
						<text class="line-item">沙洋小江湖监狱</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察方式：</text>
						<text class="line-item">常规巡回检察</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察时间：</text>
						<text class="line-item">2019.11.05~2019.11.10</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察状态：</text>
						<text class="line-item">已完成</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察要求：</text>
						<text class="line-item">xxxxxxx要求</text>
					</view>
				</view>
			</view>
				
			<view class="checkInfo-page-wrapper">
				<view class="checkInfo-item">
					<text class="title">检察组成员</text>
					<view class="line-item-wrap">
						<text class="line-item">主办案检察官：</text>
						<text class="line-item">XXX检察院</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察组成员：</text>
						<text class="line-item">张三、李四、王五</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">行业专家：</text>
						<text class="line-item">李咯</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">代表委员员：</text>
						<text class="line-item">梅导</text>
					</view>
				</view>
			</view>
			
			<view class="checkInfo-page-wrapper">
				<view class="checkInfo-item">
					<text class="title">日程安排</text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		// name: "CheckInfo",
		data() {
			return {}
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style lang="scss">
	.page {
		height: 100vh;
		
		.checkInfo-page-wrapper{
			background-color:#f5f5f9;
			padding:20upx;
			.checkInfo-item{
				background-color:#fff;
				padding:0 20upx;
				.title{
					color:#333;
					font-weight:700;
					font-size:20upx;
					line-height:3em;
	
				}
				.line-item-wrap{
					display:flex;
					.line-item{
						flex:none;
						font-size:20upx;
						color:rgba(0, 0, 0, 0.647058823529412);
						line-height:2em;
					}
				}
			}
		}
	}
</style>
