import {h} from 'preact';
import {Router} from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import ContextProvider from "../context/context";

const App = () => (
    <div id="app">
        <ContextProvider>
            <Header/>
            <Router>
                <Home path="/"/>
            </Router>
        </ContextProvider>
    </div>
)

export default App;
