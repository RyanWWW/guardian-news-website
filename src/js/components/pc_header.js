import React from 'react';
import ReactDom from 'react-dom';
import {
    Layout,
    Menu,
    Icon,
    Row,
    Col,
    Input
} from 'antd';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, browserHistory } from 'react-router-dom';
const {Header, Footer, Sider, Content} = Layout;
const Search = Input.Search;

export default class PCHeader extends React.Component {

    render() {
        return (
            <Header className='header'>
                <Row>
                    <Col span={2}></Col>
                    <Col span={10}><Search
                        placeholder="input search text"
                        onSearch={value => this.props.history.push('/search/'+value) }
                        style={{ width: '100%' , background:'#f0f2f5'}}/></Col>
                    <Col span={10}></Col>
                    <Col span={1}><Icon type="user"/></Col>
                    <Col span={1}><Icon type="setting"/></Col>
                </Row>
            </Header>
        );
    }
}
