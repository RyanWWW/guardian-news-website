import React from 'react';
import ReactDom from 'react-dom';
import {Layout, Menu, Icon} from 'antd';
const {Header, Sider, Content, Footer} = Layout;
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

export default class PCSider extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'sport',
            collapsed: true
        };
    }
    onCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this
                .onCollapse
                .bind(this)}>
                <Link to='/' >
                <div className="logo">
                    <img src="/src/img/guardian.png" alt=""/>
                </div>
                </Link>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                    <Menu.Item key="technology">
                        <Link to='/technology'>
                        <Icon type="tablet" />
                        <span>Technology</span>
                        </Link>
                    </Menu.Item>
                
                    <Menu.Item key="sport">
                        <Link to='/sport'>
                        <Icon type="pie-chart"/>
                        <span>Sport</span>
                        </Link>
                    </Menu.Item>
                    

                    <Menu.Item key="politics">
                        <Link to='/politics'>
                        <Icon type="usergroup-add" />
                        <span>Politics</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="business">
                        <Link to='/business'>
                        <Icon type="trademark" />
                        <span>Business</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }

}