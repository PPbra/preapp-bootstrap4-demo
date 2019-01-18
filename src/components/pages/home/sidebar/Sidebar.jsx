import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Sell Pro</h3>
                </div>
                <ul className="list-unstyled components" >
                    <p>Menu sidebar</p>
                    <li className="active" >
                        <a> Product performance </a>
                    </li>
                    <li>
                        <a>Porduct tracker</a>
                    </li>
                    <li>
                        <a>Keyword tracker</a>
                    </li>
                    <li>
                        <a href="#">Review Manager</a>
                    </li>
                    <li>
                        <a href="#">Product research</a>
                    </li>
                </ul>

                <ul className="list-unstyled CTAs" >
                    <li>
                        <a className="article">Details</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
