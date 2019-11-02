<template>
	<view class="page5">
		<cu-custom bgColor="bg-gradual-blue" isBack="true"><block slot="backText">返回</block><block slot="content">巡回检察记录</block><block slot="right"><text style="margin-right:30upx;">保存</text></block></cu-custom>
		<scroll-view scroll-y class="main-wrap">
			<view class="custom-table">
				<view class="row">
					<view class="col" style="width:21%"><text class="th">被检察单位</text></view>
					<view class="col" style="width:29%"><text class="td">蔡甸监狱</text></view>
					<view class="col" style="width:21%"><text class="th">检察日期</text></view>
					<view class="col" style="width:29%"><text class="td">2019.11.05</text></view>
				</view>
				<view class="row">
					<view class="col" style="width:21%"><text class="th">检察地点</text></view>
					<view class="col" style="width:29%"><text class="td">蔡甸监狱</text></view>
					<view class="col" style="width:21%"><text class="th">检察内容</text></view>
					<view class="col" style="width:29%"><text class="td">收监检察</text></view>
				</view>
				<view class="row">
					<view class="col" style="width:21%"><text class="th">巡回检察方式</text></view>
					<view class="col" style="width:29%"><text class="td">交叉巡回检察</text></view>
					<view class="col" style="width:21%"><text class="th">检察人员</text></view>
					<view class="col" style="width:29%"><text class="td"></text></view>
				</view>
				<view class="row">
					<view class="col" style="width:21%"><text class="th">检察情况</text></view>
					<view class="col" style="width:79%"><text class="td" style="text-align:left;">1、禁闭室、一监区个别民警文明规范执法意识不强，执法行为简单粗暴，服刑人员反映强烈；\n2、部分民警对法律法规和政策学习不够，对服刑人员咨询不能正确回应，在犯群中造成不良影响。如一监区有服刑人员反映，监区犯群中流传有“2019年减刑政策又要变化，2018年报不了减刑的奖励全部要作废”的错误言论。</text></view>
				</view>
				<view class="row">
					<view class="col" style="width:21%"><text class="th">备注</text></view>
					<view class="col" style="width:79%"><text class="td">XXXXXXXXXXXXXXXXXX</text></view>
				</view>
				<view class="row">
					<view class="col" style="width:21%"><text class="th">检察员签名</text></view>
					<view class="col" style="width:79%"><text class="td">XXXXXXXl</text></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.page5{
		height:100vh;
		background-color:#fff;
		.main-wrap{
			padding:50upx 20upx 20upx 20upx;
			.custom-table{
				border:1upx solid #e8e8e8;
				.row{
					display:flex;
					.col{
						flex:auto;
						border:1upx solid #e8e8e8;
						text-align:center;
						padding:20upx;
						line-height:1em;
						.td{
							font-size: 18upx;
							color:#333;
							line-height:1.2em;
							display:inline-block;
						}
						.th{
							font-weight: 700;
							font-size: 20upx;
							color:#333;
							display:inline-block;
						}
					}
				}
			}
		}
		
	}
</style>
