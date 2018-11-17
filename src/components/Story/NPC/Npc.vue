<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <p>{{ npc }}</p>
        <button @click="addToRoster(npc)">Add to combat roster</button>
    </div>
</template>
<script>
    import { mixins } from '../../../mixins/mixins';
    export default {
        props: ['npc']
    }
</script>