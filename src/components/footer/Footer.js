import React from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './Home';
import Invest from './Invest';
import Portfolio from './Portfolio';
import Profile from './Profile';

import '../../styles/footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <Router>
                <Link to="/Home" className="tabs"><i className="fas fa-home" /></Link>
                <Link to="/Invest" className="tabs"><i className="fas fa-rupee-sign" /></Link>
                <Link to="/Portfolio" className="tabs"><i className="fas fa-suitcase" /></Link>
                <Link to="/Profile" className="tabs"><i className="fas fa-user" /></Link>

                <Switch>
                    <Route path="Home" component={Home} />
                    <Route exact path="Invest" component={Invest} />
                    <Route path="Portfolio" component={Portfolio} />
                    <Route path="Profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    )
}

export default Footer;