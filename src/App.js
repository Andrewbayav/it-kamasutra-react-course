import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render={() => <Dialogs dialogs={props.state.messagesPage.dialogsData} messages={props.state.messagesPage.messagesData}/>} />
                <Route path = '/profile' render={() => <Profile posts={props.state.profilePage.postData} addPost={props.addPost}/>} />
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;


