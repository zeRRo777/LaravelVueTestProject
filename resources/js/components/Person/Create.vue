<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="Name" class="form-control" />
        </div>
        <div class="mb-3">
            <input type="number" v-model="age" placeholder="Age" class="form-control" />
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('store', {name: name, age: age})" type="submit" value="Add" class="btn btn-primary" />
        </div>
    </div>
</template>

<script>

export default {
    name: "Create",

    data() {
        return {
            name: null,
            age: null
        }
    },


    computed : {
        isDisabled() {
            return this.name && this.age
        }
    },
}
</script>

<style scoped>

</style>
