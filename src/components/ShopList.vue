<template>
	<div class="container">
		<div v-for="info in list" >
			<ShopItem :info="info"></ShopItem>
		</div>
	</div>
</template>
<script>
	import ShopItem from '@/components/ShopItem'
	export default{
		components: {ShopItem},
		mounted () {
			this.$store.dispatch('shop/requestShopList')
		},
		computed: {
			list () {
				return this.$store.getters['shop/getShopList']
			}
		}
	}
</script>
<style scoped>
	.container{
		margin-bottom: 13.333333vw;
	}
</style>