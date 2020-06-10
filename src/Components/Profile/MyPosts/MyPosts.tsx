import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../features/validates/validates";
import {TextAria} from "../../../features/formControls/formControls";

const maxLength=maxLengthCreator(50);

const MyPosts = React.memo((props:any) => {
    let {addPost, posts} = props;
    let postsElements = posts.map((p:any) =>
        <Post key={p.id} post={p.message} likeCount={p.likeCount}/>);

    let onAddNewPost = (values:any) => {
        addPost(values.postText);
        values.postText=''
    };
    return (
        <div>

            <div className={s.addPost}>
                <h3 className={s.header}> My posts </h3>
                <AddPostsReduxForm {...props} onSubmit={onAddNewPost} />

            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
});

const AddPostsForm=(props:any)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>

                    <Field component={TextAria}  name='postText' className={s.addNewText} validate={[maxLength]}/>
            </div>
            <div>
                <button  className={s.newPostBtn}>Add new post</button>
            </div>
        </form>
    )
};

let AddPostsReduxForm  = reduxForm({
    form: 'addNewPost'
})(AddPostsForm)

// MyPosts.propTypes = {
//     posts: PropTypes.arrayOf(PropTypes.object),
//     id: PropTypes.number,
//     message: PropTypes.string,
//     likeCount: PropTypes.number,
// }
export default MyPosts












