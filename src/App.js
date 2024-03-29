import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersConatainer'
const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper' >
                <Header />
                <Navbar store={props.store} />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/users' render={() => <UsersContainer/>} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>


            </div>
        </BrowserRouter>
    )
}
export default App;