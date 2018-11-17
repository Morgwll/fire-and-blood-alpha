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
        choice: ''
    },
    getters: {
        getCharacter: state => {
            for (let index = 0; index < state.characters.length;index++) {
                if(state.characters[index].name == state.choice) {
                    return state.characters[index];
                }
            }
        },
        getNPC: state => {
            for (let index = 0; index < state.npcs.length;index++) {
                if(state.npcs[index].name == state.choice) {
                    return state.npcs[index];
                }
            }
        },
        getMonster: state => {
            for (let index = 0; index < state.monsters.length;index++) {
                if(state.monsters[index].name == state.choice) {
                    return state.monsters[index];
                }
            }
        },
        getCombatant: state => {
            if (state.combat.length !== undefined) {
                for (let index = 0; index < state.combat.length;index++) {
                    if(state.combat[index].name == state.choice) {
                        return state.combat[index];
                    }
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