<template>
    <div>
        <app-elements-menu :menuContent="menuContent" :route="'/world/gear/'"></app-elements-menu>
        <h1>Gear</h1>
        <div>Name: {{ this.$store.getters.getCharacter }}</div>
    </div>
</template>
<script>
    import appElementsMenu from '../menus/Elements-Menu.vue';
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