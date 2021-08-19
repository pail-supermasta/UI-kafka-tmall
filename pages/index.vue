<template>
    <div>
        <input v-model="message" @input="sendData" type="text" />
        <pre v-if="response">{{ response }}</pre>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            message: null,
            response: null,
        };
    },
    methods: {
        sendData() {
            this.$sendMessage(this.message).then(response => (this.response = response));
        },
    },
};
</script>
