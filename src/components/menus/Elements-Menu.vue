<template>
    <div class="menu-element menu-element-right" :class="{'menu-hidden-right': menuHidden}">
        <ul class="menu">
            <router-link tag="li" v-for="(element, i) in menuContent" @click.native="choice(element.name)" :key="i" :to="route + element.name"><a class="menu-hero"><img class="menu-hero-portrait" :src="element.portrait"><p>{{ element.name }}</p></a></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    props: [ 'menuContent', 'route'],
    data() {
        return {
            menuHidden: false
        }
    },
    methods: {
        choice(choice) {
            this.$store.state.choice = choice;
        }
    }
}
</script>