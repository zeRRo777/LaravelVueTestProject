<template>
    <div>
        <router-link class="mx-2" :to="{name: 'person.index'}">People</router-link>
        <router-link class="mx-2" :to="{name: 'person.create'}">Add</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
