<template>
	<div :class="msg.type" v-if="msg" class="user-msg">
        <p>{{msg.txt}}</p>
    </div>
</template>

<script>
import { eventBus } from '@/services/event-bus.service.js'
export default {
    data() {
        return {
            msg: null
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => this.msg = null, 2000)
        }
    },
    created() {
        eventBus.on('user-msg', this.showMsg)
    }
}
</script>

<style lang="scss">
.user-msg {
    position: absolute;
    top: 40px;
    right: .5rem;

    min-width: 25vw;

    padding: 10px;
    background-color: gray;
    border-radius: .5rem;
    color: whitesmoke;

    &.success {
        background-color: darkseagreen;
    }

    &.error {
        background-color: orangered;
    }

    p {
        margin: 0;
    }
}
</style>
