<template>
	<h1>Hi! I'm a static home page. So boring...</h1>
	<h2>{{ counter }}</h2>
	<button @click="onIncrement">+ 1</button>
	<button @click="onIncrementBy(10)">+ 10</button>
	<button @click="onIncrementLater">+ Later</button>
	<button @click="onIncrementLaterBy(10)">+ 10 Later</button>
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
