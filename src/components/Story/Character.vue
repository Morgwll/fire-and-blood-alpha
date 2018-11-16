<template>
    <div>
        {{ character.name }}
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