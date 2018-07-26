<template>
	<section class="shop-item">
		<div class="shop-simple-info">
			<img :src="info.image_path">
			<div>
				<section>
					<h3>{{info.name}}</h3>
					<ul>
						<li content="保"></li>
						<li content="票"></li>
					</ul>
				</section>
				<section>
					<div>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-off"></i>
					</div>
					<span class="shop-rate">5</span>
					<span>月售2单</span>
				</section>
				<section>
					<div class="money">
						<span>¥0起送</span> 
						<span>配送费¥10</span>
					</div>
					<div class="disance">
						<span>{{info.distance}}</span>
					</div>
				</section>
			</div>
		</div>
		<div class="shop-simple-footer">
			<section class="tagLine" style="display:none">
				<span class="">
					<img src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/"> 
					<span>口碑人气好店</span>
				</span>
			</section>
			<section class="activities">
				<div>
					<span>
						<span style="background-color: rgb(112, 188, 70);">首</span>
					</span> 
					<span>新用户下单立减15元</span>
				</div>
				<div>
					<span>
						<span style="background-color: rgb(240, 115, 115);">减</span>
					</span> 
					<span>满100减1，满200减2</span>
				</div>
			</section>
		</div>
	</section>
</template>
<script>
	export default{
		props:['info']
	}
</script>
<style scoped>
	.shop-item{
		position: relative;
		border-bottom: .133333vw solid #eee;
		background-color: #fff;
		color: #666;
		padding: 4vw 0;
		list-style: none;
		font-size: .293333rem;
		line-height: normal;
		display: block !important;
	}
	.shop-simple-info{
		display: flex;
		align-items: stretch;
		justify-content: flex-start;
		padding: 0 2.666667vw;
	}
	.shop-simple-info>div{
		-webkit-flex-grow: 1;
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-webkit-flex-direction: column;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding-left: .266667rem;
		padding-left: 2.666667vw;
		justify-content: space-between;
	}
	img{
		position: relative;
		width: 17.333333vw;
		height: 17.333333vw;
		border: .133333vw solid rgba(0,0,0,.08);
		flex: none;
	}
	.shop-simple-info > div{
		flex: 1;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		flex-direction: column;
	}
	h3{
	    display: flex;
	    margin: 0;
	    padding: 0;
	    color: #333;
	    font-weight: 700;
	    font-size: 30px;
	    overflow: hidden;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    word-break: break-word;
	    display: block;
	}
	ul{
		display: flex;
		align-items: center;
		margin-left: 2.666667vw;
		list-style: none;
	}
	li{
		position: relative;
	    height: 3.466667vw;
	    width: 3.466667vw;
	    margin-left: .8vw;
	}
	ul > li:last-child{
	    margin-right: .133333vw;
	}
	li:after {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    position: absolute;
	    left: 0;
	    top: 0;
	    z-index: 0;
	    font-size: 40px;
	    color: #999;
	    content: attr(content);
	    border-radius: .266667vw;
	    width: 6.933333vw;
	    height: 6.933333vw;
	    line-height: normal;
	    border: .133333vw solid #ddd;
	    transform: scale(.5);
	    transform-origin: 0 0;
	}
	.shop-rate{
		margin: 0 1.066667vw;
	}
	.money{
		display: flex;
		align-content: center;
	}
	.money > span:nth-of-type(2) {
	    overflow: hidden;
	    max-width: 2.666667rem;
	    max-width: 26.666667vw;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.money > span:nth-of-type(2):before {
	    margin: 0 .8vw;
        color: #ddd;
        content: "|";
	}
	.disance{
		display: flex;
		align-items: center;
		color: #999;
	}
	.disance > span:after {
	    margin: 0 .8vw;
	    color: #ddd;
	    content: "|";
	}
	.shop-simple-footer{
		padding-left: 22.666667vw;
		padding-top: 3vw;
	}
	.tagLine{
		display: flex;
	    align-items: center;
	    margin: 2.666667vw 2.666667vw 0 0;
	}
	.tagLine > span{
		color: rgb(232, 71, 11);
		margin-right: 1.333333vw;
		display: flex;
		align-items: flex-start;
		font-size: 20px;
	}
	.tagLine > img{
		margin-top: .4vw;
	    height: 2.666667vw;
	    width: 2.666667vw;
	    margin-right: .8vw;
	}
	.activities{
		display: flex;
		position: relative;
		align-content: stretch;
		overflow: hidden;
		justify-content: space-between;
		flex: 1;
	    padding-right: 2.666667vw;
	    overflow: hidden;
	    flex-direction: column;
	}
	.activities > div{
		display: flex;
	    align-items: center;
	    font-size: 22px;
	    line-height: 4.8vw;
	    text-align: left;
	}
	.activities > div >span:first-child{
		display: inline-block;
	    position: relative;
	    margin-right: 1.6vw;
	    height: 3.733333vw;
	    width: 3.733333vw;
	    vertical-align: middle;
	}
	.activities > div >span >span{
		position: absolute;
	    left: 0;
	    top: 0;
	    z-index: 0;
	    height: 7.466667vw;
	    width: 7.466667vw;
	    font-size: 42px;
	    color: #fff;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    border-radius: 1.066667vw;
	    transform: scale(.5);
	    transform-origin: 0 0;
	}
	.activities > div >span:nth-child(2){
		display: inline-block;
	    flex: 1;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    vertical-align: middle;
	}
	section{
		display: flex;
	}
	.shop-simple-info section:first-child{
		justify-content: space-between;
	}
	.shop-simple-info section:nth-child(2){
		font-size: 22px;
		align-items: center;
	}
	.shop-simple-info section:nth-child(3){
		justify-content: space-between;
	}
	.shop-simple-info section:nth-child(2) >div{
		width: 14.933333vw;
	    height: 2.666667vw;
	    display: flex;
	    justify-content: start;
	    align-items: center;
	}
	.shop-simple-info section:nth-child(3) >div{
	    display: flex;
	    font-size: 22px;
	}
	.el-icon-star-on{
		color: rgb(255,217,2);
	}
</style>