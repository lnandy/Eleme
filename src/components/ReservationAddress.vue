<template>
	<div class="container">
		<div class="content">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0"><path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
			<span>{{detail}}</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0"><path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
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
	svg:first-child{
		width: 3.466667vw;
	    height: 4.133333vw;
	    fill: #fff;
	}
	svg:last-child{
		width: 1.866667vw;
		height: .933333vw;
		fill: #fff;
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
					me.detail = location.name;
				});
			})
		}
	}
</script>