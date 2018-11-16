import Vue from 'vue';
import Vuex from 'vuex';
import { characters } from '../data/characters';
import { monsters } from '../data/monsters';
import { npcs } from '../data/npcs';
import { advice } from '../data/advice';
import { dungeons } from '../data/dungeons';
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
        dungeons,
        pantheon,
        weapons,
        choice: null
    },
    getters: {
        getCharacter: state => {
            for (let character in state.characters) {
                if(character.name == state.choice) {
                    return character;
                }
            }
        },
        getNPC: state => {
            for (let npc in state.npcs) {
                if(npc.name == state.choice) {
                    return npc;
                }
            }
        },
        getMonster: state => {
            for (let monster in state.monsters) {
                if(monster.name == state.choice) {
                    return monster;
                }
            }
        },
        getCombatant: state => {
            for (let combatant in state.combat) {
                if(combatant.name == state.choice) {
                    return combatant;
                }
            }
        },
        getIncantation: state => {
            for (let incantation in state.incantations) {
                if(incantation.name == state.choice) {
                    return incantation;
                }
            }
        },
        getLocation: state => {
            for (let location in state.locations) {
                if(location.name == state.choice) {
                    return location;
                }
            }
        },
        getDungeon: state => {
            for (let dungeon in state.dungeons) {
                if(dungeon.name == state.choice) {
                    return dungeon;
                }
            }
        },
        getDeity: state => {
            for (let deity in state.pantheon) {
                if(deity.name == state.choice) {
                    return deity;
                }
            }
        },
        getWeapon: state => {
            for (let weapon in state.weapons) {
                if(weapon.name == state.choice) {
                    return weapon;
                }
            }
        },
        getAdvice: state => {
            for (let advice in state.advice) {
                if(advice.name == state.choice) {
                    return advice;
                }
            }
        }
    }
});