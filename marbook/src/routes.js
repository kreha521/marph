import * as React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom'
import App from './App';
import Home from './home';
import Profile from './profile';
import Works from './works';

const router = (
    <Router history={browserHistory}>
        <div>
            <Route path='/' component={App} />
            <Route path='/profile' component={Profile} />
            <Route path='/works' component={Works} />
        </div>
    </Router>        
)

export default router
