<template>
	<div>
		<header>
			<ReservationAddress></ReservationAddress>
		</header>
		<Search class="searchCon"></Search>
		<MenuCarousel class="MenuCarousel"></MenuCarousel>
		</div>
	</div>
</template>
<script>
	import ReservationAddress from "@/components/ReservationAddress"
	import Search from "@/components/Search"
	import MenuCarousel from "@/components/MenuCarousel"
	export default {
		components: {ReservationAddress,Search,MenuCarousel}
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
</style>