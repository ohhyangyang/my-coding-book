import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  //⚠️⚠️
  render() {
    return (
      //⚠️⚠️⚠️ <ThemeContext.Consumer>{...}</ThemeContext.Consumer> 内部需要填入的是一个带有context参数的函数
      <ThemeContext.Consumer>
        {(context) => {         
          const { isLightTheme, light, dark } = context;

          //验证主题
          const theme = isLightTheme ? light : dark;

          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
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
  }
}
