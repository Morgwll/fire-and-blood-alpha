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
    </div>
</template>
<script>
    import { mixins } from '../../mixins/mixins';
    export default {
        props: ['creature'],
        data() {
            return {

            }
        }
    }
</script>