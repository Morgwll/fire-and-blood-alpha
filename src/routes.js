import Home from './components/Home.vue';
import Characters from './components/Story/Character/Characters.vue';
import Character from './components/Story/Character/Character.vue';
import NPCs from './components/Story/NPC/Npcs.vue';
import NPC from './components/Story/NPC/Npc.vue';
import Monsters from './components/Story/Monster/Monsters.vue';
import Monster from './components/Story/Monster/Monster.vue';
import Pantheon from './components/Story/Pantheon.vue';
import Combat from './components/Story/Combat/Combat.vue';
import Combatant from './components/Story/Combat/Combatant.vue';
import Gear from './components/Story/Gear.vue';
import Incantations from './components/Story/Incantations.vue';
import Maps from './components/Story/Maps.vue';
import Locations from './components/Story/Locations.vue';
import Lore from './components/Story/Lore.vue';
import Story from './components/Story/Story.vue';
import Advice from './components/Story/Advice.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/world/characters', component: Characters, children: [
       { path: ':name', component: Character}
    ] },
    { path: '/world/npcs', component: NPCs, children: [
        { path: ':name', component: NPC}
     ] },
    { path: '/world/monsters', component: Monsters, children: [
        { path: ':name', component: Monster}
     ] },
    { path: '/world/pantheon', component: Pantheon },
    { path: '/world/combat', component: Combat, children: [
        { path: ':name', component: Combatant }
    ] },
    { path: '/world/gear', component: Gear },
    { path: '/world/incantations', component: Incantations },
    { path: '/world/maps', component: Maps },
    { path: '/world/locations', component: Locations },
    { path: '/world/lore', component: Lore },
    { path: '/world/story', component: Story },
    { path: '/world/advice', component: Advice }
]