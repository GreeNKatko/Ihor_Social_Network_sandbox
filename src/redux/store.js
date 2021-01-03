import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Ihor', avatar: 'https://avatars0.githubusercontent.com/u/14025003?s=460&u=f0c6097edf6d5eec2dcb481faa5e2ee9b55dee6a&v=4' },
                { id: 2, name: 'Tani', avatar: 'http://multik-online.net/assets/content/2011/01/sejlormun-sailor-moon.jpg' },
                { id: 3, name: 'Rodrigo', avatar: 'https://upload.wikimedia.org/wikipedia/ru/a/a7/Head.cj.jpg' },
                { id: 4, name: 'Mih-Mih', avatar: 'https://images.genius.com/d4abc74672dcfc32158dd17c749dfc89.227x227x1.jpg' },
                { id: 5, name: 'Polya', avatar: 'https://img.7dach.ru/image/600/44/72/30/2020/01/15/8aa9e8.jpg' },
                { id: 6, name: 'Lexa', avatar: 'https://avatarfiles.alphacoders.com/128/thumb-128926.jpg' },
            ],
            messages: [
                { id: 1, message: 'Hello!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Did you learned REACT?' },
                { id: 4, message: 'How is you new job?' },
            ],
            newMessageText:''
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 17 },
                { id: 2, message: 'It\'s my first post', likesCount: 10 },
            ],
            newPostText: 'Text here!'
        },
        sidebar: {
            friendsbar: [
                { id: 1, name: 'Mih-Mih', avatar: 'https://images.genius.com/d4abc74672dcfc32158dd17c749dfc89.227x227x1.jpg' },
                { id: 2, name: 'Tani', avatar: 'http://multik-online.net/assets/content/2011/01/sejlormun-sailor-moon.jpg' },
                { id: 3, name: 'Lexa', avatar: 'https://avatarfiles.alphacoders.com/128/thumb-128926.jpg' }
            ]
        }

    },
    _callSuscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    suscribe(observer) {
        this._callSuscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

       this._callSuscriber(this._state);
    }
};


export default store;