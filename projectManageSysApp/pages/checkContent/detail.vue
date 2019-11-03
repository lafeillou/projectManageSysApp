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
	import { select } from '../../service/service';
	export default {
		data() {
			return {
				// 待存储图片列表
				imgList: []
			}
		},
		onLoad:  function(option) {
			 this.getHistoryList(option.id).then(res => {
				 console.log(JSON.stringify(res));
			 })
		},
		methods: {
			// 查询历史问题列表
			getHistoryList(checkId) {
				return new Promise((resolve,reject) => {
					select('t_history_problem', {checkId}).then(res => {
						resolve(res);
					});
				});
			},
			ChooseImage() {
				// 弹出菜单
				uni.showActionSheet({
				    itemList: ['拍照', '选择图片'],
				    success: function (res) {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (res.tapIndex === 1) {
							this.selectPics();
						} else if (res.tapIndex === 0) {
							this.useCamera();
						}
				    }.bind(this),
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
				
			},
			selectPics() {
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
			useCamera() {
				let that = this;
				plus.camera.getCamera().captureImage(function(absPath) {  
				        //创建一个 bitmap 对象，参数1是id，参数2是拍照返回的图片绝对路径  
				    let bitmap = new plus.nativeObj.Bitmap('test', absPath);  
				        //没办法，费点事，再用 bitmap 保存一下，overwrite 属性表示是否覆盖原来文件，第1个回调是保存成功，第2个回调是保存失败  
				    bitmap.save(  
				        absPath,   
				        {  
				            overwrite: true,  
				            format: 'jpg',  
				        },  
				        function(event) {
							that.imgList.push(absPath);
				            // Code here  
				            // 保存后的图片url路径，以"file://"开头  
				            let target = event.target;  
				            // 保存后图片的大小，单位为字节（Byte）  
				            let size = event.size;  
				            // 保存后图片的实际宽度，单位为px  
				            let width = event.width;  
				            // 保存后图片的实际高度，单位为px    
				            let height = event.height;  
				            console.log('图片绝对路径: ' + target);
				            console.log('图片文件大小：' + size);
				            console.log('图片宽度：' + width);
				            console.log('图片高度：' + height);
				            function bytesToSize(bytes) {  
				                if (bytes === 0) {  
				                    return '0 B'  
				                }  
				                let k = 1000, // or 1024  
				                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],  
				                i = Math.floor(Math.log(bytes) / Math.log(k));  
				                return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];  
				            }  
				            var ss = bytesToSize(size);  
				            console.log(ss)  
				        },  
				        function(error) { 
							// Error.  
				            var code = error.code; // 错误编码  
				            var message = error.message; // 错误描述信息                
				            console.log(code)  
				            console.log(message)  
				        }  
				    );  
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
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
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
