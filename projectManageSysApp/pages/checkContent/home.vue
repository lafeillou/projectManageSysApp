<template name="checkContent">
	<view class="page2">
		<view class="custom-header bg-gradual-blue">
			<text style="display:inline-block;font-size:32upx;padding-top:32upx;">检察内容</text>
			<view class="btn-wrap">
				<button class="plain-btn">同步</button>
				<button class="plain-btn">保存</button>
			</view>
		</view>
		<scroll-view scroll-y style="height:100% - 87upx;position:absolute;top:87upx;left:0;width:100%;">
			<Tabs
				class="myTabs"
			    :TabList="TabList"
			    :currentTab="current"
			    @tabs="tabsChange">
			    <TabPane>
					<view class="content-list-wrap" v-for="item in checkListData[0].children" :key="item.id">
						<view class="title">{{item.title}}</view>
						<view class="content-list-wrap-inner">
							<view class="content-list-item" v-for="obj in item.children" :key="obj.id">
								<text class="txt">{{obj.title}}</text>
								<view class="radio-select" style="display:flex;">
									<view @tap="setTrueValue(obj)" style="flex:none;">
										<radio class="blue radio" :checked="obj.value === 1" :value="obj.value"></radio>
										<text class="radio-txt">是</text>
									</view>
									<view @tap="setFalseValue(obj)" style="flex:none;">
										<radio class="blue radio" :checked="obj.value === 0" :value="obj.value"></radio>
										<text class="radio-txt">否</text>
									</view>
								</view>
								<button plain class="plain-btn" @tap="navToDetail(obj.id)">检察结果<text class="cuIcon-right"></text></button>
							</view>
						</view>
					</view>
			    </TabPane>
			    <TabPane >
			        <view class="content-list-wrap" v-for="item in checkListData[1].children" :key="item.id">
			        	<view class="title">{{item.title}}</view>
			        	<view class="content-list-wrap-inner">
			        		<view class="content-list-item" v-for="obj in item.children" :key="obj.id">
			        			<text class="txt">{{obj.title}}</text>
			        			<view class="radio-select" style="display:flex;">
			        				<view @tap="setTrueValue(obj)" style="flex:none;">
			        					<radio class="blue radio" :checked="obj.value === 1" :value="obj.value"></radio>
			        					<text class="radio-txt">是</text>
			        				</view>
			        				<view @tap="setFalseValue(obj)" style="flex:none;">
			        					<radio class="blue radio" :checked="obj.value === 0" :value="obj.value"></radio>
			        					<text class="radio-txt">否</text>
			        				</view>
			        			</view>
			        			<button plain class="plain-btn" @tap="navToDetail(obj.id)">检察结果<text class="cuIcon-right"></text></button>
			        		</view>
			        	</view>
			        </view>
			    </TabPane>
			    <TabPane >
			        <view class="content-list-wrap" v-for="item in checkListData[2].children" :key="item.id">
			        	<view class="title">{{item.title}}</view>
			        	<view class="subContentWrap" v-for="obj in item.children" :key="obj.id">
			        		<view class="subTitle">{{obj.title}}</view>
			        		<view class="content-list-wrap-inner">
			        			<view class="content-list-item" v-for="o in obj.children" :key="o.id">
			        				<text class="txt">{{o.title}}</text>
			        				<view class="radio-select" style="display:flex;">
										<view @tap="setTrueValue(o)" style="flex:none;">
											<radio class="blue radio" :checked="o.value === 1" :value="o.value"></radio>
											<text class="radio-txt">是</text>
										</view>
										<view @tap="setFalseValue(o)" style="flex:none;">
											<radio class="blue radio" :checked="o.value === 0" :value="o.value"></radio>
											<text class="radio-txt">否</text>
										</view>
			        				</view>
			        				<button plain class="plain-btn" @tap="navToDetail(o.id)">检察结果<text class="cuIcon-right"></text></button>
			        			</view>
			        		</view>
			        	</view>
					</view>
			    </TabPane>
			</Tabs>
			
	<view class="cu-tabbar-height"></view>
	</scroll-view>
	</view>
</template>

