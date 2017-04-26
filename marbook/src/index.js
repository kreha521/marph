import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home';
import Profile from './profile';
import Works from './works';
import './index.css';
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom'

var router = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/works' component={Works} />
        </Route>
    </Router>        
);

ReactDOM.render(
    router,
    document.getElementById('root')
);
