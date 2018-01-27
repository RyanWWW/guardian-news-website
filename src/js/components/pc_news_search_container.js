import React from 'react';
import ReactDom from 'react-dom';
import {
    Row,
    Col,
    Layout,
    Menu,
    Icon,
    Breadcrumb
} from 'antd';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {api_key} from '../secret_key';
const {Header, Sider, Content, Footer} = Layout;

export default class PCNewsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch('http://content.guardianapis.com/search?q=' + this.props.match.params.key + '&page-size=20&show-fields=main,byline&api-key='+api_key, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({news: json.response.results});
            });
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.key !== this.props.match.params.key ) {
            var myFetchOptions = {
                method: 'GET'
            };
            fetch('http://content.guardianapis.com/search?section=' + nextProps.match.params.key + '&page-size=20&show-fields=main,byline&api-key='+api_key, myFetchOptions)
                .then(response => response.json())
                .then(json => {
                    this.setState({news: json.response.results});
                });
        }
    }

    render() {
        const {news} = this.state;
        var dummy = document.createElement('html')
            const newsList = news.length
            ? news.map((newsItem, index) => {
                dummy.innerHTML = newsItem.fields.main;
                return (
                    <div className='news_outer_block' key={index}>
                        <div className='news_inner_block'>
                            <Row>
                                <Col span={6}>
                                    <div className='news_inner_block_img'>
                                        <img
                                            class='news_inner_block_img_img'
                                            src={dummy.getElementsByTagName('img').length?dummy
                                            .getElementsByTagName('img')[0]
                                            .getAttribute('src'):'/src/img/no_img.png' }/>
                                    </div>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={16}>
                                    <div className='news_inner_block_description'>
                                        <a href={newsItem.webUrl} target='_blank'>
                                            {newsItem.webTitle}
                                        </a>
                                        <div className='news_inner_block_description_info'>
                                            <span>{newsItem.fields.byline}</span>
                                            <span>{moment(newsItem.webPublicationDate).fromNow()}</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )
            })
            : 'Loading...';
        
        return (
            <Content className='content'>
                <Row>
                    <Col span={16}>
                        <div className='left_container'>
                            <div className='left_container_header'>
                                <span>{newsList===''?'404 Not Found':'Search: '+this
                                        .props
                                        .match
                                        .params
                                        .key
                                      }</span>
                            </div>
                            {newsList} 
                        </div>
                    </Col> <Col span={8}></Col> </Row>
            </Content>
                    )
                }
            }