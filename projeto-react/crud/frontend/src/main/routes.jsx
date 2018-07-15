import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import UserCrud from '../components/user/user-crud'

/*Mapeamento dos links aos componentes*/
export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserCrud} />
        <Redirect from="*" to="/" />
    </Switch>


