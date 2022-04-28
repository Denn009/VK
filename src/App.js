import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div>
                        <Routes>
                            <Route path="/dialogs*" element= {<Dialog/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
