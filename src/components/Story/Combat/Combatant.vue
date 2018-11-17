<template>
    <div>
        <h1>{{ this.$route.params.name }}</h1>
        <p>{{ combatant }}</p>
    </div>
</template>
<script>
    import { mixins } from '../../../mixins/mixins';
    export default {
        props: ['combatant']
    }
</script>