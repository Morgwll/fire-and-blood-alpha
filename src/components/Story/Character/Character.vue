<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <button class="addToRoster" @click="addToRoster(character)">Add to combat <i class="fas fa-user-plus"></i></button>
        <app-stat-card :creature="character"></app-stat-card>
        <app-skill-card :creature="character"></app-skill-card>
    </div>
</template>
<script>
    import appStatCard from '../Stat-Card.vue';
    import appSkillCard from '../Skill-Card.vue';
    import { mixins } from '../../../mixins/mixins';
    export default {
        components: {
            appStatCard,
            appSkillCard
        },
        props: ['character']
    }
</script>