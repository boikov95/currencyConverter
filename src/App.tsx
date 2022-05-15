import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import s from "./App.module.css";
import { HashRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getConvertedAmount } from "./Redux/convertedreducer";
import Converter from "./component/Converter/Converter";
import { Layout, Menu } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import Course from "./component/Course/Course";

const { SubMenu } = Menu;
const { Sider } = Layout;

type AppType = {};

const AppNew: React.FC<AppType> = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConvertedAmount());
  }, []);

  return (
    <HashRouter>
      <div className={s.wrapper}>
        <div className={s.menu}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed((prev) => !prev)}
            className="site-layout-background"
            width={300}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultOpenKeys={["sub1"]}
              defaultSelectedKeys={["1"]}
              style={{ height: "93vh" }}
            >
              <SubMenu
                key="sub1"
                icon={<DollarCircleOutlined />}
                title="Финансы"
              >
                <Menu.Item key="1">
                  <Link to="/converter">Конвертация валюты</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/course">Текущий курс валюты</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </div>
        <div className={s.content}>
          <Route path="/converter" render={() => <Converter />} />
          <Route path="/course" render={() => <Course />} />
        </div>
      </div>
    </HashRouter>
  );
};

export default compose(withRouter)(AppNew);
