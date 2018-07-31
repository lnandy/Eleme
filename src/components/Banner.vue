<template>
	<div class="container">
		<div class="left">
			<h3>品质套餐</h3>
			<div class="description">搭配齐全吃得好</div>
			<div>立即抢购 &gt;</div>
			<div class="img"></div>
		</div>
		<div class="right">
			<h3>限量抢购</h3>
			<div class="description">超值美味 9.9元起</div>
			<div><span>27人</span>正在抢 &gt;</div>
			<div class="img"></div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.container {
		display: flex; 
		padding: 0 2.666667vw;
		margin-bottom: 2.133333vw;
	}
	.left,
	.right{
		height: 37.333333vw;
		padding: 3.2vw 0 0 4vw;
		flex:1;
		display: flex;
	    flex-direction: column;
	    align-items: start;
	    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
	    line-height: 1.2;
	    position: relative;
	}
	.left{
		margin-right: .8vw;
	}
	h3{
		margin: 0;
		font-size: 34px;
	    font-weight: 700;
	    margin-bottom: 1.333333vw;
	    color: #333;
	    line-height: 40px;
	}
	.right h3{
		color: red;
	}
	.description{
		font-size: 26px;
		margin-bottom: 18px;
		line-height: 31px;
		color: #777;
	}
	.img{
		position: absolute;
	    right: 0;
	    bottom: -.2rem;
	    bottom: -2vw;
	    width: 3.2rem;
	    width: 32vw;
	    height: 2.133333rem;
	    height: 21.333333vw;
	    background-image: url('../img/image.png');
	}
	.description + div{
		font-size: 24px;
		color: #af8260;
		font-weight: 700;
	}
	.right .description + div{
		color: #333;
	}
	.right span{
		color: red;
	}
	.left .img{
		background-position: -3px -176px;
	}
	.right .img{
		background-position: -262px -176px;
	}
</style>