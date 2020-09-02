import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navibar from "./Components/Navibar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Home";
import Users from "./Users";
import About from "./About";

function App() {
    return (
        <>
            <Router>
                <Navibar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
