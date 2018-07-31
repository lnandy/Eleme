<template>
	<div class="search-wrapper">
		<div role="button" class="search">
			<a class="content">
				<i class="el-icon-search"></i>
				<span>搜索饿了么商家、商品名称</span>
			</a>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.search-wrapper{
		position: -webkit-sticky; 
		position: sticky; 
		top: 0px; 
		z-index: 999;
	}
	.search{
		padding: 2vw 3.733333vw;
		margin: -.133333vw 0;
	}
	.content{
		display: flex;
		width: 100%;
		height: 9.6vw;
		border-radius: .266667vw;
	    background: #fff;
	    color: #999;
	    font-size: 28px;
	    font-family: simsun;
	    align-items: center;
	    justify-content: center;
	}
	i{
		display: inline-block;
	    width: 4.266667vw;
	    height: 4.266667vw;
	    margin-right: 1.333333vw;
	    font-size: 35px;
	}
</style>