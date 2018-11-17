<template>
    <div>
        <app-elements-menu :menuContent="menuContent" :route="'/world/monsters/'"></app-elements-menu>
        <h1>Monsters</h1>
        <p>There is not a single being in the world that knows how many species of creatures exist. Some are extremely hostile</p>
        <router-view :monster="this.$store.getters.getMonster"></router-view>
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
                menuContent: this.$store.state.monsters
            }
        }
    }
</script>