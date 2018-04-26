import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch } from "react-router-dom";

// Components
import Menu from './Components/Menu/Menu';
import Scroll from './Components/Scroll/Scroll';

// Pages
import About from './Pages/About/About';
import Help from './Pages/Help/Help';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';
import TourList from './Pages/TourList/TourList';

// Helpers
import Auth from './Helpers/Auth';
import Guard from './Helpers/Guard';

// Config
import Links from './Config/Menu.json';
import Users from './Config/Users.json';
import Tours from './Config/Tours.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.auth = new Auth(Users);
        this.auth.init(Users);
    }

    render() {
        return (
            <Router>
                <Scroll>
                    <Menu type="Top" links={ Links.top } auth={ this.auth }>
                        <Link to="/">
                            <img className="MenuLogo" src="./images/big-logo.png" alt=""/></Link>
                    </Menu>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/help" component={Help} />

                        <Guard exact path="/login" component={Login} auth={ this.auth } />
                        <Guard exact path="/about" component={About} auth={ this.auth } hidden="true" />
                        <Guard exact path="/tours" component={TourList} auth={ this.auth } hidden="true" data={Tours.public} />
                        <Guard exact path="/profile" component={Profile} auth={ this.auth } hidden="true" />

                        <Route component={ NotFound } />
                    </Switch>

                    <Menu type="Bottom" links={ Links.bottom } auth={ this.auth }>
                        © Noob5tation 2018.
                    </Menu>
                </Scroll>
            </Router>
        );
    }
}

