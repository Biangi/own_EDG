import React, { Component } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Row, Col, Button, Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';

const { Header, Sider, Content } = Layout;
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 栅格组件 */}
        <Row>
          <Col span={8}>11111</Col>
          <Col span={8} offset={8}>22222</Col>
        </Row>

        {/* layout组件 */}
        
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
