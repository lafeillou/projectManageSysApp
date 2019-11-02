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
			    @tabs="tabsChange"
		
			>
			    <TabPane >
					<tabOne ></tabOne>
			    </TabPane>
			    <TabPane >
			        <tabTwo></tabTwo>
			    </TabPane>
			    <TabPane >
			        <tabThree></tabThree>
			    </TabPane>
			</Tabs>
			
	<view class="cu-tabbar-height"></view>
	</scroll-view>
	</view>
</template>

<script>
	
	import Tabs from '../../components/wiszx-tabs/tabs.vue'
	import TabPane from '../../components/wiszx-tabs/tabPane.vue'
	import tabOne from './tabs/tabOne.vue'
	import tabTwo from './tabs/tabTwo.vue'
	import tabThree from './tabs/tabThree.vue'
	
	export default {
		// name: "CheckContent",
		components: {
			Tabs,
			TabPane,
			tabOne,
			tabTwo,
			tabThree
		},
		data() {
			return {
				current:0,
				TabList:[
				    {title:'刑罚执行检察'},
				    {title:'监狱管理检察'},
				    {title:'教育改造检察'}
				]
			}
		},
		methods:{
		    tabsChange(index){
		        this.current = index
		    }
		},
		onShow() {
			console.log("success")
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
</style>
