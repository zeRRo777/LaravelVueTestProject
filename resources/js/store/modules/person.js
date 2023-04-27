import router from "../../router";


const state = {
    person : null,
    people : null,
}

const actions = {
    getPerson({commit}, id) {
        axios.get(`/api/people/${id}`)
            .then(response => {
                commit('setPerson', response.data.data)
            })
    },

    getPeople({commit}) {
        axios.get("/api/people")
            .then(response => {
                commit('setPeople', response.data.data)
            })
    },

    deletePeople({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then(response => {
                dispatch('getPeople');
            })
    },

    update({}, data) {
        axios.patch(`/api/people/${data.id}`, {name: data.name, age: data.age})
            .then(response => {
                router.push({name: 'person.show', params: {id: data.id}})
            })
    },

    store({}, data) {
        axios.post('/api/people', {name: data.name, age: data.age})
            .then(response => {
                router.push({name: 'person.index'});
            })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person;
    },

    setPeople(state, people) {
        state.people = people;
    }
}

const getters = {
    person: state => {
        return state.person
    },

    people: state => {
        return state.people
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
