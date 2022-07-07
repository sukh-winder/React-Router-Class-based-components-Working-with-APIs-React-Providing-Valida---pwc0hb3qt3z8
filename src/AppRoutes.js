import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <>
        <Switch>
        <Redirect to="/" />
        <Route exact path="/"> <Index/> </Route>
        <Route exact path="/home"><Home/> </Route>
        <Route><NotFound/> </Route>
        </Switch>
        </>
    )
}
