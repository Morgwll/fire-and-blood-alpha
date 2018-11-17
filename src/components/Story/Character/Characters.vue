<template>
    <div>
        <app-elements-menu :menuContent="menuContent" :route="'/world/characters/'"></app-elements-menu>
        <h1>Characters</h1>
        <p>The world is populated by all sorts of people...</p>
        <router-view :character="this.$store.getters.getCharacter"></router-view>
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
                menuContent: this.$store.state.characters
            }
        }
    }
</script>