<template>
	<scroll-view scroll-y>
	<view class="content-list-wrap">
		<view class="title">入监、出监教育检察</view>
		<view class="subContentWrap">
			<view class="subTitle">入监教育检察</view>
			<view class="content-list-wrap-inner">
				<view class="content-list-item">
					<text class="txt">入监教育是否在新收分流罪犯的监狱或者监区集中进行</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">入监教育时限是否符合省级监狱管理机关的规定</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否告知罪犯刑罚执行期间权利、义务</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">入监教育是否包含法制教育、法律常识教育、认罪悔罪教育、监规纪律教育、行为规范教育等</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱对入监罪犯是否建立服刑改造专档</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否了解和掌握新收罪犯基本情况、认罪态度和思想动态，进行个体分析和心理测试，对其危险程度、恶性程度、改造难度进行评估，提出关押和改造建议</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否对入监教育结束后的罪犯进行考核验收，对考核合格的是否及时移送对应类别的监区服刑改造，对考核不合格的是否按规定延长入监教育</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱有关入监教育的其他执法活动</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
			</view>
		</view>
		
		
		<view class="subContentWrap">
			<view class="subTitle">出监教育检察</view>
			<view class="content-list-wrap-inner">
				<view class="content-list-item">
					<text class="txt">检察出监教育是否集中进行</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">检察出监教育时限是否为3个月，对未成年犯的出所教育是否不少于2个月</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">出监教育内容是否包含形势、政策、前途教育，遵纪守法教育，必要的就业指导，必要的职业技术培训；对未成年犯出所教育还应包含形势、政策、遵纪守法等方面，是否在就业、复学等方面指导，提供必要的技能培训</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">是否邀请当地公安、劳动和社会保障、民政、工商、税务等部门，向罪犯介绍有关治安、就业、安置、社会保障等方面的政策和情况，教育罪犯做好出监后应对各方面问题的思想准备</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">是否根据罪犯在服刑期间的考核情况、奖惩情况、心理测验情况，对其改造效果进行综合评估</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">是否在罪犯刑满前1个月，将其在监狱服刑改造的评估意见、刑满释放的时间，本人职业技能特长和回归社会后的择业意向，以及对地方做好安置帮教工作的建议，填入《刑满释放人员通知书》，寄送罪犯原户籍所在地的县级公安机关和司法行政机关</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否对刑满释放人员回归社会后的情况进行了解，评估教育改造工作的质量和效果</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱有关出监教育的其他执法活动</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
			</view>
		</view>
		
		
	</view>
	
	<view class="content-list-wrap">
		<view class="title">思想教育改造检察</view>
		<view class="subContentWrap">
			<view class="subTitle">思想教育检察</view>
			<view class="content-list-wrap-inner">
				<view class="content-list-item">
					<text class="txt">是否对罪犯进行法制、道德、形势、政策、前途等方面的思想教育改造工作</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">是否使用由司法部监狱管理局统一编写的教材</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">每年对成年罪犯的思想、文化、技术教学时间是否不少于500课时，每年对未成年犯是否不少于1000课时</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱对罪犯进行的思想教育内容是否包括：认罪悔罪教育、法律常识教育、公民道德教育、时事政治教育</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">未成年犯的思想教育内容是否包括法律常识、所规纪律、形势政策、道德修养、人生观、爱国主义等</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">未成年犯管教所是否配备符合国家规定学历的监狱民警担任教师，是否按押犯数4%的比例配备，是否使用罪犯担任教师</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱有关思想教育的其他执法活动</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
			</view>
		</view>
		
		
		<view class="subContentWrap">
			<view class="subTitle">个别教育检察</view>
			<view class="content-list-wrap-inner">
				<view class="content-list-item">
					<text class="txt">监狱民警对所管理的罪犯每个月是否至少安排一次个别谈话教育</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱民警在下列情形出现时是否及时进行个别谈话教育：新入监或者服刑监狱、监区变更时；处遇变更或者劳动岗位调换时；受到奖励或者惩处时；罪犯之间产生矛盾或者发生冲突时；离监探亲前后或者家庭出现变故时；无人会见或者家人长时间不与其联络时；行为反常、情绪异常时；主动要求谈话时；暂予监外执行、假释或刑满释放出监前</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱民警开展个别谈话教育是否做好记录</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否建立罪犯思想动态分析制度，是否按照监区每半月分析1次、监狱每月分析1次的要求开展罪犯思想动态分析</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否开展有针对性的专题教育</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否开展分类教育</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否建立顽固犯和危险犯的认定和教育转化制度</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱是否建立顽固犯和危险犯教育转化档案、由专人负责转化工作</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">顽固犯和危险犯的认定与撤销程序是否符合规定</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">是否根据未成年犯的案情、刑期、心理特点和改造表现进行有针对性的个别教育，实行教育转化责任制</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
				<view class="content-list-item">
					<text class="txt">监狱有关个别教育的其他执法活动</text>
					<radio-group class="radio-select" @change="RadioChange">
						<radio class="blue radio"></radio>
						<text class="radio-txt">是</text>
						<radio class="blue radio"></radio>
						<text class="radio-txt">否</text>
					</radio-group>
					<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
				</view>
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
