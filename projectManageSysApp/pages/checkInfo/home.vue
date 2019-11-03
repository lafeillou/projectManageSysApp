<template name="checkInfo">
	<view class="page1">
		<cu-custom bgColor="bg-gradual-blue"><block slot="content">检察信息</block></cu-custom>
		<scroll-view scroll-y >
			<view class="checkInfo-page-wrapper">
				<view class="checkInfo-item">
					<text class="title">基本信息</text>
					<view class="line-item-wrap">
						<text class="line-item">检察机关：</text>
						<text class="line-item">湖北省人民检察院</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">被检察单位：</text>
						<text class="line-item">蔡甸监狱</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察方式：</text>
						<text class="line-item">交叉巡回检察</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察时间：</text>
						<text class="line-item">2019.11.04 - 2019.11.08</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察状态：</text>
						<text class="line-item">进行中</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察要求：</text>
						<text class="line-item">对严重暴力犯罪和黑恶犯罪等重点罪犯的监管改造和刑罚执行情况进行检察，发现问题并督促监狱进行整改，促进监狱落实“五大改造”新理念，将罪犯改造成守法公民向社会输出。</text>
					</view>
				</view>
			</view>
				
			<view class="checkInfo-page-wrapper">
				<view class="checkInfo-item">
					<text class="title">办案组成员</text>
					<view class="line-item-wrap">
						<text class="line-item">主办案检察官：</text>
						<text class="line-item">金鑫</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察组成员：</text>
						<text class="line-item">陈江波、王世凯、杨胜春、郑敏、王建伟</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">综合保障组：</text>
						<text class="line-item">杨胜春、余大伟、李斯、余章正、罗云飞</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察一组：</text>
						<text class="line-item">王建伟、沈志、姜思颖、曾春伟、吴勇</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察二组：</text>
						<text class="line-item">郑敏、米磊、周武、姚怀宇、胡金明</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">检察三组：</text>
						<text class="line-item">王军、樊胜、罗云、黄新平、雷蔚峰、李其荣、王晓明、马才学、程晓宏</text>
					</view>
					<view class="line-item-wrap">
						<text class="line-item">人民监督员：</text>
						<text class="line-item">罗琼兰、吴荣福、宋玉、高大雄、张粒</text>
					</view>
				</view>
			</view>
			
			<view class="checkInfo-page-wrapper">
				<view class="checkInfo-item">
					<text class="title">日程安排</text>
					<view class="timeline-wrap">
						<view class="timeline-item">
							<view class="colA">
							</view>
							<view class="colB">
								<view class="colB-inner">
									<view class="title-wrap">
										<text class="time">2019.11.04</text>
										<button plain class="plain-btn" @click="navToDetail()">巡回检察记录<text class="cuIcon-right"></text></button>
									</view>
									<view class="list-wrap">
										<!-- <view class="list-wrap-item">1、收监检察</view>
										<view class="list-wrap-item">2、出监检察</view> -->
									</view>
								</view>
							</view>
						</view>
						
						<view class="timeline-item">
							<view class="colA">
							</view>
							<view class="colB">
								<view class="colB-inner">
									<view class="title-wrap">
										<text class="time">2019.11.05</text>
										<button plain class="plain-btn" @click="navToDetail()">巡回检察记录<text class="cuIcon-right"></text></button>
									</view>
									<view class="list-wrap">
										<!-- <view class="list-wrap-item">1、减刑、假释检察</view>
										<view class="list-wrap-item">2、分押分管检察</view> -->
									</view>
								</view>
							</view>
						</view>
						
						<view class="timeline-item">
							<view class="colA">
							</view>
							<view class="colB">
								<view class="colB-inner">
									<view class="title-wrap">
										<text class="time">2019.11.06</text>
										<button plain class="plain-btn" @click="navToDetail()">巡回检察记录<text class="cuIcon-right"></text></button>
									</view>
									<view class="list-wrap">
										<!-- <view class="list-wrap-item">1、收监检察</view>
										<view class="list-wrap-item">2、暂予监外执行检察</view>
										<view class="list-wrap-item">3、控告、举报、申诉检察</view> -->
									</view>
								</view>
							</view>
						</view>
						
						<view class="timeline-item">
							<view class="colA">
							</view>
							<view class="colB">
								<view class="colB-inner">
									<view class="title-wrap">
										<text class="time">2019.11.07</text>
										<button plain class="plain-btn" @click="navToDetail()">巡回检察记录<text class="cuIcon-right"></text></button>
									</view>
									<view class="list-wrap">
										<!-- <view class="list-wrap-item">1、收监检察</view>
										<view class="list-wrap-item">2、暂予监外执行检察</view>
										<view class="list-wrap-item">3、控告、举报、申诉检察</view> -->
									</view>
								</view>
							</view>
						</view>
						
						<view class="timeline-item">
							<view class="colA">
							</view>
							<view class="colB">
								<view class="colB-inner">
									<view class="title-wrap">
										<text class="time">2019.11.08</text>
										<button plain class="plain-btn" @click="navToDetail()">巡回检察记录<text class="cuIcon-right"></text></button>
									</view>
									<view class="list-wrap">
										<!-- <view class="list-wrap-item">1、收监检察</view>
										<view class="list-wrap-item">2、暂予监外执行检察</view>
										<view class="list-wrap-item">3、控告、举报、申诉检察</view> -->
									</view>
								</view>
							</view>
						</view>
						
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	import {select, update} from '../../service/service'
	export default {
		// name: "CheckInfo",
		data() {
			return {}
		},
		methods: {
			navToDetail() {
				uni.navigateTo({
				    url: '../checkInfo/detail'
				});
			}
		},
		mounted() {
			// select('t_investigation_type', {deep: 2,parentId: 20}).then(res => {
			// 	console.log(res.length)
			// 	res.forEach(function (item) {
			// 		console.log(item)
			// 	})
			// 	update('t_investigation', {id:789, value:1}).then(res => {
			// 		console.log('update 789 operation:',JSON.stringify(res))
			// 		select('t_investigation', {id:789}).then(a => {
			// 			console.log('789:', JSON.stringify(a))
			// 		})
			// 	})
			// })
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style lang="scss">
	.page1 {
		height: 100vh;
		overflow-y:auto;
		.checkInfo-page-wrapper{
			background-color:#f5f5f9;
			padding:20upx;
			// 内容块
			.checkInfo-item{
				background-color:#fff;
				padding:0 20upx;
				padding-bottom:20upx;
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
						&:first-child{
							width:7em;
							text-align:right;
							font-weight:600;
						}
						&:last-child{
							flex:auto;
						}
					}
				}
			}
			
			// 时间轴
			.timeline-wrap{
				padding:0 20upx;
				.timeline-item{
					display:flex;
					
					&:last-child{
						.colB{
							.colB-inner{border-bottom: none;}
						}
					}
					.colA{
						flex:none;
						width:16upx;
						position:relative;
						&:before{
							content:'   ';
							display:inline-block;
							width:15upx;
							height:15upx;
							position:absolute;
							top:18upx;
							left:1upx;
							border:5upx solid #0081FF;
							border-radius:50%;
							box-sizing: border-box;
							background-color:#fff;
							z-index:1;
						}
						
						&:after{
							content:'   ';
							display:inline-block;
							width:2px;
							height:calc(100% + 18upx);
							position:absolute;
							top:- 18upx;
							background-color:#e9e9e9;
							left:8upx;
							z-index:0;
						}
					}
					.colB{
						flex:auto;
						padding-left:20upx;
						.colB-inner{
							border-bottom:1upx solid #e8e8e8;
							.list-wrap{
								min-height:70upx;
								.list-wrap-item{
									font-size:20upx;
									line-height:1em;
									margin:16upx 0;
									color:rgba(0, 0, 0, 0.647058823529412);
								}
								
							}
							.title-wrap{
								.time{
									height:100%;
									font-size:18upx;
									font-weight:700;
									color:#333;
									font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
									line-height:46upx;
								}
								.plain-btn{
									border:none;
									display:inline-block;
									float:right;
									background-color:none;
									font-size:20upx;
									color:#999;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
