<template>
	<footer>
        <p>Coffee Rights 2024</p>
        <p class="counter">Counter: {{ $store.state.counter }}</p>
	</footer>
</template>

<script></script>

<style lang="scss">
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;

    padding: 10px;
    background-color: lightblue;

    .counter{
        margin-left: 10px;
    }
}
</style>
