import React from 'react'
import {Route, Redirect} from 'react-router-dom';

const loginObj = {
    login: 'alan',
    password: '123'
};

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => 
        auth(loginObj.login, loginObj.password) ? (<Component {...props} />)
        : (
            <Redirect to="/login" />
        )
    } />
)

function auth(login, password){
    let result = false;
    if(login === loginObj.login && password === loginObj.password){
        result = true
    }
    return result;
}