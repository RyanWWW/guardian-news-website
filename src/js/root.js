import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index'
import 'antd/dist/antd.css';
import 'whatwg-fetch';

export default class Root extends React.Component{
    render(){
        return (
        <MediaQuery query="(min-device-width: 1224px)">
            <Router>
                <Switch>
                    <Route exact path='/' render={
                        ()=><Redirect to='/technology'/>
                    }/>
                    <Route path='/' component={PCIndex}/>
                    
                </Switch>
            </Router>
        </MediaQuery>
        );
    }
}

ReactDom.render(<Root />,document.getElementById('mainContainer'));