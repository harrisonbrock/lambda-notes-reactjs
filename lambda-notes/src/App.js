import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Register from './components/auth/register';
import Login from './components/auth/login';
import Home from './components/home/home';
import NoteList from './components/note/NoteList';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/notes' component={NoteList}/>
                </div>

        );
    }
}

export default App;
