<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <button class="addToRoster" @click="addToRoster(npc)">Add to combat <i class="fas fa-user-plus"></i></button>
        <app-stat-card :creature="npc"></app-stat-card>
    </div>
</template>
<script>
    import appStatCard from '../Stat-Card.vue';
    import { mixins } from '../../../mixins/mixins';
    export default {
        props: ['npc'],
        components: {
            appStatCard
        }
    }
</script>