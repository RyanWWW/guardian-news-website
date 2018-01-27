import React from 'react';
import ReactDom from 'react-dom';
import PCHeader from './pc_header';
import PCNewsContainer from './pc_newscontainer';
import PCSider from './pc_sider';
import PCFooter from './pc_footer';
import PCNewsSearchContainer from './pc_news_search_container';
import {Layout, Menu, Icon} from 'antd';
const {Header, Sider, Content, Footer} = Layout;
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

export default class PCIndex extends React.Component {

  render() {
    return (
      <Layout className='main_layout' >
        <PCSider/>
        <Layout>
          <PCHeader history={this.props.history} />
          <Switch>
            <Route path='/search/:key' component={PCNewsSearchContainer} />
            <Route path='/:key' component={PCNewsContainer}/>
          </Switch>
          <PCFooter/>
        </Layout>
      </Layout>
    );
  }
}
