import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducor";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducor";
import {usersReducer} from "./users-reducor";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;