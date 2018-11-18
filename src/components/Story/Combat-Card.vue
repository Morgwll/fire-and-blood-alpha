<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-stats">
                <h2>Stats</h2>
                <div class="card-header-stats__block">
                    <div class="card-header-stats__block-container">
                        <h4>Strength</h4>
                        {{creature.stats.strength }}
                    </div>
                    <div class="card-header-stats__block-container">
                        <h4>Agility</h4>
                        {{creature.stats.agility }}
                    </div>
                    
                </div>
                <div class="card-header-stats__block">
                    <div class="card-header-stats__block-container">
                        <h4>Constitution</h4>
                        {{creature.stats.constitution }}
                    </div>
                    <div class="card-header-stats__block-container">
                        <h4>Wisdom</h4>
                        {{creature.stats.wisdom }}
                    </div>
                </div>
                <div class="card-header-stats__block">
                    <div class="card-header-stats__block-container">
                        <h4>Appearance</h4>
                        {{creature.stats.appearance }}
                    </div>
                    <div class="card-header-stats__block-container">
                        <h4>Endurance</h4>
                        {{creature.stats.endurance }}
                    </div>
                </div>
            </div>
            <div>
                <div class="card-header-portrait">
                    <img :src="creature.portrait"/>
                </div>
                <div class="card-header-counters">
                    <div class="card-header-counters__hp">
                    <h4>Hitpoints</h4>
                    <p>Max Hitpoints:
                    <br> 
                    {{ creature.maxHitpoints }}</p>
                    <button @click="creature.hitpoints++">+</button>
                    <p class="card-header-counters__hp-score">{{ creature.hitpoints }}</p>
                    <button @click="creature.hitpoints--">-</button>
                </div>
                <div class="card-header-counters__sanity">
                    <h4>Sanity</h4>
                    <p>Max Sanity:
                    <br> 
                    {{creature.maxSanity }}</p>
                    <button @click="creature.sanity++">+</button>
                    <p class="card-header-counters__sanity-score">{{ creature.sanity }}</p>
                    <button @click="creature.sanity--">-</button>
                </div>
                <div class="card-header-counters__stamina">
                    <h4>Stamina</h4>
                    <p>Max Stamina:
                    <br> 
                    {{ creature.maxStamina }}</p>
                    <button @click="creature.stamina++">+</button>
                    <p class="card-header-counters__stamina-score">{{ creature.stamina }}</p>
                    <button @click="creature.stamina--">-</button>
                </div>
                </div>
            </div>
            
        </div>
        <div class="chard-header-attacks">
                Attack type:
                <select v-model="atck">
                    <option :value="wpn" v-for="(wpn, index) in creature.attacks" :key="index">{{ wpn.name }}</option>
                </select>
                Target:
                <select v-model="defr">
                    <option :value ="fighter" v-for="(fighter, index) in this.$store.state.combat" :key="index">{{ fighter.name }}</option>
                </select>
                <button @click="attack(atck.value, defr.defense, atck.stam, creature.stamina, atck.damage, defr.hitpoints)">Roll</button>
            </div>
            <div class="chard-header-skills">
            </div>
    </div>
</template>
<script>
    import { mixins } from '../../mixins/mixins';
    export default {
        props: ['creature'],
        data() {
            return {
                atck: {
                    value: null,
                    damage: null,
                    stam: null
                },
                dmg: null,
                defr: {
                    defense: null,
                    hitpoints: null,
                }
            }
        },
        methods: {
            attack(atkr, defr, cost, end, damg, htpts) {
                this.$store.state.showRollModal = true;
                this.$store.state.roll = this.diceRoller(20);
                let attack = this.$store.state.roll + atkr;
                this.creature.stamina = this.creature.stamina - cost;
                if (attack > defr) {
                    this.$store.state.rollMessage = "It's a Hit!";
                    this.defr.hitpoints = this.defr.hitpoints - damg;
                } else if(this.$store.state.roll === 20) {
                    this.$store.state.rollMessage = "Natural 20!!";
                    this.defr.hitpoints = this.defr.hitpoints - (damg * 2);
                } else if(this.$store.state.roll === 1) {
                    this.$store.state.rollMessage = "Oh, it's a 1...";
                } else {
                    this.$store.state.rollMessage = "Miss";
                }
            },
        }
    }
</script>