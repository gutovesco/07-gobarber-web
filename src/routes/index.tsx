import React from 'react';
import {Switch} from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SingIn/SignIn';
import Dashboard from '../pages/Dashboard/index'
import Route from './Route'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../pages/ResetPassword/ResetPassword'

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/dashboard" component={Dashboard} isPrivate></Route>
        <Route path="/forgot" component={ForgotPassword}></Route>
        <Route path="/reset-password" component={ResetPassword}></Route>
    </Switch>
)

export default Routes