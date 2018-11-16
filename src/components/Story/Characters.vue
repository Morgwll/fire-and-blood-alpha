<template>
    <div>
        <h1>Characters</h1>
        <div>Name: {{ this.$store.getters.getCharacter}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                character: this.$store.getters.getCharacter
            }
        }
    }
</script>