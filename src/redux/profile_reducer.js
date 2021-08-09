const ADD_POST = 'ADD_POST'

let initialState = {
    posts: [
        {id: "1", post: "post 1"},
        {id: "2", post: "post 2"},
        {id: "3", post: "post 3334"}
    ]
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "4",
                post: action.post
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        default: {
            return state;
        }
    }
}

let addPostForDispatching = (post) => {
    return {type: ADD_POST, post}
}

export const addPost = (post) => {
    return (dispatch) => {
        //add logic
        dispatch(addPostForDispatching(post))
        //add logic
    }
}
export default profile_reducer
