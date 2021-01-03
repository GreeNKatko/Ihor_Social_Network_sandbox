const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 17 },
        { id: 2, message: 'It\'s my first post', likesCount: 10 },
    ],
    newPostText: 'Text here!'
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        posts: [...state.posts]
    };
    switch (action.type) {
        case ADD_POST: 
        let newPostText=state.newPostText
            return {
            ...state,
            posts: [...state.posts,{id:4, message: newPostText, likesCount: 0}],
            newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: 
        return {
            ...state,
            newPostText: action.newText
        }
        
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;