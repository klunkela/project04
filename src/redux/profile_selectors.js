import {createSelector} from "reselect";

let getPostsSelector = (state) => {
    return state.profilePage.posts
}
export const getPosts_ = createSelector(getPostsSelector, (posts) => {
    return posts.filter(e => true)
})

export const getSmth_ = (state) => {
    return state.profilePage.posts
}
export const getUserData = (state) => {
    return state.profilePage.posts
}