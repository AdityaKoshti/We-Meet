import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import SignUp from './user/SignUp';

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
    </div>
)

export default MainRouter;