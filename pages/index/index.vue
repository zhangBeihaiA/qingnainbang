<template>
	<view class="home">
		<scroll-view scroll-x class="navScroll">
			<view class="item" 
			:class="index==navIndex ? 'active' : ''" 
			v-for="(item,index) in navList" 
			:key="item.id" @click="clickNav(index,item.id)">
				{{item.classname}}
			</view>
		</scroll-view>
		<view class="content">
			<view class="row" v-for="(item,index) in newsList" :key="item.id">
				<!-- <NewsBox :item="{title:'首页标题',author:'李四',hits:'333'}"></NewsBox> -->
				<NewsBox :item="item" @click.native="goDetail(item)"></NewsBox>
			</view>
			<view class="noData" v-if="!newsList.length">
				<image src="../../static/images/nodata.png" mode="aspectFill"></image>
			</view>
			<view class="loading" v-if="newsList.length">
				<view v-if="loading==1">数据加载中...</view>
				<view v-if="loading==2">没有更多了~~~</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
				navList:[],
				newsList:[],
				currentPage:1,
				loading:0

			}
		},
		onLoad() {
			this.getNavData()
			this.getNewsList()
		},
		onReachBottom(){
			if(this.loading==2){
				return
			}
			this.currentPage++
			this.loading = 1
			this.getNewsList()
		},
		methods: {
			clickNav(index,id){
				this.navIndex = index
				// console.log(id)
				this.currentPage =1
				this.loading = 0
				this.newsList = []
				this.getNewsList(id)
				
				
			},
			goDetail(item){
				console.log(item)
				//跳转到详情
				uni.navigateTo({
					url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			},
			//获取导航列表数据
			getNavData(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
					success:res=>{
						// console.log(res.data)
						this.navList = res.data || []
					}
				})
			},
			//获取新闻列表
			getNewsList(id=50){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
					data:{
						num:8,
						cid: id,
						page:this.currentPage
					},
					success:res=>{
						// console.log(res.data)
						
						if(res.data.length==0){
							this.loading=2
							console.log('loading22')
							
						} 
						this.newsList = [...this.newsList,...res.data]
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		.navScroll {
			height: 100rpx;
			background: #F7F8FA;
			white-space: nowrap;
			position: fixed;
			top: let(--window-top);
			z-index: 10;
			left: 0;

			/deep/ ::-webkit-scrollbar {
				width: 4px !important;
				height: 1px !important;
				overflow: auto !important;
				background-color: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}

			.item {
				font-size: 40rpx;
				display: inline-block;
				line-height: 100rpx;
				padding: 0 30rpx;
				color: #333;
				&.active {
					color: #3085FA
				}
			}
		}

		.content {
			padding: 30rpx;
			padding-top: 130rpx;

			.row {
				border-bottom: 1px dotted #efefef;
				padding: 20rpx 0;
			}
		}
		.noData{
			display: flex;
			justify-content: center;
			image{
				width: 360rpx;
				
				
			}
		}
		.loading{
			text-align: center;
			color:#888;
			font-size: 26rpx;
			line-height: 2em;
		}
	}
</style>
