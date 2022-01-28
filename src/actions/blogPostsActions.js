import { UPDATE_BLOG_POSTS } from './actionTypes';

export const updateBlogPosts = (params) => ({
    type: UPDATE_BLOG_POSTS,
    payload: {...params}
})