<template>
		<!-- <div class="mint-swipe">
			<div class="mint-swipe-items-wrap">
				<div class="mint-swipe-item"  v-for="(data,index) in dataSource">
					<div class="btn-con" v-for="(i,j) in data">
						<div class="icon" :style="{backgroundImage:'url(' + i.iconSrc + ')'}"></div>
						<span class="title">{{i.title}}</span>
					</div>
				</div> 
			</div> 
			<div class="mint-swipe-indicators"></div>
		</div> -->
	<mt-swipe :auto="0">
		<mt-swipe-item v-for="(data,index) in dataSource">
			<div class="btn-con" v-for="(i,j) in data">
				<div class="icon" :style="{backgroundImage:'url(' + i.iconSrc + ')'}"></div>
				<span class="title">{{i.title}}</span>
			</div>
		</mt-swipe-item>
	</mt-swipe>
</template>
<script>
	import {json} from '@/data/menuCarouselData.js'

	export default{
		components:{json},
		data () {
			return {
				dataSource : [],
				distance:''
			}
		},
		methods: {
			
		},
		mounted: function(){
			var me = this;
			while(json.length > 10){
				me.dataSource.push(json.splice(0,10));
			}
			me.dataSource.push(json);
		}
	}
</script>
<style>
	.mint-swipe-indicator.is-active {
	    background-color: #000;
	    opacity: .6;
	}
	.btn-con{
		margin-top: 2.933333vw;
		width: 20%;
		/*display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;*/
	    position: relative;
	    float: left;
	}
	.icon{
		position: relative;
		display: inline-block;
		width: 12vw;
		height: 12vw;
	}
	.title{
		display: block;
	    margin-top: 1.333333vw;
	    color: #666;
	    font-size: 24px;
	    font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
	}
</style>