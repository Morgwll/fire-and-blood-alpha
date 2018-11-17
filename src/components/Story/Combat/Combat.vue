<template>
    <div>
        <app-elements-menu :menuContent="menuContent" :route="'/world/combat/'"></app-elements-menu>
        <h1>Combat</h1>
        <p>Here are the combatants, appearing on the right in descending order of initiative.</p>
        <router-view :combatant="this.$store.getters.getCombatant"></router-view>
    </div>
</template>
<script>
    import appElementsMenu from '../../menus/Elements-Menu.vue';
    export default {
        components: {
            appElementsMenu
        },
        data() {
            return {
                menuContent: this.$store.state.combat
            }
        }
    }
</script>