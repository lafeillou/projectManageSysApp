<template>
	<scroll-view scroll-y>
	<view class="content-list-wrap">
		<view class="title">收监检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">收押罪犯是否符合规定条件、范围</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">收监法律文书是否齐全、无误</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">收监罪犯和法律文书是否相符</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">收监罪犯是否进行人身检查</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">收监罪犯是否进行携带物品检查</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">罪犯收监后，是否5日内通知其家属</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱有关收监的其他执法活动</text>
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
	
	<view class="content-list-wrap">
		<view class="title">出监检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">出监法律文书是否齐全、无误，有关社区矫正和监外执行的法律文书是否送达</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">出监罪犯和法律文书是否相符</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">出监罪犯是否按期释放，是否进行人身、物品检查</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱有关出监的其他执法活动</text>
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
	
	<view class="content-list-wrap">
		<view class="title">减刑、假释检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">监狱提请减刑、假释的案件是否符合法律规定，程序是否合法，证据是否确实、充分</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">应当开庭审理的减刑、假释案件是否开庭审理</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱是否依法派员参加庭审，宣读提请减刑、假释建议书并举证、质证，配合法庭核实证据等</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">人民法院减刑、假释裁定是否符合法律规定，证据是否确实、充分</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">人民法院审理、裁定减刑、假释案件的程序是否符合法律规定</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">减刑、假释裁定书是否依法送达执行并向社会公布</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱、人民法院有关减刑、假释的其他执法活动</text>
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
	
	<view class="content-list-wrap">
		<view class="title">暂予监外执行检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">监狱提请暂予监外执行的案件是否符合法律规定，程序是否合法，证据是否确实、充分</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">省级监狱管理机关批准暂予监外执行的案件是否符合法律规定，程序是否合法，证据是否确实、充分</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱和省级监狱管理机关有关暂予监外执行的其他执法活动</text>
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
	
	<view class="content-list-wrap">
		<view class="title">控告、举报、申诉检察</view>
		<view class="content-list-wrap-inner">
			<view class="content-list-item">
				<text class="txt">罪犯的控告、举报、申诉材料，监狱是否依法转交有关机关处理</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱依据罪犯申诉，认为判决可能有错误的，是否提请人民检察院或者人民法院处理</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱是否依法尊重和保障罪犯的控告、举报、申诉等合法权益</text>
				<radio-group class="radio-select" @change="RadioChange">
					<radio class="blue radio"></radio>
					<text class="radio-txt">是</text>
					<radio class="blue radio"></radio>
					<text class="radio-txt">否</text>
				</radio-group>
				<button plain class="plain-btn">检察结果<text class="cuIcon-right"></text></button>
			</view>
			<view class="content-list-item">
				<text class="txt">监狱有关罪犯控告、举报、申诉的执法活动</text>
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
