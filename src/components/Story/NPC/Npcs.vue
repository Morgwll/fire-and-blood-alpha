<template>
    <div>
        <app-elements-menu :menuContent="menuContent" :route="'/world/npcs/'"></app-elements-menu>
        <h1>NPC's</h1>
        <div>No adventure should be devoid of Non Player Characters.</div>
        <router-view :npc="this.$store.getters.getNPC"></router-view>
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
                menuContent: this.$store.state.npcs
            }
        }
    }
</script>