<template>
	<view class="page4">
		<cu-custom bgColor="bg-gradual-blue" isBack="true"><block slot="backText">返回</block><block slot="content">法律法规详情</block></cu-custom>
		<scroll-view scroll-y class="main-wrap">
			<rich-text class="title" :nodes="detailData.title"></rich-text>
			<rich-text class="text-body" :nodes="detailData.content">
			</rich-text>
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
				 this.detailData.title = res.title.replace(/\\n/g,'<br/>')
				 this.detailData.content = res.content.replace(/\\n/g,'<br/>')
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
