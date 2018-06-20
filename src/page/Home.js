import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';
import Demo from "./Demo/index";
export default class Home extends React.Component{
    componentDidCatch(error,info){
        //后面应该考虑有一个错误报告
        console.error(error,info.componentStack);
    }
    render(){
        return (
            <Router>
                <React.Fragment>
                    <Route path={'/demo'} component={Demo}/>
                    <div>Public</div>
                    <NavLink to={'/demo'}>To Demo</NavLink>
                </React.Fragment>
            </Router>
        )
    }
}