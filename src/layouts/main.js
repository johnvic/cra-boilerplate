import React, { useState } from "react";
import { Avatar, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import "./main.less";

const MainLayout = () => {
  const { Header, Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="main-sidebar fixed-sidebar"
      >
        <div className="sidebar-toggle-cont">
          {collapsed ? (
            <MenuUnfoldOutlined
              className="sidebar-toggle"
              onClick={() => toggleSideBar()}
            />
          ) : (
            <MenuFoldOutlined
              className="sidebar-toggle"
              onClick={() => toggleSideBar()}
            />
          )}
        </div>
        <div className="user-info">
          <Avatar className="sidebar-avatar" size="large">
            JV
          </Avatar>
          <p className="username">jvcarreon</p>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
        <div className="logo" />
      </Sider>
      <Layout
        className={`layout-has-fixed-sidebar ${
          collapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <Content className="main-content">Content</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
