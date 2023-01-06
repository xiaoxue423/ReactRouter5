import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";//路由组件
import About from "./Pages/About";//路由组件
import Demo from './Pages/Demo' //路由组件

import Header from "./components/Header"; //一般组件
import MyNavLink from "./components/MyNavLink"; //一般组件

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink to="/about" a={1} b={2} c={3}>About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/home" component={Demo} />
                </Switch>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
