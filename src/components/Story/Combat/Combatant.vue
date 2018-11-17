<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <app-combat-card :creature="combatant"></app-combat-card>
    </div>
</template>
<script>
    import appCombatCard from '../Combat-Card.vue';
    import { mixins } from '../../../mixins/mixins';
    export default {
        props: ['combatant'],
        components: {
            appCombatCard
        }
    }
</script>