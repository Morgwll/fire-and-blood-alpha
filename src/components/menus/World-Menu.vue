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
                { name: "Locations", route: "/world/locations"},
                { name: "Dungeons", route: "/world/dugeons"},
                { name: "Advice", route: "/world/advice"}
            ],
            contentChange: null
        }
    },
    methods: {
        populateMenu() {
            console.log(this.$route.path);
            if (this.$route.path == "/world/monsters") {
                this.contentChange = this.$store.state.monsters;
            }
        }
    }
}
</script>