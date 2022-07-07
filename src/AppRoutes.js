import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Router>
        <>
        <Switch>
        <Route exact path="/"> <Index/> </Route>
        <Route exact path="/home"><Home/> </Route>
        <Route><NotFound/> </Route>
        </Switch>
        </>
        </Router>
    )
}
