import React, { createContext, Component } from "react";
import Navbar from "../components/Navbar";

export const ThemeContext = createContext();
/*
⚠️只有
其实这里和Wusic的context类似，
只不过net ninja此处创建了provider和comsumer的爸爸-->ThemeContext
*/

//⚠️⚠️创建provider，提供给App.js
//若要给component使用，还需要consume来配合 (在其他子组件中)
export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee",
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555",
    },
  };

  //⚠️⚠️ 在context.Provider中声明toggleTheme函数，以供子组件调用
  toggleTheme=()=>{
    this.setState({isLightTheme:!this.state.isLightTheme})
  }

  render() {
    return (
      // ⚠️⚠️使用 ThemeContext.Provider，传递toggleTheme到ThemeToggle.js
      <ThemeContext.Provider value={{ ...this.state ,  toggleTheme:this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
