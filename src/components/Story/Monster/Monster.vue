<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <button class="addToRoster" @click="addToRoster(monster)">Add to combat <i class="fas fa-user-plus"></i></button>
        <app-stat-card :creature="monster"></app-stat-card>
    </div>
</template>
<script>
import appStatCard from '../Stat-Card.vue';
    import { mixins } from '../../../mixins/mixins';
    export default {
        props: ['monster'],
        components: {
            appStatCard
        }
    }
</script>