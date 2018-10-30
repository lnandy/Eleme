<template>
	<div @click="backMain">
		qwe
	</div>
</template>
<script>
	

	export default {
		components: {},
		methods: {
			backMain () {
				this.$store.dispatch('address/setAddress','日本');
				this.$store.dispatch('address/setStatus',false);
				this.$router.push({name:'Main'});
			}
		}
	}
</script>
<style scoped>
	
</style>