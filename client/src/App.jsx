import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import Page1 from './component/page1';
import Page2 from './component/page2';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/page1" />
                    </Route>
                    <Route exact path="/page1" component={Page1} />
                    <Route exact path="/page2" component={Page2} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;