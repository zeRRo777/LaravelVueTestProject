<template>
    <div>
        <table class="table w-50">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in people">
                <th scope="row">{{person.id}}</th>
                <td>
                    <router-link :to="{name: 'person.show', params: {id : person.id} }">
                        {{person.name}}
                    </router-link>
                </td>
                <td>{{person.age}}</td>
                <td>
                   <router-link :to="{name: 'person.edit', params: {id : person.id} }"> Edit </router-link>
                </td>
                <td>
                    <a @click.prevent="$store.dispatch('deletePeople', person.id)" href="#" class="btn btn-outline-danger">Delete</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",

    mounted() {
        this.$store.dispatch('getPeople')
    },


    computed: {
        people() {
            return this.$store.getters.people;
        }
    }
}
</script>

<style scoped>

</style>
