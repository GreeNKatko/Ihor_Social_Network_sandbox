let initialState = {
    friendsbar: [
        { id: 1, name: 'Mih-Mih', avatar: 'https://images.genius.com/d4abc74672dcfc32158dd17c749dfc89.227x227x1.jpg' },
        { id: 2, name: 'Tani', avatar: 'http://multik-online.net/assets/content/2011/01/sejlormun-sailor-moon.jpg' },
        { id: 3, name: 'Lexa', avatar: 'https://avatarfiles.alphacoders.com/128/thumb-128926.jpg' }
    ]
};

const sidebarReducer = (state=initialState, action) => {
    return state;
}
export default sidebarReducer;