import { UPDATE_BLOG_POSTS } from "../actions/actionTypes";

// first pie slice/starting state for reducer
const defaultState = {blogPosts: [
    {title:"jared", author:"jared@gmail.com", createdDate:"2022-1-28", updatedDate:"2022-1-28", summary:"This is the blogSummary",content:"This is the blog content"}
]}

//calls to reducers are controlled by the redux store itself
export const blogPostsReducer = ( state = defaultState, action ) => {
    if(action.type === UPDATE_BLOG_POSTS) {
        return {...state, ...action.payload};
    }
    return state;
}