import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  //⚠️⚠️⚠️ 获取 ThemeContextProvider中的 context
  //⚠️⚠️⚠️⚠️ static contextType=XxxContext只适用于单一context，multiple context时慎用！！
  static contextType = ThemeContext;
  render() {
    //⚠️⚠️通过上一步之后已经可以直接调用conext了
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;

    //验证主题
    const theme = isLightTheme ? light : dark;

    return (
        //styling
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
  }
}
