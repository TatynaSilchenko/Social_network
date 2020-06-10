import {
    addPost
} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {getProfilePosts} from "../../../redux/Selectors/selectors";

const mapStateToProps = (state:any) => {

    return {
        posts: getProfilePosts(state)
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
export default MyPostsContainer;
