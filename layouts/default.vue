<template>
    <div>
        <ApplicationNavBar />
        <nuxt />
    </div>
</template>

<script>
export default {
    name: 'default',
    mounted() {
        window.App = this;
    },
};
</script>
