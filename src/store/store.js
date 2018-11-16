import Vue from 'vue';
import Vuex from 'vuex';
import { characters } from '../data/characters';
import { monsters } from '../data/monsters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        characters,
        monsters,
    }
});