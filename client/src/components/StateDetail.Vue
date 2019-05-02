<template>
    <div class="state-detail p-2">

        <h2>The State of {{state.name}}</h2>

        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited tis state</p>

    </div>
</template>

<script>

export default {
    name: 'StateDetail',
    data(){
        return{
            state: {
                name: ''
            }
        }
    },
    mounted(){
        this.state.name = this.$route.params.state
    }
}
</script>

<style scoped>
</style>