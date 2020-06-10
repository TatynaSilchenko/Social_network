import profileReducer, {addPost, deletePost} from "./profileReducer";
let state ={
    posts: [
        {id: 1, message: 'Good night', likeCount: 123},
        {id: 2, message: 'This good idea', likeCount: 12},
        {id: 3, message: 'Second post', likeCount: 1},
        {id: 4, message: 'This my first post', likeCount: 118}
    ]
}
it("New post should be added",()=>{
    let action=addPost("hi");
    let newState=profileReducer(state,action);
    expect(newState.posts.length).toBe(5)
});
it("New post message should 'hi'",()=>{
    let action=addPost("hi");
    let newState=profileReducer(state,action);
    expect(newState.posts[0].message).toBe("hi")
});
it("Post should be remove",()=>{
    let action=deletePost(2);
    let newState=profileReducer(state,action);
    expect(newState.posts.length).toBe(3)
});
