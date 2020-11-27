import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={'pera-swarm.ce.pdn.ac.lk/swarm-admin'}>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
