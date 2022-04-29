import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";
import {Route, Routes} from "react-router-dom";
import {addPost} from "./data/state";




const App = (props) => {

    return (
            <div className={"app"}>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div>
                        <Routes>
                            <Route path="/dialogs*" element= {<Dialog dialog={props.AppState.dialogData} message={props.AppState.messagesData}/>}/>
                            <Route path='/profile' element={<Profile posts={props.AppState.postsData} addPost={props.addPost}/>} />
                        </Routes>
                    </div>
                </div>
            </div>
    );
}

export default App;
