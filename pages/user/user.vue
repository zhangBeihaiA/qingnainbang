<template>
	<view class="user">
		<view class="top">
			<image src="../../static/images/history.png" mode=""></image>
			<view class="text">
				浏览历史
			</view>
		</view>
		<view class="content" v-for="(item,index) in listArr" :key="item.id">
			<!-- <NewsBox :item="{user:'user的标题',looktime:'2023-3-27 12:00:00'}"></NewsBox> -->
			<NewsBox @click.native="goDetail(item)" :item="item"></NewsBox>
		</view>
		<view class="nohistory" v-if="!listArr.length">
			<image src="../../static/images/nohis.png" mode="widthFix"></image>
			<view class="text">暂无浏览记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr:[]
			};
		},
		onShow() {
			this.getHisData()
		},
		methods:{
			goDetail(item){
				//跳转到详情
				uni.navigateTo({
					url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`
					
				})
				console.log(item)
			},
			getHisData(){
				let hisArr = uni.getStorageSync('historyArr') || []
				this.listArr = hisArr
				console.log(this.listArr)
				
				
			}
		}
	}
</script>

<style lang="scss">
	.user{
		.top{
			padding: 50rpx 0;
			background: #F8F8F8;
			color: #555;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			
			image{
				width: 150rpx;
				height: 150rpx;
			}
			.text{
				font-size: 38rpx;
				padding-top: 20rpx;
			}
		}
		.content{
			padding: 30rpx;
			.row{
				border-bottom: 1px dotted #efefef;
				padding: 20rpx 0;
			}
		}
		.nohistory {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		
			image {
				width: 450rpx;
			}
		
			.text {
				font-size: 26rpx;
				color: #888;
			}
		}
	}
</style>
