import { connect } from "react-redux";
import { updateBlogPosts } from "../actions/blogPostsActions";
import BlogPosts from "../dumbComponents/BlogPosts";


const mapStateToProps = (reduxStore) => {
    console.log(reduxStore.blogPosts)
    return reduxStore.blogPosts;
} 

//return functions that wrap store.dispatch()
const mapDispatchToProps = (dispatch) => ({
    updateBlogPosts: (params) => {dispatch(updateBlogPosts({...params}))}
})

export const BlogPostsConnector = connect(mapStateToProps, mapDispatchToProps)(BlogPosts);