import Home from './components/Home.vue';
import Characters from './components/Story/Characters.vue';
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
    { path: '/story/characters', component: Characters },
    { path: '/story/combat', component: Combat },
    { path: '/story/Weapons', component: Weapons },
    { path: '/story/incantations', component: Incantations },
    { path: '/story/lore', component: Lore },
    { path: '/story/story', component: Story },
    { path: '/world/npcs', component: NPCs },
    { path: '/world/monsters', component: Monsters },
    { path: '/world/pantheon', component: Pantheon },
    { path: '/world/locations', component: Locations },
    { path: '/world/dungeons', component: Dungeons },
    { path: '/world/advice', component: Advice }
]