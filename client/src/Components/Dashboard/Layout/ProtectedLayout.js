import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Dropdown, Space, Layout, Menu, theme, Image } from "antd";
import Auth from "../../../services/Auth";
import { Link, Navigate, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    label: "1st menu item",
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const ProtectedLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("mail");

  const user = Auth();
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return user ? (
    <Layout
    // style={{
    //   minHeight: "100vh",
    // }}
    >
      <Sider
        // breakpoint="lg"
        // collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        // breakpoint="lg"
        // collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
        className="justify-content-center"
      >
        <div className="demo-logo-vertical d-flex justify-content-center text-light">
          <Image
            width={50}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
            UserOutlined,
            UserOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
            children: [
              {
                key: String(index),
                icon: React.createElement(icon),
                label: (
                  <Link to="/dashboard" title="Children">
                    ddd
                  </Link>
                ),
              },
            ],
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
          }}
        >
          <Menu
            onClick={(e) => setCurrent(e.key)}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="justify-content-end"
          />
        </Header>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "white",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};
export default ProtectedLayout;
