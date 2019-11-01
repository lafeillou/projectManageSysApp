<template name="checkContent">
	<view >
		<cu-custom bgColor="bg-gradual-blue"><block slot="content">检察内容</block></cu-custom>
		<scroll-view scroll-y class="page2">
			<Tabs
			    :TabList="TabList"
			    :currentTab="current"
			    @tabs="tabsChange"
			>
			    <TabPane>
					<tabOne></tabOne>
			    </TabPane>
			    <TabPane>
			        <tabTwo></tabTwo>
			    </TabPane>
			    <TabPane>
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
		
	}
</style>
