<template>
	<div>
		<header>
			<ReservationAddress></ReservationAddress>
		</header>
		<Search class="searchCon"></Search>
		<MenuCarousel class="MenuCarousel"></MenuCarousel>
		<Banner></Banner>
		<div id="shoplist-title" class="shoplist-title">推荐商家</div>
		<ShopList></ShopList>
		<Footer></Footer>
		</div>
	</div>
</template>
<script>
	import ReservationAddress from "@/components/ReservationAddress"
	import Search from "@/components/Search"
	import MenuCarousel from "@/components/MenuCarousel"
	import Banner from "@/components/Banner"
	import ShopList from "@/components/ShopList"
	import Footer from "@/components/Footer"

	export default {
		components: {ReservationAddress,Search,MenuCarousel,Banner,ShopList,Footer}
	}
</script>
<style scoped>
	header {
		background-image: linear-gradient(90deg,#0af,#0085ff);
		padding: 2.666667vw 3.733333vw 0;
	}
	.searchCon{
		background-image: linear-gradient(90deg,#0af,#0085ff);
	}
	.MenuCarousel{
		height: 47.2vw;
	    background-color: #fff;
	    text-align: center;
	}
	.shoplist-title{
		height: 9.6vw;
		font-size: 30px;
		color: #000;
		display: flex;
	    justify-content: center;
	    align-items: center;
	}
	.shoplist-title:after, .shoplist-title:before {
	    display: block;
	    content: "";
	    width: .533333rem;
	    width: 5.333333vw;
	    height: .026667rem;
	    height: .266667vw;
	    background-color: #999;
	}
	.shoplist-title:after {
	    margin-left: .346667rem;
	    margin-left: 3.466667vw;
	}
	.shoplist-title:before {
	    margin-right: .346667rem;
	    margin-right: 3.466667vw;
	}
</style>