<script>
	import Tabs from '../../components/wiszx-tabs/tabs.vue';
	import TabPane from '../../components/wiszx-tabs/tabPane.vue';
	import { update, getJCNR } from '../../service/service';
	import _ from 'lodash';
	
	export default {
		// name: "CheckContent",
		components: {
			Tabs,
			TabPane
		},
		data() {
			return {
				current:0,
				checkListData: []
			}
		},
		computed:{
			TabList: function() {
				let arr = [];
				_.forEach(this.checkListData, (o,i) => {
					arr.push({title: o.title})
				});
				return arr;
			}
		},
		methods:{
		    tabsChange(index){
		        this.current = index;
		    },
			update(id, newVal) {
				update('t_investigation', {id:id, value:newVal}).then(res => {
					console.log(`操作:更新id为${id}检查项的值为${newVal}`)
					// console.log(`数据库返回:`,JSON.stringify(res))
				})
			},
			setTrueValue(targetObj){
				if (targetObj.value === 1) {
					targetObj.value = -1
					// console.log(JSON.stringify(targetObj))
					this.update(targetObj.id, targetObj.value)
					return
				}
				targetObj.value = 1
				this.update(targetObj.id, targetObj.value)
				// console.log(JSON.stringify(targetObj))
			} ,
			setFalseValue(targetObj){
				if (targetObj.value === 0) {
					targetObj.value = -1
					this.update(targetObj.id, targetObj.value)
					// console.log(JSON.stringify(targetObj))
					return
				}
				targetObj.value = 0
				this.update(targetObj.id, targetObj.value)
				// console.log(JSON.stringify(targetObj))
			} ,
			navToDetail(id) {
				uni.navigateTo({
				    url: `../checkContent/detail?id=${id}`
				});
			},
			getCheckItemList() {
				return new Promise((resolve,reject) => {
					uni.showLoading({
						title: '加载中...'
					});
					getJCNR().then(res => {
						if (res.status === 200) {
							this.checkListData = res.data
							setTimeout(() => {
								uni.hideLoading()
								resolve(res.data)
							},500)
						}
					});
				})
			}
		},
		mounted() {
			this.getCheckItemList();
		},
		onShow() {
			console.log("success");
		}
	}
</script>

<style lang="scss">
	.page2 {
		height: 100vh;
		overflow:auto;
		.custom-header{
			height:87upx;
			width:100%;
			position:fixed;
			top:0;
			left:0;
			z-index:1;
			text-align:center;
			.btn-wrap{
				position:absolute;
				right:0;
				top:48upx;
				.plain-btn{
					border-color:transparent;
					display:inline-block;
					background-color:transparent;
					font-size:28upx;
					color:#fff;
					line-height:1em;
					float:right;
					padding:0;
					margin-right:30upx;
					&:after{
						border:none;
					}
				}
			}
		}
	}
	.content-list-wrap{
		.title{
			font-size:20upx;
			font-weight:bold;
			padding-left: 15upx;
			line-height:3em;
			margin-top:20upx;
			color:#333;
		}
		.subContentWrap{
			background-color:#fff;
			.subTitle{
				padding:20upx 0 0 20upx;
				font-size:18upx;
				font-weight:700;
			}
		}
		.content-list-wrap-inner{
			padding-left:20upx;
			background-color:#fff;
			.content-list-item{
				padding-right:20upx;
				border-bottom:1upx solid #e4e4e4;
				display:flex;
				&:last-child{
					border-bottom:none;
				}
				.txt{
					color: rgba(51, 51, 51, 0.647058823529412);
					font-size:18upx;
					line-height:1.5em;
					padding:18upx 0;
					flex:auto;
				}
				.plain-btn{
					float:right;
					border:none;
					display:inline-block;
					background-color:none;
					font-size:18upx;
					color:#1890FE;
					line-height:1em;
					margin-top:18upx;
					flex:none;
				}
				
				.radio-select{
					line-height:1em;
					float:right;
					flex:none;
					margin-top:12upx;
					.radio{
					}
					.radio-txt {
						margin-right:30upx;
						margin-left:4upx;
						line-height:1em;
						font-size:16upx;
						color:#666666;
					}
				}
			}
		}
	}
</style>
