import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducor";
import {profileReducer} from "./profile-reducor";
import {sidebarReducer} from "./sidebar-reducor";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;