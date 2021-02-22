import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {
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
            <div className="book-list" style={{color:theme.syntax, background:theme.bg}}>
                <ul>
                    <li style={{background:theme.ui}}>The way of kings</li>
                    <li style={{background:theme.ui}}>The name of the wind</li>
                    <li style={{background:theme.ui}}>The final empire</li>
                </ul>
            </div>
        )
    }
}
