<template>
	<view class="page5">
		<cu-custom bgColor="bg-gradual-blue" isBack="true"><block slot="backText">返回</block><block slot="content">巡回检察记录</block><block slot="right"><text style="margin-right:30upx;" @tap="saveReport()">保存</text></block></cu-custom>
		<scroll-view scroll-y class="main-wrap">
			<view class="custom-table">
				<view class="row">
					<view class="col" style="width:21%"><text class="th">被检察单位</text></view>
					<view class="col" style="width:29%"><text class="td">蔡甸监狱</text></view>
					<view class="col" style="width:21%"><text class="th">检察日期</text></view>
					<view class="col" style="width:29%"><text class="td">{{currDateStr}}</text></view>
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
					<view class="col" style="width:79%">
						<text class="td" style="text-align:left;text-indent:0;padding:0;" v-if="reportData && ((reportData[0].children.length + reportData[1].children.length + reportData[2].children.length) > 0)">
						{{currDateStr}}共发现问题{{reportData[0].children.length + reportData[1].children.length + reportData[2].children.length}}个.问题明细情况如下:\n
							<text v-if="reportData[0].children.length > 0">1、刑罚执行类问题{{reportData[0].children.length}}个,分别是: \n
								<text v-for="(item,index) in reportData[0].children" :key="index">
									({{index+1}})、{{item.result}}\n
								</text>
							</text>
							<text v-if="reportData[1].children.length > 0">2、教育改造类问题{{reportData[1].children.length}}个,分别是: \n
								<text v-for="(item,index) in reportData[1].children" :key="index">
									({{index+1}})、{{item.result}}\n
								</text>
							</text>
							<text v-if="reportData[2].children.length > 0">3、狱政管理类问题{{reportData[2].children.length}}个,分别是: \n
								<text v-for="(item,index) in reportData[2].children" :key="index">
									({{index+1}})、{{item.result}}\n
								</text>
							</text>
						</text>
						<text class="td" style="text-align:left;" v-else>
							{{reportResult}}
						</text>
					</view>
				</view>
				<view class="row">
					<view class="col" style="width:21%"><text class="th">备注</text></view>
					<view class="col" style="width:79%"><text class="td"></text></view>
				</view>
				<view class="row">
					<view class="col" style="width:21%"><text class="th">检察员签名</text></view>
					<view class="col" style="width:79%"><text class="td"></text></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {get_report_perday, get_record, insert_report_perday} from '../../service/service';
	import _ from 'lodash';
	
	export default {
		data() {
			return {
				currDateStr: '',
				// 报告数据
				reportData: null,
				// 生成的结论
				reportResult: ''
			}
		},
		onLoad:  function(option) {
			this.currDateStr = option.date;
			// 是否已经生成了报告
			get_report_perday(this.currDateStr).then(res => {
				if (res.length === 0) {
					// 没有生成报告，则去生成报告
					get_record(this.currDateStr).then(res => {
						this.reportData = res;
					})
				} else {
					// 如果已经生成过报告，则显示报告表的内容
					console.log(JSON.stringify(res));
					this.reportResult = res[0].condition;
				}
			});
		},
		methods: {
			saveReport() {
				if (!this.reportData) {
					uni.showToast({
					    title: '您已经保存过了！',
						icon: 'none',
						position: 'top',
					    duration: 3000
					});
					return;
				}
				let strTotal = '';
				if (this.reportData[0].children.length + this.reportData[1].children.length + this.reportData[2].children.length > 0) {
					let str1 = `${this.currDateStr}共发现问题${this.reportData[0].children.length + this.reportData[1].children.length + this.reportData[2].children.length}个.问题明细情况如下:\n`;
					let str2 = '';
					let str3 = '';
					let str4 = '';
					if (this.reportData[0].children.length > 0) {
						str2 = `1、刑罚执行类问题${this.reportData[0].children.length}个,分别是: \n`
						_.forEach(this.reportData[0].children,(o,i)=>{
							str2 += `(${i+1})、${o.result}\n`;
						})
					}
					
					if (this.reportData[1].children.length > 0) {
						str3 = `2、刑罚执行类问题${this.reportData[1].children.length}个,分别是: \n`
						_.forEach(this.reportData[1].children,(o,i)=>{
							str3 += `(${i+1})、${o.result}\n`;
						});
					}
					if (this.reportData[2].children.length > 0) {
						str4 = `3、刑罚执行类问题${this.reportData[2].children.length}个,分别是: \n`
						_.forEach(this.reportData[2].children,(o,i)=>{
							str4 += `(${i+1})、${o.result}\n`;
						});
					}
					strTotal = str1 + str2 + str3 + str4;
					insert_report_perday({
						id: this.currDateStr,
						condition: strTotal
					}).then(res => {
						uni.showToast({
						    title: '保存成功！',
							icon: 'none',
							position: 'top',
						    duration: 3000
						});
					})
				} else {
					return;
				}
			}
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
