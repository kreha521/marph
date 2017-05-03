import * as React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom'
import App from './App'
import Home from './component/home'
import Profile from './component/profile'
import Works from './component/works'
import Interest from './component/interest'
import Contact from './component/contact'

const router = (
    <Router history={browserHistory}>
        <div>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
            </Route>
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/works' component={Works} />
            <Route path='/interest' component={Interest} />
            <Route path='/contact' component={Contact} />
        </div>
    </Router>
)

export default router
