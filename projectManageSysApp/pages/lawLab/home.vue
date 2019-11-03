<template name="lawLab">
	<view class="page3">
		<cu-custom bgColor="bg-gradual-blue"><block slot="content">法律法规库</block></cu-custom>
		<scroll-view scroll-y >
			<view class="search-box">
				<text class="search-icon cuIcon-search"></text>
				<input class="uni-input" placeholder="搜索" v-model="keyword" confirm-type="search" @confirm="doSearch()"/>
				<text class="close-icon cuIcon-close" @tap.stop="clearInput()" v-if="keyword"></text>
			</view>
			<view class="law-list-wrap" v-for="item in lawData" :key="item.id">
				<view class="law-list-item" @tap="navToDetail(item.id)">
					<text class="title">{{item.name}}</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	import { select, search_law } from '../../service/service'
	export default {
		// name: "LawLab",
		data() {
			return {
				// 关键字
				keyword: '',
				lawData: []
			}
		},
		mounted() {
			this.getLawList().then(res=> {
				this.lawData = res;
			});
		},
		watch: {
			keyword: function(newVal) {
				if (newVal === '') {
					this.getLawList().then(res=> {
						this.lawData = res;
					});
				} else {
					this.doSearch();
				}
			}
		},
		methods: {
			// 清空关键字
			clearInput() {
				this.keyword = '';
			},
			// 查询操作
			doSearch() {
				search_law(this.keyword).then(res => {
					// console.log(JSON.stringify(res));
					this.lawData = res;
				})
			},
			navToDetail(id) {
				uni.navigateTo({
					url:`../lawLab/detail?id=${id}`
				});
			},
			getLawList() {
				return 	new Promise((resolve,reject) => {
					select('t_law').then(res=> {
						resolve(res)
					});
				})
			}
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style lang="scss">
	.page3 {
		height: 100vh;
		position:relative;
		// 搜索框
		.search-box{
			background-color:#f5f5f9;
			padding:20upx;
			.search-icon{
				position:absolute;
				top:36upx;
				left:30upx;
				color:#bbb;
				font-size:20upx;
			}
			.close-icon{
				position:absolute;
				top:36upx;
				right:35upx;
				color:#bbb;
				font-size:20upx;
				z-index:9999999;
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
				display:flex;
				.title{
					font-size:20upx;
					font-family: '微软雅黑';
					color:#666;
					flex:auto;
					overflow:hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.cuIcon-right{
					color:#999;
					flex:none;
				}
			}
		}
	}
</style>
