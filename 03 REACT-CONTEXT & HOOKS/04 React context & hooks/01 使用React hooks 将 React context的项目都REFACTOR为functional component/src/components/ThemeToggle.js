import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

// export default class ThemeToggle extends Component {

//     static contextType=ThemeContext

//     render() {
//         return (
//             <button onClick={this.context.toggleTheme}>Toggle the theme</button>
//         )
//     }
// }



export default function ThemeToggle() {
    const {toggleTheme} =useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>Toggle the theme</button>

    )
}
