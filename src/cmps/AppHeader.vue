<template>
	<header>
		<h1>VueJS Movie Manager</h1>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/movie">Movies</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>
</template>

<script></script>

<style lang="scss">
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 8vh;

	padding: 10px;
	background-color: rgb(167, 0, 0);
	color: rgb(245, 166, 166);

	nav {
		display: flex;
		gap: 1em;
	}
}
</style>
