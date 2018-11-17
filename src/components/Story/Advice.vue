<template>
    <div>
        <app-elements-menu :menuContent="menuContent" :route="'/world/advice/'"></app-elements-menu>
        <h1>Advice</h1>
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