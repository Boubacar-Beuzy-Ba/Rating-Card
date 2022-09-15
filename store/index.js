export const state = () => ({
    numbers: [1,2,3,4,5],
    selectedNumber: 0
})

export const mutations = {
    selected: (state, payload) => {
        state.selectedNumber = payload
    }
}