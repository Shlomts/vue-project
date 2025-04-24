<template>
	<h1>Hi! I'm a static home page!</h1>
	<h3>I usd to be boring, but now I got a counter!</h3>
	<h2 class="counter">{{ counter }}</h2>
	<section class="actions">
		<button class="app-btn" @click="onIncrement">+ 1</button>
		<button class="app-btn" @click="onIncrementBy(10)">+ 10</button>
		<button class="app-btn" @click="onIncrementLater">+ Later</button>
		<button class="app-btn" @click="onIncrementLaterBy(10)">
			+ 10 Later
		</button>
	</section>
</template>

<script>
export default {
	methods: {
		onIncrement() {
			this.$store.commit({ type: 'increment' })
		},
		onIncrementBy(by) {
			this.$store.commit({ type: 'incrementBy', by })
		},
		onIncrementLater() {
			this.$store.dispatch({ type: 'incrementLater' })
		},
		onIncrementLaterBy(by) {
			this.$store.dispatch({ type: 'incrementLaterBy', by })
		},
	},
	computed: {
		counter() {
			return this.$store.getters.counter
		},
	},
}
</script>

<style lang="scss" scoped>
.counter {
	display: block;
	justify-self: anchor-center;
	padding-block: 10px;
}
.actions {
	display: flex;
    justify-content: center;
    gap: 12px;
}
</style>
