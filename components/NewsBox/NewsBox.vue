<template>
	<view class="newsBox">
		<view class="pic">
			<image :src="item.picurl" mode="aspectFill"></image>
		</view>
		<view class="text">
			<view class="title">
				{{item.title}}
			</view>
			<view class="info" v-if="!item.looktime">
				<text>{{item.author}}</text>
				<text>{{item.hits}}浏览</text>
			</view>
			<view class="info" v-else="item.looktime">
				<text>浏览时间：{{item.looktime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "NewsBox",
		props: {
			item: {
				type: Object,
				default () {
					return {
						title: "组件内默认的标题",
						author: "张三",
						hits: 668,
						picurl: "../../static/images/nopic.jpg",
						looktime: "2023-3-27 10:20:10"
					}
				}
			}
		},
		data() {
			return {


			};
		}
	}
</script>

<style lang="scss">
	.newsBox {
		display: flex;

		.pic {
			width: 230rpx;
			height: 160rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.text {
			// border: 1px solid red;
			flex: 1;
			padding-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.title {
				font-size: 38rpx;
				color: #333;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.info {
				font-size: 26rpx;
				color: #999;

				text {
					padding-right: 30rpx;
				}
			}

		}
	}
</style>
