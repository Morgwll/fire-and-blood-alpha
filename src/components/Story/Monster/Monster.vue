<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <p>{{ monster }}</p>
        <button @click="addToRoster(monster)">Add to combat roster</button>
    </div>
</template>
<script>
    import { mixins } from '../../../mixins/mixins';
    export default {
        props: ['monster']
    }
</script>