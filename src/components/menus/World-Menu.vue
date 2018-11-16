<template>
    <div class="menu-element menu-element-right" :class="{'menu-hidden-right': menuHidden}">
        <ul class="tab-menu-right">
            <router-link tag="li" class="menu-tab-right" :to="menu.route" @click.native="populateMenu" v-for="(menu, index) in worldmenu" :key="index"><a v-html="menu.fawicon"></a></router-link>
        </ul>
        <ul class="menu">
            <li v-for="(element, i) in contentChange" :key="i" @click="choice(element.name)"><a class="menu-hero"><img class="menu-hero-portrait" :src="element.portrait"><p>{{ element.name }}</p></a></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            worldmenu: [
                { name: "NPCs", route: "/world/npcs", fawicon: '<i class="fas fa-users"></i>'},
                { name: "Monsters", route: "/world/monsters", fawicon: '<i class="fas fa-crow"></i>'},
                { name: "Pantheon", route: "/world/pantheon", fawicon: '<i class="fas fa-ankh"></i>'},
                { name: "Locations", route: "/world/locations", fawicon: '<i class="fas fa-compass"></i>'},
                { name: "Dungeons", route: "/world/dungeons", fawicon: '<i class="fas fa-dungeon"></i>'},
                { name: "Advice", route: "/world/advice", fawicon: '<i class="fab fa-critical-role"></i>'}
            ],
            contentChange: null,
            menuHidden: false
        }
    },
    methods: {
        populateMenu() {
            if (this.$route.path == "/world/npcs") {
                this.contentChange = this.$store.state.npcs;
            } else if (this.$route.path == "/world/monsters") {
                this.contentChange = this.$store.state.monsters;
            } else if (this.$route.path == "/world/pantheon") {
                this.contentChange = this.$store.state.pantheon;
            } else if (this.$route.path == "/world/locations") {
                this.contentChange = this.$store.state.locations;
            } else if (this.$route.path == "/world/dungeons") {
                this.contentChange = this.$store.state.dungeons;
            } else if (this.$route.path == "/world/advice") {
                this.contentChange = this.$store.state.advice;
            }
        },
        choice(choice) {
            this.$store.state.chosen = choice;
        }
    }
}
</script>