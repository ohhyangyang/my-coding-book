import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class ThemeToggle extends Component {

    static contextType=ThemeContext

    render() {
        return (
            <button onClick={this.context.toggleTheme}>Toggle the theme</button>
        )
    }
}
