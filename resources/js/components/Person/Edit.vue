<template>
    <div>
        <div class="w-25" v-if="person">
            <div class="mb-3">
                <input type="text" v-model="person.name" placeholder="Name" class="form-control" />
            </div>
            <div class="mb-3">
                <input type="number" v-model="person.age" placeholder="Age" class="form-control" />
            </div>
            <div class="mb-3">
                <input :disabled="!isDisabled" @click.prevent="$store.dispatch('update', {name: person.name, age: person.age, id: person.id})"  type="submit" value="Update" class="btn btn-primary" />
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "Edit",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed : {
        isDisabled() {
            return this.person.name && this.person.age
        },

        person() {
            return this.$store.getters.person
        }
    },
}
</script>

<style scoped>

</style>
