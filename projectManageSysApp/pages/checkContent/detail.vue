<template>
	<view class="page5">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText" @tap.stop="beforeBack" style="padding-left:50upx;position:absolute;left:0;top:34upx;">返回</block><block slot="content">备注</block><block slot="right"><text style="margin-right:30upx;" @tap="saveProblem()">保存</text></block></cu-custom>
		<scroll-view scroll-y>
			<view class="input-content-wrap">
				<textarea class="textAreaInput" type="text" v-model="remark" placeholder="请输入备注内容"/>
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
					<text class="title">本次检察中发现问题</text>
					<view class="histroy-problem-item" v-for="(item,index) in problemList" :key="item.id">
						<view class="body-text" style="padding-left:30upx;"><text class="cu-tag bg-blue radius sm" style="margin-right:10upx;">问题{{index + 1}}</text>
							{{item.result}}
						</view>
						<view class="padding" style="width:100%;height:100upx;background-color:red;" v-for="(obj,i) in item.images.split(',')" :key="i">
							<image :src="obj" mode="aspectFill"></image>
						</view>
						<!-- <view class="padding" v-for="(obj,i) in item.images.split(',')" :key="i">
							{{JSON.stringify(item.images)}}
							<view class="cu-avatar radius margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
						</view> -->
						<!-- <view class="image-list-wrap" v-for="(obj,i) in item.images.split(',')" :key="i" style="display:flex;">
							<text class="cu-avatar radius" :style="{'background-image':'url('+ obj +')'}" style="flex:none;display:inline-block;width:80upx;height:80upx;"></text>
						</view> -->
					</view>
				</div>
				
				
				<div class="history-problem-wrap">
					<text class="title">历史问题</text>
					<view class="histroy-problem-item" v-for="(item,index) in historyProblemList" :key="item.id">
						<view class="body-text" style="padding-left:30upx;"><text class="cu-tag bg-blue radius sm">问题{{index+1}}</text>
							<text class="cu-tag bg-green radius sm" v-if="item.status === 1" style="margin-right:10upx;">已整改</text>
							<text class="cu-tag bg-red radius sm" v-if="item.status === 0" style="margin-right:10upx;">未整改</text>
							<text class="cu-tag bg-grey radius sm" v-if="item.status === 2" style="margin-right:10upx;">未回复</text>
							{{item.description}}
						</view>
						<view v-if="item.feedback" class="body-text" style="margin-left:30upx;margin-top:20upx;margin-bottom:30upx;padding-left:40upx;border-top:1upx dashed #ddd;padding-top:20upx;"><text class="cu-tag light bg-blue radius sm" style="margin-right:10upx;">回复</text><text>{{item.feedback}}</text></view>
					</view>
				</div>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { select,insert_problems } from '../../service/service';
	export default {
		data() {
			return {
				currCheckId: '',
				currType: '',
				// 备注文字
				remark: '',
				// 待存储图片列表
				imgList: [],
				// 历史问题
				historyProblemList: [],
				// 本次检察中发现问题
				problemList: []
			}
		},
		onLoad:  function(option) {
			this.currCheckId = option.id;
			this.currType = option.type;
			this.getHistoryList(option.id).then(res => {
				this.historyProblemList = res;
				// console.log(JSON.stringify(res));
			})
			this.getProblemsList(option.id).then(res => {
				// console.log(JSON.stringify(res));
				this.problemList = res;
				// if (this.problemList.length > 0) {
				// 	let firstItem = this.problemList[0];
				// 	this.imgList = firstItem.images.split(',');
				// 	this.remark = firstItem.result;
				// }
			})
		},
		methods: {
			// 返回到上一页面之前调用
			beforeBack() {
				if (this.remark !== '') {
					uni.showToast({
					    title: '请先保存填写的问题！',
						icon: 'none',
						position: 'top',
					    duration: 3000
					});
					return false;
				} else {
					uni.navigateBack({
					    delta: 1
					});
					return true;
				}
			},
			// 保存问题
			saveProblem() {
				if (this.remark === '') {
					uni.showToast({
					    title: '请输入备注内容！',
						icon: 'none',
						position: 'top',
					    duration: 3000
					});
					return
				}
				insert_problems({
					checkId: this.currCheckId,
					result: this.remark,
					images: this.imgList,
					type:this.currType
				}).then(res => {
					uni.showToast({
					    title: '保存成功！',
						icon: 'none',
						position: 'top',
					    duration: 3000
					});
					// 清空表单
					this.remark = '';
					this.imgList = [];
					// 把新增数据刷出来
					this.getProblemsList(this.currCheckId).then(res => {
						this.problemList = res;
					})
				});
			},
			// 查询本次检察中发现问题列表
			getProblemsList(checkId) {
				return new Promise((resolve,reject) => {
					select('t_problem', {checkId}).then(res => {
						resolve(res);
					});
				});
			},
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
				        // console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
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
			
			.histroy-problem-item{
				padding-right:30upx;
			}
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
				// padding-right:57upx;
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
