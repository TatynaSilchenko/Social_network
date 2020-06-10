
let initialState={
    friends: [
        {
            id: 1,
            name: 'Irina',
            ava: 'http://s.gama-gama.ru/userupload/138/2c4bb3089f7905628b272dc1b855e83c.jpg'
        },
        {id: 2, name: 'Nata', ava: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
        {id: 3, name: 'Stas', ava: 'https://pixelbox.ru/wp-content/uploads/2018/02/spiderman_steam_avatar.jpg'}
    ]
}

const sidebarReducer=(state=initialState, action:any)=>{
return state;
}
export default sidebarReducer;