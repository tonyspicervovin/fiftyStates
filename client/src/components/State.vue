<template>
    <div class = "state-summary p2 rounded">

        <span class="m-2">{{ state.name }} </span>

        <p>
            <input id="visited" class="m-2" type="checkbox">
        </p>

    </div>
</template>


<script>

export default {
    name: 'State',
    props: {
        state: Object
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
    .state-summary {
        height: 8cm;
        width: 10cm;
        border: 1px whitesmoke;
    
    }
</style>