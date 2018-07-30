<template>
	<div class="container">
		<div class="content">
			<i class="el-icon-location"></i>
			<span>{{detail}}</span>
			<i class="el-icon-caret-bottom"></i>
		</div>
	</div>
</template>
<style scoped>
	.container{
		height: 9.2vw;
		display: flex;
	}
	.content{
		width: 60%;
		display: flex;
		align-items: center;
	}
	i:first-child{
		color: #fff;
		font-size: 33px;
	}
	i:last-child{
		color: #fff;
		font-size: 20px;
	}
	span{
		margin: 0 1.333333vw;
		font-size: 34px;
		max-width: 80%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 700;
		color:#fff;
		text-align: left;
	}
</style>
<script>
	import * as proxy from "@/proxy/proxy";
	export default {
		data () {
		     return {
		     	detail: '正在定位中'
		     }
		},
		mounted : function(){
			var me = this;
			proxy.getPosition().then(function(param){
				me.detail = "正在识别中";
				proxy.getLocation(param).then(function(location){
					me.detail = location.address;
				});
			})
		}
	}
</script>