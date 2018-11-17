<template>
    <div class="menu-element menu-element-left">
        <ul class="tab-menu-left">
            <router-link tag="li" class="menu-tab-left" :to="menu.route" v-for="(menu, index) in storymenu" :key="index" active-class="active-tab"><a v-html="menu.fawicon"></a></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            storymenu: [
                { name: "Characters", route: "/world/characters", fawicon: '<i class="fas fa-user-shield"></i>'},
                { name: "NPCs", route: "/world/npcs", fawicon: '<i class="fas fa-users"></i>'},
                { name: "Monsters", route: "/world/monsters", fawicon: '<i class="fas fa-crow"></i>'},
                { name: "Pantheon", route: "/world/pantheon", fawicon: '<i class="fas fa-ankh"></i>'},
                { name: "Combat", route: "/world/combat", fawicon: '<i class="fas fa-fist-raised"></i>'},
                { name: "Weapons", route: "/world/gear", fawicon: '<i class="fas fa-shield-alt"></i>'},
                { name: "Incantations", route: "/world/incantations", fawicon: '<i class="fas fa-hat-wizard"></i>'},
                { name: "Locations", route: "/world/locations", fawicon: '<i class="fas fa-dungeon"></i>'},
                { name: "Maps", route: "/world/maps", fawicon: '<i class="fas fa-compass"></i>'},
                { name: "Story", route: "/world/story", fawicon: '<i class="fas fa-book-open"></i>'},
                { name: "Lore", route: "/world/Lore", fawicon: '<i class="fas fa-feather"></i>'},
                { name: "Advice", route: "/world/advice", fawicon: '<i class="fab fa-critical-role"></i>'}
            ]
        }
    }
}
</script>