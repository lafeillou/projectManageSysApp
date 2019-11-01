<template>
	<view class="page5">
		<cu-custom bgColor="bg-gradual-blue" isBack="true"><block slot="backText">返回</block><block slot="content">备注</block><block slot="right"><text style="margin-right:30upx;">保存</text></block></cu-custom>
		<scroll-view scroll-y>
			<view class="input-content-wrap">
				<textarea class="textAreaInput" type="text" placeholder="请输入备注内容"/>
			</view>
			<view class="photo-content-wrap">
				<view class="cu-bar bg-white">
					<view class="action" style="font-size:20px;font-weight:700;color:#333;">
						相关问题照片
					</view>
					<view class="action" style="font-size:20px;font-weight:700;color:#333;">
						{{imgList.length}}/4
					</view>
				</view>
				<view class="cu-form-group">
					<view class="grid col-4 grid-square flex-sub">
						<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						 <image :src="imgList[index]" mode="aspectFill"></image>
							<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
							<text class='cuIcon-cameraadd'></text>
						</view>
					</view>
				</view>
				
				<div class="history-problem-wrap">
					<text class="title">历史问题</text>
					<view class="status"><text>已整改</text></view>
					<view class="body-text">2018.12.07湖北省黄石市人民检察院检察巡回检察<br/>罪犯王某在交付执行刑罚前剩余刑期不足三个月，应由看守所代为执行。</view>
					
				</div>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: []
			}
		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除这张图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.page5{
		height:100vh;
		.input-content-wrap{
			margin-top:20upx;
			background-color:#fff;
			height:292upx;
			border-bottom:1upx solid #e4e4e4;
			.textAreaInput{
				padding:20upx;
				display:block;
				width:100%;
				height:100%;
				.input-placeholder{
					color: #BABABA;
					font-size:20upx;
				}
			}
			
		}
		
		.history-problem-wrap{
			margin-top:20upx;
			background-color:#fff;
			padding:0  20upx 20upx 20upx;
			position:relative;
			.title{
				display:inline-block;
				font-size:20upx;
				font-weight:700;
				color:#333;
				margin-top:24upx;
				margin-bottom:8upx;
			}
			.body-text{
				font-size:20upx;
				color:#666;
				padding-right:57upx;
			}
			.status{
				color:rgba(0, 0, 0, 0.647058823529412);
				font-size:20upx;
				position:absolute;
				right:20upx;
				top:56upx;
				&:before{
					display:inline-block;
					content:'  ';
					background-color:#52c41a;
					width:8upx;
					height:8upx;
					border-radius:50%;
					margin-right:6upx;
					position:relative;
					top:-4upx;
				}
			}
		}
	}
</style>
