<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <p>{{ character }}</p>
        <button @click="addToRoster(character)">Add to combat roster</button>
    </div>
</template>
<script>
    import { mixins } from '../../../mixins/mixins';
    export default {
        props: ['character']
    }
</script>