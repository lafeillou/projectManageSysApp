<template name="lawLab">
	<view>
		<scroll-view scroll-y class="page3">
			<view class="search-box">
				<text class="search-icon cuIcon-search"></text>
				<input class="uni-input" placeholder="搜索" />
			</view>
			<view class="law-list-wrap">
				<view class="law-list-item">
					<text class="title">《中华人民共和国监狱法》</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="law-list-item">
					<text class="title">《监管改造环境规范》</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="law-list-item">
					<text class="title">《罪犯改造行为规范》</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="law-list-item">
					<text class="title">《监狱教育改造工作规定》</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="law-list-item">
					<text class="title">《劳改劳教工作干警行为准则》</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="law-list-item">
					<text class="title">《司法部关于计分考核奖罚罪犯的规定》</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="law-list-item">
					<text class="title">《最高人民法院关于办理减刑、假释案件具体应用法律若干问题的规定》</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="law-list-item">
					<text class="title">《监狱提请减刑、假释工作》</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		// name: "LawLab",
		data() {
			return {}
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style lang="scss">
	.page3 {
		height: 100vh;
		// 搜索框
		.search-box{
			background-color:#f5f5f9;
			padding:20upx;
			position:relative;
			.search-icon{
				position:absolute;
				top:36upx;
				left:30upx;
				color:#bbb;
				font-size:20upx;
			}
			.uni-input{
				background-color:#fff;
				text-indent:40upx;
				border-radius:6upx;
			}
			
			.input-placeholder{
				color: #BABABA;
				font-size:20upx;
			}
		}
		
		// 法律列表
		.law-list-wrap{
			padding:0 20upx;
			background-color:#fff;
			.law-list-item{
				height:56upx;
				line-height:56upx;
				border-bottom:1px solid #e8e8e9;
				&:last-child{
					border-bottom:none;
				}
				.title{
					font-size:20upx;
					color:#333;
				}
				.cuIcon-right{
					float:right;
					color:#999;
				}
			}
		}
	}
</style>
