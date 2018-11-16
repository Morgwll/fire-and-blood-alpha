<template>
    <div>
        <ul>
            <router-link tag="li" :to="menu.route" @click.native="populateMenu" v-for="(menu, index) in storymenu" :key="index"><a>{{ menu.name }}</a></router-link>
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
            storymenu: [
                { name: "Home", route: "/"},
                { name: "Characters", route: "/story/characters"},
                { name: "Combat", route: "/story/combat"},
                { name: "Incantations", route: "/story/incantations"},
                { name: "Story", route: "/story/story"},
                { name: "Lore", route: "/story/Lore"}
            ],
            contentChange: null
        }
    },
    methods: {
        populateMenu() {
            console.log(this.$route.path);
            if (this.$route.path == "/story/characters") {
                this.contentChange = this.$store.state.characters;
            }
        }
    }
}
</script>