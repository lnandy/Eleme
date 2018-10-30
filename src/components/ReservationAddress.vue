<template>
	<div class="container" @click="search">
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
		     	//detail: me.$store.getters['address/getAddress'],
		     	status: 0//page hasn't load
		     }
		},
		methods : {
			search () {
				this.$router.push('/SearchAddress')
			}
		},
		computed:{
			detail () {
				return this.$store.getters['address/getAddress']
			}
		},
		mounted (){
			var me = this;
			if(!me.$store.getters['address/getStatus']){
				return;
			}
			proxy.getPosition().then(function(param){
				me.$store.dispatch('address/setAddress','正在识别中');
				proxy.getLocation(param).then(function(location){
					me.$store.dispatch('address/setAddress',location.address);
				});
			})
		}
	}
</script>