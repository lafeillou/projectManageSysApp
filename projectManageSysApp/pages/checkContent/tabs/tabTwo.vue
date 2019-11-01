<template>
	<scroll-view scroll-y>
	<view class="content-list-wrap">
		<view class="title">监管安全检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">监狱安全警戒设施设备是否符合规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱门禁系统设施设置和管理是否符合规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱安全监管设施是否符合规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱禁闭室、会见室等场所是否符合建设标准</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱生产劳动场所安全是否符合规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱消防设施及火灾防范措施是否符合规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱对危险源、危险物品的管理和使用是否符合规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">清监查号、违禁品搜查等监狱安全规章制度是否落实，应急预案制订和执行是否符合规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱有关监管安全的其他执法活动</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
		</view>
	</view>
	
	<view class="content-list-wrap">
		<view class="title">分押分管检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">成年男犯、女犯和未成年犯是否实行分开关押和管理</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">女犯是否由女性监狱民警直接管理</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">罪犯是否按照犯罪类型、刑罚种类、刑期、改造表现等情况，对罪犯实行分别关押，采用不同管理方式</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">老病残罪犯是否分别管理，在生活、劳动等各方面予以适当照顾</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">罪犯是否根据考核积分、服刑时间、犯罪类型和主观恶性等情况，对罪犯实行分级管理，在活动范围、会见通信、文体活动、离监探亲等方面给予相应的处遇</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">特殊岗位罪犯的审批、使用、管理是否符合有关规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
		</view>
	</view>
	
	<view class="content-list-wrap">
		<view class="title">戒具使用检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">监狱对罪犯使用戒具是否符合规定的情形，是否存在滥用戒具作为刑讯和惩罚罪犯的手段的情形</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱对罪犯使用戒具是否严格履行审批手续，是否存在随意延长戒具使用时间的情形</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱是否使用制式警戒具，对罪犯使用戒具是否严格按照使用说明正确使用，是否存在给罪犯戴双铐、背铐、双镣等情形</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱是否安排医生定时对使用戒具的罪犯进行身体检查，是否存在身体状况不适宜而继续使用戒具的情形</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
		</view>
	</view>
	
	
	<view class="content-list-wrap">
		<view class="title">通信会见检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">监狱是否按照规定的时间、次数为罪犯安排会见</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">会见人员是否确系罪犯亲属、监护人，是否办理相关手续</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">会见和拨打电话现场是否由监狱民警全程监听、监控、监管</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">罪犯与亲属、监护人通信是否得到保障，是否依法实施了检查</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">罪犯写给监狱的上级机关和司法机关的信件是否不被检查</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn" @click="navToDetail()">检察结果<text class="cuIcon-right"></text></button>
			</view>
		</view>
	</view>
	
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			RadioChange() {
				console.log('radio tap!')
			},
			navToDetail() {
				uni.navigateTo({
				    url: '../checkContent/detail'
				});
			}
		}
	}
</script>

<style lang="scss">
	.content-list-wrap{
		.title{
			font-size:20upx;
			font-weight:bold;
			padding-left: 15upx;
			line-height:3em;
			margin-top:20upx;
			color:#333;
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
						// .uni-radio-wrapper{
						// 	.uni-radio{
						// 		.uni-radio-input{
						// 			width:16upx !important;
						// 			height:16upx !important;
						// 		}
						// 	}
						// }
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
