const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            };
           
        case SEND_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: newMessage}]
            };


        };
        default:
            return state;

    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body:body});
export default dialogsReducer;