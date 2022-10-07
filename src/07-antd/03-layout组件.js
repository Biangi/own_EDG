import React, { Component } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';
import './css/03-layout.css'
const { Header, Sider, Content } = Layout;
export default class App extends Component {
    state = {
        collapsed:false
    }
  render() {
    let { collapsed } = this.state
    return (
      <div>
        {/* layout组件 */}
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                    },
                    {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                    },
                    {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                    },
                ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => this.setState({collapsed:!collapsed}),
                    })}
                </Header>
                <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
      </div>
    )
  }
}
