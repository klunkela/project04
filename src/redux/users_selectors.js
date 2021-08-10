
export const getUsersSelector= (state) => {
    return state.usersPage.users
}
export const getPageSelector= (state) => {
    return state.usersPage.page
}
export const getLimitSelector= (state) => {
    return state.usersPage.limit
}
export const getUsersCountSelector= (state) => {
    return state.usersPage.usersCount
}