import Vue from 'vue';
import Vuex from 'vuex';
import { characters } from '../data/characters';
import { monsters } from '../data/monsters';
import { npcs } from '../data/npcs';
import { advice } from '../data/advice';
import { maps } from '../data/maps';
import { incantations } from '../data/incantations';
import { pantheon } from '../data/pantheon';
import { locations } from '../data/locations';
import { weapons } from '../data/weapons';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        characters,
        monsters,
        advice,
        combat: [],
        incantations,
        locations,
        npcs,
        maps,
        pantheon,
        weapons,
        choice: '',
        showRollModal: false
    },
    getters: {
        getCharacter: state => {
            const character = state.characters.find( character => character.name == state.choice );
            return character;
        },
        getNPC: state => {
            const npc = state.npcs.find( npc => npc.name == state.choice );
            return npc;
        },
        getMonster: state => {
            const monster = state.monsters.find( monster => monster.name == state.choice );
            return monster;
        },
        /* this is the culprit for the problem */
        getCombatant: state => {
            if (state.combat.length !== undefined) {
                const combatant = state.combat.find( creature => creature.index == state.choice.index );
                //console.log(combatant);
                return combatant;
            }
        },
        /* this is the culprit for the problem - end */
        getIncantation: state => {
            const incantation = state.incantations.find( incantation => incantation.name == state.choice );
            return incantation;
        },
        getLocation: state => {
            const location = state.locations.find( location => location.name == state.choice );
            return location;
        },
        getDungeon: state => {
            const dungeon = state.dungeons.find( dungeon => dungeon.name == state.choice );
            return dungeon;
        },
        getDeity: state => {
            const deity = state.deitys.find( deity => deity.name == state.choice );
            return deity;
        },
        getWeapon: state => {
            const weapon = state.weapons.find( weapon => weapon.name == state.choice );
            return weapon;
        },
        getAdvice: state => {
            const advice = state.advices.find( advice => advice.name == state.choice );
            return advice;
        }
    }
});