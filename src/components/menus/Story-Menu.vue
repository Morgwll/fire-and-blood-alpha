<template>
    <div class="menu-element menu-element-left" :class="{'menu-hidden-left': menuVisible}">
        <ul class="tab-menu-left">
            <router-link tag="li" class="menu-tab-left" :to="menu.route" @click.native="populateMenu" v-for="(menu, index) in storymenu" :key="index"><a v-html="menu.fawicon"></a></router-link>
        </ul>
        <ul class="menu">
            <router-link v-for="(element, i) in contentChange" :key="i" @click.native="choice(element.name)" :to="element.name" tag="li"><a class="menu-hero"><img class="menu-hero-portrait" :src="element.portrait"><p>{{ element.name }}</p></a></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            storymenu: [
                { name: "Characters", route: "/story/characters", fawicon: '<i class="fas fa-users"></i>'},
                { name: "Combat", route: "/story/combat", fawicon: '<i class="fas fa-shield-alt"></i>'},
                { name: "Weapons", route: "/story/weapons", fawicon: '<i class="fas fa-users"></i>'},
                { name: "Incantations", route: "/story/incantations", fawicon: '<i class="fas fa-hat-wizard"></i>'},
                { name: "Story", route: "/story/story", fawicon: '<i class="fas fa-book-open"></i>'},
                { name: "Lore", route: "/story/Lore", fawicon: '<i class="fas fa-feather"></i>'}
            ],
            contentChange: null,
            menuVisible: false
        }
    },
    methods: {
        populateMenu() {
            if (this.$route.path == "/story/characters") {
                this.contentChange = this.$store.state.characters;
            } else if (this.$route.path == "/story/combat") {
                this.contentChange = this.$store.state.combat;
            } else if (this.$route.path == "/story/weapons") {
                this.contentChange = this.$store.state.weapons;
            } else if (this.$route.path == "/story/incantations") {
                this.contentChange = this.$store.state.incantations;
            } else if (this.$route.path == "/story/story") {
                this.contentChange = this.$store.state.story;
            } else if (this.$route.path == "/story/lore") {
                this.contentChange = this.$store.state.lore;
            }
        },
        choice(choice) {
            this.$store.state.chosen = choice;
        }
    }
}
</script>