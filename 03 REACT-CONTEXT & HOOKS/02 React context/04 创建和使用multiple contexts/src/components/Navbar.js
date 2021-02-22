import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  //⚠️⚠️
  render() {
    return (
      //⚠️⚠️⚠️ <ThemeContext.Consumer>{...}</ThemeContext.Consumer> 内部需要填入的是一个带有context参数的函数
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const { isLightTheme, light, dark } = themeContext;
                const {isAuthenticated, toggleAuth}=authContext
                //验证主题
                const theme = isLightTheme ? light : dark;
               
                return (
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth}>
                      {isAuthenticated?'Logged in':'Logged out'}
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>

                    <ul></ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}
