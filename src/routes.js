import Home from './components/Home.vue';
import Characters from './components/Story/Characters.vue';
import Character from './components/Story/Character.vue';
import Combat from './components/Story/Combat.vue';
import Incantations from './components/Story/Incantations.vue';
import Lore from './components/Story/Lore.vue';
import Story from './components/Story/Story.vue';
import Weapons from './components/Story/Weapons.vue';
import Pantheon from './components/World/Pantheon.vue';
import NPCs from './components/World/Npcs.vue';
import Monsters from './components/World/Monsters.vue';
import Locations from './components/World/Locations.vue';
import Dungeons from './components/World/Dungeons.vue';
import Advice from './components/World/Advice.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/story/characters', component: Characters, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/story/combat', component: Combat, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/story/Weapons', component: Weapons , children: [
        { path: ':name', component: Character }
    ]},
    { path: '/story/incantations', component: Incantations , children: [
        { path: ':name', component: Character }
    ]},
    { path: '/story/lore', component: Lore, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/story/story', component: Story, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/world/npcs', component: NPCs, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/world/monsters', component: Monsters, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/world/pantheon', component: Pantheon, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/world/locations', component: Locations, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/world/dungeons', component: Dungeons, children: [
        { path: ':name', component: Character }
    ]},
    { path: '/world/advice', component: Advice, children: [
        { path: ':name', component: Character }
    ]}
]