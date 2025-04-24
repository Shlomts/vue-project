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
    background-color: rgb(167, 0, 0);
    color: rgb(245, 166, 166);
    
    .counter{
        margin-left: 10px;
    }
}
</style>
