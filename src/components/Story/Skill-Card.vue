<template>
    <div class="card">
        <div class="card-body">
            <h2>Skills</h2>
            <div class="card-body-skill-row">
                Acrobatics: {{ creature.skills.acrobatics }}
                <br>
                Athletics: {{ creature.skills.athletics }}
                <br>
                Craft: {{ creature.skills.craft }}
                <br>
                Riding: {{ creature.skills.riding }}
            </div>
            <div class="card-body-skill-row">
                Deceit: {{ creature.skills.deceit }}
                <br>
                Insight: {{ creature.skills.insight }}
                <br>
                Intimidation: {{ creature.skills.intimidation }}
                <br>
                Persuasion: {{ creature.skills.persuasion }}
            </div>
            <div class="card-body-skill-row">
                Medicine: {{ creature.skills.medicine }}
                <br>
                Religion: {{ creature.skills.religion }}
                <br>
                Science: {{ creature.skills.science }}
                <br>
                Supernatural: {{ creature.skills.supernatural }}
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