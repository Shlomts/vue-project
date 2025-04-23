<template>
	<input @input="onSetFilter" v-model="filterBy.txt" placeholder="Search" />

	<label>
		Max Run Time: {{ filterBy.maxRuntime }} min
		<input
			type="range"
			min="0"
			max="350"
			step="1"
			v-model.number="filterBy.maxRuntime"
			@input="onSetFilter"
		/>
	</label>
</template>

<script>
export default {
	data() {
		return {
			filterBy: {
				txt: '',
				maxRuntime: 350,
			},
		}
	},
	methods: {
		onSetFilter() {
			this.$emit('filter', this.filterBy)
		},
	},
}
</script>

<style lang="scss">
input[type='range'] {
	width: 100%;
	margin-top: 0.5rem;
}
</style>
