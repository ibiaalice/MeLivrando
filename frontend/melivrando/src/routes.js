import React from 'react';
import Login from './pages/Login';
import {BrowserRouter, Route} from 'react-router-dom';


export default function Routes(){
    return (
        <BrowserRouter>
        <Route path='/' exact component={Login}/>
        </BrowserRouter>
    )
}