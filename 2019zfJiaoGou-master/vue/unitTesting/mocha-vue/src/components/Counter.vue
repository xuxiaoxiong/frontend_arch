<template>
    <div>
        <span id="count">{{count}}</span>
        <button @click="increment">+</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data(){
            return {count:10}
        },
        methods:{
            increment(){
                this.count++;
            }
        }
    }
</script>

<style scoped>

</style>