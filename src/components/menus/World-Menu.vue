<template>
    <div>
        <ul>
            <router-link tag="li" :to="menu.route" @click.native="populateMenu" v-for="(menu, index) in worldmenu" :key="index"><a>{{ menu.name }}</a></router-link>
        </ul>
        <ul>
            <li v-for="(element, i) in contentChange" :key="i">{{ element.name }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            worldmenu: [
                { name: "Home", route: "/"},
                { name: "NPCs", route: "/world/npcs"},
                { name: "Monsters", route: "/world/monsters"},
                { name: "Pantheon", route: "/world/pantheon"},
                { name: "Locations", route: "/world/locations"},
                { name: "Dungeons", route: "/world/dungeons"},
                { name: "Advice", route: "/world/advice"}
            ],
            contentChange: null
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
        }
    }
}
</script>