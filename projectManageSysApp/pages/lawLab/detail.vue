<template>
	<view class="page4">
		<cu-custom bgColor="bg-gradual-blue" isBack="true"><block slot="backText">返回</block><block slot="content">法律法规详情</block></cu-custom>
		<view class="search-box">
			<text class="search-icon cuIcon-search"></text>
			<input class="uni-input" placeholder="搜索" confirm-type="search"/>
		</view>
		<scroll-view scroll-y class="main-wrap">
			<!-- <rich-text class="title" :nodes="detailData.title"></rich-text>
			<rich-text class="text-body" :nodes="detailData.content">
			</rich-text> -->
			<text class="title">{{detailData.title}}</text>
			<text class="text-body">{{detailData.content}}</text>
		</scroll-view>
	</view>
</template>

<script>
import { select } from '../../service/service'
	export default {
		data() {
			return {
				detailData: null
			}
		},
		onLoad:  function(option) { 
			 this.getLawDetailById(option.id).then(res => {
				 this.detailData = res
				 // this.detailData.title = res.title.replace(/\\n/g,'<br/>')
				 // this.detailData.content = res.content.replace(/\\n/g,'<br/>')
			 })
		},
		methods: {
			getLawDetailById(id) {
				return 	new Promise((resolve,reject) => {
					select('t_law', {id}).then(res=> {
						setTimeout(() => {
							uni.showLoading({
								title: "加载中..."
							});
						},500)
						setTimeout(() => {
							resolve(res[0])
							uni.hideLoading();
						},800)
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	.page4{
		height:100vh;
		background-color:#fff;
		overflow:auto;
		padding-top:87upx;
		// 搜索框
		.search-box{
			background-color:#f5f5f9;
			padding:20upx;
			position:fixed;
			z-index:9999;
			top:87upx;
			width:100%;
			left:0;
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
		.main-wrap{
			padding:30upx 20upx 20upx 20upx;
			.title{
				display:inline-block;
				text-align:center;
				font-size:24upx;
				font-weight:700;
				color:#333;
				width:100%;
				margin-bottom:20upx;
			}
			
			.text-body{
				display:block;
				font-size:18upx;
				color:#333;
			}
		}
	}
</style>
