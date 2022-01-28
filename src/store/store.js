import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { blogPostsReducer } from '../reducers/blogPostsReducer';

const rootReducer = combineReducers({
    blogPosts: blogPostsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeWithReduxDevToolsAndThunkMiddleWare = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export { storeWithReduxDevToolsAndThunkMiddleWare as store };