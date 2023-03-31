<template>
	<view class="detail">
		<view class="title">
			{{detailData.title}}
		</view>
		<view class="info">
			<view class="author">
				编辑：{{detailData.author}}
			</view>
			<view class="time">
				发布时间：{{detailData.posttime}}
			</view>
		</view>
		<view class="content">
			<rich-text :nodes="detailData.content"></rich-text>
		</view>
		<view class="description">
			声明：本站的内容均采集与腾讯新闻，如果侵权请联系管理（513894357@qq.com）进行整改删除，本站进行
			了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from '@/utils/tool.js'
	export default {
		data() {
			return {
				detail: null,
				detailData: {}
			};
		},
		onLoad(e) {
			console.log(e)
			this.detail = e
			this.getDetail()
		},
		methods: {
			getDetail() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/detail.php",
					data: this.detail,
					success: res => {
						console.log(res)
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width:100%"')
						res.data.posttime = parseTime(res.data.posttime)
						this.detailData = res.data
						this.getHistory()
						console.log(this.detailData)
						uni.setNavigationBarTitle({
							title: this.detailData.title
						})
					}
				})
			},
			//进入详情页面保存浏览记录
			getHistory() {
				let historyArr = uni.getStorageSync('historyArr') || []
				let item = {
					id: this.detailData.id,
					classid: this.detailData.classid,
					picurl: this.detailData.picurl,
					looktime: parseTime(Date.now()),
					title:this.detailData.title
				}
				let index = historyArr.findIndex(i => {
					return i.id == this.detailData.id
				})
				if (index >= 0) {
					historyArr.splice(index, 1)
				}
				console.log(item)
				historyArr.unshift(item)
				historyArr = historyArr.slice(0,10)
				uni.setStorageSync('historyArr', historyArr)
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 30rpx;

		.title {
			font-size: 46rpx;
			color: #333;
		}

		.info {
			background: #f6f6f6;
			padding: 20rpx;
			font-size: 25rpx;
			color: #666;
			display: flex;
			justify-content: space-between;
			margin: 40rpx 0;
		}

		.content {
			padding-bottom: 50rpx;

			img {
				max-width: 100%;
			}
		}

		.description {
			background: #fef0f0;
			font-size: 26rpx;
			padding: 20rpx;
			line-height: 1.8em;
		}
	}
</style>
