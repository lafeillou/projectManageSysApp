<template name="checkContent">
	<view>
		<scroll-view scroll-y class="page">
			<Tabs
			    :TabList="TabList"
			    :currentTab="current"
			    @tabs="tabsChange"
			>
			    <TabPane>
			        <view>1</view>
			    </TabPane>
			    <TabPane>
			        <view>2</view>
			    </TabPane>
			    <TabPane>
			        <view>3</view>
			    </TabPane>
			</Tabs>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	
	import Tabs from '../../components/wiszx-tabs/tabs.vue'
	import TabPane from '../../components/wiszx-tabs/tabPane.vue'
	
	export default {
		// name: "CheckContent",
		components: {
			Tabs,
			TabPane
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

<style>
	.page {
		height: 100vh;
	}
</style>
